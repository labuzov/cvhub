import { useTranslation } from 'react-i18next';
import { MdFeed, MdPerson, MdSchool, MdStar, MdWork } from 'react-icons/md';
import { IoMdTrophy } from 'react-icons/io';

import Tab from '@/components/Tabs/Tab';
import TabsWrapper from '@/components/Tabs/TabsWrapper';

import styles from './TabsPanel.module.scss';
import { type EditorTabs } from '../types';

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
            <Tab
              id="basic"
              className={styles.tab}
            >
              <MdPerson />
              {t('editor.tabs.basic')}
            </Tab>
            <Tab
              id="summary"
              className={styles.tab}
            >
              <MdFeed />
              {t('editor.tabs.summary')}
            </Tab>
            <Tab
              id="skills"
              className={styles.tab}
            >
              <MdStar />
              {t('editor.tabs.skills')}
            </Tab>
            <Tab
              id="experience"
              className={styles.tab}
            >
              <MdWork />
              {t('editor.tabs.experience')}
            </Tab>
            <Tab
              id="education"
              className={styles.tab}
            >
              <MdSchool />
              {t('editor.tabs.education')}
            </Tab>
            <Tab
              id="certifications"
              className={styles.tab}
            >
              <IoMdTrophy />
              {t('editor.tabs.certifications')}
            </Tab>
          </TabsWrapper>
        </div>
      </div>
    </section>
  )
}

export default TabsPanel;
