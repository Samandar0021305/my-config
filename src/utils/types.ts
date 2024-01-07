
export type TypeLang = {
    uz: string | null;
    ru: string | null;
    en: string | null;
}


export type TypeComponents = {
    [key: string]: { tag: string, value: any };  
} 

 
export type TypeIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
