"use client";
import { useEffect, useState } from "react";

export default function MyPlayer({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false);

  const [fileURL, setFileURL] = useState<string>();

  useEffect(() => {
    setLoaded(true);
    fetch(url, {
      method: "get",
    })
      .then((res) => {
        console.log(res);
        return res.blob();
      })
      .then((fileBlob) => {
        setFileURL(URL.createObjectURL(fileBlob));
      });
  }, []);

  return (
    <div className="relative w-screen h-screen">
      {loaded && (
        <video src={fileURL} className="object-cover w-full h-full" controls playsInline/>
      )}
    </div>
  );
}
