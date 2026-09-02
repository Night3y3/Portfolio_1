import { SitePreviewDrawer } from './SitePreviewDrawer';

type Props = {
  title: string;
  href: string;
  image: string;
};

export function EmployerLink({ title, href, image }: Props) {
  return (
    <SitePreviewDrawer
      site={{ title, href, image }}
      triggerClassName="inline-flex items-center gap-1.5 align-baseline text-foreground underline decoration-border underline-offset-[5px] hover:decoration-foreground/60 transition-colors duration-200 cursor-pointer"
    >
      <img
        src={image}
        alt=""
        className="inline-block h-5 w-5 rounded-sm object-contain align-[-3px]"
      />
      {title}
    </SitePreviewDrawer>
  );
}
