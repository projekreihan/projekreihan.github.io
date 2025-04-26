const movieList = document.getElementById('movieList');
const moviePlayer = document.getElementById('moviePlayer');
const videoPlayer = document.getElementById('videoPlayer');
const closePlayer = document.getElementById('closePlayer');
const searchInput = document.getElementById('searchInput');

const movies = [
    {
        title: 'bidaah eps 1',
        poster: 'bidaah.jpg', // Ganti dengan path gambar poster
        video: 'tes.mp4' // Ganti dengan path video film
    },
    {
        title: 'bidaah eps 2',
        poster: 'bidaah.jpg',
        video: 'tes.mp4'
    },
    {
        title: 'bidaah eps 3',
        poster: 'bidaah.jpg', // Ganti dengan path gambar poster
        video: 'tes.mp4' // Ganti dengan path video film
    },
    {
        title: 'bidaah eps 4',
        poster: 'bidaah.jpg',
        video: 'tes.mp4'
    },
    {
        title: 'bidaah eps 5',
        poster: 'bidaah.jpg', // Ganti dengan path gambar poster
        video: 'tes.mp4' // Ganti dengan path video film
    },
    {
        title: 'bidaah eps 6',
        poster: 'bidaah.jpg',
        video: 'tes.mp4'
    },
    {
        title: 'bidaah eps 7',
        poster: 'bidaah.jpg', // Ganti dengan path gambar poster
        video: 'tes.mp4' // Ganti dengan path video film
    },
    {
        title: 'bidaah eps 8',
        poster: 'bidaah.jpg',
        video: 'tes.mp4'
    },
    // Tambahkan data film lainnya di sini
];

function displayMovies(films) {
    movieList.innerHTML = '';
    films.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movieItem');
        movieItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieItem.addEventListener('click', () => {
            videoPlayer.src = movie.video;
            moviePlayer.style.display = 'block';
            videoPlayer.play();
        });
        movieList.appendChild(movieItem);
    });
}

displayMovies(movies);

closePlayer.addEventListener('click', () => {
    moviePlayer.style.display = 'none';
    videoPlayer.pause();
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
});
