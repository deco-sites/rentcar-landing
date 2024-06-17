import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
  }
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {links: [
      {
        label: "Home",
        url: "/"
      },
      {
        label: "Listings",
        url: "/"
      },
      {
        label: "Blog",
        url: "/"
      },
      {
        label: "Pages",
        url: "/"
      },
      {
        label: "About",
        url: "/"
      },
      {
        label: "Contact",
        url: "/"
      }
    ]}
}: Nav) {
  return (
    <div class="w-full flex justify-between p-[20px]">
      <a class="" href="/">
        <Image src={logo.src} alt={logo.alt} class="" />
      </a>
      <nav class="">
        {navigation?.links.map((link) => (
          <li>
            <a href={link.url} title={link.label} class="">Link</a>
          </li>
        ))}
      </nav>
    </div>
  );
}
