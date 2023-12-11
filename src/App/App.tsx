import { Button, Container, MantineProvider, createTheme } from '@mantine/core';
import './styles/normalize.css';
import './styles/app.css';
import '@mantine/core/styles.css';
import { InputComp } from '../components/InputComp/InputComp';
import { Header } from '../components/Header/Header';

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
        <Header />
        <InputComp label={'Номер телефона'} placeholder={'+7 999 999-99-99'} />
        <InputComp label={'email'} placeholder={'tim.jennings@example.com'} />
        <Button variant='filled' mt={24}>
          Начать
        </Button>
      </Container>
    </MantineProvider>
  );
};
