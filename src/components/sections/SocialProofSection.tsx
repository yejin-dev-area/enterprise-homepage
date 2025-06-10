'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Building, Users, TrendingUp } from 'lucide-react';

const SocialProofSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "김민수",
      company: "스마트테크 대표",
      content: "혼자서는 절대 불가능했을 정책자금 신청을 EM파트너스 덕분에 성공할 수 있었습니다. 전문적인 컨설팅과 완벽한 서류 관리로 첫 번째 시도에서 바로 승인받았어요.",
      amount: "5억원",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "이영희",
      company: "그린에너지 CEO",
      content: "정책자금에 대한 정보가 전혀 없었는데, EM파트너스에서 우리 회사에 딱 맞는 지원사업을 찾아주셨어요. 3개월 만에 승인까지 받을 수 있었습니다.",
      amount: "3억원",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "박준호",
      company: "바이오메드 이사",
      content: "복잡한 R&D 사업 신청을 전문가와 함께 진행했더니 훨씬 수월했습니다. 서류 작성부터 심사 과정까지 모든 것을 케어해주셔서 안심할 수 있었어요.",
      amount: "8억원",
      rating: 5,
      image: "👨‍🔬"
    }
  ];

  const partners = [
    { name: "중소벤처기업부", logo: "🏛️" },
    { name: "산업통상자원부", logo: "🏢" },
    { name: "과학기술정보통신부", logo: "🔬" },
    { name: "기술보증기금", logo: "🏦" },
    { name: "신용보증기금", logo: "💳" },
    { name: "한국산업기술진흥원", logo: "⚙️" },
    { name: "한국창업진흥원", logo: "🚀" },
    { name: "코트라", logo: "🌐" }
  ];

  const successCases = [
    {
      company: "AI 스타트업",
      industry: "인공지능",
      amount: "12억원",
      program: "AI 바우처 사업",
      description: "AI 기술 개발을 위한 R&D 자금 지원",
      achievement: "제품 개발 완료 및 해외 진출",
      image: "🤖"
    },
    {
      company: "그린테크",
      industry: "환경기술",
      amount: "15억원",
      program: "그린뉴딜 펀드",
      description: "친환경 기술 개발 및 상용화 지원",
      achievement: "특허 3건 등록, 양산 체계 구축",
      image: "🌱"
    },
    {
      company: "바이오벤처",
      industry: "바이오의료",
      amount: "20억원",
      program: "K-바이오 프로젝트",
      description: "신약 개발을 위한 임상시험 지원",
      achievement: "임상 2상 진입, 기술이전 성공",
      image: "🧬"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            <span className="text-brand-main">성공 스토리</span>가 증명하는 신뢰
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            수많은 기업들이 EM파트너스와 함께 정책자금을 성공적으로 확보했습니다.
            <br />
            실제 고객들의 생생한 후기를 확인해보세요.
          </p>
        </motion.div>

        {/* 고객 후기 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            고객 후기
          </h3>
          
          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === activeTestimonial ? 'bg-brand-main' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-brand-main mx-auto mb-6" />
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                "{testimonials[activeTestimonial].content}"
              </p>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="text-6xl">{testimonials[activeTestimonial].image}</div>
                
                <div className="text-left">
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[activeTestimonial].company}</p>
                  <p className="text-brand-main font-semibold">
                    {testimonials[activeTestimonial].amount} 지원금 확보
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 성공사례 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold text-gray-900">
              주요 성공사례
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-brand-main text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-dark transition-colors duration-200"
            >
              더보기
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{case_.image}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-main">{case_.amount}</div>
                    <div className="text-xs text-gray-500">지원금 확보</div>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {case_.company}
                </h4>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Building className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{case_.industry}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{case_.program}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {case_.description}
                </p>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">
                    성과: {case_.achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 통계 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-brand-main to-brand-dark rounded-2xl p-12 text-white text-center relative overflow-hidden"
        >
          {/* 어두운 오버레이 추가 */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 drop-shadow-lg">
              숫자로 보는 EM파트너스의 성과
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2 drop-shadow-lg">2,847+</div>
                <p className="text-white drop-shadow-md">누적 상담 건수</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2 drop-shadow-lg">89%</div>
                <p className="text-white drop-shadow-md">평균 승인률</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2 drop-shadow-lg">1,200억+</div>
                <p className="text-white drop-shadow-md">누적 지원금 확보</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2 drop-shadow-lg">4.9/5</div>
                <p className="text-white drop-shadow-md">고객 만족도</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection; 