export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #f1f8e9, #e8f5e9)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }}>
      <h1 style={{fontSize: "8rem", color: "#388E3C", margin: "0"}}>404</h1>
      <p style={{fontSize: "1.5rem", color: "#689F38", marginBottom: "2rem"}}>
        We couldn't find that page.
      </p>
      <a href="/features" style={{
        padding: "1rem 2rem",
        background: "white",
        border: "2px solid #388E3C",
        borderRadius: "8px",
        color: "#388E3C",
        textDecoration: "none",
        fontSize: "1.1rem",
        fontWeight: "500"
      }}>
        See Features
      </a>
    </div>
  )
}