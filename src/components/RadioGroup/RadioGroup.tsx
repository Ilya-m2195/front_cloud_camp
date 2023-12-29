import { Radio } from '@mantine/core';
import { FormProps } from '../../App/types/types';
import { FC } from 'react';

export const RadioGroup: FC<FormProps> = ({ form }) => {
  return (
    <div>
      <Radio.Group {...form.getInputProps('radio')} name='radio' withAsterisk>
        <h3>{'Radio group'}</h3>
        <Radio value='1' label='1' mb={5} />
        <Radio value='2' label='2' mb={5} />
        <Radio value='3' label='3' mb={5} />
      </Radio.Group>
    </div>
  );
};
