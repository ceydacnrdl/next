import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = ['tabHeader'];

export function useFetchHeader() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const headers = new Headers();
      headers.append('X-TenantId', '4');
      const response = await fetch('https://api.selectumhotels.com/api/v1/FileManager/gallery?fileType=1', { headers });
      return response.json();
    },
  });
}
