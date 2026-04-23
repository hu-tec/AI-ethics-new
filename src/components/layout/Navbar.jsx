import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'AI 윤리 소개', path: '/about' },
    { name: '적용 분야', path: '/applications' },
    { name: '서비스', path: '/services' },
    { name: '시장조사', path: '/market-research' },
    { name: '문의하기', path: '/contact' },
    { name: '그룹소개', path: 'https://hutechc.com/', external: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">휴텍씨 AI 윤리</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-primary text-foreground"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
