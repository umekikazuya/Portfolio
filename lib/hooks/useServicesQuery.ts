import { Service } from "@/domain/entities/service";
import { fetchData } from "@/utils/api";
import { useEffect, useState } from "react";

export const useServicesQuery = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetchData<Service[]>("/api/services").then((res) => {
      if (res) setServices(res);
    });
  }, []);

  return { services };
};
