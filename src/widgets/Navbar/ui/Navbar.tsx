import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsopen] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsopen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsopen(true);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.INVERTED_BACKGROUND}
        className={cls.links}
        onClick={onOpenModal}
      >
        {t('login')}
      </Button>
      <LoginModal onClose={onCloseModal} isOpen={isOpen} />
    </div>
  );
};
