export default function ThanksPage() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1>⚠️ You just scanned a QR code.</h1>

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          Your scan automatically shared:
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "20px",
            lineHeight: "2",
          }}
        >
          <li>📍 Your IP Address</li>
          <li>🌐 Your Browser</li>
          <li>🕒 Time of Scan</li>
        </ul>

        <p style={{ marginTop: "30px", fontSize: "18px" }}>
          This QR code was part of a cybersecurity awareness demonstration.
        </p>

        <h2 style={{ marginTop: "20px", color: "green" }}>
          Always verify a QR code before scanning it.
        </h2>
      </div>
    </main>
  );
}