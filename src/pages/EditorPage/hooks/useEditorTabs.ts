import { useState } from 'react';
import { EditorTabs } from '../types';


export const useEditorTabs = () => {
  const [selectedTab, setSelectedTab] = useState(EditorTabs.Basic);

  return {
    selectedTab,
    setSelectedTab
  }
}