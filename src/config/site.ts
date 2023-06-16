import { env } from "@/env.mjs"

export const siteConfig = {
  name: "Ecommerce Inside",
  description: "Ecommerce Inside is a full-service digital solutions agency based in UAE specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
  siteUrl: env.NEXTAUTH_URL,
  author: {
    name: `Eci Messanger`,
    twitter: ``,
  },
  social: {
    github: "https://github.com/",
  },
}

 export type SiteConfig = typeof siteConfig