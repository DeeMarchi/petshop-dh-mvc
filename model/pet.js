let pets = [{ nome: "doug" }, { nome: "costelinha" }];

const listarPets = () => {
  let conteudo = "<h1> Pet Shop Dh</h1>";
  conteudo += "<ul>"
  for (const pet of pets) {
    conteudo += `<li> ----------- Nome: ${pet.nome} -----------</li>`;
  }
  conteudo += "</ul>";

  return conteudo;
};

const adicionarPet = novoPet => {
  return pets.push(novoPet);
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome === nomePet);

  return petsEncontrados;
};

module.exports = { listarPets, adicionarPet, buscarPet };