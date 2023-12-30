import { Box, NativeSelect, TextInput } from '@mantine/core';
import { FC } from 'react';
import { FormProps } from '../../App/types/types';

export const PageStepOne: FC<FormProps> = ({ form }) => {
  return (
    <Box maw={340} m={0}>
      <TextInput
        label='Nickname'
        placeholder='Enter nickname'
        {...form.getInputProps('nickname')}
      />
      <TextInput label='Name' placeholder='Enter name' {...form.getInputProps('name')} />
      <TextInput label='Surname' placeholder='Enter surname' {...form.getInputProps('surname')} />
      <NativeSelect label='Sex' data={['man', 'woman']} {...form.getInputProps('sex')} />
    </Box>
  );
};
