import axios from 'axios'

export default {
	async getUfs() {
		let ufs = []
		const siglas = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
		.then(response => {
			return response.data.map( estado => {
				return { id: estado.id, value: estado.sigla, title: estado.nome }
			})
		}).catch(e => {})
		
		return siglas
	},

	// Buscando as cidades da uf selecionada

	async getCities(selectedUf) {
		let cities = []

		await axios
			.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/distritos?orderBy=nome`)
			.then(response => {
				const cidades = response.data.map(cidade => {
					delete cidade.municipio
					return {id: cidade.id, name: cidade.nome}
				})

				cities = cidades
			})
			.catch(err => {
				alert('Deu erro aqui bosta')
				console.log(err)
			})

		

		return cities
	},
}
