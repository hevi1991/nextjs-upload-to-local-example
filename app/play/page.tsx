import { existsSync } from "fs";
import { notFound } from "next/navigation";
import path from "path";

import MyPlayer from "./components/MyPlayer";

export default async function PlayerPage({
  searchParams: { filename },
}: {
  searchParams: { filename: string };
}) {
  if (!filename) {
    notFound();
  }
  const filePath = path.join(process.cwd(), process.env.STORE_PATH!, filename);

  if (!existsSync(filePath)) {
    notFound();
  }

  const [extension, ...name] = filename.split(".").reverse();

  if (!["mp4"].includes(extension.toLowerCase())) {
    notFound();
  }

  const url = `/api/file/${filename}`;
  console.log(url);

  return (
    <>
      <MyPlayer url={url} />
    </>
  );
}
