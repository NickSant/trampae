import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../../services/api"

import NavBar from "../../components/Navbar"

import { Container, ProfileInfo, ProfileStats } from "./styles"

import ProfileImg from "../../assets/user.png"
import CoverBG from "../../assets/cover.jpg"
import loading from "../../assets/loading.gif"

import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"
import { BsFillBriefcaseFill } from "react-icons/bs"
import { FaRegHandshake } from "react-icons/fa"
import { useAuth } from "../../contexts/authContext"
import { FiCheck, FiTrash } from "react-icons/fi"

//---Começo do Front-end---//
function Profile() {
	const { id } = useParams()
	const [userInfo, setUserInfo] = useState()
	const [userServices, setUserServices] = useState()
	const [userCompleteServices, setUserCompleteServices] = useState()
	const [isCurrentUserProfile, setIsCurrentUserProfile] = useState()
	const { user } = useAuth()

	async function getUserData() {
		const apiResponse = await api.get("/search/users", {
			params: {
				id,
			},
		})

		console.log(apiResponse.data.users[0])
		setUserInfo(apiResponse.data.users[0])
	}

	async function getUserPostedServices() {
		const apiResponse = await api.get("search/services", {
			params: {
				user_id: id,
			},
		})
		setUserServices(apiResponse.data.services)
		console.log(apiResponse.data)
	}

	async function getUserParticipatedServices() {
		const apiResponse = await api.get("search/services", {
			params: {
				user_id: id,
				status: 1,
			},
		})
		console.log("serviços completos", apiResponse.data)
		setUserCompleteServices(apiResponse.data.services)
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
		getUserPostedServices()
	}

	useEffect(() => {
		getUserData()
		checkCurrentUser()
	}, [id])

	useEffect(() => {
		getUserPostedServices()
		getUserParticipatedServices()
	}, [userInfo])

	return (
		<>
			{userInfo ? (
				<Container>
					<NavBar />
					<ProfileInfo>
						<img src={CoverBG} alt="bg" className="background" />
						<img src={ProfileImg} alt="" className="profilePic" />

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
													<img src={ProfileImg} alt="profilePic" className="profilePic" />
													<div>
														<strong> {service.user_name} </strong>
														<span>
															{service.city} - {service.uf}
														</span>
													</div>
												</div>

												<div className="service-info">
													<strong> {service.title} </strong>
													<strong> {service.category_title}</strong>
													{isCurrentUserProfile ? (
														<div className="options">
															<FiTrash size={"1.2rem"} onClick={() => deleteService(service.id)} />
															<FiCheck size={"1.2rem"} />
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
													<img src={ProfileImg} alt="profilePic" className="profilePic" />
													<div>
														<strong> {service.user_name} </strong>
														<span>
															{service.city} - {service.uf}
														</span>
													</div>
												</div>

												<div className="service-info">
													<strong> {service.title} </strong>
													<strong> {service.category_title}</strong>
													{isCurrentUserProfile ? (
														<div className="options">
															<FiTrash size={"1.2rem"} onClick={() => deleteService(service.id)} />
														</div>
													) : null}
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
		</>
	)
}

export default Profile
