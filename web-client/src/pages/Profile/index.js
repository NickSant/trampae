import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../../contexts/authContext"
import api from "../../services/api"
import { toast } from "react-toastify"

import NavBar from "../../components/Navbar"
import CompleteServiceModal from "../../components/finishServiceModal"

import { Container, ProfileInfo, ProfileStats } from "./styles"

import ProfileImg from "../../assets/user.png"
import CoverBG from "../../assets/cover.jpg"
import loading from "../../assets/loading.gif"

import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"
import { BsFillBriefcaseFill } from "react-icons/bs"
import { FaRegHandshake } from "react-icons/fa"
import { FiCheck, FiEdit, FiTrash } from "react-icons/fi"
import EditServiceModal from "../../components/editServiceModal"

//---Começo do Front-end---//
function Profile() {
	const { id } = useParams()
	const [userInfo, setUserInfo] = useState()
	const [userServices, setUserServices] = useState()
	const [chosenServiceId, setChosenServiceId] = useState()
	const [userCompleteServices, setUserCompleteServices] = useState()
	const [isCurrentUserProfile, setIsCurrentUserProfile] = useState()
	const [finishServiceModal, setFinishServiceModal] = useState(false)
	const [editServiceModal, setEditServiceModal] = useState(false)
	const [chosenUser, setChosenUser] = useState()

	const { user } = useAuth()

	async function getUserData() {
		const apiResponse = await api.get(`/user/${id}`)

		console.log(apiResponse.data)
		setUserInfo(apiResponse.data.exists)
		setUserServices(apiResponse.data.requestedServices)
		setUserCompleteServices(apiResponse.data.assignedServices)
	}

	function checkCurrentUser() {
		if (user.id == id) {
			setIsCurrentUserProfile(true)
		} else {
			setIsCurrentUserProfile(false)
		}
	}

	async function deleteService(serviceId) {
		await api.delete(`services/${serviceId}`)
		getUserData()
	}

	function openFinishServiceModal(serviceId) {
		setChosenServiceId(serviceId)
		setFinishServiceModal(true)
	}

	function openEditServiceModal(service) {
		setChosenServiceId(service)
		setEditServiceModal(true)
	}

	function chooseUser(id) {
		setFinishServiceModal(false)
		console.log("id escolhido:", id)
		setChosenUser(id)
		finishService()
	}

	async function finishService() {
		await api.post("/done-service", {
			user_assigned_id: chosenUser,
			service_id: chosenServiceId,
		})
		setChosenServiceId("")
		getUserData()
		toast.success("O serviço foi concluído e atribuído ao prestador!")
	}

	useEffect(() => {
		getUserData()
		checkCurrentUser()
	}, [id])

	return (
		<>
			{userInfo ? (
				<Container>
					<NavBar />
					<ProfileInfo>
						<img src={CoverBG} alt="bg" className="background" />
						<img
							src={userInfo.image_url ? userInfo.image_url : ProfileImg}
							alt=""
							className="profilePic"
						/>

						<div className="profileInfo">
							<strong> {userInfo.name} </strong>
							<span>
								{userInfo.city} - {userInfo.uf}
							</span>

							<br />
							<div className="bio">
								<p>{userInfo.bio ? userInfo.bio : `Olá, eu sou o ${userInfo.name}`}</p>
							</div>
						</div>
					</ProfileInfo>
					<ProfileStats>
						<div className="split-section">
							<div className="item-line">
								<a
									href={`https://api.whatsapp.com/send?phone=${userInfo.whatsapp}&text=Olá%20${userInfo.name}!`}
									target="_blank"
								>
									<AiOutlineWhatsApp size={"2rem"} />
									<span>Enviar mensagem</span>
								</a>
								<a>
									<AiOutlineMail size={"2rem"} />
									<span>Mandar email</span>
								</a>
							</div>

							<hr />

							<div className="item-line">
								<div>
									<BsFillBriefcaseFill size={"2rem"} />
									<span>
										serviços oferecidos:{" "}
										<strong>{userServices ? userServices.length : "..."}</strong>
									</span>
								</div>
								<div>
									<FaRegHandshake size={"2rem"} />
									<span>
										serviços prestados:{" "}
										<strong>{userCompleteServices ? userCompleteServices.length : "..."}</strong>
									</span>
								</div>
							</div>
						</div>
						<div className="split-section scrollable">
							<h4> Serviços postados </h4>
							<hr />
							{userServices ? (
								userServices.length === 0 ? (
									<span className="span-response">Não há nada aqui ainda</span>
								) : (
									userServices.map(service => {
										return (
											<div key={service.id} className="service-item">
												<div className="votingPerson">
													<img
														src={userInfo.image_url ? userInfo.image_url : ProfileImg}
														alt="profilePic"
														className="profilePic"
													/>
													<div>
														<strong> {userInfo.name} </strong>
														<span>
															{service.city} - {service.uf}
														</span>
													</div>
												</div>

												<div className="service-info">
													<strong> {service.title} </strong>
													<strong> {service.cat_title}</strong>
													{isCurrentUserProfile && service.status == 0 ? (
														<div className="options">
															<FiTrash size={"1.2rem"} onClick={() => deleteService(service.id)} />
															<FiEdit
																size={"1.2rem"}
																onClick={() => openEditServiceModal(service)}
															/>
															<FiCheck
																size={"1.2rem"}
																onClick={() => openFinishServiceModal(service.id)}
															/>
														</div>
													) : null}
												</div>
											</div>
										)
									})
								)
							) : (
								<p>carregando</p>
							)}
						</div>

						<div className="split-section scrollable">
							<h4> Serviços prestados </h4>
							<hr />
							{userCompleteServices ? (
								userCompleteServices.length === 0 ? (
									<span className="span-response">Não há nada aqui ainda</span>
								) : (
									userCompleteServices.map(service => {
										return (
											<div key={service.id} className="service-item">
												<div className="votingPerson">
													<img
														src={service.image_url ? service.image_url : ProfileImg}
														alt="profilePic"
														className="profilePic"
													/>
													<div>
														<strong> {service.username} </strong>
														<span>
															{service.city} - {service.uf}
														</span>
													</div>
												</div>

												<div className="service-info">
													<strong> {service.title} </strong>
													<strong> {service.cat_title}</strong>
												</div>
											</div>
										)
									})
								)
							) : (
								<p> carregando...</p>
							)}
						</div>
					</ProfileStats>
				</Container>
			) : (
				<img src={loading} type="gif" />
			)}

			{finishServiceModal ? (
				<CompleteServiceModal
					serviceId={chosenServiceId}
					chooseUser={chooseUser}
					close={() => setFinishServiceModal(false)}
				></CompleteServiceModal>
			) : null}

			{editServiceModal ? (
				<EditServiceModal
					service={chosenServiceId}
					close={() => {setEditServiceModal(false); getUserData()}}
				></EditServiceModal>
			) : null}
		</>
	)
}

export default Profile
