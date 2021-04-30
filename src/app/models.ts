export interface UserProfile{
    id: number;
    name: string;
    user: User;
    birthDate: Date;
    aboutSelf: string;
    country_city: string;
    gender: string;
    mood: string;
}
export interface User{
    id: number;
    username: string;
    password: string;
    email: string;
}
export interface Product{
    id: number;
    name: string;
    img: string;
    gal1: string;
    gal2: string;
    gal3: string;
    price: number;
    rating: number;
    link: string;
    description: string;
    category: number;
}

export interface Category{
    id: number;
    name: string;
}
