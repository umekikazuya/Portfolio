import { Result } from "@/types/result";
import { Service } from "../entities/service";

export interface ServiceRepository {
  fetchAll(): Promise<Result<Service[], Error>>;
}
