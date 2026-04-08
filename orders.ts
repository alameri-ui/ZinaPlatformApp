import { api } from "../lib/api";

export const getStores = () =>
  api.get("/api/stores").then(r => r.data);

export const createStore = (data: {
  nameAr: string; name: string; slug: string;
  ownerName: string; ownerEmail: string;
  ownerPhone?: string; category?: string; colorTheme?: string;
}) => api.post("/api/stores", data).then(r => r.data);

export const updateStore = (id: number, data: any) =>
  api.patch(`/api/stores/${id}`, data).then(r => r.data);

export const deleteStore = (id: number) =>
  api.delete(`/api/stores/${id}`).then(r => r.data);

export const getStore = (id: number) =>
  api.get(`/api/stores/${id}`).then(r => r.data);
