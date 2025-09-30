import Head from 'next/head'

export default function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Head>
        <title>JoinEcoGrow - Tailwind Test</title>
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-hand mb-8">
          🌱 JoinEcoGrow Tailwind Test
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Leaf Color Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 ring-border">
            <div className="w-20 h-20 bg-leaf rounded-full mb-4 animate-grow"></div>
            <h2 className="text-xl font-semibold text-leaf">Leaf Green</h2>
            <p className="text-gray-600">#7CB342</p>
            <p className="mt-2">Light green representing fresh leaves</p>
          </div>
          
          {/* Hand Color Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 ring-border">
            <div className="w-20 h-20 bg-hand rounded-full mb-4"></div>
            <h2 className="text-xl font-semibold text-hand">Nurturing Hand</h2>
            <p className="text-gray-600">#388E3C</p>
            <p className="mt-2">Dark green for the caring hand</p>
          </div>
          
          {/* Water Color Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 ring-border">
            <div className="w-20 h-20 bg-water rounded-full mb-4 animate-float"></div>
            <h2 className="text-xl font-semibold text-water">Water Droplet</h2>
            <p className="text-gray-600">#29B6F6</p>
            <p className="mt-2">Blue representing water conservation</p>
          </div>
        </div>
        
        <div className="mt-8">
          <button className="px-8 py-4 text-white font-bold rounded-lg brand-gradient hover:scale-105 transition-transform">
            Start Your Eco Journey 🌍
          </button>
        </div>
        
        <div className="mt-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold text-hand mb-4">✅ Tailwind is Working!</h2>
          <p className="text-textg">If you can see the colors and styles above, Tailwind CSS is properly configured.</p>
        </div>
      </div>
    </div>
  )
}
