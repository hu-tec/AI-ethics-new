import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#171626] text-[#A1A1AA] py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#564CF2] text-white text-xs font-bold px-1.5 py-0.5 rounded">HT</div>
              <h3 className="text-xl font-bold text-white">휴텍씨</h3>
            </div>
            <p className="text-[15px] leading-relaxed break-keep">
              외국어 교육과 번역 분야의 리딩 그룹으로, 인공지능 기술을 융합한 혁신적인 서비스를 제공합니다.
            </p>
          </div>

          {/* Column 2: Business Areas */}
          <div>
            <h4 className="font-bold text-white mb-6 text-[15px]">사업 영역</h4>
            <ul className="space-y-4 text-[14px]">
              <li><a href="#" className="hover:text-white transition-colors">AITe 시험</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ITT 시험</a></li>
              <li><a href="#" className="hover:text-white transition-colors">메타트랜스</a></li>
              <li><a href="#" className="hover:text-white transition-colors">통독 서비스</a></li>
              <li><a href="#" className="hover:text-white transition-colors">프롬프트 전문가</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-[15px]">바로가기</h4>
            <ul className="space-y-4 text-[14px]">
              <li><a href="#" className="hover:text-white transition-colors">그룹 소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI 신사업</a></li>
              <li><a href="#" className="hover:text-white transition-colors">30년 정통사업</a></li>
              <li><a href="#" className="hover:text-white transition-colors">사회 공헌</a></li>
              <li><a href="#" className="hover:text-white transition-colors">파트너십 및 인증</a></li>
              <li><a href="#" className="hover:text-white transition-colors">언론 보도</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-[15px]">연락처</h4>
            <ul className="space-y-4 text-[14px]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#564CF2] shrink-0" />
                <span className="leading-snug">서울 서초구 양재천로 19길 26, 6층 (양재동)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#564CF2] shrink-0" />
                <span>02-6207-9090</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#564CF2] shrink-0" />
                <span>hutetchc02@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-[13px]">
          <div className="space-y-1.5">
            <p>상호명: 주식회사 휴텍씨</p>
            <p>대표이사: 박미진</p>
            <p className="pt-4 text-[#71717A]">
              &copy; 2026 HuTechC. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
