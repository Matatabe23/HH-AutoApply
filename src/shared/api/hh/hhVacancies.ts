import { hhApi } from "./axiosInstance";
import type { HHVacancy } from "@/shared";

export async function searchVacancies(query: string, token?: string): Promise<HHVacancy[]> {
  const res = await hhApi.get("/vacancies", {
    params: { text: query },
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return res.data.items;
}

export async function getVacancyById(id: string, token?: string): Promise<HHVacancy> {
  const res = await hhApi.get(`/vacancies/${id}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return res.data;
}
