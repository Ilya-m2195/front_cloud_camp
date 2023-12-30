import { Flex } from '@mantine/core';
import { AdvantagesInputGroup } from '../../components/AdvantagesInputGroup/AdvantagesInputGroup';
import { CheckboxGroup } from '../../components/CheckboxGroup/CheckboxGroup';
import { RadioGroup } from '../../components/RadioGroup/RadioGroup';
import { FC } from 'react';
import { FormProps } from '../../App/types/types';

export const PageStepTwo: FC<FormProps> = ({ form }) => {
  return (
    <Flex direction={'column'} gap={24}>
      <AdvantagesInputGroup form={form} />
      <CheckboxGroup form={form} />
      <RadioGroup form={form} />
    </Flex>
  );
};
