import { FC } from 'react';
import { Box, TextInput, Group, Button } from '@mantine/core';
import { TypeForm } from '../../App/types/types';
import { useMask } from '@react-input/mask';

type Props = {
  form: TypeForm;
  setIsStartFilling: (value: boolean) => void;
};

export const StartingForm: FC<Props> = ({ form, setIsStartFilling }) => {
  const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });
  return (
    <Box maw={340}>
      <TextInput
        ref={inputRef}
        mb={16}
        label='Номер телефона'
        placeholder='+7 (999) 999-99-99'
        withAsterisk
        {...form.getInputProps('phone')}
      />
      <TextInput
        mb={16}
        label='Email'
        placeholder='your@email.com'
        withAsterisk
        {...form.getInputProps('email')}
      />
      <Group justify='flex-start'>
        <Button
          type='button'
          onClick={() => {
            if (form.validateField('phone').hasError || form.validateField('email').hasError) {
              return;
            }
            setIsStartFilling(true);
          }}
        >
          Начать
        </Button>
      </Group>
    </Box>
  );
};
