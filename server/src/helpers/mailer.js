import nodemailer from 'nodemailer';
require('dotenv/config');

class Mailer{
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure:false,
            auth:{
                user:process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        this.configs = '';
    }

    setMailConfigs(to, subject, htmlBody){
        this.configs = {
            from: process.env.MAIL_USER,
            to: to,
            subject: `[Trampaê] - ${subject}`,

            html: htmlBody
        }
    }

    async send(){
        if(this.configs === '') throw new Error('Você precisa setar as configurações antes de enviar o email');

        const send = await this.transporter.sendMail(this.configs);

        if(send) return true;

        return false;
    }
}
export default Mailer;