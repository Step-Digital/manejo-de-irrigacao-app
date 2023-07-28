import { NewPropertyDTO, NewGroundDTO, NewBombDTO, SystemInfoDTO } from '../dtos/newProperty';

export interface NewPropertyDomain {
  newProperty: (params: NewPropertyDTO) => Promise<any>;
  newGround: (params: NewGroundDTO) => Promise<any>;
  newBomb: (params: NewBombDTO) => Promise<any>;
  newIrrigationSystem: (params: SystemInfoDTO) => Promise<any>;
}