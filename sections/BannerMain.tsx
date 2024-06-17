import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Banner {
  banner?: {
    image: ImageWidget;
    alt: string;
  };
  action?: {
    subtitle: string;
    title: string;
  };
}

export default function BannerMain({
  banner = { image: "", alt: "" },
  action = { subtitle: "", title: "" },
}: Banner) {
  return (
    <div class="w-full flex justify-center">
      <div class="w-full w-[1400px] relative">
        <Image src={banner.image} alt={banner.alt} />
        <div class="absolute top-0 h-full flex flex-col items-start justify-center gap-[25px] p-[20px]">
          <p class="text-white tex-base">{action.subtitle}</p>
          <h1 class="text-white text-7xl font-bold">{action.title}</h1>
        </div>
      </div>
    </div>
  );
}
