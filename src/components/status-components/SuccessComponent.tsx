export default function SuccessComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bordered-box success">{children}</div>;
}
