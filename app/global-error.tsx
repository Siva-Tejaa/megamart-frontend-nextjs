"use client";

interface GlobalErrorProps {
  error: Error;
}

export default function GlobalError({ error }: GlobalErrorProps) {

  return (
    <html>
      <body className="flex items-center justify-center min-h-screen bg-red-50 text-red-900 font-sans">
        <div className="text-center p-4 border rounded-lg shadow-lg bg-white">
          <h1 className="text-2xl font-bold mb-2">Something went wrong!</h1>
          <p className="mb-4">{error.message}</p>
        </div>
      </body>
    </html>
  );
}
