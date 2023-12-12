
(function () {
    const namePokemon = document.querySelector('.name-pokemon');
    const namePokemon2 = document.querySelector('.name-pokemon2');
    const namePokemon3 = document.querySelector('.name-pokemon3');
    const pokemon = document.querySelector('.pokemon'); //IMAGEM 
    const pokemon2 = document.querySelector('.pokemon2');
    const pokemon3 = document.querySelector('.pokemon3');
    const abilitiesPokemon = document.querySelector('.abilities-pokemon');
    const abilitiesPokemon2 = document.querySelector('.abilities-pokemon2');
    const abilitiesPokemon3 = document.querySelector('.abilities-pokemon3');
    const type = document.querySelector('.type');
    const type2 = document.querySelector('.type2');
    const type3 = document.querySelector('.type3')


    const exibePokemonSelecionado = () => {

        const selectPokemon = document.querySelector('.select-pokemon'); //VALOR DO SELECT
        selectPokemon.addEventListener('change', (e) => {

            const caminhoImg = '../src/imgs/';

            if (selectPokemon.value === 'charmander') {
                pokemon.src = caminhoImg + 'charmander.png';
                charmander(); 
                pokemon2.src = caminhoImg + 'charmeleon.png';
                charmeleon();
                pokemon3.src = caminhoImg + 'charizard.png';
                charizard();
        
            }
            else if (selectPokemon.value === 'bulbasaur') {
                pokemon.src = caminhoImg + 'bulbasaur.png';
                bulbasaur();
                pokemon2.src = caminhoImg + 'ivysaur.png';
                ivysaur();
                pokemon3.src = caminhoImg + 'venusaur.png';
                venusaur();
            }
            else if (selectPokemon.value === 'squirtle') {
                pokemon.src = caminhoImg + 'squirtle.png';
                squirtle();
                pokemon2.src = caminhoImg + 'wartortle.png';
                wartortle();
                pokemon3.src = caminhoImg + 'blastoise.png';
                blastoise();

            }
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
                
                const types = response.types.map((valor, indice) => {
                    return valor.type.name
                })
                type.innerHTML = types;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const charmeleon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/charmeleon/')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                namePokemon2.innerHTML = response.name.toUpperCase();
                const abilities = response.abilities.map((valor, indice) => {
                    return valor.ability.name
                })
                console.log(abilities)
                abilitiesPokemon2.innerHTML = abilities;

                const types = response.types.map((valor, indice) => {
                    return valor.type.name
                })
                type2.innerHTML = types;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const charizard = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/charizard/')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                namePokemon3.innerHTML = response.name.toUpperCase();
                const abilities = response.abilities.map((valor, indice) => {
                    return valor.ability.name
                })
                console.log(abilities)
                abilitiesPokemon3.innerHTML = abilities;

                const types = response.types.map((valor, indice) => {
                    return valor.type.name
                })
                type3.innerHTML = types;
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

                const types = response.types.map((valor, indice) => {
                    return valor.type.name
                })
                type.innerHTML = types;
                
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const ivysaur = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/ivysaur/')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            namePokemon2.innerHTML = response.name.toUpperCase();
            const abilities = response.abilities.map((valor, indice) => {
                return valor.ability.name
            })
            console.log(abilities)
            abilitiesPokemon2.innerHTML = abilities;

            const types = response.types.map((valor, indice) => {
                return valor.type.name
            })
            type2.innerHTML = types;
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const venusaur = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/venusaur/')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            namePokemon3.innerHTML = response.name.toUpperCase();
            const abilities = response.abilities.map((valor, indice) => {
                return valor.ability.name
            })
            console.log(abilities)
            abilitiesPokemon3.innerHTML = abilities;

            const types = response.types.map((valor, indice) => {
                return valor.type.name
            })
            type3.innerHTML = types;
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

                const types = response.types.map((valor, indice) => {
                    return valor.type.name
                })
                type.innerHTML = types;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const wartortle = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/wartortle/')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            namePokemon2.innerHTML = response.name.toUpperCase();
            const abilities = response.abilities.map((valor, indice) => {
                return valor.ability.name
            })
            console.log(abilities)
            abilitiesPokemon2.innerHTML = abilities;

            const types = response.types.map((valor, indice) => {
                return valor.type.name
            })
            type2.innerHTML = types;
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const blastoise = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/blastoise/')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            namePokemon3.innerHTML = response.name.toUpperCase();
            const abilities = response.abilities.map((valor, indice) => {
                return valor.ability.name
            })
            console.log(abilities)
            abilitiesPokemon3.innerHTML = abilities;

            const types = response.types.map((valor, indice) => {
                return valor.type.name
            })
            type3.innerHTML = types;
        })
        .catch((error) => {
            console.log(error);
        })
    }

    exibePokemonSelecionado();


})()
