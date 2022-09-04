import axios from "axios";

export default axios.create({
  baseURL: "https://imdb-api.com",
});

// MOST POPULAR RECENT MOVIES
// https://imdb-api.com/en/API/MostPopularMovies/k_0xcr1b07
// MOST POPULAR RECENT SHOWS
// https://imdb-api.com/en/API/MostPopularTVs/k_0xcr1b07
// ALL TIME TOP 250 MOVIES
// https://imdb-api.com/en/API/Top250Movies/k_0xcr1b07
// ALL TIME TOP 250 SHOWS
// https://imdb-api.com/en/API/Top250TVs/k_0xcr1b07
// ALL TIME TOP BOX OFFICE
// https://imdb-api.com/en/API/BoxOfficeAllTime/k_0xcr1b07
// COMING SOON
// https://imdb-api.com/en/API/ComingSoon/k_0xcr1b07
// YOUTUBE TRAILER
// https://imdb-api.com/en/API/YouTubeTrailer/k_0xcr1b07/{MOVIE-ID}
