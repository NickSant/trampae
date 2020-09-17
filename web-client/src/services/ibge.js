import axios from "axios";

export default {
  async getUfs() {
    let ufs = [];
    await axios
      .get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
      )
      .then((response) => {
        const siglas = response.data.map((estado) => estado.sigla);

        ufs = siglas;
      });

    return ufs;
  },

  // Buscando as cidades da uf selecionada

  async getCities(selectedUf) {
    let cities = [];

     await axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/distritos?orderBy=nome`
      )
      .then((response) => {
        const cidades = response.data.map((cidade) => {
          delete cidade.municipio;
          return cidade;
        });
        console.log("cidades aqui no ibge", cidades);
        cities = cidades;

    }).catch(err => {
        alert("Deu erro aqui bosta");
        console.log(err)
    })

    return cities;
  },
};
