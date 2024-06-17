import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
}: Nav) {
  return (
    <header class="w-full p-[20px]">
      <a class="" href="/">
        <img src={logo.src} alt={logo.alt} class="" />
      </a>
      
    </header>
  );
}
