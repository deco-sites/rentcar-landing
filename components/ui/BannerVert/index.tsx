import { Banners } from "site/sections/BannerCustom.tsx";
import Image from "apps/website/components/Image.tsx";

export default function BannerVert({ banner }: Banners) {
  return (
    <div class="banner-vertical w-full flex flex-wrap gap-4">
      {banner.map((item) => (
        <div class="w-full">
          <Image src={item.image} alt={item.title} title={item.title} />
        </div>
      ))}
    </div>
  );
}
