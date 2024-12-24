'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Recycle, Shield, Star, Download, Sparkles, Heart } from 'lucide-react'
import Header from '@/conponents/Header'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* 네비게이션 */}
      <Header />

      {/* 히어로 섹션 */}
      <section className="py-32 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-bold mb-6 text-center"
          >
            REVIVE의 브랜드 스토리
          </motion.h2>  
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-white mb-8 text-center max-w-3xl mx-auto">
            REVIVE는 의류 폐기물을 혁신적인 방식으로 재활용하여 프리미엄 유아복으로 탄생시키는 업사이클링 브랜드입니다.
            우리는 환경을 생각하고, 다음 세대를 위한 지속 가능한 패션을 만들어갑니다.
          </motion.p>
        </div>
      </section>

      {/* 브랜드 스토리 섹션 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl text-gray-700 font-bold mb-20 text-center">브랜드 스토리</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 ">
              <img 
                src="./images/about_의류폐기물.jpeg" 
                alt="REVIVE 창립자" 
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-4">
                REVIVE는 2024년, 패션 산업의 환경 문제에 대한 해결책을 찾고자 하는 열정으로 시작되었습니다. 
                우리는 버려지는 의류들이 여전히 가치 있는 소재라는 것을 깨달았고, 이를 활용해 새로운 생명을 불어넣는 방법을 연구했습니다.
              </p>
              <p className="text-lg text-gray-700">
                수많은 실험과 노력 끝에, 우리는 고품질의 업사이클링 유아복을 만들어내는 데 성공했습니다. 
                REVIVE의 모든 제품은 환경을 생각하는 마음과 아이들을 위한 따뜻한 마음이 만나 탄생했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 미션과 비전 섹션 */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl font-bold mb-12 text-center">미션과 비전</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white text-black rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6" />
                미션
              </h4>
              <p>
                의류 산업의 환경 영향을 줄이고, 지속 가능한 패션의 새로운 기준을 제시합니다. 
                우리는 혁신적인 업사이클링 기술을 통해 고품질의 유아복을 제작하여, 
                환경 보호와 아이들의 건강한 성장을 동시에 추구합니다.
              </p>
            </div>
            <div className="bg-white text-black rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Star className="mr-2 h-6 w-6" />
                비전
              </h4>
              <p>
                REVIVE는 모든 아이들이 환경 친화적이고 안전한 옷을 입을 수 있는 세상을 꿈꿉니다. 
                우리의 기술과 철학이 전 세계로 퍼져, 의류 산업의 패러다임을 바꾸고 
                더 나은 미래를 만드는 데 기여하고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 업사이클링 프로세스 섹션 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl text-gray-700 font-bold mb-12 text-center">업사이클링 프로세스</h3>
          <div className="space-y-12">
            {[
              { title: "수거 및 분류", description: "엄선된 의류 폐기물을 수거하고 재사용 가능한 소재를 분류합니다." },
              { title: "세척 및 가공", description: "친환경 방식으로 소재를 세척하고, 새로운 원단으로 가공합니다." },
              { title: "디자인 및 제작", description: "혁신적인 디자인을 적용하여 고품질의 유아복으로 재탄생시킵니다." },
              { title: "품질 관리", description: "엄격한 품질 검사를 통해 안전성과 내구성을 보장합니다." }
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
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

      {/* 환경 영향 섹션 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl text-gray-700 font-bold mb-12 text-center">환경에 미치는 영향</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Recycle, title: "폐기물 감소", description: "연간 10톤의 의류 폐기물을 재활용합니다." },
              { icon: Leaf, title: "탄소 배출 감소", description: "전통적인 제조 방식 대비 60% 적은 탄소를 배출합니다." },
              { icon: Heart, title: "자원 절약", description: "물 사용량을 70% 줄이고, 화학 물질 사용을 최소화합니다." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <div className="bg-black rounded-full p-4 mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl text-gray-700 font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold mb-6">함께 만들어가는 지속 가능한 미래</h3>
          <p className="text-xl mb-8">REVIVE와 함께 환경을 생각하는 소비로 더 나은 세상을 만들어갑니다.</p>
          <button className="px-8 py-3 bg-white text-black rounded-md text-lg font-semibold hover:bg-gray-100 inline-flex items-center">
            지금 쇼핑하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
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