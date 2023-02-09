import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleCollapse}>{t('toggle')}</button>
      <div className={cls.switchers}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
