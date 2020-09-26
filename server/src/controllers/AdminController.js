import connection from '../database/connection'
import * as jwt from '../setup/jwt'
import Util from '../helpers/Util'
import Mailer from '../helpers/mailer'
import argon2, { hash } from 'argon2' //algoritmo de hash


import Model from '../models/Model'
import { constants } from 'fs'

const { handleError, clearString, isAdmin } = new Util()
const mailer = new Mailer()

const u = new Model('users')
const s = new Model('services')

export default {
    async login(req, res){    
        try{
            //confirmando admin
            const [hashTyp, hash] = req.headers.authorization.split(' ') //Basic Authenticate. Formato: Basic HASH
            const [email, password] = Buffer.from(hash, 'base64').toString().split(':') //Buffer - descriptografa um hash -> separado por :

            if( !isAdmin(email, password) ) return handleError(res, 401, 'Não autorizado!')
        
            const adminToken = jwt.generateToken({admin_id: process.env.ADMIN_ID_PAYLOAD_JWT})

            return res.json({
                name:'Admin',
                mail:process.env.ADMIN_USER,
                token_admin: adminToken,
                isAdmin:true
            }).end()

        }catch(e){
            handleError(res, 400, e)
        }

    },

    async listUsers(req, res){       
        const all = await u.all()
        return res.json(all).end()
    },

    async deleteUser(req, res){
        const { id } = req.body

        const user = await u.get({id},true)

        if(!user || user === undefined || user == '' || user.id !== id) handleError(res, 404, 'Usuário não encontrado')

        const deleted = await u.delete({id})

        if(!deleted) return handleError(res, 400, 'Não foi possível deletar o usuário')

        return res.json({message:`Usuário ${user.name} deletado com sucesso`})
        
    },
    async listServices(req, res){
        
    },

    async deleteService(req, res){
        
    }

}