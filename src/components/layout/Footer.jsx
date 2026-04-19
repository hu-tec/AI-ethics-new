export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-primary">휴텍씨</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              AI 시대, 기술을 넘어 기준을 설계합니다.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-foreground">
              <li>교육</li>
              <li>시험</li>
              <li>인증</li>
              <li>컨설팅</li>
              <li>보고서</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm text-foreground">
              <li>제휴 문의</li>
              <li>교육 상담</li>
              <li>전문가 등록</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 휴텍씨. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
