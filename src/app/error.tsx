"use client";

import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <html lang="vi">
      <body>
        <h2> {error.message}</h2>
        <button onClick={() => router.back()}>Quay lại</button>
      </body>
    </html>
  );
}
