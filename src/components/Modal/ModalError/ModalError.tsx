import { Paper, Group, Button, Flex } from '@mantine/core';
import errorIcon from '../../../img/errorIcon.png';
import { FC } from 'react';

type Props = {
  onClose: () => void;
};

export const ModalError: FC<Props> = ({ onClose }) => {
  return (
    <Paper withBorder p='lg' radius='md' shadow='md' w={'100%'}>
      <Group justify='space-between' mb='xs'>
        <h3>Ошибка</h3>
      </Group>
      <Flex justify={'center'} p={50}>
        <img src={errorIcon} alt='x' />
      </Flex>
      <Group justify='flex-end' mt='md'>
        <Button variant='filled' size='md' onClick={onClose}>
          Закрыть
        </Button>
      </Group>
    </Paper>
  );
};
