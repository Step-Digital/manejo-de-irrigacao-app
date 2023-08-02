import { NewPropertyDTO } from '../dtos/newProperty';

export interface NewPropertyDomain {
  newProperty: (params: NewPropertyDTO, token?: string) => Promise<any>;
  getProperties: (token?: string) => Promise<any>;
}