export function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="border-t border-border/20">
        <div className="max-w-2xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[14px] text-muted-foreground/60">
              &copy; {year} Sabuj Ghosh
            </p>
            <p className="text-[14px] text-muted-foreground/60 italic">
              P.S. I don't write blogs — I{' '}
              <a
                href="https://x.com/sabujghosh21"
                target="_blank"
                rel="noopener noreferrer"
                className="not-italic underline decoration-border underline-offset-[4px] hover:text-muted-foreground transition-colors duration-200"
              >
                tweet
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    );
  }
  