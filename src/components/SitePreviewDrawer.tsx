import { useState, type ReactNode } from 'react';
import { ExternalLink, X } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

type Site = {
  title: string;
  href: string;
  image?: string;
};

type Props = {
  site: Site;
  children: ReactNode;
  triggerClassName?: string;
};

export function SitePreviewDrawer({ site, children, triggerClassName }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button type="button" className={triggerClassName}>
          {children}
        </button>
      </DrawerTrigger>
      <DrawerContent className="!inset-auto !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !bottom-auto !mt-0 !mb-0 w-[92vw] max-w-3xl h-[78vh] !max-h-[85vh] bg-background border border-border/40 !rounded-xl shadow-2xl">
        <DrawerTitle className="sr-only">{site.title} preview</DrawerTitle>

        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border/30">
          <div className="flex items-center gap-2.5 min-w-0">
            {site.image && (
              <img
                src={site.image}
                alt=""
                className="h-5 w-5 shrink-0 object-contain rounded-sm"
              />
            )}
            <div className="min-w-0">
              <p className="text-[14px] font-medium text-foreground truncate">
                {site.title}
              </p>
              <p className="text-[12px] text-muted-foreground truncate">
                {site.href.replace(/^https?:\/\//, '')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <a
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in new tab"
              className="inline-flex items-center justify-center h-8 w-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
            >
              <ExternalLink className="h-[16px] w-[16px]" strokeWidth={1.8} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="inline-flex items-center justify-center h-8 w-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
            >
              <X className="h-[16px] w-[16px]" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="relative flex-1 bg-muted/20">
          <iframe
            key={site.href}
            src={site.href}
            title={`${site.title} preview`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-3">
            <p className="pointer-events-auto text-[11px] text-muted-foreground/60 bg-background/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border/30">
              If preview is blank the site blocks embedding —{' '}
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                open in new tab
              </a>
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
