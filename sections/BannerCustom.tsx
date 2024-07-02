import type { ImageWidget } from "apps/admin/widgets.ts";
import { BannerHo } from "site/components/ui/BannerHo/index.tsx";
import BannerVert from "site/components/ui/BannerVert/index.tsx";

export interface Section {
  title?: string;
  link?: string;
}

export interface Banner {
  title?: string;
  image?: ImageWidget;
  url?: string;
  brand?: string;
}

export interface Banners {
  banner: Banner[];
  format?: "BannerHo" | "BannerVert";
}

export interface Props {
  section: Section;
  banners: Banners;
}

export default function BannerCustom({ section, banners }: Props) {
  const bannersFormat = (
    format: string | undefined,
    banners: Array<Banner>
  ) => {
    switch (format) {
      case "BannerHo":
        return <BannerHo banner={banners} />;
      case "BannerVert":
        return <BannerVert banner={banners} />;
      default:
        return <BannerHo banner={banners} />;
    }
  };
  return (
    <div class="w-full flex justify-center px-[20px] py-[40px]">
      <div class="w-full max-w-[1400px] flex flex-col gap-[30px]">
        <div class="w-full flex justify-between items-end">
          <p class="text-black text-4xl font-bold">{section.title}</p>
          <a class="text-black text-base" href={section.link}>
            View All
          </a>
        </div>
        <div class="w-full">
          {bannersFormat(banners.format, banners.banner)}
        </div>
      </div>
    </div>
  );
}
