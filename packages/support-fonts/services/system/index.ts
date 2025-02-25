import fonts from "./fonts.json";

interface SystemFontMeta {
  family: string;
  fallbacks: string[];
  service: "system";
  urls: {};
}

/**
 * Get the google font with the given family name
 * If the font is not found, it will return undefined
 * @param family
 * @returns
 */
export function systemfont(family: string): SystemFontMeta | false {
  const found = fonts[family];
  if (found) {
    return {
      ...found,
      family,
      service: "system",
      urls: {},
    };
  }
  return false;
}
