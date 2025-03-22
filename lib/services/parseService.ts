import { Service } from "@/domain/entities/service";
import {
  createServiceId,
  createServiceName,
} from "@/domain/valueObjects/service";
import { Result } from "@/types/result";

export const parseService = (raw: unknown): Result<Service, Error> => {
  if (typeof raw !== "object" || raw === null) {
    return {
      ok: false,
      error: new Error(
        `サービスデータが無効です。受け取った型: ${raw === null ? "null" : typeof raw
        }`
      ),
    };
  }

  const { id, name } = raw as Record<string, unknown>;

  // ServiceIdを生成
  const serviceId = createServiceId(id);
  if (!serviceId.ok) return serviceId;

  // ServiceNameを生成
  const serviceName = createServiceName(name);
  if (!serviceName.ok) return serviceName;

  // エンティティを返却
  const service: Service = {
    id: serviceId.value,
    name: serviceName.value,
  };

  return { ok: true, value: service };
};
