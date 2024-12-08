import Link from "next/link";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Web Workers Demos</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "1rem",
        }}
      >
        <li style={{ border: "2px green solid", cursor: "pointer" }}>
          <Link href="/workers/dedicated">Dedicated Worker</Link>
        </li>
        <li style={{ border: "2px red solid", cursor: "pointer" }}>
          <Link href="/workers/service">Service Worker</Link>
        </li>
        <li style={{ border: "2px yellow solid", cursor: "pointer" }}>
          <Link href="/workers/shared">Shared Worker</Link>
        </li>
        <li style={{ border: "2px blue solid", cursor: "pointer" }}>
          <Link href="/workers/worklets">Worklet</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
