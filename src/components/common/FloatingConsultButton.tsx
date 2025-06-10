'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const FloatingConsultButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="relative"
      >
        {/* 확장된 메뉴 */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl p-4 min-w-[280px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">빠른 상담</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY_CONFIG.contact.phone}`}
                className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">전화 상담</p>
                  <p className="text-sm text-gray-600">{COMPANY_CONFIG.contact.phone}</p>
                </div>
              </a>
              
              <a
                href="#"
                className="flex items-center space-x-3 p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">카카오톡 상담</p>
                  <p className="text-sm text-gray-600">빠르고 편리한 상담</p>
                </div>
              </a>
            </div>
            
            <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <p className="text-xs text-gray-600 text-center">
                평일 09:00 - 18:00 | 상담 무료
              </p>
            </div>
          </motion.div>
        )}

        {/* 메인 버튼 */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full shadow-lg flex items-center justify-center text-white relative overflow-hidden"
        >
          {/* 펄스 효과 */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-blue-400 rounded-full"
          />
          
          {/* 아이콘 */}
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.div>
          
          {/* 알림 점 */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 bg-white rounded-full"
            />
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FloatingConsultButton; 