export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
      <div className="space-y-4 ring p-4 rounded">
        <h1 className="text-lg font-bold">Upload local</h1>
        <form action="/api/file" method="post" encType="multipart/form-data">
          <input type="file" name="file" required />
          <button className="ring-2 px-3 py-2 bg-blue-800 text-white rounded-md">
            upload
          </button>
        </form>
      </div>
      <div className="space-y-4 ring p-4 rounded">
        <h1 className="text-lg font-bold">Upload vercel blob</h1>
        <p>
          Please place your BLOB_READ_WRITE_TOKEN in the Vercel environment
          variables.
        </p>
        <q>
          Server uploads are limited to 4.5 MB, if you need more than that, have
          a look at
          <a
            href="https://vercel.com/docs/storage/vercel-blob/quickstart#client-uploads"
            className="mx-2 text-blue-500"
          >
            client uploads
          </a>
          instead.
        </q>
        <form
          action="/api/vercelblob"
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" name="file" required />
          <button className="ring-2 px-3 py-2 bg-blue-800 text-white rounded-md">
            upload
          </button>
        </form>
      </div>
    </main>
  );
}
