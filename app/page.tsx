import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form action="/api/file" method="post" encType="multipart/form-data">
        <input type="file" name="file" required />
        <button className="ring-2 px-3 py-2 bg-blue-800 text-white rounded-md">
          upload
        </button>
      </form>
    </main>
  );
}
