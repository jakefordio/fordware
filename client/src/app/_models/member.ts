import { Photo } from "./photo";

export interface Member {
    id: number;
    username: string;
    photoURL: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    country: string;
    isActive: boolean;
    age: number;
    created: Date;
    lastActive: Date;
    photos: Photo[];
}

