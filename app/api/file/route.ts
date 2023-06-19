import { NextRequest, NextResponse } from "next/server";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  console.log(formData);

  const f = formData.get("file");

  if (!f) {
    return NextResponse.json({}, { status: 400 });
  }

  const file = f as File;
  console.log(`File name: ${file.name}`);
  console.log(`Content-Length: ${file.size}`);

  const destinationDirPath = path.join(process.cwd(), process.env.STORE_PATH!);
  console.log(destinationDirPath);

  const fileArrayBuffer = await file.arrayBuffer();

  if (!existsSync(destinationDirPath)) {
    await fs.mkdir(destinationDirPath, { recursive: true });
  }

  let filename = file.name;
  while (existsSync(path.join(destinationDirPath, filename))) {
    filename = `(1)` + filename;
  }

  await fs.writeFile(
    path.join(destinationDirPath, filename),
    Buffer.from(fileArrayBuffer)
  );

  return NextResponse.json({
    fileName: file.name,
    size: file.size,
    lastModified: new Date(file.lastModified),
    url: `http://localhost:3000/api/file/${file.name}`,
  });
}
