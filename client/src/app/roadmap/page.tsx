import React from 'react'
import Navbar from '../components/Navbar'

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-20 mt-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Ma'lumot Tuzilmalari va Algoritmlar Yo'l Xaritasi
          </h1>
          <p className="text-lg text-[#888888] max-w-3xl mx-auto">
            Har bir ma'lumot tuzilmasi va algoritmni bosqichma-bosqich o'rganing.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Roadmap