const pokemonContainer = document.querySelector(".pokemon-container")

const prevButton = document.querySelector(".prev") //botao de retroceder
const nextButton = document.querySelector(".next") //botao de avancar
const pageSpan = document.querySelector(".page-index")
const spinner = document.querySelector(".spinner")

const ITEMS_PER_PAGE = 24 //quantidade de card por pagina
let page = 0 //pagina atual
let max//maximo de pagina

async function getPokemons(offset, limit){
    pageSpan.innerHTML = page + 1 //contador do paginador

    spinner.classList.remove("hidden")
    pageSpan.classList.add("hidden")
    nextButton.disable = true
    prevButton.disable = true


    //faz requisicao na API
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    )

    const json = await res.json() //converte resultado para json
    max = json.count

    //pega cada um dos pokemons
    const pokemons = await Promise.all(
        json.results.map(async({ url }) =>{
            const pokemonsRes =await fetch(url)
            return pokemonsRes.json()
        })
    )
    spinner.classList.add("hidden")
    pageSpan.classList.remove("hidden")
    nextButton.disable = false
    prevButton.disable = false
    
    render(pokemons)
}


//renderiza imagem do pokemon no HTML
function render(pokemons){
    pokemonContainer.innerHTML = null

    pokemons.forEach((pokemon) => {
        const card = `
            <li class="card" onclick="this.classList.toggle('flipped')">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" loading="lazy" class="sprite"/>
                <p class="name">${pokemon.name}</p>
            </li>
        `

        pokemonContainer.innerHTML += card
    });


}


//botoes de preview e next
prevButton.addEventListener("click", () =>{
    if(page - 1 <0) return
        page--
        getPokemons(ITEMS_PER_PAGE * page, ITEMS_PER_PAGE)
})

nextButton.addEventListener("click", () =>{
    if(page + 1 > Math.floor(max/ITEMS_PER_PAGE)) return
        page++
        getPokemons(ITEMS_PER_PAGE * page, ITEMS_PER_PAGE)
})

getPokemons(page * ITEMS_PER_PAGE, ITEMS_PER_PAGE)