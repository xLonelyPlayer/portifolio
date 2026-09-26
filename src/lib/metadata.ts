import type { Metadata } from "next";
import type { SiteMeta } from "@/content/types";

export const buildMetadata = (meta: SiteMeta): Metadata => ({
  metadataBase: new URL(meta.url),
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    url: meta.url,
    title: meta.title,
    description: meta.description,
    locale: meta.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
});
