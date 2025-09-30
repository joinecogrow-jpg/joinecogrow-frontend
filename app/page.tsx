export default function Home(){
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-hand">JoinEcoGrow</h1>
      <p className="mt-2 text-textg">Nurturing growth, together.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border p-4" style={{ borderColor: "var(--ringg)" }}>
          <div className="w-10 h-10 rounded-full bg-leaf" />
          <div className="mt-2 font-semibold text-hand">Leaf #7CB342</div>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: "var(--ringg)" }}>
          <div className="w-10 h-10 rounded-full bg-hand" />
          <div className="mt-2 font-semibold text-hand">Hand #388E3C</div>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: "var(--ringg)" }}>
          <div className="w-10 h-10 rounded-full bg-water" />
          <div className="mt-2 font-semibold text-hand">Water #29B6F6</div>
        </div>
      </div>
      <button className="mt-6 px-6 py-3 text-white rounded-lg brand-gradient">Get Started</button>
    </main>
  )
}
