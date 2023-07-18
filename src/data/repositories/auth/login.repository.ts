import { API } from "../../services/axios.service";

import { LoginDTO } from "../../dtos/auth";
import { LoginModel } from "../../models/auth";

export const loginRepository = async (params: LoginDTO) => {
  return await API.post<LoginModel>("/auth/login", {
    email: params.email,
    password: params.password,
  });
};
