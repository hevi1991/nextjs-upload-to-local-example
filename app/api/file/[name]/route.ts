import { NextRequest, NextResponse } from "next/server";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  const filePath = path.join(
    process.cwd(),
    process.env.STORE_PATH!,
    params.name
  );
  if (!existsSync(filePath)) {
    return NextResponse.json({ msg: "Not found" }, { status: 404 });
  }
  const file = await fs.readFile(filePath);
  // TODO Maybe better that check MIME type and content-length and put it in response headers
  return new NextResponse(file);
}
