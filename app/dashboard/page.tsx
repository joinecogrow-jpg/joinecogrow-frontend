export default function Dashboard() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #f1f8e9, #e8f5e9)",
      padding: "2rem"
    }}>
      {/* Logo-inspired design */}
      <div style={{textAlign: "center", marginBottom: "3rem"}}>
        <div style={{display: "inline-block", position: "relative"}}>
          {/* Circular border like logo */}
          <div style={{
            width: "150px",
            height: "150px",
            border: "3px solid #9CCC65",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white"
          }}>
            <div style={{textAlign: "center"}}>
              <div style={{fontSize: "3rem", color: "#388E3C"}}>🤚</div>
              <div style={{fontSize: "2rem", marginTop: "-15px", color: "#7CB342"}}>🌱</div>
            </div>
          </div>
        </div>
      </div>
      
      <h1 style={{textAlign: "center", fontSize: "2.5rem", color: "#388E3C"}}>
        Dashboard
      </h1>
      
      {/* Stats Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        maxWidth: "1000px",
        margin: "2rem auto"
      }}>
        <div style={{
          background: "white",
          padding: "1.5rem",
          borderRadius: "12px",
          border: "2px solid #9CCC65",
          textAlign: "center"
        }}>
          <div style={{fontSize: "2rem", color: "#7CB342"}}>12,847</div>
          <div style={{color: "#689F38"}}>Trees Planted</div>
        </div>
        
        <div style={{
          background: "white",
          padding: "1.5rem",
          borderRadius: "12px",
          border: "2px solid #9CCC65",
          textAlign: "center"
        }}>
          <div style={{fontSize: "2rem", color: "#7CB342"}}>3,291</div>
          <div style={{color: "#689F38"}}>Active Users</div>
        </div>
        
        <div style={{
          background: "white",
          padding: "1.5rem",
          borderRadius: "12px",
          border: "2px solid #9CCC65",
          textAlign: "center"
        }}>
          <div style={{fontSize: "2rem", color: "#7CB342"}}>847K</div>
          <div style={{color: "#689F38"}}>Eco Points</div>
        </div>
      </div>
      
      <div style={{textAlign: "center", marginTop: "2rem"}}>
        <a href="/" style={{
          display: "inline-block",
          padding: "0.75rem 2rem",
          background: "#388E3C",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          ← Back to Home
        </a>
      </div>
    </div>
  )
}