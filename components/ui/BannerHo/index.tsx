import Image from "apps/website/components/Image.tsx";
import { Banners } from "site/sections/BannerCustom.tsx";

export function BannerHo({ banner }: Banners) {
  return (
    <div class="banner-horizontal w-full flex flex-wrap gap-4">
      {banner.map((item) => (
        <div class="w-full relative grow shrink">
          <Image
            src={item.image}
            alt={item.title}
            title={item.title}
            class="w-full"
          />
          <span class="absolute left-5 bottom-5 flex rounded-full py-2.5 px-5 bg-white text-black text-sm font-medium">
            {item.brand}
          </span>
        </div>
      ))}
    </div>
  );
}
