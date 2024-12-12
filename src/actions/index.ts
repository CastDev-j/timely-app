import { loginGithubUser, loginGoogleUser, loginUser, registerUser, resetPassword } from "./auth";
import { logout } from "./auth/logout.action";

export const server = {
  //actions

  //Auth
  registerUser,

  //End Auth
  logout,

  //Login Auth
  loginUser,
  loginGoogleUser,
  loginGithubUser,
  resetPassword,
};
