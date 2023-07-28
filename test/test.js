const axios = require('axios');

const title = 'Koi Wa Sekai';
const urlAPI = 'https://api.mangadex.org';

const searchTitle = await axios({
    method: 'GET',
    url: `${urlAPI}/manga`,
    params: {
        title: title
    }
});

console.log(searchTitle.data.map(manga => manga.id));
