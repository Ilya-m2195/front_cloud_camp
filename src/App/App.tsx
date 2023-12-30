import { Container, MantineProvider, createTheme } from '@mantine/core';
import './styles/normalize.css';
import './styles/app.css';
import '@mantine/core/styles.css';
import { StartingPage } from '../pages/StartingPage/StartingPage';

const theme = createTheme({
  fontFamily: 'SB Sans Interface, sans-serif',
  defaultRadius: 'md'
});

const containerProps = {
  bg: '#fff',
  maw: '900px',
  p: '24px 38px'
};

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Container {...containerProps}>
        <StartingPage />
      </Container>
    </MantineProvider>
  );
};
