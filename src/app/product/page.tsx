'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Recycle, Shield, Star, Droplet, Wind, Sun } from 'lucide-react'

export default function ProductDetailsPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* 네비게이션 */}
      <nav className="bg-white backdrop-blur-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl text-gray-700 font-bold">REVIVE</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md">소개</button>
            <button className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md">제품</button>
            <button className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md">AI 맞춤</button>
            <button className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md">문의</button>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="py-32 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl text-white font-bold mb-6 text-center">
            REVIVE의 프리미엄 업사이클 유아복
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-white mb-8 text-center max-w-3xl mx-auto">
            환경을 생각하는 혁신적인 기술과 최고급 소재로 만든 우리 아이를 위한 특별한 옷
          </motion.p>
        </div>
      </section>

      {/* 제품 특성 섹션 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl text-gray-700 font-bold mb-12 text-center">REVIVE 제품의 특별함</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Recycle, title: "업사이클링", description: "버려질 뻔한 의류에 새 생명을 불어넣어 만든 유아복" },
              { icon: Leaf, title: "친환경 소재", description: "천연 섬유와 재활용 소재의 완벽한 조화" },
              { icon: Shield, title: "안전성", description: "유해 물질 zero, 아이의 건강을 최우선으로 생각" },
              { icon: Star, title: "프리미엄 품질", description: "장인 정신으로 만든 고품질 유아복" },
              { icon: Droplet, title: "편안함", description: "부드러운 촉감과 우수한 신축성으로 활동성 보장" },
              { icon: Sun, title: "스타일", description: "트렌디하면서도 실용적인 디자인" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-4 mb-4">
                  <item.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h4 className="text-xl text-gray-700 font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프리미엄 요소 섹션 */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl text-white font-bold mb-12 text-center">왜 프리미엄인가?</h3>
          <div className="space-y-8">
            {[
              { title: "최고급 소재 선별", description: "버려지는 의류 중에서도 최고 품질의 원단만을 엄선하여 사용합니다." },
              { title: "혁신적인 업사이클링 기술", description: "특허받은 기술로 재활용 원단을 새 옷감처럼 부드럽고 튼튼하게 재탄생시킵니다." },
              { title: "장인의 손길", description: "숙련된 장인들이 한 땀 한 땀 정성껏 제작합니다." },
              { title: "친환경 인증", description: "국제적으로 인정받는 친환경 인증을 획득한 제품입니다." },
              { title: "지속 가능한 패키징", description: "제품 포장부터 배송 과정까지 모두 친환경적으로 이루어집니다." }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 제작 과정 섹션 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl text-gray-700 font-bold mb-12 text-center">REVIVE의 제작 과정</h3>
          <div className="space-y-12">
            {[
              { title: "원단 수거 및 분류", description: "고품질 의류 폐기물을 수거하고 재사용 가능한 소재를 엄선합니다." },
              { title: "세척 및 살균", description: "친환경 세제와 첨단 기술을 이용해 원단을 깨끗이 세척하고 살균합니다." },
              { title: "재생 및 가공", description: "특허 기술로 원단을 재생하고, 필요에 따라 염색 및 가공 과정을 거칩니다." },
              { title: "디자인 및 재단", description: "트렌디하면서도 실용적인 디자인으로 재단합니다." },
              { title: "봉제 및 마감", description: "숙련된 장인들이 정교하게 봉제하고 꼼꼼히 마감합니다." },
              { title: "품질 검사", description: "엄격한 품질 기준을 통과한 제품만을 출고합니다." }
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl text-gray-700 font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 천연 자원 섹션 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl text-gray-700 font-bold mb-12 text-center">사용되는 천연 자원</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "유기농 면", 
                description: "농약과 화학 비료를 사용하지 않고 재배한 면을 사용하여 아이의 피부를 보호합니다.",
                image: "/placeholder.svg?height=200&width=300&text=유기농+면"
              },
              { 
                title: "텐셀", 
                description: "유칼립투스 나무에서 추출한 친환경 섬유로, 부드러운 촉감과 뛰어난 흡습성이 특징입니다.",
                image: "/placeholder.svg?height=200&width=300&text=텐셀"
              },
              { 
                title: "대나무 섬유", 
                description: "항균 효과가 뛰어나고 통기성이 좋아 아이의 체온 조절에 도움을 줍니다.",
                image: "/placeholder.svg?height=200&width=300&text=대나무+섬유"
              },
              { 
                title: "재활용 폴리에스터", 
                description: "페트병을 재활용해 만든 섬유로, 내구성이 뛰어나고 환경 부담을 줄입니다.",
                image: "/placeholder.svg?height=200&width=300&text=재활용+폴리에스터"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <img src={item.image} alt={`${item.title} 이미지`} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl text-gray-700 font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h3 className="text-3xl text-white font-bold mb-6">지금 REVIVE의 프리미엄을 경험해보세요</h3>
          <p className="text-xl text-white mb-8">아이에게 최고의 옷을, 지구에게 더 나은 미래를 선물하세요.</p>
          <button className="px-8 py-3 bg-white text-black rounded-md text-lg font-semibold hover:bg-gray-100 inline-flex items-center">
            제품 구경하기
            <Wind className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-white text-gray-800 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl text-gray-700 font-bold mb-2">REVIVE</h2>
              <p className="text-gray-700">다음 세대를 위한 지속 가능한 패션</p>
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