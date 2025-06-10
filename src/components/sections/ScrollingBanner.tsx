'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ScrollingBanner = () => {
  const bannerItems = [
    "정책자금 신청부터 승인까지 원스톱 관리",
    "89% 높은 승인률 보장",
    "1:1 맞춤형 컨설팅 서비스",
    "12년 경력의 전문 컨설턴트",
    "무료 사전 상담 가능",
    "기업인증 지원 서비스",
    "정부지원사업 전문 관리",
    "24시간 온라인 상담 운영",
  ];

  // 배너 아이템을 2배로 복제하여 무한 스크롤 효과 구현
  const duplicatedItems = [...bannerItems, ...bannerItems];

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-6 overflow-hidden relative">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <motion.div
        className="flex space-x-16 whitespace-nowrap relative z-10"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4"
          >
            <span className="text-xl font-bold text-white drop-shadow-lg bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              {item}
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg animate-pulse" />
          </div>
        ))}
      </motion.div>
      
      {/* 좌우 그라데이션 페이드 효과 */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-900 to-transparent z-20"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-900 to-transparent z-20"></div>
    </div>
  );
};

export default ScrollingBanner; 