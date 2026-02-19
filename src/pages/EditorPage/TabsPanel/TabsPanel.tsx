import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MdFeed, MdPerson, MdSchool, MdStar, MdWork } from 'react-icons/md';
import { IoMdTrophy } from 'react-icons/io';

import Tab from '@/components/Tabs/Tab';
import TabsWrapper from '@/components/Tabs/TabsWrapper';

import styles from './TabsPanel.module.scss';
import { allEditorTabs, EditorTabs } from '../types';

type Props = {
  selectedTab: EditorTabs;
  onTabChange: (tab: EditorTabs) => void;
}

const TabsPanel = ({ selectedTab, onTabChange }: Props) => {
  const { t } = useTranslation();

  const renderTabIcon = (tab: EditorTabs) => {
    switch (tab) {
      case EditorTabs.Basic: return <MdPerson />;
      case EditorTabs.Summary: return <MdFeed />;
      case EditorTabs.Skills: return <MdStar />;
      case EditorTabs.Experience: return <MdWork />;
      case EditorTabs.Education: return <MdSchool />;
      case EditorTabs.Certifications: return <IoMdTrophy />;
      default: return null;
    }
  }

  const tabs = useMemo(() => allEditorTabs.map(tab => (
    <Tab
      id={tab}
      key={tab}
      className={styles.tab}
    >
      {renderTabIcon(tab)}
      <span className={styles.tabText}>
        {t(`editor.tabs.${tab}`)}
      </span>
    </Tab>
  )), [selectedTab]);

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
            {tabs}
          </TabsWrapper>
        </div>
      </div>
    </section>
  )
}

export default TabsPanel;
