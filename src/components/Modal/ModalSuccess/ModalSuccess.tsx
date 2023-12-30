import { Paper, Group, Flex, Button } from '@mantine/core';
import successIcon from '../../../img/successIcon.png';
import { FC } from 'react';

type Props = {
  returnStartPage: () => void;
};

export const ModalSuccess: FC<Props> = ({ returnStartPage }) => {
  return (
    <Paper withBorder p='lg' radius='md' shadow='md' w={'100%'}>
      <Flex justify={'center'} mb={'md'}>
        <h3>Форма успешно отправлена </h3>
      </Flex>
      <Flex justify={'center'} p={50}>
        <img src={successIcon} alt='x' />
      </Flex>
      <Group justify='center' mt='md'>
        <Button variant='filled' size='md' onClick={returnStartPage}>
          На главную
        </Button>
      </Group>
    </Paper>
  );
};
