const axios = require('axios');

const title = 'Kanojyo to Himitsu to Koimoyou';
const urlAPI = 'https://api.mangadex.org';

const searchTitle = await axios({
    method: 'GET',
    url: `${urlAPI}/manga`,
    params: {
        title: title
    }
});

console.log(searchTitle.data.map(manga => manga.id));
