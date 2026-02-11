import { useEffect, useState } from 'react';

import i18n from '@/i18n/i18n';


export const useI18nInit = () => {
  const [isInit, setIsInit] = useState(!!i18n.isInitialized);

  useEffect(() => {
    i18n.on('initialized', handleInitChange);

    return () => {
      i18n.off('initialized', handleInitChange);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInitChange = () => {
    setIsInit(true);
  }

  return {
    isI18nInit: isInit
  };
}
