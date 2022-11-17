// import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    baseURL: 'https://api.themoviedb.org/3/',
    endPoint:{
        movie: 'search/movie',
        tv: 'search/tv'
    }, 
    loading:{
        movie: false,
        tv: true,
    },
    params:{
        api_key: '6e5beca259c47107979aef3b3305cc9a',
        query: '',
        language: 'it-IT',
        include_adult: false,
    },

    Movie: [],
    Series: [],

});