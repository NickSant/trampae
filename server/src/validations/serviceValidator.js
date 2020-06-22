import { check, validationResult } from "express-validator";

export default {
  async ServiceValidator(req) {
    await check("title")
      .notEmpty()
      .isString()
      .isLength({ min: 3, max: 40 })
      .blacklist(" ")
      .isAlphanumeric("pt-BR")
      .run(req);
    await check("description")
      .notEmpty()
      .isString()
      .isLength({ min: 10, max: 200 })
      .blacklist(" ")
      .isAlphanumeric("pt-BR")
      .run(req);
    await check("price").notEmpty().isNumeric().run(req);
    await check("number_participants")
      .notEmpty()
      .isNumeric()
      .isLength({ min: 1 })
      .run(req);
    await check("id_category").notEmpty().isNumeric().run(req);
    await check("city")
      .notEmpty()
      .blacklist(" ")
      .isAlpha("pt-BR")
      .run(req);
    await check("uf")
      .notEmpty()
      .isAlpha()
      .isLength({ min: 2, max: 2 })
      .run(req);

    const result = validationResult(req);

    return result;
  },
};
