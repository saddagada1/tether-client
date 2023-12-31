/**
 * Generated by orval v6.22.1 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import { useMutation } from "@tanstack/react-query";
import type {
  MutationFunction,
  UseMutationOptions,
} from "@tanstack/react-query";
import type {
  AuthenticationResponse,
  LoginRequest,
  RegisterRequest,
} from "../../model";
import { customInstance } from "../../lib/axios";
import type { BodyType } from "../../lib/axios";

export const registerUser = (registerRequest: BodyType<RegisterRequest>) => {
  return customInstance<AuthenticationResponse>({
    url: `/auth/register`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: registerRequest,
  });
};

export const getRegisterUserMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof registerUser>>,
    TError,
    { data: BodyType<RegisterRequest> },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof registerUser>>,
  TError,
  { data: BodyType<RegisterRequest> },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof registerUser>>,
    { data: BodyType<RegisterRequest> }
  > = (props) => {
    const { data } = props ?? {};

    return registerUser(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type RegisterUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof registerUser>>
>;
export type RegisterUserMutationBody = BodyType<RegisterRequest>;
export type RegisterUserMutationError = unknown;

export const useRegisterUser = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof registerUser>>,
    TError,
    { data: BodyType<RegisterRequest> },
    TContext
  >;
}) => {
  const mutationOptions = getRegisterUserMutationOptions(options);

  return useMutation(mutationOptions);
};
export const refreshToken = () => {
  return customInstance<AuthenticationResponse>({
    url: `/auth/refresh_token`,
    method: "POST",
  });
};

export const getRefreshTokenMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof refreshToken>>,
    TError,
    void,
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof refreshToken>>,
  TError,
  void,
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof refreshToken>>,
    void
  > = () => {
    return refreshToken();
  };

  return { mutationFn, ...mutationOptions };
};

export type RefreshTokenMutationResult = NonNullable<
  Awaited<ReturnType<typeof refreshToken>>
>;

export type RefreshTokenMutationError = unknown;

export const useRefreshToken = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof refreshToken>>,
    TError,
    void,
    TContext
  >;
}) => {
  const mutationOptions = getRefreshTokenMutationOptions(options);

  return useMutation(mutationOptions);
};
export const logoutUser = () => {
  return customInstance<string>({ url: `/auth/logout`, method: "POST" });
};

export const getLogoutUserMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof logoutUser>>,
    TError,
    void,
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof logoutUser>>,
  TError,
  void,
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof logoutUser>>,
    void
  > = () => {
    return logoutUser();
  };

  return { mutationFn, ...mutationOptions };
};

export type LogoutUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof logoutUser>>
>;

export type LogoutUserMutationError = unknown;

export const useLogoutUser = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof logoutUser>>,
    TError,
    void,
    TContext
  >;
}) => {
  const mutationOptions = getLogoutUserMutationOptions(options);

  return useMutation(mutationOptions);
};
export const loginUser = (loginRequest: BodyType<LoginRequest>) => {
  return customInstance<AuthenticationResponse>({
    url: `/auth/login`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: loginRequest,
  });
};

export const getLoginUserMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof loginUser>>,
    TError,
    { data: BodyType<LoginRequest> },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof loginUser>>,
  TError,
  { data: BodyType<LoginRequest> },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof loginUser>>,
    { data: BodyType<LoginRequest> }
  > = (props) => {
    const { data } = props ?? {};

    return loginUser(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type LoginUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof loginUser>>
>;
export type LoginUserMutationBody = BodyType<LoginRequest>;
export type LoginUserMutationError = unknown;

export const useLoginUser = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof loginUser>>,
    TError,
    { data: BodyType<LoginRequest> },
    TContext
  >;
}) => {
  const mutationOptions = getLoginUserMutationOptions(options);

  return useMutation(mutationOptions);
};
