import { useEditorTabs } from './hooks/useEditorTabs';
import TabsPanel from './TabsPanel/TabsPanel';
import { EditorForm } from './EditorForm/EditorForm';
import { CVPreview } from './CVPreview/CVPreview';
import styles from './EditorPage.module.scss';


const EditorPage = () => {
  const {
    selectedTab,
    isPrevTabDisabled,
    isNextTabDisabled,
    setSelectedTab,
    setPrevTab,
    setNextTab,
  } = useEditorTabs();

  return (
    <div className={styles.page}>
      <TabsPanel
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
      <EditorForm
        selectedTab={selectedTab}
        isPrevTabDisabled={isPrevTabDisabled}
        isNextTabDisabled={isNextTabDisabled}
        onPrevTabClick={setPrevTab}
        onNextTabClick={setNextTab}
      />
      <CVPreview />
    </div>
  )
}

export default EditorPage;
