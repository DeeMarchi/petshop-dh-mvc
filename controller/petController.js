const petModel = require('../model/pet');

const petController = {

    index: (req, res) => {
        res.send(petModel.listarPets());
    },

    add: (req, res) => {
        const novoPet = req.params;

        petModel.adicionarPet(novoPet);

        res.send(`Opa, ${novoPet.nome} foi adicionado com sucesso!`);
    },

    buscar: (req, res) => {
        const {nome: nomePetParaProcurar} = req.params;

        const petsEncontrados = petModel.buscarPet(nomePetParaProcurar);

        let resposta = null;
        if (petsEncontrados.length > 0) {
            resposta = `Foram encontrados ${petsEncontrados.length} pet(s) com o nome ${nomePetParaProcurar}`;
        } else {
            resposta = `Não encontramos nenhum pet com o nome ${nomePetParaProcurar}`;
        }
        res.send(resposta);
    },
};

module.exports = petController;