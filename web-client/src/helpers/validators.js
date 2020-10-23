import * as Yup from 'yup'
import {toast} from 'react-toastify'
async function login(email, password){

    const schema = Yup.object().shape({
        email: Yup.string().required('O campo email é obrigatório!').email('Digite um email válido!'),
        password: Yup.string().required('O campo senha é obrigatório!').min(6, 'Digite uma senha válida')
    })

    schema.validate({email, password})
    .then( function(){ return true }  )
    .catch( err => {
        toast.error(err.message)
    })   
}

export default {
    login,
}