import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        autoFocus
        type="text"
        className={cls.input}
        placeholder={t('enter-username')}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('enter-password')}
      />
      <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
        {t('login')}
      </Button>
    </div>
  );
};
