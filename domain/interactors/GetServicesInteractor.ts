import { Service } from "../entities/service";
import { ServiceRepository } from "../repositories/ServiceRepository";

export class GetServicesInteractor {
  constructor(private repository: ServiceRepository) {}

  async handle(): Promise<Service[]> {
    const result = await this.repository.fetchAll();
    if (!result.ok) {
      throw result.error;
    }
    return result.value;
  }
}
