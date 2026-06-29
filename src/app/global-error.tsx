"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body
        style={{
          background: "#07070b",
          color: "#ededed",
          fontFamily: "system-ui, sans-serif",
          padding: "2rem",
          minHeight: "100vh",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Something went wrong
        </h2>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            background: "#0e0e14",
            border: "1px solid #2a2a36",
            borderRadius: 8,
            padding: "1rem",
            fontSize: "0.85rem",
            color: "#ff9aa2",
          }}
        >
          {error?.message || String(error)}
          {error?.digest ? `\n\ndigest: ${error.digest}` : ""}
          {error?.stack ? `\n\n${error.stack}` : ""}
        </pre>
      </body>
    </html>
  );
}
