import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.link}>
        <AppLink to={'/'} className={cls.Mainlink}>
          Main
        </AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
    </div>
  );
};
