import { check, validationResult } from "express-validator";

export default {
  async checkRegister(req) {
    await check("name").isString().blacklist(" ").isAlpha("pt-BR").run(req);
    await check("email").isEmail().run(req);
    await check("whatsapp").isMobilePhone(["pt-BR"]).run(req);
    await check("city").isAlpha("pt-BR").run(req);
    await check("uf").isAlpha("pt-BR").isLength(2).run(req);
    await check("password")
      .isAlphanumeric("pt-BR")
      .isLength({ min: 6 })
      .run(req);

    const result = validationResult(req);

    return result;
  },
  async checkLogin(req){
    await check("email").isEmail().run(req);
    await check("password")
      .not()
      .isEmpty()
      .run(req);

    const result = validationResult(req);
    return result;
  }
};
