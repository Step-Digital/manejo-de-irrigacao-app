import { STATUS_CODE } from "../../../utils";
import { UserUnauthorized, UnexpectedError } from "../auth/errors";

import {
  NewPropertyDTO,
  NewGroundDTO,
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
      console.log("ENTREI PAPAI")
      const { token } = await this.authRepository.getToken();
      return await this.newPropertyRepository.newProperty(params, token);
    } catch (error) {
      console.log("CHORAAA")
      console.log(error)
    }
  }

  async newGround(params: NewGroundDTO): Promise<any> {
    try {
      return await this.newPropertyRepository.newGround(params);
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

  async newBomb(params: NewBombDTO): Promise<any> {
    try {
      return await this.newPropertyRepository.newBomb(params);
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

  async newIrrigationSystem(params: SystemInfoDTO): Promise<any> {
    try {
      return await this.newPropertyRepository.newIrrigationSystem(params);
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
