import { LoginDTO } from "../../dtos/auth";
import { loginRepository } from "../../repositories/auth";

export const login = async (params: LoginDTO) => {
  try {
    const { data: { data } } = await loginRepository(params);
    return data;
  } catch (error) {
    return error;
  }
};
