// Class Movie.
export class Movie {
    imagesUrl: string;
    name: string;
    description: string;
    rating: number;
    realeaseDate: Date;
}

// Ratings Interface.
export interface IRating {
    id: number;
    title: string;
}