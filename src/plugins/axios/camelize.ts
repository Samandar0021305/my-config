export function camelize(str:any) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word:string, index:number) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
    }