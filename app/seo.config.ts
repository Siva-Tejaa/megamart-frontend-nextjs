import type { Metadata } from "next";

export const defaultMetaData: Metadata = {
    title: {
    default: "Mega Mart",
    template: "%s | Mega Mart"
  },
  description: "Ecommerce - Mega Mart",
  keywords: ["megamart", "mega", "mart", "ecommerce"],
  authors: [{ name: "Mega Mart - Owner" }],
  icons: {
    icon: "/favicon.ico",
  },
};