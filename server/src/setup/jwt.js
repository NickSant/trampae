import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_JWT;
//payload = dado que vai ser criptografado
export function generateToken(payload){
    return jwt.sign(payload, secret, {
        expiresIn: 86400,//Esse token é válido em até 24 HORAS!!
    });
}
export function decodeToken(token){
    return jwt.verify(token, secret);
}
