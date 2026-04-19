import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export default function MarketResearch() {
  return (
    <div className="flex flex-col bg-background pb-20">
      <section className="bg-foreground text-background py-20 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-[2] translate-y-1/2"></div>
        <div className="container mx-auto relative z-10">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            산업이 다르면 필요한 <span className="text-primary">AI 윤리</span>도 다르고,<br />
            콘텐츠가 달라지면 <span className="text-primary">책임</span>도 달라집니다.
          </h1>
          <p className="text-lg opacity-80 mt-4 max-w-2xl mx-auto">
            이제 AI 윤리는 설명이 아니라 구조가 되어야 하며, 선택이 아니라 기준이 되어야 합니다.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="flex items-center space-x-3 mb-8 border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-foreground">AI 윤리는 분야마다 문제도, 책임도 다르게 나타납니다</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-border">
            <CardHeader className="bg-muted/30 border-b border-border">
              <CardTitle className="text-xl">산업별 핵심 이슈</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                <li className="p-6 hover:bg-muted/20 transition-colors">
                  <h4 className="font-bold text-primary mb-2">채용 / 업무 AI</h4>
                  <p className="text-sm text-muted-foreground mb-2">OECD와 KISDI 자료 모두 AI가 채용·업무 영역에서 편향, 책임 위험을 낳을 수 있다고 판단.</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">공정성과 설명 책임</span>
                </li>
                <li className="p-6 hover:bg-muted/20 transition-colors">
                  <h4 className="font-bold text-primary mb-2">의료 / 고위험 분야</h4>
                  <p className="text-sm text-muted-foreground mb-2">EU AI Act는 고위험 AI를 별도로 다루고, 안전에 큰 영향을 줄 수 있는 시스템에 강한 요구 부여.</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">생명·안전의 엄격한 기준</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="bg-muted/30 border-b border-border">
              <CardTitle className="text-xl">콘텐츠별 핵심 이슈</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                <li className="p-6 hover:bg-muted/20 transition-colors">
                  <h4 className="font-bold text-primary mb-2">딥페이크 / 합성 콘텐츠</h4>
                  <p className="text-sm text-muted-foreground mb-2">인공적으로 생성되거나 조작된 콘텐츠에 대한 표시 의무 및 신뢰 저하 문제 제기.</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">표시와 신뢰의 핵심</span>
                </li>
                <li className="p-6 hover:bg-muted/20 transition-colors">
                  <h4 className="font-bold text-primary mb-2">문서 작성 AI</h4>
                  <p className="text-sm text-muted-foreground mb-2">KISDI 자율점검표는 Writing AI를 정확성, 명확성 평가 단위로 구분.</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">허위정보 및 출처</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-foreground mb-4">국가별 AI 윤리 현황</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-2">
              전 세계는 공통된 원칙 아래 각기 다른 전략적 목표를 가지고 AI 윤리와 규제에 접근하고 있습니다. 글로벌 시장 진출을 위해 반드시 알아야 할 국가별 정책을 확인하세요.
             </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6 border-b border-border pb-4">
              <span>🌐</span> 국제기구 기준 윤리 프레임워크
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardHeader className="bg-muted/30 border-b border-border">
                  <CardTitle className="text-xl">OECD | OECD AI Principles (2019)</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">투명성, 책임성, 인간 중심성 등 5대 원칙 제시. 글로벌 AI 윤리의 표준적 지침</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader className="bg-muted/30 border-b border-border">
                  <CardTitle className="text-xl">UNESCO | UNESCO Recommendation (2021)</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">세계 최초 글로벌 표준. 194개 회원국 대상으로 인권 보호 및 지속가능성 강조</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader className="bg-muted/30 border-b border-border">
                  <CardTitle className="text-xl">EU | EU Trustworthy AI Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">7대 핵심 요구사항 정의. 위험 기반의 실제 법제화(EU AI Act)의 기초가 됨</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6 border-b border-border pb-4">
              <span>🚩</span> 주요 국가별 접근 방식
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border">
                <CardHeader className="bg-muted/30 border-b border-border">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-primary font-bold text-xl">1. EU (유럽연합)</span>
                    <span className="bg-destructive/10 text-destructive text-xs font-bold px-2 py-1 rounded">규제 중심</span>
                  </div>
                  <p className="text-sm text-foreground mt-2 leading-relaxed">세계에서 가장 강력한 규제 모델. AI Act를 통해 위험 등급별로 법적 강제성 부여</p>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-2">대표 정책 및 사례:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>금지 AI (사회적 점수)</li>
                    <li>고위험 AI (채용, 의료)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader className="bg-muted/30 border-b border-border">
                  <div className="flex justify-between items-start mb-2">
                     <span className="text-primary font-bold text-xl">2. USA (미국)</span>
                     <span className="bg-blue-500/10 text-blue-600 text-xs font-bold px-2 py-1 rounded">혁신 중심</span>
                  </div>
                  <p className="text-sm text-foreground mt-2 leading-relaxed">규제보다 기업 자율과 기술 발전을 우선시하는 전략. NIST AI 위험 관리 프레임워크 기반</p>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-2">대표 정책 및 사례:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>AI Bill of Rights</li>
                    <li>시장 중심 자율 규제</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader className="bg-muted/30 border-b border-border">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-primary font-bold text-xl">3. China (중국)</span>
                    <span className="bg-amber-500/10 text-amber-700 text-xs font-bold px-2 py-1 rounded">국가 통제</span>
                  </div>
                  <p className="text-sm text-foreground mt-2 leading-relaxed">정치 안정과 정보 통제, 사회 질서 유지를 최우선 가치로 하는 국가 주도형 모델</p>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-2">대표 정책 및 사례:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>알고리즘 규제</li>
                    <li>합성 콘텐츠 규제</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader className="bg-muted/30 border-b border-border">
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-primary font-bold text-xl">4. South Korea (한국)</span>
                     <span className="bg-emerald-500/10 text-emerald-600 text-xs font-bold px-2 py-1 rounded">성장/조화</span>
                   </div>
                   <p className="text-sm text-foreground mt-2 leading-relaxed">산업 경쟁력 확보와 국민 신뢰 확보 사이의 균형 추구. AI 기본법 추진 및 가이드라인 확산</p>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-2">대표 정책 및 사례:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>AI 윤리 기준</li>
                    <li>분야별 가이드라인</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
             <h3 className="text-2xl font-bold text-foreground mb-6">해외 vs 한국 비교 및 주요 사례</h3>
             <div className="overflow-x-auto bg-background rounded-xl border border-border shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/50 text-foreground border-b border-border">
                  <tr>
                    <th className="px-6 py-4 font-bold border-r border-border">해외 구분</th>
                    <th className="px-6 py-4 font-bold border-r border-border min-w-[200px]">대표 사례</th>
                    <th className="px-6 py-4 font-bold border-r border-border min-w-[300px]">핵심 내용</th>
                    <th className="px-6 py-4 font-bold min-w-[200px]">홈페이지 해석</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 font-bold whitespace-nowrap border-r border-border">OECD</td>
                    <td className="px-6 py-4 border-r border-border">OECD AI Principles</td>
                    <td className="px-6 py-4 text-muted-foreground leading-relaxed border-r border-border">혁신과 신뢰를 동시에 추구하는 최초의 정부 간 AI 원칙으로, 인권과 민주적 가치, 신뢰 가능한 AI를 강조함.</td>
                    <td className="px-6 py-4 text-primary font-bold whitespace-normal">글로벌 공통 기준의 출발점</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 font-bold whitespace-nowrap border-r border-border">UNESCO</td>
                    <td className="px-6 py-4 border-r border-border">AI Ethics Recommendation</td>
                    <td className="px-6 py-4 text-muted-foreground leading-relaxed border-r border-border">인간의 존엄과 인권을 중심에 두고, 투명성·공정성·인간 감독을 강조하는 글로벌 윤리 기준을 제시함.</td>
                    <td className="px-6 py-4 text-primary font-bold whitespace-normal">“사람 중심 AI”의 국제 표준</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 font-bold whitespace-nowrap border-r border-border">EU</td>
                    <td className="px-6 py-4 border-r border-border">AI Act</td>
                    <td className="px-6 py-4 text-muted-foreground leading-relaxed border-r border-border">금지 AI, 고위험 AI, 투명성 의무 등 위험기반 규제를 도입했고, 챗봇·딥페이크 등에는 사용자 고지와 표시 의무를 요구함.</td>
                    <td className="px-6 py-4 text-primary font-bold whitespace-normal">윤리에서 법·제도로 넘어간 대표 사례</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 font-bold whitespace-nowrap border-r border-border">미국/NIST</td>
                    <td className="px-6 py-4 border-r border-border">AI RMF + 생성형 AI 프로필</td>
                    <td className="px-6 py-4 text-muted-foreground leading-relaxed border-r border-border">NIST는 AI RMF와 2024년 생성형 AI 프로필을 통해 기업이 자율적으로 위험을 식별·관리하도록 지원함.</td>
                    <td className="px-6 py-4 text-primary font-bold whitespace-normal">기업 실무형 AI 리스크 관리 기준</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">한국도 이제 AI 윤리를 정책과 적용 단계로</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI 기본법 시행", desc: "한국의 인공지능 기본법은 국회 통과 후 2026년 시행되어 법·제도적 기반 마련" },
              { title: "지원데스크 운영", desc: "정부는 복합 사안에 대한 지원데스크를 운영하여 실무 대응 수요를 소화" },
              { title: "자율점검표 운영", desc: "분야특화 자율점검표를 제공하여 한국형 AI 윤리 적용 및 가이드 존재" },
              { title: "윤리영향평가 기반", desc: "학생, 일반인, 개발자 대상의 체계적인 가이드북과 윤리 교육 동반 진행" }
            ].map((item, idx) => (
              <Card key={idx} className="bg-background border-border shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-primary mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-background rounded-2xl p-8 border border-primary/20 shadow-sm text-center max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">시사점 및 휴텍씨의 방향</h3>
            <p className="text-muted-foreground leading-relaxed">
              글로벌 규제와 한국의 대응 모두 "특정 기술"에서 "분야별 리스크 관리"로 이동하고 있습니다. 휴텍씨는 이러한 흐름을 선제적으로 반영하여 공통 교육 이상의 산업별, 콘텐츠 맞춤형 기준을 설계하는 유일한 기관으로 자리매김합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
