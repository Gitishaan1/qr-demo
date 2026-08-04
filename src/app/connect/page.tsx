export default function ConnectPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "650px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          🚀 Thanks for Attending!
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#cbd5e1",
            marginBottom: "40px",
          }}
        >
          Stay connected and follow my cybersecurity journey.
        </p>

        <a
          href="https://www.linkedin.com/in/ishaan-bansal-b333b0379/"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/Gitishaan1"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          🐙 GitHub
        </a>

        <a
          href="https://medium.com/@ishaan-bansal2205"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          ✍️ Medium
        </a>

        <div
          style={{
            marginTop: "45px",
            color: "#94a3b8",
            fontSize: "16px",
          }}
        >
          <p>
            Ethical Hacking • Bug Bounty • SOC • Web Security • CTFs
          </p>

          <p style={{ marginTop: "15px" }}>
            Thank you for attending my cybersecurity awareness session!
          </p>
        </div>
      </div>
    </main>
  );
}

const buttonStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  textDecoration: "none",
  color: "white",
  background: "#2563eb",
  padding: "18px",
  borderRadius: "12px",
  marginBottom: "18px",
  fontSize: "22px",
  fontWeight: "bold",
  transition: "0.2s",
};