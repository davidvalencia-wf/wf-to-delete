export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <main>
        <h1>Welcome to Next.js 15.0.3!</h1>
        <p>
          This is a basic Next.js app with TypeScript strict mode and React
          18.3.1
        </p>
        <div style={{ marginTop: "2rem" }}>
          <h2>Features:</h2>
          <ul>
            <li>Next.js 15.0.3</li>
            <li>React 18.3.1</li>
            <li>TypeScript 5.x with strict mode enabled</li>
            <li>App Router</li>
          </ul>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <a
            href="https://nextjs.org/docs"
            style={{ color: "#0070f3", textDecoration: "underline" }}
          >
            Read the Next.js documentation →
          </a>
        </div>
      </main>
    </div>
  );
}

