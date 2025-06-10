'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  UserCheck, 
  HeadphonesIcon, 
  Settings, 
  Award, 
  Clock,
  CheckCircle2,
  ArrowRight 
} from 'lucide-react';

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: "신청부터 승인까지 원스톱 관리",
      description: "복잡한 정책자금 신청 과정을 처음부터 끝까지 전담 관리합니다.",
      features: [
        "서류 작성 및 검토 대행",
        "신청 프로세스 완전 관리",
        "심사 과정 실시간 모니터링",
        "결과 분석 및 피드백 제공"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: UserCheck,
      title: "1:1 맞춤 컨설팅 제공",
      description: "기업별 특성에 맞는 개인화된 컨설팅 서비스를 제공합니다.",
      features: [
        "기업 현황 정밀 분석",
        "맞춤형 자금 솔루션 제안",
        "업종별 전문 컨설팅",
        "성공 전략 맞춤 설계"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: HeadphonesIcon,
      title: "전문 컨설턴트 상주",
      description: "12년 경력의 정책자금 전문가가 24시간 대기하고 있습니다.",
      features: [
        "12년 이상 전문 경력",
        "정부기관 네트워크 보유",
        "실시간 상담 가능",
        "사후 관리 서비스"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const additionalFeatures = [
    {
      icon: Settings,
      title: "체계적인 프로세스",
      description: "검증된 단계별 프로세스로 확실한 결과를 보장합니다."
    },
    {
      icon: Award,
      title: "높은 성공률",
      description: "89%의 높은 승인률로 검증된 전문성을 자랑합니다."
    },
    {
      icon: Clock,
      title: "신속한 처리",
      description: "평균 30일 이내 처리로 빠른 결과를 얻을 수 있습니다."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            EM파트너스 <span className="text-brand-main">핵심 서비스</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            정책자금 신청의 모든 과정을 전문가가 책임지고 관리합니다.
            <br />
            복잡하고 어려운 일은 저희가, 결과는 고객님이 가져가세요.
          </p>
        </motion.div>

        {/* 메인 기능들 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* 아이콘과 제목 */}
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mr-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* 설명 */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* 세부 기능 */}
              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* 더보기 버튼 */}
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-6 flex items-center space-x-2 text-brand-main font-semibold text-sm hover:text-brand-dark transition-colors duration-200"
              >
                <span>자세히 알아보기</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* 추가 기능들 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            이것이 EM파트너스만의 차별점입니다
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-brand-main/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-main/20 transition-colors duration-300">
                  <feature.icon className="w-10 h-10 text-brand-main" />
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-main to-brand-dark rounded-2xl p-12 text-white relative overflow-hidden">
            {/* 어두운 오버레이 추가 */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">
                전문가의 도움이 필요하신가요?
              </h3>
              <p className="text-lg text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
                지금 바로 무료 상담을 신청하고, 우리 기업에 맞는 정책자금을 확인해보세요.
                전문 컨설턴트가 직접 상담해드립니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 hover:bg-yellow-300 text-brand-darker font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>무료 상담 신청</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-main font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  서비스 둘러보기
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 