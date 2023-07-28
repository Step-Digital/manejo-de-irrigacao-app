import { STATUS_CODE } from "../../../utils";
import { UserUnauthorized, UnexpectedError } from "../auth/errors";

import { NewPropertyDTO, NewGroundDTO, NewBombDTO, SystemInfoDTO } from '../../dtos/newProperty';

import { NewPropertyDomain } from '../../domain/newProperty.domain';
import { NewPropertyRepository } from '../../repositories/newProperty/newProperty.repository';

export class NewPropertyService implements NewPropertyDomain {
  constructor(private readonly newPropertyRepository: NewPropertyRepository) {}
  async newProperty(params: NewPropertyDTO): Promise<any> {
    try {
      return await this.newPropertyRepository.newProperty(params);
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
