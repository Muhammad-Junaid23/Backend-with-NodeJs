import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
   const { email, username, password, role } = req.body;

   const userExist = await User.findOne({
      $or: [{ username }, { email }],
   });

   if (userExist) {
      throw new ApiError(409, "User with email or username already exists", []);
   }

   const user = await User.create({
      email, 
      password,
      username,
      isEmailVerified: false, 
   });

   const { unHashedToken, hashedToken, tokenExpiry } =
      User.generateTemporaryToken();
});
