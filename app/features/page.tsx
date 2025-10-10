export default function FeaturesPage() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(to bottom,#f1f8e9,#e8f5e9)",padding:"2rem"}}>
      <h1 style={{fontSize:"3rem",color:"#388E3C",textAlign:"center"}}>925+ Features</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"2rem",maxWidth:"1200px",margin:"2rem auto"}}>
        <div style={{background:"white",padding:"2rem",borderRadius:"12px",border:"2px solid #9CCC65"}}>
          <h2 style={{color:"#7CB342"}}>🌳 Tree Planting</h2>
          <p>91 Features</p>
        </div>
        <div style={{background:"white",padding:"2rem",borderRadius:"12px",border:"2px solid #9CCC65"}}>
          <h2 style={{color:"#7CB342"}}>🌱 DIY Eco</h2>
          <p>88 Features</p>
        </div>
        <div style={{background:"white",padding:"2rem",borderRadius:"12px",border:"2px solid #9CCC65"}}>
          <h2 style={{color:"#7CB342"}}>👥 Community</h2>
          <p>87 Features</p>
        </div>
      </div>
    </main>
  )
}