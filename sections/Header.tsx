import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navs?: {
    links: {
      label?: string;
      url?: string;
    }[];
  };
}

export default function Header({
  logo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navs = {
    links: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Listings",
        url: "/",
      },
      {
        label: "Blog",
        url: "/",
      },
      {
        label: "Pages",
        url: "/",
      },
      {
        label: "About",
        url: "/",
      },
      {
        label: "Contact",
        url: "/",
      },
    ],
  },
}: Nav) {
  return (
    <div class="w-full fixed flex justify-between p-[20px] top-0 left-0 z-10 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10">
      <a class="" href="/">
        <Image src={logo.src} alt={logo.alt} class="" />
      </a>
      <ul class="flex gap-2.5">
        {navs.links.map((link) => (
          <li class="p-[5px]">
            <a
              href={link.url}
              title={link.label}
              class="text-white hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
