class ApiService {

    // @ngInject
    constructor(public $http: angular.IHttpService, public apiUrl: string,public videoUrl: string, public apiKey: string) {
    }

    // https://api.themoviedb.org/3/movie/550?api_key=3f1b103e26e5c68ba7a5a82f17417006

    //
    // var topTVsUrl = apiBaseUrl + 'tv/top_rated?api_key=' + API_KEY + '&language=en-US&page=1',
    // topMoviesUrl = apiBaseUrl + 'movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1',
    // searchMovieUrl = apiBaseUrl + 'search/movie?api_key=' + API_KEY + '&language=en-US&query=',
    // searchTVUrl = apiBaseUrl + 'search/tv?api_key=' + API_KEY + '&language=en-US&query=';

    public getMovieById<T>(movieId: number) {
      
        const url = `${this.apiUrl}movie/${movieId}?api_key=${this.apiKey}`;
        return this
            .$http
            .get(url)
            .then((resp: any) => this.onSuccess<T>(resp));
    //https://api.themoviedb.org/3/movie/12222/videos?api_key=3f1b103e26e5c68ba7a5a82f17417006&language=en-US
    }
     public getMovieVideoByID(movieId: number): any {
        const url = `${this.apiUrl}movie/${movieId}/videos?api_key=${this.apiKey}&language=en-US`;
        
           return this.
            $http
            .get(url)
            .then((resp: any) => {
                        return `${this.videoUrl}${resp.data.results[0].key}`;            });

    }
    public getShowVideoByID(showId: number): any {
        const url = `${this.apiUrl}tv/${showId}/videos?api_key=${this.apiKey}&language=en-US`;
        
           return this.
            $http
            .get(url)
            .then((resp: any) => {
                        return `${this.videoUrl}${resp.data.results[0].key}`;            });

    }

    public searchMovies<T>(searchTerm: number) {
        const url = `${this.apiUrl}search/movie?api_key=${this.apiKey}&language=en-US&query=${searchTerm}`;
        return this
            .$http
            .get(url)
            .then((resp: any) => this.onSuccess<T>(resp));

    }
     public searchShows<T>(searchTerm: number) {
        const url = `${this.apiUrl}search/tv?api_key=${this.apiKey}&language=en-US&query=${searchTerm}`;
        return this
            .$http
            .get(url)
            .then((resp: any) => this.onSuccess<T>(resp));

    }

    public getMovies<T>() {
        const url = `${this.apiUrl}movie/top_rated?api_key=${this.apiKey}`;
        return this
            .$http
            .get(url)
            .then((resp: any) => this.onSuccess<T>(resp));

    }

    

    public getShows<T>() {
        const url = `${this.apiUrl}tv/top_rated?api_key=${this.apiKey}`;
        return this
            .$http
            .get(url)
            .then((resp: any) => this.onSuccess<T>(resp));

    }

    private onSuccess<T>(resp: any): T {
        if (resp.status === 204) {
            return null;
        }
        return resp.data as T;
    }
}

angular.module('app').service('apiService', ApiService);
