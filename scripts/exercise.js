downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)

function handlePhoto(error, photo) {
    if (error) console.error('Download error!', error)
    else console.log('Download finished', photo)
    
}
console.log('Download started')

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
async function getPokemon(url) {
    const results = await fetch(url);
    console.log(results);
}

getPokemon(url)

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall(){
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result)
}
asyncCall();