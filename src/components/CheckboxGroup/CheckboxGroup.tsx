import { Checkbox, Flex } from '@mantine/core';
import { FC } from 'react';
import { FormProps } from '../../App/types/types';

export const CheckboxGroup: FC<FormProps> = ({ form }) => {
  return (
    <Checkbox.Group {...form.getInputProps('checkbox')}>
      <h3>CheckBox group</h3>
      <Flex mt='xs' direction={'column'}>
        <Checkbox value={`1`} label={`1`} variant='outline' mb={5} />
        <Checkbox value={`2`} label={`2`} variant='outline' mb={5} />
        <Checkbox value={`3`} label={`3`} variant='outline' mb={5} />
      </Flex>
    </Checkbox.Group>
  );
};
