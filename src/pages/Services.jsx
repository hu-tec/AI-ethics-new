import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

export default function Services() {
  const services = [
    {
      title: "AI 윤리 교육",
      subtitle: "AI 윤리를 이해하고, 설명하고, 적용할 수 있도록 돕는 실전형 교육 서비스",
      desc: "AI 윤리 교육은 단순 개념 강의가 아니라 산업과 콘텐츠, 교육과 실무에 맞는 사례를 바탕으로 실제 적용 가능한 기준을 익히는 과정입니다.",
      points: ["산업별 교육: 조선, 반도체, 에너지, 의료 등", "콘텐츠별 교육: 문서, 음성, 영상, 이미지 등", "대상별 교육: 기업, 기관, 공공, 교사, 강사, 학부모 등"]
    },
    {
      title: "AI 윤리 시험",
      subtitle: "AI 윤리에 대한 이해도와 판단 역량을 평가하는 구조화된 시험 서비스",
      desc: "시험은 단순히 윤리 개념을 아는지 묻는 것이 아니라 실제 상황에서 어떤 기준으로 판단하고 설명할 수 있는지를 평가하는 방향으로 설계됩니다.",
      points: ["공통 AI 윤리 시험", "산업별 특화 시험", "콘텐츠별 특화 시험", "교육 연계형 평가 구조"]
    },
    {
      title: "AI 윤리 인증",
      subtitle: "개인과 기관, 프로그램이 신뢰 가능한 AI 윤리 기준을 갖추도록 연결하는 인증 서비스",
      desc: "인증은 공신력과 신뢰의 구조입니다. 휴텍씨는 교육과 시험을 바탕으로 개인, 기관, 프로그램 단위의 인증 체계를 연결할 수 있도록 설계합니다.",
      points: ["개인 인증", "기관 인증", "프로그램 인증", "교육과정 인증"]
    },
    {
      title: "AI 윤리 컨설팅",
      subtitle: "현장에 맞는 AI 윤리 기준과 적용 구조를 설계하는 맞춤형 컨설팅 서비스",
      desc: "컨설팅은 단순 자문이 아니라 현재 상황을 진단하고, 필요한 기준을 정리하고, 교육과 운영 구조에 반영하는 과정입니다.",
      points: ["학교·기관 대상 교육 운영 기준 정리", "기업 내 AI 활용 설명 기준 정리", "산업별 맞춤형 윤리 가이드 설계", "콘텐츠 제작 운영 기준 자문"]
    },
    {
      title: "AI 윤리 보고서",
      subtitle: "시장, 산업, 정책, 사례를 정리해 의사결정에 활용할 수 있도록 돕는 분석형 보고서 서비스",
      desc: "휴텍씨는 AI 윤리를 둘러싼 산업별 흐름, 콘텐츠별 이슈, 정책 변화, 교육 수요를 정리해 기관과 기업, 협회, 교육현장에서 활용 가능한 보고서 형태로 제공합니다.",
      points: ["산업별 AI 윤리 시장조사", "콘텐츠별 AI 윤리 분석", "정책 브리핑 보고서", "기관 맞춤형 진단 보고서"]
    }
  ];

  return (
    <div className="flex flex-col bg-background pb-24">
      <section className="bg-muted/30 py-20 border-b border-border">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">서비스</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            휴텍씨는 AI 윤리를 개념 소개에 머무르게 하지 않고 교육, 시험, 인증, 컨설팅, 보고서로 연결해 실행 가능한 서비스 구조로 제공합니다.
          </p>
        </div>
      </section>

      <section className="pt-24">
        <div className="container px-4 md:px-8 mx-auto max-w-5xl space-y-12">
          {services.map((service, idx) => (
            <Card key={idx} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="bg-primary/5 p-8 md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border">
                  <h2 className="text-2xl font-bold text-primary mb-3">{service.title}</h2>
                  <p className="text-sm font-medium text-foreground leading-relaxed">{service.subtitle}</p>
                </div>
                <div className="p-8 md:w-2/3">
                  <p className="text-foreground leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
