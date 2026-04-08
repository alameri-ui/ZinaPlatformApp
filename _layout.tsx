import { api } from "../lib/api";

// محفظة متجر
export const getStoreWallet = (storeId: number) =>
  api.get(`/api/wallets/store/${storeId}`).then(r => r.data);

export const topupStoreWallet = (storeId: number, amount: number) =>
  api.post(`/api/wallets/store/${storeId}/topup`, { amount }).then(r => r.data);

// محفظة زبون
export const getCustomerWallet = (customerId: number) =>
  api.get(`/api/wallets/customer/${customerId}`).then(r => r.data);
