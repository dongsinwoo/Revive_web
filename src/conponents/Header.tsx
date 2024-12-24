'use client'

import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  return (
    <nav className="bg-white/80 backdrop-blur-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 
          onClick={() => router.push('/')}
          className="text-2xl text-gray-700 font-bold cursor-pointer"
        >
          REVIVE
        </h1>
        <div className="space-x-4">
          <button 
            onClick={() => router.push('/about')}
            className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md"
          >
            소개
          </button>
          <button 
            onClick={() => router.push('/product')}
            className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md"
          >
            제품
          </button>
          <button 
            onClick={() => router.push('/ai')}
            className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md"
          >
            AI 맞춤
          </button>
          <button className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md">
            문의
          </button>
        </div>
      </div>
    </nav>
  )
}
