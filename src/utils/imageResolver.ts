const images = import.meta.glob('@/assets/images/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export function resolveImage(fileName: string): string {
  return images[`/src/assets/images/${fileName}`] ?? '/images/placeholder.webp'
}
const images2 = import.meta.glob('@/assets/coffeeImage/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>
export function resolveCoffeeImage(fileName: string): string {
  return images2[`/src/assets/coffeeImage/${fileName}`] ?? '/coffeeImage/placeholder.webp'
}
