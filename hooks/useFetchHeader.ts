import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = ['tabHeader'];

export function useFetchHeader() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      try {
        const headers = new Headers();
        headers.append('X-TenantId', '4');
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/FileManager/gallery?fileType=1`, { headers });
        return response.json();
      } catch {
        return null;
      }
    },
  });
}
