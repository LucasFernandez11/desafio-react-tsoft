import { useState, useEffect, useCallback } from 'react';
import { tmdb } from '../services/api'; // Instancia centralizada

interface RequestError {
  name: string;
  message: string;
  stack?: string;
}

interface IParams {
  language?: string;
  page?: string | number;
  [key: string]: unknown;
}

const DEFAULT_PARAMS: IParams = {
  language: 'es-ES',
  page: 1,
};

export const useApi = <T,>(path: string, params?: Partial<IParams>) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<RequestError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data: responseData, status } = await tmdb.get(path, {
        params: {
          ...DEFAULT_PARAMS,
          ...(params || {}),
        },
      });

      setData(responseData as T);
      setStatus(status);
      setError(null);
    } catch (err) {
      const errorObj = err instanceof Error
        ? {
            name: err.name,
            message: err.message,
            stack: err.stack,
          }
        : {
            name: 'UnknownError',
            message: 'An unknown error occurred',
          };
      setError(errorObj);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, [path, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    error,
    status,
  };
};

export default useApi;
