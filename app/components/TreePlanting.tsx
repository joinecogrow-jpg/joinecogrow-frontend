// app/components/TreePlanting.tsx
'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TreePlanting() {
  const [species, setSpecies] = useState('')
  const [loading, setLoading] = useState(false)
  
  const plantTree = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('trees')
        .insert({
          species,
          user_id: 'demo-user',
          location: { lat: 0, lng: 0 }
        })
        .select()
        .single()
      
      if (error) throw error
      alert('Tree planted successfully!')
      setSpecies('')
    } catch (error) {
      console.error('Error:', error)
      alert('Error planting tree')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div style={{padding:'2rem',background:'white',borderRadius:'12px',border:'3px solid #9CCC65'}}>
      <h2 style={{color:'#388E3C',fontSize:'1.5rem'}}>Plant a Tree</h2>
      <input
        type="text"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        placeholder="Enter tree species"
        style={{width:'100%',padding:'0.5rem',border:'1px solid #9CCC65',borderRadius:'6px',marginTop:'1rem'}}
      />
      <button
        onClick={plantTree}
        disabled={loading || !species}
        style={{
          background:'#7CB342',
          color:'white',
          padding:'0.75rem 2rem',
          borderRadius:'6px',
          marginTop:'1rem',
          cursor:'pointer',
          opacity: loading ? 0.5 : 1
        }}
      >
        {loading ? 'Planting...' : '🌱 Plant Tree'}
      </button>
    </div>
  )
}