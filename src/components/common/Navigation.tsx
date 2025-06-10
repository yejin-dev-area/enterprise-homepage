'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Instagram, ExternalLink, Home } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '홈', href: '/', icon: Home },
    { name: '회사소개', href: '/about' },
    { name: '정책자금', href: '/fund' },
    { name: '기업인증', href: '/cert' },
    { name: '지원사업', href: '/support' },
    { name: '공지사항', href: '/notice' },
    { name: '상담신청', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#4081ed]/95 backdrop-blur-md shadow-lg' 
        : 'bg-[#4081ed]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-white to-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-[#4081ed] font-bold text-xl">{COMPANY_CONFIG.logoText}</span>
            </div>
            <span className="text-xl font-bold text-white">{COMPANY_CONFIG.name.replace(COMPANY_CONFIG.logoText, '')}</span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  isActive(item.href)
                    ? 'text-white bg-white/10 shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon && <item.icon size={18} />}
                <span>{item.name}</span>
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* SNS 및 연락처 */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_CONFIG.contact.phone}`}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 hover:bg-white/5 px-3 py-2 rounded-lg"
            >
              <Phone size={20} />
              <span className="text-sm">{COMPANY_CONFIG.contact.phone}</span>
            </a>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110 p-2 rounded-full hover:bg-white/5"
                title="카카오톡 상담"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110 p-2 rounded-full hover:bg-white/5"
                title="인스타그램"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110 p-2 rounded-full hover:bg-white/5"
                title="블로그"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#2d5ce8] border-t border-white/10 rounded-b-lg"
          >
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-white bg-white/10 shadow-lg'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <item.icon size={20} />}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-white/10 mt-4">
                <div className="flex items-center space-x-4 px-4 py-2">
                  <a
                    href={`tel:${COMPANY_CONFIG.contact.phone}`}
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
                  >
                    <Phone size={20} />
                    <span className="text-sm">{COMPANY_CONFIG.contact.phone}</span>
                  </a>
                </div>
                <div className="flex items-center space-x-4 mt-3 px-4">
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/5"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/5"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/5"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 