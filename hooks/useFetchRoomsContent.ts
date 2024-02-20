import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = (tab?: string, parentId?: number) => ['tabRoomsContent', tab, parentId];

export function useFetchRoomsContent(tab?: string, parentId?: number) {
  return useQuery({
    queryKey: QUERY_KEY(tab, parentId),
    queryFn: async () => {
      const headers = new Headers();
      headers.append('X-TenantId', '4');
      const response = await fetch(
        `https://api.selectumhotels.com/api/v1/FileManager/${tab}?fileType=2&parentId=${parentId}`,
        { headers }
      );
      return response.json();
    },
    enabled: !!tab && !!parentId,
  });
}
