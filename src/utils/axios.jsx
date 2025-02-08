import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjJhMmZlN2VjMzFjOWU3ZGQ2M2FiYTIyYjlmNjliZiIsIm5iZiI6MTczODk1ODA5NC44NjYsInN1YiI6IjY3YTY2NTBlYWNhOTFkYTRiYTg1ZWMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RKnQDLPANyen5yMLFAPtcCQqJxuKgHAOeU4ZhpXcRqw'
      },
})


export default instance;