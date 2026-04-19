import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export default function Applications() {
  const [activeTab, setActiveTab] = useState('industry');

  const industryData = [
    { name: "AI 조선윤리", desc: "조선 현장의 안전, 자동화, 생산성, 기술 이해에 필요한 AI 윤리 기준", issues: "현장안전 / 작업정확성 / 책임구조", scene: "조선소 교육, 직무이해, 현장설명, 산업 특강", service: "교육 / 컨설팅 / 보고서" },
    { name: "AI 반도체윤리", desc: "반도체 산업의 기술 이해, 보안, 정확한 설명에 필요한 AI 윤리 기준", issues: "기술정확성 / 산업보안 / 진로교육", scene: "산업교육, 학교 특강, 기업 기초교육", service: "교육 / 보고서 / 시험" },
    { name: "AI 에너지윤리", desc: "에너지와 환경, 지속가능성과 공공성을 함께 고려하는 AI 윤리 기준", issues: "공공책임 / 환경정보 / 지속가능성", scene: "학교, 기관, 시민강좌, 에너지 교육", service: "교육 / 컨설팅 / 보고서" },
    { name: "AI 의료윤리", desc: "건강과 보건, 민감정보와 설명 책임을 다루는 AI 윤리 기준", issues: "정확성 / 민감정보 / 오해방지", scene: "의료입문 교육, 보건특강, 건강이해 교육", service: "교육 / 인증 / 보고서" },
    { name: "AI 법률윤리", desc: "법률정보의 오해를 줄이고 책임 있는 설명을 가능하게 하는 기준", issues: "사례해석 / 책임표현 / 정확한 안내", scene: "생활법률, 기관교육, 실무특강", service: "교육 / 컨설팅 / 보고서" },
    { name: "AI 회계윤리", desc: "숫자와 실무 흐름을 쉽게 설명하되 왜곡하지 않기 위한 기준", issues: "수치해석 / 단순화위험 / 실무책임", scene: "소상공인 교육, 실무입문, 창업교육", service: "교육 / 보고서" },
    { name: "AI 특허윤리", desc: "기술과 권리, 출원과 사업화를 정확하게 설명하기 위한 기준", issues: "권리이해 / 절차정확성 / 과장방지", scene: "창업교육, 지식재산 특강, 기술사업화 교육", service: "교육 / 컨설팅 / 보고서" },
    { name: "AI 과학윤리", desc: "과학 개념을 학생 눈높이에 맞게 정확하고 안전하게 설명하기 위한 기준", issues: "과학정확성 / 탐구설계 / 학생안전", scene: "방과후 과학수업, 진로교육, 캠프", service: "교육 / 시험 / 보고서" }
  ];

  const contentData = [
    { name: "AI 문서윤리", desc: "문서, 보고서, 기획서, 안내문 작성 과정에서 필요한 신뢰와 출처의 기준", issues: "허위정보 / 표절 / 저작권", scene: "검증되지 않은 내용, 출처 불명, 자동 작성 남용", service: "교육 / 시험 / 보고서" },
    { name: "AI 음성윤리", desc: "음성 생성과 복제, 안내 음성 활용 시 필요한 동의와 책임의 기준", issues: "동의 / 사칭 / 도용", scene: "음성 클로닝, 신원 오인, 보이스피싱", service: "교육 / 컨설팅 / 보고서" },
    { name: "AI 영상윤리", desc: "합성영상과 딥페이크 시대에 필요한 초상권과 조작 방지 기준", issues: "딥페이크 / 초상권 / 표시책임", scene: "얼굴 합성, 가짜 영상, 신뢰 훼손", service: "교육 / 인증 / 컨설팅" },
    { name: "AI 이미지윤리", desc: "생성 이미지와 시각 자료 활용에 필요한 작가 권리와 출처의 기준", issues: "스타일모방 / 출처 / 창작권", scene: "작가풍 모방, 이미지 재가공, 상업적 사용 책임", service: "교육 / 보고서" },
    { name: "AI 광고·홍보윤리", desc: "광고문구와 홍보물에서 과장과 오인을 막기 위한 AI 윤리 기준", issues: "허위표현 / 소비자오인 / 책임광고", scene: "과장 홍보, 자동 생성 광고문구, 신뢰 저하", service: "교육 / 컨설팅 / 보고서" },
    { name: "AI 교육콘텐츠윤리", desc: "학생 대상 자료와 교안, 활동지 제작에 필요한 안전성과 설명 책임의 기준", issues: "아동대상안전 / 저작권 / 설명책임", scene: "부정확한 자료, 학부모 신뢰 저하, 교육현장 오남용", service: "교육 / 시험 / 인증" }
  ];

  return (
    <div className="flex flex-col bg-background pb-24">
      <section className="bg-muted/30 py-20 border-b border-border">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">적용 분야</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            AI 윤리는 하나의 기준이지만, 산업과 콘텐츠에 따라 실제 문제와 책임의 방식은 달라집니다.
          </p>
        </div>
      </section>

      <div className="container px-4 md:px-8 mx-auto mt-12 mb-8">
        <div className="flex justify-center border-b border-border">
          <button 
            className={`px-8 py-4 font-bold text-lg border-b-2 transition-colors ${activeTab === 'industry' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            onClick={() => setActiveTab('industry')}
          >
            산업별 AI 윤리
          </button>
          <button 
            className={`px-8 py-4 font-bold text-lg border-b-2 transition-colors ${activeTab === 'content' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            onClick={() => setActiveTab('content')}
          >
            콘텐츠별 AI 윤리
          </button>
        </div>
      </div>

      {activeTab === 'industry' && (
        <section className="container px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {industryData.map((item, idx) => (
              <Card key={idx} className="h-full hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-medium text-sm border-b border-border pb-2">{item.desc}</p>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">핵심 이슈</span>
                    <span className="text-sm font-semibold text-foreground">{item.issues}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">적용 장면</span>
                    <span className="text-sm text-foreground">{item.scene}</span>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded font-medium">{item.service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/20 border border-border rounded-xl overflow-hidden">
            <div className="p-6 bg-primary/5 border-b border-border">
              <h3 className="text-xl font-bold text-primary">산업별 AI 윤리, 무엇이 다를까요?</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground font-medium border-b border-border">
                  <tr>
                    <th className="px-6 py-4">산업</th>
                    <th className="px-6 py-4">AI 활용 장면</th>
                    <th className="px-6 py-4">가장 중요한 위험</th>
                    <th className="px-6 py-4">우선 서비스</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/10"><td className="px-6 py-4 font-medium">조선</td><td className="px-6 py-4">현장·기술·산업교육</td><td className="px-6 py-4">안전과 책임</td><td className="px-6 py-4">교육 / 컨설팅</td></tr>
                  <tr className="hover:bg-muted/10"><td className="px-6 py-4 font-medium">반도체</td><td className="px-6 py-4">기술설명·진로·산업이해</td><td className="px-6 py-4">보안과 정확성</td><td className="px-6 py-4">교육 / 시험</td></tr>
                  <tr className="hover:bg-muted/10"><td className="px-6 py-4 font-medium">에너지</td><td className="px-6 py-4">환경·공공·시민교육</td><td className="px-6 py-4">공공성과 신뢰</td><td className="px-6 py-4">교육 / 보고서</td></tr>
                  <tr className="hover:bg-muted/10"><td className="px-6 py-4 font-medium">의료</td><td className="px-6 py-4">건강·보건·직무이해</td><td className="px-6 py-4">민감정보와 오해</td><td className="px-6 py-4">교육 / 인증</td></tr>
                  <tr className="hover:bg-muted/10"><td className="px-6 py-4 font-medium">법률</td><td className="px-6 py-4">사례설명·생활법률</td><td className="px-6 py-4">오해와 책임</td><td className="px-6 py-4">교육 / 컨설팅</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'content' && (
        <section className="container px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contentData.map((item, idx) => (
              <Card key={idx} className="h-full hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-medium text-sm border-b border-border pb-2">{item.desc}</p>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">핵심 이슈</span>
                    <span className="text-sm font-semibold text-foreground">{item.issues}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">대표 문제</span>
                    <span className="text-sm text-foreground hover:text-destructive transition-colors">{item.scene}</span>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded font-medium">{item.service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/20 border border-border rounded-xl overflow-hidden">
            <div className="p-6 bg-primary/5 border-b border-border">
              <h3 className="text-xl font-bold text-primary">콘텐츠별 AI 윤리, 무엇을 먼저 봐야 할까요?</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground font-medium border-b border-border">
                  <tr>
                    <th className="px-6 py-4">콘텐츠</th>
                    <th className="px-6 py-4">대표 활용</th>
                    <th className="px-6 py-4">가장 중요한 문제</th>
                    <th className="px-6 py-4">우선 서비스</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/10"><td className="px-6 py-4 font-medium">문서</td><td className="px-6 py-4">보고서·기획서·설명자료</td><td className="px-6 py-4 text-destructive">허위정보 / 표절</td><td className="px-6 py-4">교육 / 시험</td></tr>
                  <tr className="hover:bg-muted/10"><td className="px-6 py-4 font-medium">음성</td><td className="px-6 py-4">나레이션·안내음성·클로닝</td><td className="px-6 py-4 text-destructive">동의 / 사칭</td><td className="px-6 py-4">교육 / 컨설팅</td></tr>
                  <tr className="hover:bg-muted/10"><td className="px-6 py-4 font-medium">영상</td><td className="px-6 py-4">딥페이크·숏폼·홍보영상</td><td className="px-6 py-4 text-destructive">초상권 / 조작</td><td className="px-6 py-4">교육 / 인증</td></tr>
                  <tr className="hover:bg-muted/10"><td className="px-6 py-4 font-medium">이미지</td><td className="px-6 py-4">포스터·카드뉴스·시각자료</td><td className="px-6 py-4 text-destructive">작가권리 / 출처</td><td className="px-6 py-4">교육 / 보고서</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="container px-4 md:px-8 mx-auto mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">산업별/콘텐츠별 AI 윤리는 결국 현장에 맞는 교육과 기준 설계로 이어져야 합니다</h2>
        <p className="text-muted-foreground mb-8">지금은 전체를 소개하는 단계로 시작하지만, 향후 개별 상세 요소로 확장 가능한 구조로 설계합니다.</p>
      </section>
    </div>
  );
}
