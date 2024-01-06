export function MixinGetColor(color?: string): string {
    if (color) {
        return getComputedStyle(document.documentElement).getPropertyValue(`--color-${color}`)
    } else {
        return "transparent"
    }
}