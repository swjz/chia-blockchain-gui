import { useLocalStorage, writeStorage } from '@rehooks/local-storage';

export default function useLocale(
  defaultLocale: string,
): [string, (locale: string) => void] {
  let [locale] = useLocalStorage('locale');

  if (locale && locale.length === 2) {
    locale = null;
  }

  function handleSetLocale(locale: string) {
    writeStorage('locale', locale);
  }

  return [locale ?? defaultLocale, handleSetLocale];
}
