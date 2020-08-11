import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheckSquare } from 'react-icons/fi';
import './styles.css';
import './responsive.css';
import logoImg from '../../assets/logo.png';


// import SignUpForm from "../../components/registerForm/registerForm";

import api from '../../services/api';
import axios from 'axios';


/* Função de Cadastro concluído*/

export default function Register() {
    const styles = {
        p: {
            color: '#cff8f9',
            fontSize: '26px',
        },
        cursorPointer: {
            cursor: 'pointer',
        }
    }
    const refDiv = React.createRef();

    // campos que o frontend envia -> name, email, whatsapp, city, uf, password
    const [name, changeName] = useState('');
    const [email, changeMail] = useState('');
    const [whats, changeWhats] = useState('');
    const [password, changePass] = useState('');

    const [selectedUf, setSelectedUf] = useState('');
    const [selectedCity, setSelectedcity] = useState('');




    // ibge functions ----------------------------------------------------
    //get ufs
    const [ufs, setUfs] = useState([]);

    function getUfs(){
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then( response =>{

            const siglas = response.data.map(estado => estado.sigla);     

            console.log(siglas);       

            setUfs(siglas);
        });
    }

    useEffect( getUfs , [] );

    // Buscando as cidades da uf selecionada
    const [cities, setCities] = useState([]);
    function getCities(){
        console.log(selectedUf)

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/distritos?orderBy=nome`)
        .then( response =>{
            const cidades = response.data.map(cidade =>{
                delete cidade.municipio;
                return cidade;
            });
            
            console.log(cidades);

            setCities(cidades);
        })

    }

    useEffect( getCities, [selectedUf]);


    //  SUBMIT- -----------------------------

    async function submitRegister(e) {
        //fazer conexão com api......
        e.preventDefault();
        //name, email, whatsapp, city, uf, password
        const body = {
            name: name,
            email: email,
            whatsapp: whats,
            password: password,
            city: selectedCity,
            uf: selectedUf,
        }

        console.log(body);

        api.post('/signup', body )
        .then( (res) =>{
            console.log(res);
            localStorage.clear();
            //confirmação
            localStorage.setItem('token', `Bearer ${res.data.token}`);

            refDiv.current.style.display = 'flex';
            console.log(refDiv.current)
            setTimeout(() => {
                goToHome();
            }, 20000)


        }).catch( e =>{
            localStorage.clear();
            console.log(e)
        });
        


        
    }
    function goToHome() {
        window.location = '/'
    }

    /*Começo da pagina*/
    return (
        <div className="Register-container">
            <div className="content">
                <section>
                    {/*Logo e textos do lado esquerdo*/}
                    <img className="Logo" src={logoImg} alt='Trampâe' />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e intereja com pessoas por meio de serviços.</p>
                    <Link className="Cback-link" to="/">
                        <FiArrowLeft size={16} color="#14b3b0" />
                        Já tenho cadastro
                    </Link>
                </section>

                {/*Começo dos inputs do cadastro*/}
                <form>
                    <input 
                        placeholder="Nome Completo" 
                        onChange={e => { changeName(e.target.value) }}
                    />
                    <input 
                        type="Email" 
                        placeholder="E-mail"
                        onChange={e => changeMail(e.target.value)}
                    />

                    {/* NÃO ESQEUCER DE COLOCAR O CONFIRMAR SENHA NO BACKEND!!!!!! */}
                    <div className="input-password">
                        <input 
                            type="password" 
                            placeholder="Senha"
                            onChange={e =>{changePass(e.target.value)}}
                        />
                    </div>

                    <div className="input-password">
                        <input 
                            type="password" 
                            placeholder="Confirmar senha"
                        />
                    </div>

                    <input 
                        type="tel" 
                        onChange={e =>{ changeWhats(e.target.value) }}
                        placeholder="WhatsApp" 
                    />

                    <div className="input-group">

                        <select 
                            onChange={e => setSelectedUf(e.target.value)}
                            className="uf" 
                            placeholder="UF" 
                        >
                            <option value="default" hidden defaultValue>UF</option>
                            {ufs.map(uf =>{
                                return(
                                    <option key={uf} value={uf}>{uf}</option>
                                );
                            })}
                        </select>

                        <select
                            onChange={e => setSelectedcity(e.target.value)}
                            placeholder="cidade"
                        >
                            <option value="default" hidden defaultValue >Cidade</option>
                            {cities.map(city =>{
                                return(
                                    <option key={city.id} value={city.nome}>{city.nome}</option>
                                );
                            })}
                        </select>
                        
                    </div>
                    <button type="submit" className="Button" onClick={submitRegister}>Cadastar</button>
                </form>

                {/*Função do cadastro concluído*/}
                <div style={styles.cursorPointer} onClick={goToHome} ref={refDiv} className="hide">
                    <div>
                        <FiCheckSquare size={100} />
                        <div>
                            <h1>Cadastro Concluído com Sucesso!</h1>
                            <p style={styles.p}>Aguarde para ser redirecionado</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      
    );
}
