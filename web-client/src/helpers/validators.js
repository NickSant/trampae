import * as Yup from 'yup'
import {toast} from 'react-toastify'

async function validateSchema(schemaRef, data){
    try {
        await schemaRef.validate(data)
        return true
    } catch (err) {        
        toast.error(err.message)
        return err
    }
}


async function login(email, password){

    const schema = Yup.object().shape({
        email: Yup.string().required('O campo email é obrigatório!').email('Digite um email válido!'),
        password: Yup.string().required('O campo senha é obrigatório!').min(6, 'Digite uma senha válida')
    })

    return await validateSchema(schema, {email, password})
}

async function forget(email){
    const schema = Yup.object().shape({
        email: Yup.string().required('O campo email é obrigatório!').email('Digite um email válido!'),
    })

    return await validateSchema(schema, {email})
}

async function resetPass(pass, confPass){
    const schema = Yup.object().shape({
        password: Yup.string().required('O campo Senha é obrigatório!').min(6, 'A senha deve ter no mínimo 6 dígitos!'),
        confPassword: Yup.string().required('O campo de Confirmação de Senha é obrigatório!')
        .oneOf([Yup.ref('password'), null], 'As senhas precisam ser idênticas!')
    })
    return await validateSchema(schema, {password: pass, confPassword: confPass})
}

export default {
    login,
    resetPass, 
    forget
}