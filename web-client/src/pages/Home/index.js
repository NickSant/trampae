import React from 'react';
import {
	Container,
	ContainerRight,
	ContainerMiddle,
	ContainerLeft,
	ContainerPosts,
	Modal,
	Filtro,
	Header,
	IconTrash,
	Selects,
	ButtonFilter
} from './styles.js'


import NavBar from '../../components/Navbar';
import Post from '../../components/Post';
import Select from '../../components/Select';



//--Começo do Front-end---//
export default function Home() {

	return (
		<>
			<NavBar />
			<main>
				<Container>

					<ContainerLeft />

					<ContainerMiddle>

						<ContainerPosts>
							<Post user={{id:1, a:'b'}} />
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
						</ContainerPosts>

					</ContainerMiddle>

					<ContainerRight />

					{/* Filtro */}
					<Modal>	
						<Filtro>
							<Header>
								<h1>Filtro</h1>
								<IconTrash />
							</Header>

							<Selects>
								<h1>Estado</h1>
								<Select />
								<h1>Cidade</h1>
								<Select />
							</Selects>

							<ButtonFilter>
								<button>Filtrar</button>
							</ButtonFilter>
						</Filtro>
					</Modal>
					{/* Filtro */}
					
				</Container>
			</main>	
		</>
	);

}
