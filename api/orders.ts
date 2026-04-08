import { api } from "../lib/api";

export const getOrders = (page = 1) =>
  api.get(`/api/orders?page=${page}`).then(r => r.data);

export const updateOrderStatus = (id: number, status: string) =>
  api.patch(`/api/orders/${id}/status`, { status }).then(r => r.data);
