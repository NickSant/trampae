import axios from 'axios'
import { components } from 'react-select/src/components'

export default {
	async getUfs() {
		let ufs = []
		const siglas = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
		.then(response => {
			return response.data.map(estado => {
				return { value: estado.sigla, label: estado.sigla }
			})
		}).catch(e => {})
		console.log(siglas)
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

					return cidade
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
