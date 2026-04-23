import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export default function Applications() {
  const [activeTab, setActiveTab] = useState('industry');

  const categories = [
    { id: 'industry', name: '산업별' },
    { id: 'professional', name: '전문별' },
    { id: 'functional', name: '기능별' },
    { id: 'content', name: '콘텐츠별' }
  ];

  const industryData = [
    { 
      name: "AI 조선·반도체 윤리", 
      desc: "조선 및 반도체 산업 현장의 안전, 자동화, 기술 보안 및 공정 정확성에 필요한 AI 윤리 기준", 
      issues: "기술보안 / 현장안전 / 공정정확성", 
      scene: "조선소 및 반도체 팹 교육, 직무 이해, 기술 유출 방지 특강", 
      tags: ["교육", "컨설팅", "보고서"] 
    },
    { 
      name: "AI 에너지 윤리", 
      desc: "에너지와 환경, 지속가능성과 공공성을 함께 고려하여 자원 효율성을 극대화하는 AI 윤리 기준", 
      issues: "공공책임 / 환경정보 / 지속가능성", 
      scene: "에너지 공공기관, 시민 강좌, 탄소 중립 및 에너지 효율 교육", 
      tags: ["교육", "컨설팅", "보고서"] 
    },
    { 
      name: "AI 자율주행 윤리", 
      desc: "긴급 상황에서의 인명 보호 우선순위 결정 및 사고 시 책임 소재를 명확히 하는 윤리 기준", 
      issues: "사고책임 / 의사결정윤리 / 안전확보", 
      scene: "자율주행 알고리즘 설계 가이드, 제조사 및 운영자 안전 교육", 
      tags: ["교육", "컨설팅", "보고서"] 
    },
    { 
      name: "AI 금융 윤리", 
      desc: "신용평가, 대출 심사 및 투자 알고리즘의 공정성을 확보하고 데이터 오남용을 방지하는 기준", 
      issues: "알고리즘편향 / 자동화책임 / 데이터보호", 
      scene: "금융권 AI 거버넌스 수립, 신용평가 공정성 진단 및 임직원 교육", 
      tags: ["교육", "인증", "보고서"] 
    },
    { 
      name: "AI 공공행정 윤리", 
      desc: "공공 서비스 자동화 과정에서 발생할 수 있는 인권 침해를 방지하고 투명성을 확보하는 기준", 
      issues: "시민감시방지 / 인권보호 / 투명한행정", 
      scene: "정부 및 지자체 AI 가이드라인 수립, 공무원 대상 AI 윤리 교육", 
      tags: ["교육", "컨설팅", "보고서"] 
    },
    { 
      name: "AI 이커머스·통신 윤리", 
      desc: "알고리즘 기반 추천 시스템의 공정성과 통신 데이터의 프라이버시 보호를 위한 윤리 기준", 
      issues: "알고리즘담합 / 정보비대칭 / 개인정보보호", 
      scene: "이커머스 추천 알고리즘 진단, 통신사 고객 데이터 활용 가이드 수립", 
      tags: ["교육", "보고서", "컨설팅"] 
    }
  ];

  const professionalData = [
    { 
      name: "AI 의료윤리", 
      desc: "건강과 보건, 민감정보와 설명 책임을 다루는 AI 윤리 기준", 
      issues: "정확성 / 민감정보 / 오해방지", 
      scene: "의료입문 교육, 보건특강, 건강이해 교육", 
      tags: ["교육", "인증", "보고서"] 
    },
    { 
      name: "AI 법률윤리", 
      desc: "법률정보의 오해를 줄이고 책임 있는 설명을 가능하게 하는 기준", 
      issues: "사례해석 / 책임표현 / 정확한 안내", 
      scene: "생활법률, 기관교육, 실무특강", 
      tags: ["교육", "컨설팅", "보고서"] 
    },
    { 
      name: "AI 회계윤리", 
      desc: "숫자와 실무 흐름을 쉽게 설명하되 왜곡하지 않기 위한 기준", 
      issues: "수치해석 / 단순화위험 / 실무책임", 
      scene: "소상공인 교육, 실무입문, 창업교육", 
      tags: ["교육", "보고서"] 
    },
    { 
      name: "AI 특허윤리", 
      desc: "기술과 권리, 출원과 사업화를 정확하게 설명하기 위한 기준", 
      issues: "권리이해 / 절차정확성 / 과장방지", 
      scene: "창업교육, 지식재산 특강, 기술사업화 교육", 
      tags: ["교육", "컨설팅", "보고서"] 
    },
    { 
      name: "AI 보안윤리", 
      desc: "사이버 보안 강화와 동시에 발생할 수 있는 프라이버시 침해 방지", 
      issues: "프라이버시 / 감시체계 / 데이터권리", 
      scene: "보안 시스템 운영 지침, 개인정보 영향 평가", 
      tags: ["교육", "컨설팅", "보고서"] 
    },
    { 
      name: "AI 기술윤리", 
      desc: "범용 인공지능(AGI)의 발전 방향과 인류 가치 정립을 위한 기준", 
      issues: "기술독점 / 통제불가능성 / 가치정렬", 
      scene: "R&D 윤리 헌장 제정, 개발자 가이드라인", 
      tags: ["교육", "보고서", "시험"] 
    }
  ];

  const functionalData = [
    { 
      name: "AI 문서윤리", 
      desc: "문서, 보고서, 기획서, 안내문 작성 과정에서 필요한 신뢰와 출처의 기준", 
      issues: "허위정보 / 표절 / 저작권", 
      scene: "검증되지 않은 내용, 출처 불명, 자동 작성 남용", 
      isProblem: true,
      tags: ["교육", "시험", "보고서"] 
    },
    { 
      name: "AI 음성윤리", 
      desc: "음성 생성과 복제, 안내 음성 활용 시 필요한 동의와 책임의 기준", 
      issues: "동의 / 사칭 / 도용", 
      scene: "음성 클로닝, 신원 오인, 보이스피싱", 
      isProblem: true,
      tags: ["교육", "컨설팅", "보고서"] 
    },
    { 
      name: "AI 영상윤리", 
      desc: "합성영상과 딥페이크 시대에 필요한 초상권과 조작 방지 기준", 
      issues: "딥페이크 / 초상권 / 표시책임", 
      scene: "얼굴 합성, 가짜 영상, 신뢰 훼손", 
      isProblem: true,
      tags: ["교육", "인증", "컨설팅"] 
    },
    { 
      name: "AI 이미지윤리", 
      desc: "생성 이미지와 시각 자료 활용에 필요한 작가 권리와 출처의 기준", 
      issues: "스타일모방 / 출처 / 저작권", 
      scene: "작가풍 모방, 이미지 재가공, 상업적 사용 책임", 
      isProblem: true,
      tags: ["교육", "보고서"] 
    },
    { 
      name: "AI 광고·홍보윤리", 
      desc: "광고문구와 홍보물에서 과장과 오인을 막기 위한 AI 윤리 기준", 
      issues: "허위표현 / 소비자오인 / 책임광고", 
      scene: "과장 홍보, 자동 생성 광고문구, 신뢰 저하", 
      isProblem: true,
      tags: ["교육", "컨설팅", "보고서"] 
    },
    { 
      name: "AI 툴 윤리", 
      desc: "다양한 AI 도구 활용 시의 도덕적 책임과 오남용 방지를 위한 가이드", 
      issues: "도구남용 / 책임소재 / 결과편향", 
      scene: "비전문적 AI 활용, 편향된 결과물 무단 배포", 
      isProblem: true,
      tags: ["교육", "인증"] 
    }
  ];

  const contentData = [
    { 
      name: "AI 교육콘텐츠윤리", 
      desc: "학생 대상 자료와 교안, 활동지 제작에 필요한 안전성과 설명 책임의 기준", 
      issues: "아동대상안전 / 저작권 / 설명책임", 
      scene: "부정확한 자료, 학부모 신뢰 저하, 교육현장 오남용", 
      isProblem: true,
      tags: ["교육", "시험", "인증"] 
    },
    { 
      name: "AI 광고윤리", 
      desc: "알고리즘 기반 타겟팅 광고의 공정성과 소비자 기만 방지", 
      issues: "소비자오인 / 다크패턴 / 데이터수집", 
      scene: "과장 광고, 사용자 취약성 이용 마케팅", 
      isProblem: true,
      tags: ["교육", "컨설팅", "보고서"] 
    },
    { 
      name: "AI 웹툰/드라마/영화윤리", 
      desc: "창작 과정에서의 AI 활용 범위와 아티스트의 권리 보호", 
      issues: "스타일도용 / 배역권리 / 창작노동", 
      scene: "배우 초상권 무단 활용, 작가 고유 스타일 학습", 
      isProblem: true,
      tags: ["교육", "보고서"] 
    },
    { 
      name: "AI K-문화윤리", 
      desc: "한국적 가치와 문화유산의 올바른 표현 및 글로벌 확산을 위한 기준", 
      issues: "문화왜곡 / 정체성 / 글로벌기준", 
      scene: "한국 문화의 잘못된 학습 및 표현 배포", 
      isProblem: true,
      tags: ["교육", "컨설팅"] 
    },
    { 
      name: "AI 저작권/초상권윤리", 
      desc: "AI 학습 데이터와 결과물의 저작권 귀속 및 권리 보호 체계", 
      issues: "데이터학습 / 권리귀속 / 무단사용", 
      scene: "저작물 무단 크롤링, AI 생성물 저작권 분쟁", 
      isProblem: true,
      tags: ["교육", "인증", "보고서"] 
    },
    { 
      name: "AI 미술/음악윤리", 
      desc: "순수 예술 분야에서의 AI 창작 활동과 인간 창의성의 조화", 
      issues: "창의성논란 / 가치평가 / 예술윤리", 
      scene: "AI 생성 예술의 공모전 출품 논란 등", 
      isProblem: true,
      tags: ["교육", "보고서"] 
    }
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case 'industry': return industryData;
      case 'professional': return professionalData;
      case 'functional': return functionalData;
      case 'content': return contentData;
      default: return industryData;
    }
  };

  return (
    <div className="flex flex-col bg-background pb-24">
      {/* Header Section */}
      <section className="bg-muted/30 py-20 border-b border-border">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">적용 분야</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            AI 윤리는 하나의 기준이지만, 산업과 콘텐츠에 따라 실제 문제와 책임의 방식은 달라집니다.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="container px-4 md:px-8 mx-auto mt-12 mb-12">
        <div className="flex justify-center">
          <div className="inline-flex bg-muted/30 p-1.5 rounded-full border border-border">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-8 py-2.5 rounded-full text-base font-bold transition-all duration-200 ${
                  activeTab === category.id
                    ? 'bg-white text-primary shadow-sm ring-1 ring-border'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <section className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {getActiveData().map((item, idx) => (
            <Card key={idx} className="h-full flex flex-col hover:shadow-md transition-shadow duration-300 border-border/60">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-primary">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col space-y-6">
                <p className="text-[0.95rem] leading-relaxed text-muted-foreground min-h-[3rem]">
                  {item.desc}
                </p>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <span className="text-[0.8rem] font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">핵심 이슈</span>
                    <span className="text-[0.95rem] font-bold text-foreground">{item.issues}</span>
                  </div>
                  
                  <div className="pt-2">
                    <span className="text-[0.8rem] font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                      {item.isProblem ? '대표 문제' : '적용 장면'}
                    </span>
                    <span className="text-[0.95rem] text-foreground leading-relaxed block">
                      {item.scene}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50 flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom Message Section */}
      <section className="container px-4 md:px-8 mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">산업별/콘텐츠별 AI 윤리는 결국 현장에 맞는 교육과 기준 설계로 이어져야 합니다</h2>
        <p className="text-muted-foreground mb-8">지금은 전체를 소개하는 단계로 시작하지만, 향후 개별 상세 요소로 확장 가능한 구조로 설계합니다.</p>
      </section>
    </div>
  );
}
