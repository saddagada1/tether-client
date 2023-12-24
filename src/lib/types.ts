export interface QueuedRequest {
  resolve: (value: unknown) => void;
  reject: (reason?: unknown) => void;
}

export interface ApiError {
  subject: string;
  message: string;
}
