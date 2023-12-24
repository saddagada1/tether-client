/**
 * Generated by orval v6.22.1 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import { useQuery } from "@tanstack/react-query";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { customInstance } from "../../lib/axios";

export const getProductVersion = (signal?: AbortSignal) => {
  return customInstance<string>({
    url: `/admin/products`,
    method: "GET",
    signal,
  });
};

export const getGetProductVersionQueryKey = () => {
  return [`/admin/products`] as const;
};

export const getGetProductVersionQueryOptions = <
  TData = Awaited<ReturnType<typeof getProductVersion>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getProductVersion>>,
      TError,
      TData
    >
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetProductVersionQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getProductVersion>>
  > = ({ signal }) => getProductVersion(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getProductVersion>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetProductVersionQueryResult = NonNullable<
  Awaited<ReturnType<typeof getProductVersion>>
>;
export type GetProductVersionQueryError = unknown;

export const useGetProductVersion = <
  TData = Awaited<ReturnType<typeof getProductVersion>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getProductVersion>>,
      TError,
      TData
    >
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetProductVersionQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};