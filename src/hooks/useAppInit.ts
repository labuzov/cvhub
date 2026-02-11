import { useI18nInit } from './useI18nInit';


export const useAppInit = () => {
  const { isI18nInit } = useI18nInit();

  return {
    isAppInit: isI18nInit
  }
}