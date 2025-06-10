import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Building, Users, Target, Award, Calendar, MapPin } from 'lucide-react';

const AboutPage = () => {
  const tabs = [
    {
      id: 'overview',
      label: '회사 개요',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">EM파트너스 소개</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              12년간 쌓아온 전문성으로 기업의 성장을 함께하는 정책자금 전문 컨설팅 기업입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">회사 정보</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">회사명</h4>
                    <p className="text-gray-600">EM파트너스 주식회사</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">설립일</h4>
                    <p className="text-gray-600">2012년 3월</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">임직원 수</h4>
                    <p className="text-gray-600">25명</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">본사 위치</h4>
                    <p className="text-gray-600">서울특별시 강남구 테헤란로 123길 45</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">핵심 성과</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2,847+</div>
                  <p className="text-sm text-gray-600">누적 상담 건수</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
                  <p className="text-sm text-gray-600">평균 승인률</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,200억+</div>
                  <p className="text-sm text-gray-600">누적 지원금 확보</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12년</div>
                  <p className="text-sm text-gray-600">전문 경력</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vision',
      label: '비전 & 미션',
      content: (
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">비전 & 미션</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">비전 (Vision)</h3>
              <p className="text-lg leading-relaxed">
                "중소기업의 성장을 위한 최고의 정책자금 파트너"
              </p>
              <p className="mt-4 text-blue-100">
                모든 중소기업이 정책자금을 통해 지속 가능한 성장을 이룰 수 있도록 전문적인 컨설팅과 
                체계적인 관리 서비스를 제공합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-navy-600 to-navy-700 rounded-xl p-8 text-white">
              <Award className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">미션 (Mission)</h3>
              <p className="text-lg leading-relaxed mb-4">
                "전문성과 신뢰를 바탕으로 기업 성장에 기여"
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• 맞춤형 정책자금 컨설팅 제공</li>
                <li>• 높은 승인률과 신속한 처리</li>
                <li>• 지속적인 사후 관리 서비스</li>
                <li>• 투명하고 윤리적인 업무 수행</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">핵심 가치</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">전문성</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Professional</h4>
                <p className="text-sm text-gray-600">12년간 축적된 전문 지식과 경험</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">신뢰</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Trust</h4>
                <p className="text-sm text-gray-600">투명하고 정직한 소통과 서비스</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">성과</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Result</h4>
                <p className="text-sm text-gray-600">89% 높은 승인률과 실질적 성과</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'organization',
      label: '조직도',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">조직 구조</h2>
            <p className="text-lg text-gray-600">전문성을 바탕으로 체계적으로 구성된 조직</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <div className="flex flex-col items-center space-y-8">
              {/* CEO */}
              <div className="bg-blue-600 text-white rounded-lg p-4 text-center">
                <h3 className="font-bold">대표이사</h3>
                <p className="text-sm">CEO</p>
              </div>

              {/* 부서 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">컨설팅팀</h4>
                  <p className="text-sm text-gray-600 mb-4">정책자금 분석 및 컨설팅</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>팀장 1명</p>
                    <p>선임컨설턴트 3명</p>
                    <p>컨설턴트 4명</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">사업관리팀</h4>
                  <p className="text-sm text-gray-600 mb-4">신청 및 진행 관리</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>팀장 1명</p>
                    <p>선임매니저 2명</p>
                    <p>매니저 3명</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">경영지원팀</h4>
                  <p className="text-sm text-gray-600 mb-4">고객지원 및 경영관리</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>팀장 1명</p>
                    <p>선임매니저 2명</p>
                    <p>매니저 4명</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'history',
      label: '연혁',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">회사 연혁</h2>
            <p className="text-lg text-gray-600">12년간 쌓아온 신뢰와 성장의 역사</p>
          </div>

          <div className="relative">
            {/* 타임라인 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-8">
              {[
                { year: '2024', title: '누적 상담 건수 3,000건 돌파', desc: '성과보수제 도입으로 고객 만족도 향상' },
                { year: '2023', title: '정책자금 컨설팅 부문 우수기업 선정', desc: '중소벤처기업부 장관상 수상' },
                { year: '2022', title: '코로나19 극복 지원사업 전담 운영', desc: '긴급 자금 지원으로 1,000여 기업 도움' },
                { year: '2020', title: 'AI 기반 정책자금 매칭 시스템 도입', desc: '빅데이터 분석을 통한 맞춤형 서비스 시작' },
                { year: '2018', title: '누적 지원금 1,000억원 달성', desc: '정책자금 컨설팅 분야 선도기업 지위 확립' },
                { year: '2015', title: '서울 본사 이전 및 조직 확대', desc: '전문 인력 확충으로 서비스 품질 향상' },
                { year: '2012', title: 'EM파트너스 설립', desc: '정책자금 전문 컨설팅 서비스 시작' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{item.year}</h3>
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <PageLayout
      title="회사소개"
      subtitle="12년간 쌓아온 전문성과 신뢰를 바탕으로 기업의 성장을 함께합니다"
      tabs={tabs}
      defaultTab="overview"
    />
  );
};

export default AboutPage; 