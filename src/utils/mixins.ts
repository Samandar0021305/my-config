

export function MixinGetColor(color?: string): string {
    if (color) {
        return window.getComputedStyle(document.documentElement).getPropertyValue(`--color-${color}`)
    } else {
        return "transparent"
    }
}


export function MixinResetForm<T extends Record<string, any>>(target: T, source: T): void {
    // const data = target;
    // while(data){
          
    // }
    // function deepCopy(obj: any): any {
    //     if (typeof obj !== 'object' || obj === null) {
    //         return obj;
    //     }
    //     const result: any = Array.isArray(obj) ? [] : {};
    //     for (const key in obj) {
    //         if (Object.prototype.hasOwnProperty.call(obj, key)) {
    //             result[key] = deepCopy(obj[key]);
    //         }
    //     }
    //     return result;
    // }
    // Object.assign(target, deepCopy(source));
    
}