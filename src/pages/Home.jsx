import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { ArrowRight, BookOpen, CheckCircle, Search, HelpCircle, FileText } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-muted/30 py-24 md:py-32">
        <div className="container px-4 md:px-8 mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            AI 시대, 기술을 넘어 기준을 설계합니다
          </div>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
            산업이 다르면, <span className="text-primary">필요한 AI 윤리</span>도 달라집니다.
          </h1>
          <p className="max-w-2xl mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            이제 AI 윤리는 설명이 아니라 구조가 되어야 합니다.<br />
            선택이 아니라, 기준이 되어야 합니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button className="h-12 px-8 text-base font-semibold">
                상담 문의하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="h-12 px-8 text-base font-semibold">
                휴텍씨 AI 윤리 방향 보기
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Abstract Background Design */}
        <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl blur-[120px] opacity-30 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] bg-primary rounded-full top-0 left-0 mix-blend-multiply opacity-70 animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] bg-red-400 rounded-full bottom-0 right-0 mix-blend-multiply opacity-70"></div>
        </div>
      </section>

      {/* Why AI Ethics Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <div className="flex-1 space-y-6">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                왜 지금, AI 윤리를<br />말해야 할까요?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                문서 작성, 영상 제작, 음성 생성, 이미지 활용은 물론
                기업 현장, 공공기관, 교육기관, 산업기술 분야까지
                AI는 빠르게 확장되고 있습니다. 하지만 AI 활용이 커질수록 문제도 함께 커집니다.
              </p>
              <p className="text-foreground font-medium text-lg border-l-4 border-primary pl-4 py-1">
                그래서 지금 필요한 것은 기술을 소개하는 교육이 아니라
                상황에 맞는 AI 윤리 기준을 세우고 설명할 수 있는 구조입니다.
              </p>
            </div>
            
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "AI 활용의 일상과 업무, 교육 전반 확산",
                "기술 활용만으로는 만들 수 없는 신뢰의 문제",
                "산업마다 다른 위험, 콘텐츠마다 다른 책임 방식",
                "이해를 넘어 적용과 실행의 단계로 가는 AI 윤리"
              ].map((text, i) => (
                <Card key={i} className="bg-muted/20 border-transparent hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <p className="font-medium">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI 윤리는 산업과 콘텐츠 전반을 아우릅니다</h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            휴텍씨는 AI 윤리를 분야별로 구조화하여 실질적인 기준으로 제시합니다.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="text-left overflow-hidden group hover:border-primary/30 transition-all">
              <div className="h-2 w-full bg-primary/80 group-hover:bg-primary transition-colors"></div>
              <CardHeader>
                <CardTitle className="text-2xl">산업별 AI 윤리</CardTitle>
                <p className="text-muted-foreground mt-2">
                  조선, 반도체, 에너지, 의료 등 산업은 각기 다른 현장과 데이터, 안전 기준을 갖습니다. 현장에 맞는 책임 구조를 설계합니다.
                </p>
              </CardHeader>
              <CardContent>
                <Link to="/applications">
                  <Button variant="outline" className="w-full">산업별 기준 보기</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-left overflow-hidden group hover:border-primary/30 transition-all">
              <div className="h-2 w-full bg-primary/60 group-hover:bg-primary transition-colors"></div>
              <CardHeader>
                <CardTitle className="text-2xl">콘텐츠별 AI 윤리</CardTitle>
                <p className="text-muted-foreground mt-2">
                  문서, 음성, 영상, 이미지, 광고 등 AI 결과물에 따라 위험이 다릅니다. 콘텐츠 특성에 맞는 올바른 윤리 기준을 세웁니다.
                </p>
              </CardHeader>
              <CardContent>
                <Link to="/applications">
                  <Button variant="outline" className="w-full">콘텐츠별 기준 보기</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">휴텍씨는 AI 윤리를 실행 가능한 서비스로 연결합니다</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: BookOpen, title: '교육', desc: '산업과 콘텐츠, 교육과 실무에 적용' },
              { icon: CheckCircle, title: '시험', desc: '이해도와 판단력, 적용 역량 평가' },
              { icon: FileText, title: '인증', desc: '개인 및 기관의 신뢰 가능한 기준' },
              { icon: HelpCircle, title: '컨설팅', desc: '현장에 맞는 운영 방식 설계 적용' },
              { icon: Search, title: '보고서', desc: '정책 및 산업 조사 분석 결과 제공' }
            ].map((service, idx) => (
              <Card key={idx} className="group hover:-translate-y-2 hover:shadow-lg transition-all duration-300 border border-border">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <service.icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline" className="h-12 px-8">
                서비스 전체 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-24 relative overflow-hidden bg-foreground text-background">
        <div className="container px-4 md:px-8 mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">왜 휴텍씨인가</h2>
              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                휴텍씨는 단순히 새로운 키워드를 소개하는 회사가 아닙니다. 기존 교육 운영 경험과 실제 사업 실행 경험을 바탕으로, AI 시대의 새로운 교육·인증·확장 구조를 만들고 있습니다.
              </p>
              <Link to="/about-hutec">
                <Button className="bg-primary hover:bg-primary/80 border-none text-white h-12 px-8">
                  휴텍씨 소개 보기
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "30년", text: "교육 운영 기반" },
                { number: "35만+", text: "누적 수강생 자산" },
                { number: "3만+", text: "TESOL 네트워크" },
                { number: "5만+", text: "시험 DB 자산" },
              ].map((stat, i) => (
                <div key={i} className="bg-background/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm opacity-80">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
