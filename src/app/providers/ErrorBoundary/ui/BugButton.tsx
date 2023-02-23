import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface BagButtonProps {
  className?: string;
}

export const BugButton: React.FC<BagButtonProps> = () => {
  const { t } = useTranslation('about');
  const [error, setError] = useState<boolean>(false);
  const onThrow = () => setError(true);
  useEffect(() => {
    if (error) {
      throw new Error('Error');
    }
  }, [error]);

  return <Button onClick={onThrow}>{t('throw-error')}</Button>;
};
