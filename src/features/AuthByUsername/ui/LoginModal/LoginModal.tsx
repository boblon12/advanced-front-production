import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => {
  return (
    <Modal lazy onClose={onClose} isOpen={isOpen}>
      <LoginForm />
    </Modal>
  );
};
