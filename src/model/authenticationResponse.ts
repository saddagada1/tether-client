/**
 * Generated by orval v6.22.1 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { UserResponse } from "./userResponse";

export interface AuthenticationResponse {
  accessToken: string;
  expiresAt: string;
  refreshToken: string;
  user: UserResponse;
}
