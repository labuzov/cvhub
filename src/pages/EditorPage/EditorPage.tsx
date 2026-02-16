import { useEditorTabs } from './hooks/useEditorTabs';
import TabsPanel from './TabsPanel/TabsPanel';
import { EditorForm } from './EditorForm/EditorForm';
import styles from './EditorPage.module.scss';
import { CVPreview } from './CVPreview/CVPreview';

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
      <CVPreview />
    </div>
  )
}

export default EditorPage;
