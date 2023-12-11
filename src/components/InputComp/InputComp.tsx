import { Input } from '@mantine/core';
import { FC } from 'react';

type Props = {
  label: string;
  placeholder: string;
};

export const InputComp: FC<Props> = ({ label, placeholder }) => {
  return (
    <Input.Wrapper label={label} mb={24} w={400}>
      <Input placeholder={placeholder} />
    </Input.Wrapper>
  );
};
