import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { className, onClose, isOpen } = props;

  return (
    <Modal
      lazy
      onClose={onClose}
      isOpen={isOpen}
      className={classNames(cls.loginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};
