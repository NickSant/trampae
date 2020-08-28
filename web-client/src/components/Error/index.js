import React, { useState } from 'react'
import {Main, Container} from './styles'
import Modal from 'react-modal'
Modal.setAppElement('#root')
const Error = ({ expiresTime, label, message}) =>{
    const [isOpen, setIsOpen] = useState(true)
    const ref = React.createRef()
    function close(){
        setIsOpen(false)
    }

    setTimeout(() =>{
        ref.current.style='display:none !important'
        close()
    }, expiresTime)

    return(
        <Container ref={ref}>
            <Main>
                <Modal
                    contentLabel={label}
                    isOpen={isOpen}
                    onRequestClose={close}
                >
                    {message}
                </Modal>
            </Main>
        </Container>   
    )
}

export default Error