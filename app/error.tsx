'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6">
      <h2 className="text-4xl font-bold">エラーが発生しました</h2>
      <p className="text-lg text-muted-foreground">
        申し訳ありませんが、予期せぬエラーが発生しました。
      </p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        もう一度試す
      </button>
    </div>
  );
}