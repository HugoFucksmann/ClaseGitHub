let h4 = document.getElementById("name");
let ul = document.getElementById("listMoves");

async function getPikachu() {
  const pikachu = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((res) => {
      if (res.status !== 200) throw Error;

      return res.json();
    })
    .catch((e) => {
      console.warn("El error es: ", e);
      return null;
    })
    .then((res) => {
      console.log(res);
      return {
        name: res.species.name,
        movimientos: res.moves,
      };
    })
    .finally(() => alert("la promesa termino"));

  h4.textContent = pikachu.name;
  console.log("pikachu ", pikachu);
  if (pikachu !== null) {
    for (i = 0; i < 10; i++) {
      let li = document.createElement("li");
      li.textContent = pikachu.movimientos[i].move.name;

      ul.appendChild(li);
    }
  }
}

getPikachu();
//getAllPokemons();
// h4.textContent = pikachu.species.name;
