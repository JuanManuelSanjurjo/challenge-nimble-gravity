export default function ErrorComponent({ error }: { error: Error | null }) {
  return (
    <div>
      <p className="bordered-box error">Error: {error?.message}</p>
    </div>
  );
}
