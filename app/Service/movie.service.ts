// Importing required libraries.
import { Injectable } from '@angular/core'
import { Movie, IRating } from './movie'

@Injectable()
export class MovieService {
    // Movie collection Array
    movieList: Array<Movie> = new Array<Movie>();

    /** Function to get the Movie List */
    getList() {
        return this.movieList = [];
    }

    /** To Add Movie in the List */
    addList(currentMovie: Movie) {
        this.movieList.unshift(currentMovie);
    }
}

@Injectable()
export class RatingService {
    ratings: IRating[] = [];

    /** Returns the Ratings */
    getRatings() {
       return this.ratings = [
            {id: 1, title: '1 Star'},
            {id: 2, title: '2 Star'},
            {id: 3, title: '3 Star'},
            {id: 4, title: '4 Star'},
            {id: 5, title: '5 Star'},
        ]
    }
}
