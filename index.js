// const repoUrl = 'https://api.github.com/users/{jeferson}'


// fetch(repoUrl)
// .then(reponse => {
//     if (!respoonse.ok) {
//         throw new Error ('Erro ao buscar dados da API');
//     }
//     return Response.json();
// })
// .then(data => {
//     console.log('dados do repositorio:', data);
// })
// .catch(error =>{
//     console.error('Erro:',error);
// });



// const apiKey = 'https://github.com/danilomolina/api-music-albuns.git'
// const cities = ['London', 'New York', 'Tokyo'];

// async function fetchWeather(city) {
//     const response = await fetch(`https://github.com/danilomolina/api-music-albuns.git`);
//     if (!response.ok) {
//         throw new Error(`Erro ao buscar clima para ${city}: ${response.statusText}`);
//     }
//     return response.json();
// }

// async function fetchAllWeather() {
//     try {
//         const weatherPromises = cities.map(city => fetchWeather(city));
//         const results = await Promise.all(weatherPromises);
        
//         const resultsDiv = document.getElementById('results');
//         resultsDiv.innerHTML = ''; // Limpa resultados anteriores

//         results.forEach((result, index) => {
//             resultsDiv.innerHTML += `<p>Clima em ${cities[index]}: ${result.weather[0].description}, Temperatura: ${result.main.temp}°C</p>`;
//         });
//     } catch (error) {
//         console.error('Erro ao buscar dados do clima:', error);
//     }
// }

// document.getElementById('fetchWeatherBtn').addEventListener('click', fetchAllWeather);


// const API_KEY = 'SUA_API_KEY';

   
// function obterDetalhesDaMusica(artista, musica) {
// const url = `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${API_KEY}&artist=${encodeURIComponent(artista)}&track=${encodeURIComponent(musica)}&format=json`;

      
// fetch(url)
// .then(response => {

// if (!response.ok) {
// throw new Error('Erro na requisição: ' + response.status);
// }
// return response.json(); 
// })
// .then(data => {

// console.log(data);


// document.getElementById('resultado').innerHTML = `
// <h3>${data.track.name} - ${data.track.artist.name}</h3>
// <p><strong>Álbum:</strong> ${data.track.album?.title || 'Não informado'}</p>
// <p><strong>Listens:</strong> ${data.track.playcount}</p>
// <p><strong>Listeners:</strong> ${data.track.listeners}</p>
// <p><strong>URL:</strong> <a href="${data.track.url}" target="_blank">Last.fm link</a></p>
// `;
// })
// .catch(error => {

// console.error('Erro ao obter os detalhes da música:', error);
// });
// }


// function buscarMusica(event) {
// event.preventDefault(); 
// const artista = document.getElementById('artista').value;
// const musica = document.getElementById('musica').value;
// obterDetalhesDaMusica(artista, musica);
// }
 


// async function obterCotacaoMoeda(base, destino) {
// const apiKey = '7a4dfa75d7ba272fd18dd4f6860fba73';
// const url = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&base=${base}&symbols=${destino}`;

// try {
// const response = await fetch(url);
// const data = await response.json();

// if (response.ok) {
// const taxaDeCambio = data.rates[destino];
// console.log(`1 ${base} = ${taxaDeCambio} ${destino}`);
// return taxaDeCambio;
// } else {
// throw new Error(data.error.type);
// }
// } catch (error) {
// console.error('Erro ao obter a cotação:', error);
// }
// }
// obterCotacaoMoeda('USD', 'EUR');
