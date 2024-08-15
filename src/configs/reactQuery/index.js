import { QueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const queryErrorHandler = (error) => {
  toast.error(error.response.data);
};

export function generateQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  });
}

export const queryClient = generateQueryClient();
