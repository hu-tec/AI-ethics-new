import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function AboutEthics() {
  return (
    <div className="flex flex-col bg-background">
      {/* Header Section */}
      <section className="bg-muted/30 py-20 border-b border-border">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">AI 윤리 소개</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            AI 윤리는 기술을 제한하기 위한 개념이 아니라,<br className="hidden md:block" />
            기술을 더 안전하고 책임 있게 활용하기 위한 기준입니다.
          </p>
        </div>
      </section>

      {/* Section 1: AI 윤리란 무엇인가 */}
      <section className="py-24">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8 border-l-4 border-primary pl-4">AI 윤리란 무엇인가</h2>
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            AI 윤리는 AI를 사용하는 모든 과정에서 사람, 사회, 조직, 산업, 콘텐츠에 미치는 영향을 고려하는 기준입니다. 이 기준에는 다음과 같은 요소가 포함됩니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['투명성', '공정성', '책임성', '안전성', '개인정보 보호', '저작권과 출처', '신뢰 가능한 활용'].map((item, idx) => (
              <div key={idx} className="bg-muted/50 p-4 rounded-xl border border-border text-center font-medium text-foreground hover:border-primary/30 transition-colors">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: 왜 필요한가 */}
      <section className="py-24 bg-muted/20">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8 border-l-4 border-primary pl-4">왜 필요한가</h2>
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            AI는 이제 교육, 업무, 산업, 콘텐츠 제작 전반에 활용되고 있습니다. 하지만 기술의 확산 속도만큼 활용 기준과 책임 구조는 충분히 정리되지 않은 경우가 많습니다.
          </p>
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
            <p className="text-xl font-bold text-foreground text-center">
              따라서 지금 필요한 것은<br className="md:hidden" />
              <span className="text-primary">AI를 잘 쓰는 방법</span>만이 아니라<br className="md:hidden" />
              <span className="text-primary">AI를 바르게 쓰는 기준</span>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Ethics에서 Compliance로 */}
      <section className="py-24">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8 border-l-4 border-primary pl-4">Ethics에서 Compliance로</h2>
          <p className="text-lg text-foreground mb-10 leading-relaxed">
            이제 AI 윤리는 "좋은 마음으로 잘 써야 한다"는 권고 수준을 넘어제 현장에서 설명 가능하고, 점검 가능하고, 적용 가능한 기준으로 옮겨가고 있습니다. 휴텍씨는 이 흐름을 바탕으로 AI 윤리를 다음과 같이 연결합니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <ul className="space-y-4">
              {['이해하는 윤리', '설명하는 윤리', '적용하는 윤리'].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-lg font-medium text-foreground bg-background p-4 rounded-xl shadow-sm border border-border">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">{idx + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {['점검 가능한 윤리', '신뢰를 만드는 윤리'].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-lg font-medium text-foreground bg-background p-4 rounded-xl shadow-sm border border-border">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">{idx + 4}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: 휴텍씨의 방향 */}
      <section className="py-24 bg-foreground text-background">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl text-center">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold mb-8">휴텍씨의 방향</h2>
          <p className="text-lg opacity-90 leading-relaxed mb-12">
            휴텍씨는 AI 윤리를 하나의 이론으로 보지 않습니다.<br />
            산업과 콘텐츠, 교육과 실무, 기관과 개인에 맞게<br />
            각기 다른 방식으로 구조화되어야 하는 기준으로 봅니다.
          </p>
          <p className="text-xl font-bold text-primary mb-10">
            AI 윤리를 적용 분야와 서비스로 나누어 누구나 이해하고, 필요에 따라 연결할 수 있도록 설계합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/applications">
              <Button className="h-12 px-8 w-full sm:w-auto">적용 분야 알아보기</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="h-12 px-8 w-full sm:w-auto text-foreground">제공 서비스 보기</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
