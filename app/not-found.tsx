export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6">
      <h2 className="text-4xl font-bold">ページが見つかりません</h2>
      <p className="text-lg text-muted-foreground">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <a href="/" className="text-blue-600 hover:underline">
        トップページへ戻る
      </a>
    </div>
  );
}