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

const userChangeCurrentPasswordValidator = () => {
   return [
      body("oldPassword").notEmpty().withMessage("old password is required"),
      body("newPassword").notEmpty().withMessage("new password is required"),
   ];
};

const userForgotPasswordValidator = () => {
   return [
      body("email")
         .notEmpty()
         .withMessage("email is required")
         .isEmail()
         .withMessage("email is invalid"),
   ];
};

const userResetForgotPasswordValidator = () => {
   return [body("newPassword").notEmpty().withMessage("password is required")];
};

export {
   userRegisterValidator,
   userLoginValidator,
   userChangeCurrentPasswordValidator,
   userForgotPasswordValidator,
   userResetForgotPasswordValidator,
};
