import { ArrowUpRight } from 'lucide-react';
import { SitePreviewDrawer } from './SitePreviewDrawer';

export type WorkItem = {
  title: string;
  description: string;
  href: string;
  image: string;
};

type Props = {
  items: WorkItem[];
};

export function WorkList({ items }: Props) {
  return (
    <div className="grid gap-2">
      {items.map((item) => (
        <SitePreviewDrawer
          key={item.title}
          site={item}
          triggerClassName="group block w-full rounded-lg p-3 -mx-3 text-left transition-colors duration-200 hover:bg-secondary/30"
        >
          <div className="flex items-center gap-3">
            <img
              src={item.image}
              alt=""
              loading="lazy"
              className="shrink-0 h-7 w-7 object-contain rounded"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-[15px] font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-0.5 text-[14px] text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/0 group-hover:text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </SitePreviewDrawer>
      ))}
    </div>
  );
}
