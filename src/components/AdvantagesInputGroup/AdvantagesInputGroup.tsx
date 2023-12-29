import { Group, TextInput, ActionIcon, Box, Button } from '@mantine/core';
import { FormProps } from '../../App/types/types';
import { randomId } from '@mantine/hooks';
import { FC } from 'react';
import { FaTrash } from 'react-icons/fa';

export const AdvantagesInputGroup: FC<FormProps> = ({ form }) => {
  const fields = form.values.advantages.map((item, index) => (
    <Group key={item.key} mt='xs'>
      <TextInput
        placeholder='Enter your advantage'
        withAsterisk
        style={{ flex: 1 }}
        {...form.getInputProps(`advantages.${index}.advantage`)}
      />
      <ActionIcon color='red' onClick={() => form.removeListItem('advantages', index)}>
        <FaTrash size='1rem' />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box maw={300}>
      <h3>Advantages</h3>
      {fields}
      <Group justify='start' mt='md'>
        <Button
          onClick={() => form.insertListItem('advantages', { advantage: '', key: randomId() })}
        >
          +
        </Button>
      </Group>
    </Box>
  );
};
