import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = (tab: string, parentId?: number) => ['tabContent', tab, parentId];

export function useFetchContent(tab: string, parentId?: number) {
  return useQuery({
    queryKey: QUERY_KEY(tab, parentId),
    queryFn: async () => {
      const headers = new Headers();
      headers.append('X-TenantId', '4');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/FileManager/${tab}?fileType=2&parentId=${parentId}`,
        {
          headers,
        }
      );
      return response.json();
    },
    enabled: !!tab && !!parentId,
  });
}
