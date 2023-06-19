import { existsSync } from "fs";
import { notFound } from "next/navigation";
import path from "path";

import MyFlvPlayer from "./components/MyFlvPlayer";
import mimelite from "mime/lite";

export default function PlayerPage({
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

  console.log(filename);

  const [extension, ...name] = filename.split(".").reverse();

  if (!["mp4", "flv"].includes(extension.toLowerCase())) {
    notFound();
  }

  const url = `/api/file/${filename}`;

  return (
    <>
      <MyFlvPlayer url={url} />
    </>
  );
}
