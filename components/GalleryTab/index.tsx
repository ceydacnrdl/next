import React from 'react';
import TabHeader from './TabHeader';
import TabContent from './TabContent';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  const { tab: activeTab } = router.query as { tab: string };

  const defaultTab = activeTab || 'general';

  return (
    <div>
      <TabHeader activeTab={defaultTab} />
      <TabContent activeTab={defaultTab} />
    </div>
  );
}
