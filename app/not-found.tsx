export default function NotFound(){
  return (
    <main className="min-h-[60vh] flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-5xl font-extrabold" style={{color:"var(--hand)"}}>404</h1>
        <p className="mt-2 text-gray-700">We couldn’t find that page.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/" className="px-5 py-2 rounded text-white" style={{background:"linear-gradient(135deg,var(--leaf),var(--hand))"}}>Go Home</a>
          <a href="/features/trees" className="px-5 py-2 rounded border" style={{borderColor:"var(--ringg)"}}>See Features</a>
        </div>
      </div>
    </main>
  )
}
