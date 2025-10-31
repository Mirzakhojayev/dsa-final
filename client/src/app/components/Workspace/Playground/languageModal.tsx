import React from 'react'
import { useLanguageStore } from '@/store/useLanguageStore'

interface LanguageModalProps {
  onClose: () => void;
}

const LanguageModal = ({ onClose }: LanguageModalProps) => {
  const { language, setLanguage } = useLanguageStore();
  
  const languages = ['Cpp', 'Python', 'JavaScript', 'Java'] as const;

  const handleLanguageSelect = (lang: typeof languages[number]) => {
    setLanguage(lang);
    onClose();
  };

  return (
    <div className='flex'>
      <div className='flex-grow p-4 text-[#b4b4b4]'>
        <h2 className='text-lg font-semibold'>Select Language</h2>
        <ul className='mt-2'>
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() =>  handleLanguageSelect(lang)}
              className={`py-1 p-1 rounded cursor-pointer ${
                language === lang ? 'bg-[#444444]' : 'hover:bg-[#333333]'
              }`}
            >
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LanguageModal;