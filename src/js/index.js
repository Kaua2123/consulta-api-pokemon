
(function () {
    const namePokemon = document.querySelector('.name-pokemon');
    const pokemon = document.querySelector('.pokemon'); //IMAGEM 
    const abilitiesPokemon = document.querySelector('.abilities-pokemon');


    const exibePokemonSelecionado = () => {

        const selectPokemon = document.querySelector('.select-pokemon'); //VALOR DO SELECT
        selectPokemon.addEventListener('change', (e) => {
            if (selectPokemon.value === 'charmander') {
                pokemon.setAttribute('src', 'charmander.png')
                charmander(); 
                console.log('selecionado: ', selectPokemon.value)
            }
            else if (selectPokemon.value === 'bulbasaur') {
                pokemon.setAttribute('src', 'bulbasaur.png')
                bulbasaur();
                console.log('selecionado: ', selectPokemon.value)
            }
            else if (selectPokemon.value === 'squirtle') {
                pokemon.setAttribute('src', 'squirtle.png')
                squirtle();
                console.log('selecionado: ', selectPokemon.value)
            }
            else if (selectPokemon.value === 'pikachu') {
                pokemon.setAttribute('src', 'pikachu.png')
                pikachu();
                console.log('selecionado: ', selectPokemon.value)
            }
        })

    }

    const pikachu = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
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

    exibePokemonSelecionado();


})()
