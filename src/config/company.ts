// 회사 정보 설정
export const COMPANY_CONFIG = {
  // 기본 회사 정보
  name: "EM파트너스",
  nameEn: "EM Partners",
  logoText: "EM",
  fullName: "EM파트너스 주식회사",
  
  // 비즈니스 정보
  business: {
    type: "정책자금 전문 컨설팅",
    description: "정책자금 신청부터 승인까지 원스톱 관리. 1:1 맞춤 컨설팅으로 높은 승인률을 자랑하는",
    experience: "12년간",
    approvalRate: "89%",
    heroApprovalRate: "92%",
    establishedYear: "2012년 3월",
    employees: "25명"
  },
  
  // 연락처 정보
  contact: {
    phone: "02-1234-5678",
    email: "info@empartners.co.kr",
    address: "서울시 강남구 테헤란로 123길 45",
    addressDetail: "EM빌딩 10층",
    businessNumber: "123-45-67890",
    ceoName: "김대표",
    salesReportNumber: "2024-서울강남-1234"
  },
  
  // 성과 지표
  achievements: {
    totalConsultations: "2,847+",
    approvalRate: "89%",
    totalFunding: "1,200억+",
    experience: "12년",
    currentApprovals: "95%",
    avgProcessingDays: "30일"
  },
  
  // SEO 정보
  seo: {
    title: "정책자금 전문 컨설팅",
    keywords: "정책자금, 컨설팅, 기업지원, 정부지원사업",
    domain: "empartners.co.kr"
  }
};

// 타입 정의
export type CompanyConfig = typeof COMPANY_CONFIG; 