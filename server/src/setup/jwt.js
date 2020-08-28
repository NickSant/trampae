import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_JWT;
//payload = dado que vai ser criptografado
export function generateToken(payload){
    return jwt.sign(payload, secret, {
        expiresIn: 28800,//Esse token é válido em até 8 HORAS!!
    });
}
export function decodeToken(token){
    return jwt.verify(token, secret);
}
