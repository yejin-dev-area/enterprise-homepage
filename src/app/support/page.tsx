import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Rocket, Zap, Globe, Users, Calendar, DollarSign, CheckCircle } from 'lucide-react';

const SupportPage = () => {
  const tabs = [
    {
      id: 'current',
      label: '현재 모집중',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">현재 모집중인 지원사업</h2>
            <p className="text-lg text-gray-600">지금 신청 가능한 정부 지원사업을 확인하세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '2024 R&D 집약형 창업지원사업',
                agency: '중소벤처기업부',
                period: '2024.12.01 ~ 2025.01.31',
                amount: '최대 20억원',
                target: '기술창업기업',
                status: '모집중',
                icon: Rocket,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'AI 바우처 지원사업',
                agency: '과학기술정보통신부',
                period: '2024.11.15 ~ 2025.02.28',
                amount: '최대 7,700만원',
                target: 'AI 도입 기업',
                status: '모집중',
                icon: Zap,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: '글로벌 강소기업 육성사업',
                agency: '산업통상자원부',
                period: '2024.12.15 ~ 2025.01.15',
                amount: '최대 50억원',
                target: '수출 유망기업',
                status: '모집중',
                icon: Globe,
                color: 'from-green-500 to-green-600'
              },
              {
                title: '청년창업사관학교',
                agency: '중소벤처기업부',
                period: '2024.12.01 ~ 2025.01.20',
                amount: '최대 1억원',
                target: '39세 이하 창업자',
                status: '모집중',
                icon: Users,
                color: 'from-orange-500 to-orange-600'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className="w-10 h-10" />
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.agency}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{item.period}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{item.amount}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{item.target}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    상세보기 및 신청
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚡ 마감 임박 사업</h3>
            <p className="text-yellow-700">
              일부 사업의 경우 예산 소진 시 조기 마감될 수 있습니다. 
              관심 있는 사업은 빠른 상담을 통해 신청 일정을 확인하세요.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'by-field',
      label: '분야별 사업',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">분야별 지원사업</h2>
            <p className="text-lg text-gray-600">업종과 분야에 맞는 맞춤형 지원사업을 찾아보세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                field: 'R&D · 기술개발',
                icon: '🔬',
                programs: [
                  '기술개발사업 (KOSBIR)',
                  'R&D 바우처',
                  '산학연 협력기술개발',
                  'AI 학습용 데이터 구축',
                  '스마트공장 구축사업'
                ]
              },
              {
                field: '창업 · 스타트업',
                icon: '🚀',
                programs: [
                  '청년창업사관학교',
                  '창업성장기술개발',
                  'K-Startup 그랜드챌린지',
                  '예비창업패키지',
                  '초기창업패키지'
                ]
              },
              {
                field: '해외진출 · 수출',
                icon: '🌍',
                programs: [
                  '글로벌 강소기업',
                  '수출바우처',
                  'K-Move 스쿨',
                  '해외투자협력',
                  '글로벌 액셀러레이팅'
                ]
              },
              {
                field: '디지털 · IT',
                icon: '💻',
                programs: [
                  'AI 바우처',
                  '디지털뉴딜',
                  '빅데이터 플랫폼',
                  'SW 융합 클러스터',
                  '클라우드 바우처'
                ]
              },
              {
                field: '친환경 · 그린',
                icon: '🌱',
                programs: [
                  '그린뉴딜 펀드',
                  '탄소중립 기술개발',
                  '친환경 에너지',
                  '순환경제 사업화',
                  '녹색융합기술개발'
                ]
              },
              {
                field: '바이오 · 헬스케어',
                icon: '🧬',
                programs: [
                  'K-바이오 프로젝트',
                  '바이오 의료기기',
                  '신약개발 지원',
                  '임상시험 지원',
                  '디지털헬스케어'
                ]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.field}</h3>
                </div>
                <ul className="space-y-3">
                  {item.programs.map((program, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{program}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                  분야별 상담 신청
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'upcoming',
      label: '예정 사업',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2025년 예정 지원사업</h2>
            <p className="text-lg text-gray-600">내년도 지원사업 일정을 미리 확인하고 준비하세요</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">💡 사전 준비의 중요성</h3>
            <p className="text-blue-800 mb-4">
              정부 지원사업은 대부분 연초에 공고가 나오며, 사전 준비가 성공의 핵심입니다.
            </p>
            <ul className="space-y-2 text-blue-700">
              <li>• 12월~2월: 대부분 사업 공고 및 접수</li>
              <li>• 사업계획서 작성에 평균 2-4주 소요</li>
              <li>• 필요 서류 준비 및 검토 기간 고려 필요</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quarter: '2025년 1분기',
                title: '주요 R&D 지원사업',
                programs: [
                  'KOSBIR 중소기업 기술혁신개발사업',
                  '산학연 협력기술개발사업',
                  '창업성장기술개발사업',
                  'AI 바우처 지원사업'
                ],
                note: '대부분 1-2월 공고 예정'
              },
              {
                quarter: '2025년 2분기',
                title: '창업 및 성장 지원사업',
                programs: [
                  '청년창업사관학교',
                  '초기창업패키지',
                  '글로벌 강소기업 육성',
                  '성장사다리펀드'
                ],
                note: '3-4월 공고 예정'
              },
              {
                quarter: '2025년 3분기',
                title: '특화 분야 지원사업',
                programs: [
                  '그린뉴딜 펀드',
                  'K-바이오 프로젝트',
                  '디지털뉴딜 사업',
                  '소상공인 정책자금'
                ],
                note: '5-6월 공고 예정'
              },
              {
                quarter: '2025년 4분기',
                title: '해외진출 지원사업',
                programs: [
                  '수출바우처 사업',
                  '해외진출 기업지원',
                  'K-Move 글로벌 사업',
                  '글로벌 액셀러레이팅'
                ],
                note: '7-8월 공고 예정'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.quarter}</h3>
                  <h4 className="text-lg text-blue-600 font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.note}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {item.programs.map((program, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">{program}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  사전 준비 상담 신청
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">2025년 지원사업 사전 준비</h3>
            <p className="text-blue-100 mb-6">
              내년도 지원사업에 대한 사전 상담을 통해 성공 확률을 높이세요.
              전문가가 기업별 맞춤 전략을 제시해드립니다.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              2025년 사업 계획 상담 신청
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <PageLayout
      title="지원사업"
      subtitle="다양한 정부 지원사업 정보와 맞춤형 신청 지원 서비스를 제공합니다"
      tabs={tabs}
      defaultTab="current"
    />
  );
};

export default SupportPage; 