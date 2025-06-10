'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, FileText, TrendingDown, Users, HelpCircle, ChevronRight, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const ProblemSection = () => {
  const problems = [
    {
      icon: FileText,
      title: "복잡한 서류 준비",
      description: "어떤 서류가 필요한지 모르겠고, 작성법도 어려워요",
      percentage: "87%",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50",
    },
    {
      icon: Clock,
      title: "긴 심사 기간",
      description: "언제 결과가 나올지 몰라 계속 기다려야 해요",
      percentage: "72%",
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50",
    },
    {
      icon: TrendingDown,
      title: "낮은 승인률",
      description: "혼자 신청하면 승인 확률이 너무 낮아요",
      percentage: "65%",
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50",
    },
    {
      icon: HelpCircle,
      title: "정보 부족",
      description: "어떤 정책자금을 신청해야 할지 모르겠어요",
      percentage: "79%",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      icon: Users,
      title: "전문성 부족",
      description: "혼자서는 정부 기준에 맞춰 작성하기 어려워요",
      percentage: "83%",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: AlertTriangle,
      title: "반복되는 거절",
      description: "여러 번 신청했지만 계속 거절당해요",
      percentage: "56%",
      color: "from-red-600 to-red-500",
      bgColor: "from-red-50 to-red-100",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* 떠다니는 장식 요소들 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-red-200 to-orange-200 rounded-full opacity-20 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 blur-xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-100 to-orange-100 px-4 py-2 rounded-full mb-6 border border-red-200"
          >
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-red-700 font-medium text-sm">기업들이 겪는 공통 문제</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="block">정책자금 신청,</span>
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                이런 어려움 겪고 계시나요?
              </span>
              {/* 강조 효과 */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-lg blur-xl -z-10"
              />
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            많은 기업들이 정책자금 신청 과정에서 어려움을 겪고 있습니다.
            <br />
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 30px rgba(59, 130, 246, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-brand-main font-bold text-xl md:text-2xl"
            >
              대표님만의 문제가 아닙니다.
            </motion.span>
          </motion.p>
        </motion.div>

        {/* 문제점 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              viewport={{ once: true }}
              className={`relative bg-gradient-to-br ${problem.bgColor} backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 group overflow-hidden`}
            >
              {/* 배경 그라데이션 효과 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
              
              {/* 펄스 효과 */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className={`absolute inset-0 bg-gradient-to-br ${problem.color} rounded-2xl`}
              />

              {/* 아이콘과 퍼센트 */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <problem.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-right">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    className={`text-3xl font-black bg-gradient-to-r ${problem.color} bg-clip-text text-transparent`}
                  >
                    {problem.percentage}
                  </motion.div>
                  <div className="text-sm text-gray-500 font-medium">겪는 문제</div>
                </div>
              </div>

              {/* 제목과 설명 */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {problem.description}
                </p>
              </div>

              {/* 호버 시 나타나는 장식 */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full shadow-lg"
              />
            </motion.div>
          ))}
        </div>

        {/* 문제 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* 배경 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl" />
            
            <div className="relative z-10 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-black text-gray-900 mb-8"
              >
                결국 이런 문제들의 원인은...
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: AlertTriangle, title: "정보 부족", desc: "정확한 정보와 가이드라인 부재", color: "from-red-500 to-orange-500" },
                  { icon: Users, title: "전문성 부족", desc: "정부 기준에 맞는 전문적 접근 필요", color: "from-blue-500 to-purple-500" },
                  { icon: Clock, title: "시간 부족", desc: "복잡한 과정을 혼자 처리하기 어려움", color: "from-green-500 to-teal-500" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl`}
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-700 mb-8 font-medium"
          >
            이제 혼자 고민하지 마세요. <span className="text-brand-main font-bold">{COMPANY_CONFIG.name}</span>가 해결해드립니다.
          </motion.p>
          
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4081ed] hover:bg-[#2d5ce8] text-white font-bold py-4 px-10 rounded-xl shadow-2xl transition-all duration-300 flex items-center space-x-3 mx-auto text-lg relative overflow-hidden group"
            >
              {/* 배경 애니메이션 효과 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: [-100, 100]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* 스파클 아이콘 */}
              <motion.div
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              
              <span className="relative z-10 font-black">전문가와 상담하기</span>
              
              {/* 화살표 애니메이션 */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.div>
              
              {/* 글로우 효과 */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-[#4081ed] rounded-xl blur-lg -z-10"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection; 