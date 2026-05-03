import { GitBranchIcon, XIcon } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0,0%,4%,0.7)] backdrop-blur-xl border-b border-border/30">
      <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-[15px] font-semibold tracking-tight text-foreground hover:opacity-60 transition-opacity duration-200"
        >
          sabuj.
        </a>
        <div className="flex items-center gap-0.5">
          <a
            href="https://x.com/sabujghosh21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            aria-label="X"
          >
                <XIcon className="h-[18px] w-[18px]" strokeWidth={1.8} />
          </a>
          <a
            href="https://github.com/Night3y3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            aria-label="GitHub"
          >
            <GitBranchIcon className="h-[18px] w-[18px]" strokeWidth={1.8} />
          </a>
          <a
            href="https://www.linkedin.com/in/sabujghosh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            aria-label="LinkedIn"
          >
            <GitBranchIcon className="h-[18px] w-[18px]" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </nav>
  );
}
