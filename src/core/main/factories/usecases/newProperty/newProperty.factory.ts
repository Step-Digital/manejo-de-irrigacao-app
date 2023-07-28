
import { NewPropertyDomain } from "../../../../domain/newProperty.domain";
import { NewPropertyRepository } from "../../../../repositories/newProperty";
import { NewPropertyService } from "../../../../services/newProperty";
import { API } from "../../../../services/axios.service";

export const makeRemoteNewProperty = (): NewPropertyDomain => {
  return new NewPropertyService(new NewPropertyRepository(API));
}