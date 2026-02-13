import TabsPanel from './TabsPanel/TabsPanel';

import { useEditorTabs } from './hooks/useEditorTabs';
import styles from './EditorPage.module.scss';

const EditorPage = () => {
  const { selectedTab, setSelectedTab } = useEditorTabs();

  return (
    <div className={styles.page}>
      <TabsPanel
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
    </div>
  )
}

export default EditorPage;
