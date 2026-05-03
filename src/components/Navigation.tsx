import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-border/20">
      <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-[15px] font-semibold tracking-tight text-foreground hover:opacity-60 transition-opacity duration-200"
        >
          sabuj.
        </a>
        <div className="flex items-center gap-0.5">
          <a
            href="mailto:sabrexghosh@gmail.com"
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            aria-label="Email"
          >
            <FaEnvelope className="h-[16px] w-[16px]" />
          </a>
          <a
            href="https://x.com/sabujghosh21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            aria-label="X"
          >
            <FaXTwitter className="h-[16px] w-[16px]" />
          </a>
          <a
            href="https://github.com/Night3y3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="h-[16px] w-[16px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/sabujghosh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-[16px] w-[16px]" />
          </a>
        </div>
      </div>
    </nav>
  );
}
