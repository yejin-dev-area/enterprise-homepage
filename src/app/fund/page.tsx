import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { DollarSign, FileText, Clock, CheckCircle, TrendingUp, Target, Users, Zap } from 'lucide-react';

const FundPage = () => {
  const tabs = [
    {
      id: 'overview',
      label: '정책자금 개요',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">정책자금이란?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              정부와 지방자치단체가 중소기업의 성장과 발전을 위해 저금리 또는 무이자로 지원하는 
              각종 자금 지원 제도입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">정책자금의 특징</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">저금리 또는 무이자</h4>
                    <p className="text-gray-600">시중 금리보다 훨씬 낮은 금리로 자금 조달 가능</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">장기 상환</h4>
                    <p className="text-gray-600">3~10년의 장기간에 걸쳐 상환 가능</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">담보 완화</h4>
                    <p className="text-gray-600">기술보증기금, 신용보증기금 등 보증 제도 활용</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">성장 지원</h4>
                    <p className="text-gray-600">기업의 성장 단계별 맞춤형 지원</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">지원 대상</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">중소기업</h4>
                  <p className="text-sm text-gray-600">업종별 매출액, 자산총액 기준 충족</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">소상공인</h4>
                  <p className="text-sm text-gray-600">상시근로자 5명(제조업 10명) 미만</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">스타트업</h4>
                  <p className="text-sm text-gray-600">창업 7년 이내 혁신형 기업</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">예비창업자</h4>
                  <p className="text-sm text-gray-600">사업자등록 전 창업 준비자</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">EM파트너스와 함께하는 정책자금의 장점</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">89%</div>
                <p className="text-blue-100">높은 승인률</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">30일</div>
                <p className="text-blue-100">평균 처리기간</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1:1</div>
                <p className="text-blue-100">전담 컨설팅</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'types',
      label: '유형별 안내',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">정책자금 유형</h2>
            <p className="text-lg text-gray-600">목적과 특성에 따른 다양한 정책자금 프로그램</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: 'R&D 자금',
                desc: '연구개발 및 기술혁신 지원',
                programs: ['기술개발사업', 'R&D 바우처', '산학연 협력기술개발', 'AI 학습용 데이터 구축'],
                amount: '3천만원 ~ 50억원',
                rate: '무이자 ~ 2%',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: TrendingUp,
                title: '성장 지원금',
                desc: '기업 성장 및 규모화 지원',
                programs: ['성장사다리펀드', '글로벌 강소기업', '수출바우처', '해외진출지원'],
                amount: '5천만원 ~ 100억원',
                rate: '1% ~ 3%',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Users,
                title: '창업 지원금',
                desc: '초기 창업기업 육성 지원',
                programs: ['청년창업사관학교', '창업성장기술개발', 'K-Startup', '예비창업패키지'],
                amount: '1천만원 ~ 20억원',
                rate: '무이자 ~ 1%',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Target,
                title: '특화 지원금',
                desc: '업종 및 정책별 맞춤 지원',
                programs: ['그린뉴딜펀드', '디지털뉴딜', '소상공인정책자금', '여성기업지원'],
                amount: '5백만원 ~ 30억원',
                rate: '무이자 ~ 2%',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                  <item.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.desc}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">지원규모</h4>
                      <p className="text-sm text-gray-600">{item.amount}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">지원금리</h4>
                      <p className="text-sm text-gray-600">{item.rate}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">주요 프로그램</h4>
                    <ul className="space-y-2">
                      {item.programs.map((program, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'process',
      label: '신청 절차',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">정책자금 신청 절차</h2>
            <p className="text-lg text-gray-600">체계적이고 효율적인 7단계 프로세스</p>
          </div>

          <div className="relative">
            {/* 프로세스 플로우 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { step: 1, title: '상담 신청', desc: '무료 상담 신청 및 기업 현황 파악', icon: '📞' },
                { step: 2, title: '사업 분석', desc: '적합한 정책자금 사업 발굴 및 분석', icon: '🔍' },
                { step: 3, title: '전략 수립', desc: '맞춤형 신청 전략 및 일정 계획', icon: '📋' },
                { step: 4, title: '서류 작성', desc: '전문가 직접 작성 및 검토', icon: '📝' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: 5, title: '신청 접수', desc: '정부기관 온라인 시스템 접수', icon: '📤' },
                { step: 6, title: '심사 관리', desc: '심사 과정 모니터링 및 대응', icon: '⚖️' },
                { step: 7, title: '사후 관리', desc: '승인 후 협약 및 정산 지원', icon: '✅' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">필요 서류</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">기본 서류</h4>
                <ul className="space-y-2">
                  {[
                    '사업자등록증',
                    '재무제표 (최근 3년)',
                    '법인등기부등본',
                    '대표자 신분증',
                    '사업계획서'
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">추가 서류 (사업별)</h4>
                <ul className="space-y-2">
                  {[
                    '기술개발계획서',
                    '특허/지식재산권 증명',
                    '연구개발비 명세서',
                    '시장조사 보고서',
                    '매출계획서'
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'diagnosis',
      label: '자가진단',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">정책자금 적합성 진단</h2>
            <p className="text-lg text-gray-600">간단한 체크로 우리 기업에 맞는 정책자금을 확인해보세요</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">기업 정보 체크</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">업종</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>제조업</option>
                    <option>정보통신업</option>
                    <option>서비스업</option>
                    <option>도소매업</option>
                    <option>기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">설립년도</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>2024년 (창업 1년차)</option>
                    <option>2021-2023년 (창업 2-4년차)</option>
                    <option>2017-2020년 (창업 5-8년차)</option>
                    <option>2016년 이전 (8년 이상)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">직원 수</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>5명 미만</option>
                    <option>5-20명</option>
                    <option>21-50명</option>
                    <option>51-100명</option>
                    <option>100명 이상</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">연매출</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>10억원 미만</option>
                    <option>10-50억원</option>
                    <option>50-100억원</option>
                    <option>100-500억원</option>
                    <option>500억원 이상</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">필요 자금 규모</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1억원 미만</option>
                    <option>1-5억원</option>
                    <option>5-10억원</option>
                    <option>10-50억원</option>
                    <option>50억원 이상</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">자금 용도</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>연구개발 (R&D)</option>
                    <option>시설투자</option>
                    <option>운영자금</option>
                    <option>해외진출</option>
                    <option>기타</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                적합한 정책자금 확인하기
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">정확한 진단은 전문가와 함께</h3>
            <p className="text-blue-100 mb-6">
              더 정확하고 상세한 진단을 원하신다면 EM파트너스 전문가와 무료 상담을 받아보세요.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              무료 전문가 상담 신청
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <PageLayout
      title="정책자금"
      subtitle="정부 지원 정책자금으로 기업의 성장과 혁신을 함께 만들어갑니다"
      tabs={tabs}
      defaultTab="overview"
    />
  );
};

export default FundPage; 