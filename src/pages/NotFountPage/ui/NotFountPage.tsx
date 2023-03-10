import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFountPage.module.scss';

interface NotFountPageProps {
  className?: string;
}

export const NotFountPage: React.FC<NotFountPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFountPage, {}, [className])}>
      {t('NotFoundPage')}
    </div>
  );
};
