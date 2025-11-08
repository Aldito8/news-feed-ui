import { api } from "@/utils/axios"
import type { AuthPayload } from "@/types/auth"

export const login = (payload: AuthPayload) => api.post("/api/login", payload)
export const register = (payload: AuthPayload) => api.post("/api/register", payload)
