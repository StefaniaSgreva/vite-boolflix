import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    // apiURL: 'https://api.themoviedb.org/3/search/',
    MovieApi:'https://api.themoviedb.org/3/search/movie?api_key=6e5beca259c47107979aef3b3305cc9a&language=en-US&page=1&query=a',
    TvApi: 'https://api.themoviedb.org/3/search/tv?api_key=6e5beca259c47107979aef3b3305cc9a&language=en-US&page=1&query=a',
    
    MovieList: [],
    TvList: [],
     
    search: "",
    
    getMovie(){
        axios.get(this.MovieApi + this.search).then((res => {
            this.MovieList = res.data.results;
            console.log(this.MovieList);

        })).catch((error)=>{
            console.log(error.message);
        })
    },
    getSeries(){
        axios.get(this.TvApi + this.search).then((res) => {
            this.TvList = res.data.results;
            console.log(this.TvList);

        }).catch((error)=>{
            console.log(error.message);
        })
    }

});