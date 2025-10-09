export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #f1f8e9, #e8f5e9)",
      padding: "2rem"
    }}>
      {/* Recreate your exact logo */}
      <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
        <div style={{position: "relative", textAlign: "center"}}>
          <img 
            src="/logo.png" 
            alt="JoinEcoGrow" 
            style={{width: "250px", height: "250px"}}
          />
        </div>
      </div>
      
      <h1 style={{
        textAlign: "center",
        fontSize: "3.5rem",
        marginTop: "2rem",
        fontWeight: "bold"
      }}>
        <span style={{color: "#388E3C"}}>Join</span>
        <span style={{color: "#388E3C"}}>Eco</span>
        <span style={{color: "#7CB342"}}>Gr</span>
        <span style={{color: "#7CB342", position: "relative"}}>
          o
          <span style={{
            position: "absolute",
            top: "-8px",
            right: "-12px",
            fontSize: "1rem",
            color: "#29B6F6"
          }}>
            💧
          </span>
        </span>
        <span style={{color: "#7CB342"}}>w</span>
      </h1>
      
      <p style={{
        textAlign: "center",
        fontSize: "1.5rem",
        color: "#689F38",
        marginTop: "1rem"
      }}>
        Where Gaming Meets Sustainability
      </p>
      
      {/* Navigation Buttons */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "3rem",
        flexWrap: "wrap"
      }}>
        <a href="/features" style={{
          padding: "1rem 2rem",
          background: "#388E3C",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.1rem"
        }}>
          See Features
        </a>
        <a href="/dashboard" style={{
          padding: "1rem 2rem",
          background: "#7CB342",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.1rem"
        }}>
          Dashboard
        </a>
        <a href="/games" style={{
          padding: "1rem 2rem",
          background: "#29B6F6",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.1rem"
        }}>
          Play Games
        </a>
      </div>
      
      {/* Status Section */}
      <div style={{textAlign: "center", marginTop: "5rem"}}>
        <p style={{color: "#388E3C", fontSize: "1.2rem"}}>
          ✅ Platform Live - 925+ Features Ready
        </p>
        <p style={{color: "#689F38", marginTop: "0.5rem"}}>
          🌱 Join the sustainable gaming revolution
        </p>
      </div>
    </main>
  )
}