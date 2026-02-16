import { useEditorTabs } from './hooks/useEditorTabs';
import TabsPanel from './TabsPanel/TabsPanel';
import { EditorForm } from './EditorForm/EditorForm';
import styles from './EditorPage.module.scss';

const EditorPage = () => {
  const { selectedTab, setSelectedTab } = useEditorTabs();

  return (
    <div className={styles.page}>
      <TabsPanel
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
      <EditorForm
        selectedTab={selectedTab}
      />
    </div>
  )
}

export default EditorPage;
