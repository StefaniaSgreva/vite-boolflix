import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    // GET MOVIE AND SERIES IN SEARCH
    baseURL: 'https://api.themoviedb.org/3/',
    endPoint:{
        movie: 'search/movie',
        tv: 'search/tv'
    }, 
    // loading:{
    //     movie: false,
    //     tv: true,
    // },
    params:{
        api_key: '6e5beca259c47107979aef3b3305cc9a',
        query: '',
        language: 'it-IT',
        include_adult: false,
    },

    Movie: [],
    Series: [],

    getMovie(){
        const apiURL = this.baseURL + this.endPoint.movie;
        const params = this.params
        axios.get(apiURL,{params}).then((res) => {
            console.log(res.data.results);
            this.Movie = res.data.results;
        })
      },
      getSeries(){
        const apiURL = this.baseURL + this.endPoint.tv;
        const params = this.params
        axios.get(apiURL,{params}).then((res) => {
            
            this.Series = res.data.results;
        })
      },

    //GET MOVIE IN HOME
    trandingNow: 'https://api.themoviedb.org/3/movie/5/recommendations?api_key=6e5beca259c47107979aef3b3305cc9a&language=it-IT&page=1',
    topRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=6e5beca259c47107979aef3b3305cc9a&language=it-IT&page=1',
    upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=6e5beca259c47107979aef3b3305cc9a&language=it-IT&page=1',
    trandingList: [],
    topRatedList: [],
    upcomingList: [],

    getTranding(){
        axios.get(this.trandingNow).then((res) => {
            // console.log(res.data.results);
            this.trandingList = [...res.data.results];
            // console.log(this.trandingList);
        })
    },
    getTopRated(){
            axios.get(this.topRated).then((res) => {

                this.topRatedList = [...res.data.results];
        
            })
    },
    getUpcoming(){
            axios.get(this.upcoming).then((res) => {

                this.upcomingList = [...res.data.results];
                
        })
    },

      
    
    });