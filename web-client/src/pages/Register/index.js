import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheckSquare } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.png';


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

    function submitRegister(e) {
        //fazer conexão com api......
        e.preventDefault();
        refDiv.current.style.display = 'flex';
        console.log(refDiv.current)
        setTimeout(() => {
            goToHome();
        }, 1500)

    }
    function goToHome() {
        window.location = '/'
    }


    return (
        <div className="Register-container">
            <div className="content">
                <section>

                    <img className="logo" src={logoImg} alt='Trampâe' />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e intereja com pessoas por meio de serviços.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#14b3b0" />
                        Já tenho cadastro
                    </Link>

                </section>
                <form>
                    <input placeholder="Nome Completo"></input>
                    <input type="Email" placeholder="E-mail"></input>

                    <div className="input-password">
                        <input name="senha" type="password" placeholder="Senha"></input>
                    </div>

                    <div className="input-password">
                        <input type="password" placeholder="Confirmar senha"></input>
                    </div>

                    <input type="tel" placeholder="WhatsApp"></input>

                    <div className="input-group">
                        <input placeholder="Cidade"></input>
                        <input placeholder="UF" style={{ width: 80 }}></input>
                    </div>
                    <button className="button" onClick={submitRegister}>Cadastar</button>
                </form>


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
