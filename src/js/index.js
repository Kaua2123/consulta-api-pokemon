const resultado = document.querySelector('.resultado');
const namePokemon = document.querySelector('.name-pokemon');
const abilitiesPokemon = document.querySelector('.abilities-pokemon');

const pokemonsIniciais = () => {
    
    //if selecionou pikachu - chama pikachu...
    pikachu();  
}

const pikachu = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu/') 
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response.abilities[0].ability.name);
        namePokemon.innerHTML = response.name.toUpperCase();
        const abilities = response.abilities.map((valor, indice) => {
            return valor.ability.name
        })
        console.log(abilities)
        abilitiesPokemon.innerHTML = abilities;
    })
    .catch((error) => {
        console.log(error);
    })
}

const charmander = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/charmander/') 
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response.abilities[0].ability.name);
        namePokemon.innerHTML = response.name.toUpperCase();
        const abilities = response.abilities.map((valor, indice) => {
            return valor.ability.name
        })
        console.log(abilities)
        abilitiesPokemon.innerHTML = abilities;
    })
    .catch((error) => {
        console.log(error);
    })
}

const bulbasaur = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur/') 
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response.abilities[0].ability.name);
        namePokemon.innerHTML = response.name.toUpperCase();
        const abilities = response.abilities.map((valor, indice) => {
            return valor.ability.name
        })
        console.log(abilities)
        abilitiesPokemon.innerHTML = abilities;
    })
    .catch((error) => {
        console.log(error);
    })
}

const squirtle = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/squirtle/') 
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response.abilities[0].ability.name);
        namePokemon.innerHTML = response.name.toUpperCase();
        const abilities = response.abilities.map((valor, indice) => {
            return valor.ability.name
        })
        console.log(abilities)
        abilitiesPokemon.innerHTML = abilities;
    })
    .catch((error) => {
        console.log(error);
    })
}

pokemonsIniciais();
