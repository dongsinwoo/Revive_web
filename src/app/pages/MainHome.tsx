'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Leaf, Recycle, Shield, Star, Download, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

const processSteps = [
  { 
    title: "수거", 
    description: "고품질 의류 폐기물을 신중하게 수집합니다. 우리는 재사용 가능한 소재를 찾아 환경에 미치는 영향을 최소화합니다.",
    image: "/placeholder.svg?height=300&width=400&text=의류+폐기물+수거"
  },
  { 
    title: "분류", 
    description: "수집된 의류를 소재, 상태, 색상별로 꼼꼼히 분류합니다. 이 과정에서 최고 품질의 소재만을 선별합니다.",
    image: "/placeholder.svg?height=300&width=400&text=의류+분류+과정"
  },
  { 
    title: "세척 및 준비", 
    description: "선별된 소재를 친환경 방식으로 세척하고 업사이클링 과정을 위해 준비합니다. 이 단계에서 소재의 품질을 한 번 더 확인합니다.",
    image: "/placeholder.svg?height=300&width=400&text=친환경+세척+과정"
  },
  { 
    title: "디자인", 
    description: "우리의 디자이너들이 선별된 소재로 스타일리시하고 기능적인 유아복을 디자인합니다. 아이들의 활동성과 편안함을 고려합니다.",
    image: "/placeholder.svg?height=300&width=400&text=유아복+디자인+과정"
  },
  { 
    title: "재단 및 봉제", 
    description: "숙련된 장인들이 디자인에 따라 소재를 재단하고 정교하게 봉제합니다. 모든 과정은 엄격한 품질 관리 하에 이루어집니다.",
    image: "/placeholder.svg?height=300&width=400&text=재단+및+봉제+과정"
  },
  { 
    title: "품질 검사", 
    description: "완성된 유아복은 엄격한 품질 검사를 거칩니다. 내구성, 착용감, 안전성 등 모든 면에서 최고 기준을 충족해야 합니다.",
    image: "/placeholder.svg?height=300&width=400&text=품질+검사+과정"
  },
  { 
    title: "포장 및 배송", 
    description: "검사를 통과한 유아복은 친환경 포장재로 포장되어 고객에게 배송됩니다. 모든 과정에서 환경 영향을 최소화합니다.",
    image: "/placeholder.svg?height=300&width=400&text=친환경+포장+및+배송"
  }
]

export default function MainPage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* 네비게이션 */}
      <nav className="bg-white/80 backdrop-blur-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl text-gray-700 font-bold">REVIVE</h1>
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
            <button className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md">문의</button>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="py-40 px-4">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl text-gray-700 lg:text-5xl font-bold mb-6">
              아이들에게 미래를 입히다  <br />
              프리미엄 업사이클링 유아복
            </h2>
            <p className="text-xl text-gray-700 mb-8">의류 폐기물을 고품질의 지속 가능한 아동복으로 변모시킵니다.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-1/2 px-6 py-3 bg-black text-white rounded-md text-lg font-semibold flex items-center justify-center hover:bg-gray-800">
                앱 설치하기
                <Download className="ml-2 h-5 w-5" />
              </button>
              <button className="w-full sm:w-1/2 px-6 py-3 border border-black text-black rounded-md text-lg font-semibold flex items-center justify-center hover:bg-gray-100">
                <Sparkles className="mr-2 h-5 w-5" />
                AI 맞춤 추천 받기
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            {/* 배경 장식 요소 */}
            <div className="absolute -right-0 -bottom-8 w-[500px] h-[400px] bg-black/10 rounded-lg z-[1]"></div>
            
            {/* 선택적: 장식용 패턴 오버레이 */}
            <div className="absolute -left-0 -top-8 w-[500px] h-[400px] bg-black/5 rounded-full blur-sm z-[2]"></div>
            
            {/* 메인 이미지 */}
            <img 
              src="./images/배너.jpeg"
              alt="REVIVE 유아복을 입은 행복한 아이들" 
              className="relative rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300
              w-[500px] h-[400px] object-cover z-[3]"
            />
          </div>
        </div>
      </section>

      {/* AI 추천 섹션 */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-90 z-0"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-0 top-0 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-secondary/30 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 text-white">
          <h2 className="text-3xl font-bold mb-6">AI가 추천하는 우리 아이에게 맞춤 유아복</h2>
          <p className="text-xl mb-12">아이의 체형, 선호도, 활동 패턴을 분석하여 최적의 유아복을 제안합니다.</p>
          <button className="px-6 py-3 bg-white text-purple-500 rounded-md text-lg font-semibold hover:bg-gray-100 flex items-center justify-center mx-auto">
            맞춤 추천 시작하기
            <Sparkles className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* 미션 섹션 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl text-gray-700 font-bold mb-12 text-center">우리의 미션</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Recycle, title: "지속 가능한 패션", description: "혁신적인 업사이클링 과정을 통해 의류 폐기물을 줄입니다." },
              { icon: Leaf, title: "천연 섬유 사용", description: "편안함과 내구성을 위해 친환경 천연 섬유를 사용합니다." },
              { icon: Star, title: "프리미엄 품질", description: "아이들이 좋아하는 고급스럽고 스타일리시한 유아복을 제공합니다." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
                <div className="bg-white rounded-full p-4 mb-4">
                  <item.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl text-gray-700 font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIVE 프로세스 섹션 */}
      <section className="py-20 bg-black bg-opacity-80 text-white" ref={targetRef}>
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">REVIVE 프로세스</h2>
          <div className="space-y-32">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [Math.max(0, index - 0.5) / processSteps.length, (index + 0.5) / processSteps.length],
                    [0, 1]
                  ),
                  translateY: useTransform(
                    scrollYProgress,
                    [Math.max(0, index - 0.5) / processSteps.length, (index + 0.5) / processSteps.length],
                    [50, 0]
                  )
                }}
              >
                <div className="md:w-1/2">
                  <img src={step.image} alt={step.title} className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{index + 1}. {step.title}</h3>
                  <p className="text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-white text-gray-800 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">REVIVE</h2>
              <p>다음 세대를 위한 지속 가능한 패션</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-4 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100">문의하기</button>
              <button className="px-4 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100">자주 묻는 질문</button>
            </div>
          </div>
          <div className="mt-12 text-center text-sm">
            © 2024 REVIVE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}