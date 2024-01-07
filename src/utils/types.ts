
export type TypeLang = {
    uz: string | null;
    ru: string | null;
    en: string | null;
}


export type TypeComponents = {
    [key: string]: { tag: string, value: any };  
} 

 
export type TypeIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';

export type TypeUserInfo = {
    avatar: string | null;
    first_name: string;
    last_name: string;
    url: string;
    user_type: string;
    user_id: string;
}