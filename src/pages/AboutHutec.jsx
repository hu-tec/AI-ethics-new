import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function AboutHutec() {
  return (
    <div className="flex flex-col bg-background">
      <section className="bg-muted/30 py-20 border-b border-border">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">휴텍씨 소개</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            휴텍씨는 교육, 시험, 데이터, 번역, 플랫폼, 글로벌 네트워크를 연결하는 AI 기반 확장형 기업입니다.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8 border-l-4 border-primary pl-4">휴텍씨의 방향</h2>
          <p className="text-lg text-foreground leading-relaxed">
            휴텍씨는 단순한 교육회사가 아닙니다. 기존 교육 운영 기반 위에 AI 교육, 시험, 윤리, 데이터, 번역, 플랫폼, 글로벌 확장을 연결하는 구조를 가지고 있습니다.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8 border-l-4 border-primary pl-4">왜 휴텍씨인가</h2>
          <p className="text-lg text-foreground leading-relaxed mb-12">
            휴텍씨는 AI 윤리를 단순 교양 개념이 아니라 실제 교육과 시험, 인증과 기관 협력으로 이어질 수 있는 구조로 봅니다. 이는 오랜 교육 운영 경험과 네트워크, 실제 사업 확장 경험이 있기 때문에 가능합니다.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['30년 교육 운영 기반', '35만+ 누적 수강생 자산', '3만+ TESOL 네트워크', '5만+ 시험 DB 자산', '대학 및 기관 협업 경험', 'AI 특허 및 데이터 구축 경험'].map((item, idx) => (
              <div key={idx} className="bg-background p-6 rounded-xl border border-border shadow-sm flex flex-col justify-center text-center h-full">
                <span className="font-bold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8 border-l-4 border-primary pl-4">확장 및 협업 구조</h2>
          <p className="text-lg text-foreground mb-10 leading-relaxed">
            휴텍씨의 AI 윤리 사업은 교육, 시험, 인증, 컨설팅, 보고서, 기관 협력, 플랫폼화, 글로벌 확장 등 다양한 구조로 확장됩니다.<br />
            대학, 기관, 협회, 기업, 교육 네트워크와의 협력을 통해 AI 윤리를 교육과 사업, 실무와 정책이 연결되는 구조로 확장합니다.
          </p>
          <div className="flex justify-center mt-12">
            <Link to="/contact">
              <Button className="h-12 px-10 text-lg">휴텍씨와 협업 논의하기</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
