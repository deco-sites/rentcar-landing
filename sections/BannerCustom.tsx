import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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
  return (
    <div class="w-full flex justify-center p-[20px]">
      <div class="w-full max-w-[1400px] flex flex-col gap-[30px]">
        <div class="w-full flex justify-between item-center">
          <p class="text-black">{section.title}</p>
          <a class="text-black" href={section.link}>
            View All
          </a>
        </div>
        <div class="w-full">
          {banners.format === "BannerHo" ? (
            <div class="w-full flex item-center justify-between gap-[25px]">
              {banners.banner.map((item) => (
                <div class="w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    class="w-full"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div class="w-full flex flex-col item-center gap-[25px]">
              {banners.banner.map((item) => (
                <div class="w-full">
                  <Image src={item.image} alt={item.title} title={item.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
