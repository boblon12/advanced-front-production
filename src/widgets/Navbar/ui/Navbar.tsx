/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsopen] = useState(false);
  const onToggleOpen = useCallback(() => {
    setIsopen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.INVERTED_BACKGROUND}
        className={cls.links}
        onClick={onToggleOpen}
      >
        {t('login')}
      </Button>
      <Modal isOpen={isOpen} onClose={onToggleOpen}>
        Lorem ipsum wefewf wefwefew wefewf wefwefew ewfwe wefwefew
      </Modal>
    </div>
  );
};
