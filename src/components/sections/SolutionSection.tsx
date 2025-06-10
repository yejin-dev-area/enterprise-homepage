'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, TrendingUp, Clock, Shield } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: Target,
      title: "1:1 맞춤형 컨설팅",
      description: "기업별 특성과 업종에 맞는 정책자금을 분석하여 최적의 솔루션을 제공합니다.",
      features: ["기업 현황 분석", "맞춤형 자금 추천", "개별 전략 수립"]
    },
    {
      icon: Users,
      title: "전문 컨설턴트 상주",
      description: "12년 경력의 정책자금 전문가가 신청부터 승인까지 전 과정을 관리합니다.",
      features: ["12년 전문 경력", "정부기관 네트워크", "실시간 상담 가능"]
    },
    {
      icon: CheckCircle,
      title: "원스톱 관리 시스템",
      description: "복잡한 서류 작성부터 심사 과정 관리까지 모든 것을 대행해드립니다.",
      features: ["서류 작성 대행", "심사 과정 관리", "결과 분석 제공"]
    }
  ];

  const advantages = [
    {
      number: "89%",
      title: "높은 승인률",
      description: "일반 신청 대비 3배 높은 승인률"
    },
    {
      number: "30일",
      title: "단축된 처리기간",
      description: "전문적인 사전 준비로 신속한 처리"
    },
    {
      number: "2,847+",
      title: "누적 상담 건수",
      description: "풍부한 경험과 노하우 보유"
    },
    {
      number: "12년",
      title: "전문 경력",
      description: "정책자금 분야 전문성 인정"
    }
  ];

  const process = [
    {
      step: "01",
      title: "무료 상담",
      description: "기업 현황 파악 및 적합한 정책자금 분석",
      icon: Users
    },
    {
      step: "02",
      title: "전략 수립",
      description: "맞춤형 신청 전략 및 로드맵 제시",
      icon: Target
    },
    {
      step: "03",
      title: "서류 작성",
      description: "전문가가 직접 서류 작성 및 검토",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "신청 관리",
      description: "신청부터 승인까지 전 과정 모니터링",
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            EM파트너스만의 <span className="text-brand-main">확실한 솔루션</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            복잡하고 어려운 정책자금 신청, 이제 전문가에게 맡기세요.
            <br />
            체계적인 프로세스와 풍부한 경험으로 <strong className="text-brand-main">89% 승인률</strong>을 달성합니다.
          </p>
        </motion.div>

        {/* 주요 솔루션 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-brand-main to-brand-dark rounded-xl p-8 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">{solution.description}</p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm text-blue-100">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 성과 지표 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-2xl p-8 mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            검증된 성과로 말하는 EM파트너스
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-brand-main mb-2">
                  {advantage.number}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 프로세스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            간단하고 체계적인 4단계 프로세스
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* 연결선 */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2" />
                )}
                
                <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="bg-brand-main text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  {step.step}
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-brand-main to-brand-dark rounded-2xl p-12 text-white relative overflow-hidden"
        >
          {/* 어두운 오버레이 추가 */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">
              지금 바로 시작하세요
            </h3>
            <p className="text-lg text-white mb-8 drop-shadow-md">
              무료 상담으로 우리 기업에 맞는 정책자금을 확인해보세요
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-300 text-brand-darker font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300"
              >
                무료 상담 신청하기
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-brand-main font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                서비스 자세히 보기
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection; 