import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18nextForTesting from 'shared/config/i18n/i18nForTest';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Theme } from 'shared/const/theme';
import '@/app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

interface ComponentRenderOptions {
  route?: string;
  theme?: Theme;
  initialState?: DeepPartial<StateSchema>;
}

interface TestProviderProps {
  children: ReactNode;
  options?: ComponentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
  const { options = {}, children } = props;

  const { route = '/', theme = Theme.LIGHT, initialState } = options;

  return (
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider initialTheme={theme}>
          <I18nextProvider i18n={i18nextForTesting}>
            <div className={`app ${theme}`}>{children}</div>
          </I18nextProvider>
        </ThemeProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}

export function componentRender(
  component: ReactNode,
  options?: ComponentRenderOptions
) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
