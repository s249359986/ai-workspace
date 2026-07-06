export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      {children}
    </div>
  );
}