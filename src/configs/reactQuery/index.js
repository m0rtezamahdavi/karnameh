import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const queryErrorHandler = (error) => {
  toast.error(error.response.data);
};

export function generateQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 0,
        cacheTime: 900000,
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false,
        // retry: false
      },
      mutations: {
        onError: queryErrorHandler
      }
    }
  });
}

export const queryClient = generateQueryClient();
