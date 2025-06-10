import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Bell, Calendar, Eye, ChevronRight, Star, AlertTriangle } from 'lucide-react';

const NoticePage = () => {
  const tabs = [
    {
      id: 'all',
      label: '전체 공지',
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">전체 공지사항</h2>
            <p className="text-lg text-gray-600">EM파트너스의 최신 소식과 정책자금 정보를 확인하세요</p>
          </div>

          {/* 중요 공지 */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-700 font-semibold">중요 공지</span>
            </div>
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              2024년 연말 정책자금 신청 마감 안내
            </h3>
            <p className="text-red-800">
              12월 31일까지 신청 가능한 정책자금 사업이 많습니다. 놓치지 마세요!
            </p>
          </div>

          {/* 공지사항 목록 */}
          <div className="space-y-4">
            {[
              {
                type: '중요',
                title: '2025년 정책자금 사업 설명회 개최 안내',
                date: '2024.12.15',
                views: 1247,
                isNew: true,
                excerpt: '내년도 주요 정책자금 사업에 대한 설명회를 개최합니다. 참석 신청 받습니다.'
              },
              {
                type: '공지',
                title: 'AI 바우처 지원사업 2차 모집 시작',
                date: '2024.12.12',
                views: 892,
                isNew: true,
                excerpt: 'AI 도입을 위한 바우처 지원사업 2차 모집이 시작되었습니다.'
              },
              {
                type: '정보',
                title: '벤처기업 확인 신청 절차 간소화 안내',
                date: '2024.12.10',
                views: 567,
                isNew: false,
                excerpt: '벤처기업 확인 신청 시 필요 서류가 간소화되었습니다.'
              },
              {
                type: '공지',
                title: '2024년 4분기 정책자금 승인 현황',
                date: '2024.12.05',
                views: 1156,
                isNew: false,
                excerpt: '4분기 정책자금 신청 및 승인 현황을 공유드립니다.'
              },
              {
                type: '정보',
                title: '청년창업사관학교 15기 모집 공고',
                date: '2024.12.01',
                views: 723,
                isNew: false,
                excerpt: '39세 이하 예비창업자 및 초기창업자를 대상으로 모집합니다.'
              },
              {
                type: '공지',
                title: 'R&D 지원사업 성과보고서 제출 안내',
                date: '2024.11.28',
                views: 445,
                isNew: false,
                excerpt: 'R&D 지원사업 수혜 기업의 성과보고서 제출 일정 안내'
              }
            ].map((notice, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        notice.type === '중요' ? 'bg-red-100 text-red-700' :
                        notice.type === '공지' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {notice.type}
                      </span>
                      {notice.isNew && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {notice.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{notice.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{notice.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{notice.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 mt-2" />
                </div>
              </div>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="text-center pt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              더 많은 공지사항 보기
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'funding',
      label: '정책자금 소식',
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">정책자금 소식</h2>
            <p className="text-lg text-gray-600">최신 정책자금 동향과 지원사업 정보</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: '신규사업',
                title: '2025년 K-유니콘 프로젝트 신설',
                date: '2024.12.14',
                content: '중소벤처기업부에서 차세대 유니콘 기업 육성을 위한 새로운 지원사업을 신설했습니다.',
                amount: '기업당 최대 100억원',
                tag: '스타트업'
              },
              {
                category: '변경사항',
                title: 'KOSBIR 지원규모 확대',
                date: '2024.12.12',
                content: '중소기업 기술혁신개발사업(KOSBIR)의 지원규모가 30% 확대되었습니다.',
                amount: '최대 15억원 → 20억원',
                tag: 'R&D'
              },
              {
                category: '모집공고',
                title: '디지털뉴딜 2.0 추가모집',
                date: '2024.12.10',
                content: '디지털 전환을 위한 지원사업 추가모집이 진행됩니다.',
                amount: '기업당 최대 5억원',
                tag: '디지털'
              },
              {
                category: '정책변화',
                title: '그린뉴딜 지원 대상 확대',
                date: '2024.12.08',
                content: '친환경 기술 개발 및 사업화 지원 대상이 확대되었습니다.',
                amount: '최대 30억원',
                tag: '친환경'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{item.amount}</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                    #{item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'success',
      label: '성공사례',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">정책자금 성공사례</h2>
            <p className="text-lg text-gray-600">EM파트너스와 함께한 기업들의 성공 스토리</p>
          </div>

          <div className="space-y-8">
            {[
              {
                company: '㈜테크이노베이션',
                industry: 'AI/빅데이터',
                funding: 'KOSBIR 기술개발사업',
                amount: '15억원',
                achievement: '매출 300% 증가, 특허 5건 출원',
                story: 'AI 기반 제조업 솔루션 개발을 위한 R&D 자금을 지원받아 핵심 기술 개발에 성공했습니다.',
                period: '2023.03 ~ 2024.02',
                rating: 5
              },
              {
                company: '㈜그린에너지솔루션',
                industry: '신재생에너지',
                funding: '그린뉴딜 펀드',
                amount: '25억원',
                achievement: '해외수출 계약 200억원 달성',
                story: '태양광 발전 효율 개선 기술 개발로 해외 시장 진출에 성공했습니다.',
                period: '2023.06 ~ 2024.05',
                rating: 5
              },
              {
                company: '㈜바이오메드',
                industry: '바이오/의료기기',
                funding: 'K-바이오 프로젝트',
                amount: '30억원',
                achievement: 'FDA 승인 획득, 미국 진출',
                story: '혁신적인 의료기기 개발을 통해 글로벌 시장 진출의 발판을 마련했습니다.',
                period: '2022.09 ~ 2024.08',
                rating: 5
              }
            ].map((case_item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{case_item.company}</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {case_item.industry}
                      </span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-700">지원사업:</span>
                        <span className="text-gray-600">{case_item.funding}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-700">지원금액:</span>
                        <span className="text-blue-600 font-bold">{case_item.amount}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-700">사업기간:</span>
                        <span className="text-gray-600">{case_item.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(case_item.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">고객 만족도</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">주요 성과</h4>
                    <p className="text-green-600 font-semibold mb-4">{case_item.achievement}</p>
                    <h4 className="font-semibold text-gray-900 mb-3">성공 스토리</h4>
                    <p className="text-gray-600 leading-relaxed">{case_item.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">당신의 성공사례를 만들어보세요</h3>
            <p className="text-blue-100 mb-6">
              EM파트너스와 함께 정책자금을 활용해 기업의 성장을 이뤄낸 많은 기업들처럼,
              당신의 기업도 성공할 수 있습니다.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              성공 파트너 되기
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      label: 'FAQ',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <p className="text-lg text-gray-600">정책자금에 대한 궁금한 점들을 해결해드립니다</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: '정책자금 신청 자격은 어떻게 되나요?',
                answer: '중소기업, 소상공인, 스타트업 등이 주요 대상이며, 사업별로 세부 자격 요건이 다릅니다. 업종, 매출액, 직원 수 등을 종합적으로 검토하여 적합한 사업을 추천해드립니다.'
              },
              {
                question: '신청부터 승인까지 얼마나 걸리나요?',
                answer: '사업별로 차이가 있지만, 일반적으로 서류 작성 2-3주, 심사 기간 4-8주 정도 소요됩니다. EM파트너스는 평균 30일 이내 처리를 목표로 합니다.'
              },
              {
                question: '컨설팅 비용은 얼마인가요?',
                answer: '성과보수제로 운영하여 승인될 때까지는 별도 비용이 발생하지 않습니다. 승인 후 지원금액의 일정 비율로 수수료를 책정합니다.'
              },
              {
                question: '승인률이 정말 89%인가요?',
                answer: '네, 2024년 기준 89%의 높은 승인률을 기록하고 있습니다. 이는 사전 정밀 분석과 전문가의 체계적인 서류 작성, 심사 대응 노하우의 결과입니다.'
              },
              {
                question: '여러 사업에 동시 신청이 가능한가요?',
                answer: '사업별 제약사항을 검토하여 가능한 경우 동시 신청을 진행합니다. 다만, 일부 사업은 중복 신청이 제한될 수 있어 전문가 상담이 필요합니다.'
              },
              {
                question: '지방 소재 기업도 지원 가능한가요?',
                answer: '전국 어디든 지원 가능합니다. 화상 상담, 원격 서류 작성 등을 통해 지역에 관계없이 동일한 품질의 서비스를 제공합니다.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border p-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 group-open:text-blue-600">
                      Q. {faq.question}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      A. {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">더 궁금한 점이 있으신가요?</h3>
            <p className="text-blue-700 mb-6">
              전문 상담사가 1:1로 상세히 답변해드립니다.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              전문가에게 질문하기
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <PageLayout
      title="공지사항"
      subtitle="EM파트너스의 최신 소식과 정책자금 정보를 확인하세요"
      tabs={tabs}
      defaultTab="all"
    />
  );
};

export default NoticePage; 