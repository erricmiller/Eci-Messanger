import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    "name": "Eci Messanger",
    "short_name": "Messanger",
    "icons": [
      {
        "src": "path/to/maskable_icon.png",
        "sizes": "196x196",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/icons/android-chrome-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "theme_color": "#317EFB",
    "background_color": "#FFFFFF",
    "start_url": "/",
    "display": "standalone",
    "orientation": "portrait"
  }
};

export default manifest;
