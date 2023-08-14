import { STATUS_CODE } from "../../../utils";
import { UserUnauthorized, UnexpectedError } from "../auth/errors";

import {
  NewPropertyDTO,
  NewBombDTO,
  SystemInfoDTO,
} from "../../dtos/newProperty";

import { NewPropertyDomain } from "../../domain/newProperty.domain";
import { NewPropertyRepository } from "../../repositories/newProperty/newProperty.repository";
import { AuthRepository } from "../../repositories/auth";

export class NewPropertyService implements NewPropertyDomain {
  constructor(
    private readonly newPropertyRepository: NewPropertyRepository,
    private readonly authRepository: AuthRepository
  ) {}
  async newProperty (params: NewPropertyDTO): Promise<any> {
    try {
      const { token } = await this.authRepository.getToken();
      return await this.newPropertyRepository.newProperty(params, token);
    } catch (error) {
     
      console.log(error)
    }
  }

  async getProperties(): Promise<any> {
    try {
      console.log("ENTREI PAPAI")
      const { token } = await this.authRepository.getToken();
      return await this.newPropertyRepository.getProperties(token);
    } catch (error) {
      console.log("CHORAAA")
      console.log(error)
    }
  }

  async getAllPropertiesData(): Promise<any> {
    try {
      console.log("ENTREI getAllPropertiesData PAPAI")
      const { token } = await this.authRepository.getToken();
      return await this.newPropertyRepository.getAllPropertiesData(token);
    } catch (error) {
      console.log("CHORAAA getAllPropertiesData")
      console.log(error)
    }
  }


  async newIrrigationSystem(params: SystemInfoDTO): Promise<any> {
    try {
      const { token } = await this.authRepository.getToken();
      return await this.newPropertyRepository.newIrrigationSystem(params, token);
    } catch (error) {
      const {
        response: { status },
      } = error;
      switch (status) {
        case STATUS_CODE.UNAUTHORIZED:
          throw new UserUnauthorized();
        default:
          throw new UnexpectedError();
      }
    }
  }
}
