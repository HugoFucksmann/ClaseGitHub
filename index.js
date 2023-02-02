let h4 = document.getElementById("name");
let ul = document.getElementById("listMoves");

async function getPikachu() {
  const pikachu = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((res) => res.json())
    .catch((e) => {
      console.warn("El error es: ", e);
      return null;
    });

  h4.textContent = pikachu.species.name;

  if (pikachu !== null) {
    for (i = 0; i < 10; i++) {
      let li = document.createElement("li");
      li.textContent = "Movimiento: " + pikachu.moves[i].move.name;

      ul.appendChild(li);
    }
  }
}

async function getAllPokemons(name, age, evolution) {
  const pokemons = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  console.log("pokemons ", pokemons);
}

getPikachu();
//getAllPokemons();
// h4.textContent = pikachu.species.name;
