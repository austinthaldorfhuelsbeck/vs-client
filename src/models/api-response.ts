import { AppError } from "./app-error";
import { UserProfile } from "./user-profile";

export interface ApiResponse {
  data: UserProfile | null;
  error: AppError | null;
}
