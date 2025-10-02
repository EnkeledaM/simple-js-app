// Exercise 1.2 — Dataset për Pokédex
// Ky skedar përmban vetëm të dhënat fillestare të aplikacionit sipas kërkesës së detyrës.

const pokemonList = [
  {
    name: 'Bulbasaur',
    height: 7,
    types: ['grass', 'poison']
  },
  {
    name: 'Charmander',
    height: 6,
    types: ['fire']
  },
  {
    name: 'Squirtle',
    height: 5,
    types: ['water']
  }
];

// Verifikime të shpejta (opsionale)
console.log('Total Pokémon:', pokemonList.length);
console.log('I pari:', pokemonList[0]);
console.log('Emri i parë:', pokemonList[0].name);
console.log('Typet e parë:', pokemonList[0].types.join(', '));

// (Opsionale) Shfaqje minimale në UI
const summaryEl = document.getElementById('summary');
const listEl = document.getElementById('pokemon-list');

if (summaryEl && listEl) {
  summaryEl.textContent = `Total Pokémon në dataset: ${pokemonList.length}`;
  pokemonList.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.name} — height: ${p.height}, types: [${p.types.join(', ')}]`;
    listEl.appendChild(li);
  });
}
