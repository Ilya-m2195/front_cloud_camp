import { Textarea } from '@mantine/core';
import { FC } from 'react';
import { FormProps } from '../../App/types/types';

export const PageStepThree: FC<FormProps> = ({ form }) => {
  return (
    <div>
      <Textarea
        {...form.getInputProps('about')}
        label='About'
        placeholder='Enter about you'
        autosize
      />
    </div>
  );
};
