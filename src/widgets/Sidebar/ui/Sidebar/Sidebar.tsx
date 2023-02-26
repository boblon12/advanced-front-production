import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/Button';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface SidebarProps {
  classname?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ classname }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        classname,
      ])}
    >
      <div className={cls.items}>
        <AppLink to={RoutePath.main} className={cls.item}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('main')}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('about')}</span>
        </AppLink>
      </div>
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleCollapse}
        className={cls.collapsedBtn}
        theme={ButtonTheme.INVERTED_BACKGROUND}
        square
        size={ButtonSize.M}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div
        className={classNames(
          cls.switchers,
          { [cls.expanded]: !collapsed },
          []
        )}
      >
        <LangSwitcher short={collapsed} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
