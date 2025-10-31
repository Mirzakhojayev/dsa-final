import { create } from 'zustand';

type Language = 'Cpp' | 'Python' | 'JavaScript' | 'Java';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'JavaScript',
  setLanguage: (lang) => set({ language: lang }),
}));
