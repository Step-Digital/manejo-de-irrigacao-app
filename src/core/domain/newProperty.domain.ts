import { NewPropertyDTO, NewGroundDTO, NewBombDTO, SystemInfoDTO } from '../dtos/newProperty';

export interface NewPropertyDomain {
  newProperty: (params: NewPropertyDTO, token?: string) => Promise<any>;
  getProperties: (token?: string) => Promise<any>;
  newGround: (params: NewGroundDTO, token?: string) => Promise<any>;
  newBomb: (params: NewBombDTO, token?: string) => Promise<any>;
  newIrrigationSystem: (params: SystemInfoDTO, token?: string) => Promise<any>;
}