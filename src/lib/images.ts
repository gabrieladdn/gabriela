import type { ImageMetadata } from "astro";

const assetModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const imageMap = new Map<string, ImageMetadata>();

for (const [fullPath, mod] of Object.entries(assetModules)) {
  const publicKey = fullPath.replace("/src/assets", "");
  imageMap.set(publicKey, mod.default);
}

/**
 * Resolves a legacy `/images/...` path to an Astro-managed ImageMetadata asset
 * so all local images are optimized into responsive WebP/AVIF formats at build time.
 */
export function resolveAssetImage(imagePath: string): ImageMetadata {
  const normalized = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  const asset = imageMap.get(normalized);

  if (!asset) {
    throw new Error(`Imagem não encontrada em src/assets: ${normalized}`);
  }

  return asset;
}
