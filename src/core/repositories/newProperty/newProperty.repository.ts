import { NewPropertyDomain } from "../../domain/newProperty.domain";

import {
  NewPropertyDTO,
  NewGroundDTO,
  NewBombDTO,
  SystemInfoDTO,
} from "../../dtos/newProperty";
import { AxiosInstance } from "axios";

export class NewPropertyRepository implements NewPropertyDomain {
  constructor(private readonly httpClient: AxiosInstance) {}
  async newProperty(params: NewPropertyDTO, token: string): Promise<any> {
    const {
      data: { data },
    } = await this.httpClient.post<any>("/propriedade", params, {
      headers: {
        ["Authorization"]: `Bearer ${token}`
      }
    });
    return {
      data,
    };
  }

  async newGround(params: NewGroundDTO): Promise<any> {
    const {
      data: { data },
    } = await this.httpClient.post<any>("/solo", params);
    return {
      data,
    };
  }

  async newBomb(params: NewBombDTO): Promise<any> {
    const {
      data: { data },
    } = await this.httpClient.post<any>("/motobomba", params);
    return {
      data,
    };
  }

  async newIrrigationSystem(params: SystemInfoDTO): Promise<any> {
    const {
      data: { data },
    } = await this.httpClient.post<any>("/sistemairrigacao", params);
    return {
      data,
    };
  }
}
