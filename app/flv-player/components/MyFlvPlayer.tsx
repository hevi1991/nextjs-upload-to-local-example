"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function MyFlvPlayer({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-screen">
      {loaded && <ReactPlayer url={url} width="100%" height="100%" controls/>}
    </div>
  );
}
