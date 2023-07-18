import { LoginDTO } from "../../dtos/auth";
import { loginRepository } from "../../repositories/auth";

export const loginService = async (params: LoginDTO) => {
  try {
    const { data: { data } } = await loginRepository(params);
    return data;
  } catch (error) {
    return error;
  }
};
