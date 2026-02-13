import { useTranslation } from 'react-i18next';

import Tab from '@/components/Tabs/Tab';
import TabsWrapper from '@/components/Tabs/TabsWrapper';

import { allEditorTabs, type EditorTabs } from '../types';
import styles from './TabsPanel.module.scss';

type Props = {
  selectedTab: EditorTabs;
  onTabChange: (tab: EditorTabs) => void;
}

const TabsPanel = ({ selectedTab, onTabChange }: Props) => {
  const { t } = useTranslation();

  return (
    <section className={styles.panel}>
      <div className={styles.wrapper}>
        <div className={styles.tabs}>
          <TabsWrapper
            orientation="vertical"
            keyboardActivation="manual"
            selectedKey={selectedTab}
            onSelectionChange={tab => onTabChange(tab as EditorTabs)}
          >
            {allEditorTabs.map(tab => (
              <Tab
                id={tab}
                key={tab}
              >
                {t(`editor.tabs.${tab}`)}
              </Tab>
            ))}
          </TabsWrapper>
        </div>
      </div>
    </section>
  )
}

export default TabsPanel;
