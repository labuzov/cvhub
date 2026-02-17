import { useState } from 'react';
import { allEditorTabs, EditorTabs } from '../types';


export const useEditorTabs = () => {
  const [selectedTab, setSelectedTab] = useState(EditorTabs.Basic);

  const index = allEditorTabs.indexOf(selectedTab);
  const isPrevTabDisabled = index === 0;
  const isNextTabDisabled = index === allEditorTabs.length - 1;

  const setPrevTab = () => {
    if (isPrevTabDisabled) return;

    setSelectedTab(allEditorTabs[index - 1]);
  }

  const setNextTab = () => {
    if (isNextTabDisabled) return;

    setSelectedTab(allEditorTabs[index + 1]);
  }

  return {
    selectedTab,
    isPrevTabDisabled,
    isNextTabDisabled,
    setSelectedTab,
    setPrevTab,
    setNextTab,
  }
}