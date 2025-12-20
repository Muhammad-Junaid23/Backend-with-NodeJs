import { body } from "express-validator";

const userRegisterValidator = () => {
   return [
      body("email")
         .trim()
         .isEmpty()
         .withMessage("email is required")
         .isEmail()
         .withMessage("Invalid email"),
      body("username")
         .trim()
         .isEmpty()
         .withMessage("username is required")
         .isLowercase()
         .withMessage("username should be in lower case")
         .isLength({ min: 3 })
         .withMessage("username should be 3 character long"),
      body("password").trim().notEmpty().withMessage("password is required"),
      body("fullName").optional().trim(),
   ];
};

const userLoginValidator = () => {
   return [
      body("email").optional().isEmail().withMessage("Email is invalid"),
      body("password").isEmpty().withMessage("password is required"),
   ];
};

export { userRegisterValidator, userLoginValidator };
