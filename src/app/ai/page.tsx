'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles, Zap, BarChart, Shirt, Palette, Ruler, Send } from 'lucide-react'

export default function AICustomizationPage() {
  const [step, setStep] = useState(1)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* 네비게이션 */}
      <nav className="bg-white backdrop-blur-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl text-gray-700 font-bold">REVIVE</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md">소개</button>
            <button className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md">제품</button>
            <button className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md">업사이클링</button>
            <button className="px-4 py-2 text-s font-medium text-gray-700 hover:bg-gray-100 rounded-md">문의</button>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="py-32 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto max-w-5xl ">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-bold mb-6 text-center"
          >
            AI 맞춤 유아복 추천
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 text-center max-w-3xl mx-auto"
          >
            아이의 체형과 선호도를 분석하여 최적의 유아복을 추천해드립니다.
          </motion.p>
        </div>
      </section>

      {/* AI 맞춤 추천의 장점 */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl text-gray-700 font-bold mb-12 text-center">AI 맞춤 추천의 장점</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart, title: "정확한 분석", description: "아이의 체형과 선호도를 정밀하게 분석합니다." },
              { icon: Shirt, title: "맞춤형 추천", description: "개인화된 스타일과 사이즈를 제안합니다." },
              { icon: Palette, title: "트렌드 반영", description: "최신 유아복 트렌드를 반영한 추천을 제공합니다." },
              { icon: Ruler, title: "성장 고려", description: "아이의 성장을 고려한 적정 사이즈를 추천합니다." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="h-10 w-10 text-gray-600 mb-4" />
                <h4 className="text-lg text-gray-700 font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI 맞춤 추천 프로세스 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fadeIn} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              {step === 1 && (
                <motion.div {...fadeIn} className="space-y-6">
                  <h3 className="text-2xl text-gray-700 font-bold mb-4">기본 정보 입력</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">아이 이름</label>
                      <input type="text" id="childName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" placeholder="아이의 이름을 입력하세요" />
                    </div>
                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">나이</label>
                      <select id="childAge" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-400">
                        <option value="">나이를 선택하세요</option>
                        {[1, 2, 3, 4, 5, 6].map(age => (
                          <option key={age} value={age}>{age}세</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">성별</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input type="radio" name="gender" value="male" className="mr-2 " />
                          <span className="text-gray-400">남아</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="gender" value="female" className="mr-2" />
                          <span className="text-gray-400">여아</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">키 (cm)</label>
                      <input type="number" id="height" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" placeholder="아이의 키를 입력하세요" />
                    </div>
                    <div>
                      <label htmlFor="growthRate" className="block text-sm font-medium text-gray-700 mb-1">신장 조건</label>
                      <select id="growthRate" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-400">
                        <option value="">신장 조건을 선택하세요</option>
                        <option value="slow">또래보다 천천히 자람</option>
                        <option value="average">평균적으로 자람</option>
                        <option value="fast">또래보다 빠르게 자람</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(2)} 
                    className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    우리 아이 맞춤 디자인 보러가기 <ArrowLeft className="ml-2 h-4 w-4 transform rotate-180" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div {...fadeIn} className="space-y-6">
                  <h3 className="text-2xl text-gray-700 font-bold mb-4">체형 및 선호도 입력</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">몸무게 (kg)</label>
                      <input type="number" id="weight" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" placeholder="몸무게를 입력하세요" />
                    </div>
                    <div>
                      <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-1">선호 스타일</label>
                      <select id="style" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-400">
                        <option value="">스타일을 선택하세요</option>
                        <option value="casual">캐주얼</option>
                        <option value="formal">포멀</option>
                        <option value="active">액티브</option>
                        <option value="cute">귀여움</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(3)} 
                    className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    AI 추천 받기 <Sparkles className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div {...fadeIn} className="space-y-6">
                  <h3 className="text-2xl text-gray-700 font-bold mb-4">AI 맞춤 추천 결과</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <img src="/images/상품1.png" alt="추천 유아복 1" className="w-full h-[250px] rounded-md mb-2 object-contain" />
                      <p className="text-center text-sm font-medium text-gray-700">캐주얼 원피스</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <img src="/images/상품2.png" alt="추천 유아복 2" className="w-full h-[250px] rounded-md mb-2 object-contain" />
                      <p className="text-center text-sm font-medium text-gray-700">액티브 상하의 세트</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="text-gray-700 font-semibold mb-2">AI 추천 이유</h4>
                    <p className="text-sm text-gray-600">
                      아이의 나이, 체형, 선호 스타일을 고려하여 편안하면서도 스타일리시한 옷을 선별했습니다. 
                      특히 활동성과 착용감을 중시하여 선택했습니다.
                    </p>
                  </div>
                  <button 
                    onClick={() => setStep(1)} 
                    className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    다시 추천받기 <Zap className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
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