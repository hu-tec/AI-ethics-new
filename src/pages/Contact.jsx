import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container px-4 md:px-8 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h1 className="text-4xl font-bold mb-4">문의하기</h1>
          <p className="text-lg text-muted-foreground">
            AI 윤리 교육, 산업별 협력, 콘텐츠별 기준 설계, 시험·인증, 기관 제휴까지<br />
            휴텍씨와 함께 논의해보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">주요 문의 유형</h3>
              <ul className="space-y-3">
                {['교육 문의', '시험 문의', '인증 문의', '컨설팅 문의', '보고서 문의', '기업·기관 제휴 문의', '전문가 참여 문의'].map((type, i) => (
                  <li key={i} className="flex items-center space-x-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full block"></span>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-2xl border border-border text-center">
              <h4 className="font-bold text-primary mb-2">AI 윤리, 지금부터 구조를 만들어야 합니다</h4>
              <p className="text-sm text-muted-foreground mb-6">
                산업에 맞게, 콘텐츠에 맞게, 기관에 맞게<br />휴텍씨와 함께 시작해보세요.
              </p>
              <Button className="w-full h-12">전화 상담 (02-1234-5678)</Button>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">이름 *</label>
                <input type="text" className="w-full h-12 px-4 rounded-md border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="홍길동" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">연락처 *</label>
                <input type="tel" className="w-full h-12 px-4 rounded-md border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="010-0000-0000" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">이메일 *</label>
              <input type="email" className="w-full h-12 px-4 rounded-md border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="example@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">문의 유형 *</label>
              <select className="w-full h-12 px-4 rounded-md border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>교육 문의</option>
                <option>시험/인증 문의</option>
                <option>기관 제휴 문의</option>
                <option>기타</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">문의 내용 *</label>
              <textarea className="w-full p-4 rounded-md border border-border bg-input focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[150px]" placeholder="문의하실 내용을 상세히 적어주세요."></textarea>
            </div>
            <Button className="w-full h-14 text-base font-bold mt-4" type="button">문의 접수하기</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
