import { Modal } from '@mantine/core';
import { ModalError } from './ModalError/ModalError';
import { ModalSuccess } from './ModalSuccess/ModalSuccess';
import { FC, useState } from 'react';

type Props = {
  value: string;
  returnStartPage: () => void;
};

export const ModalWindow: FC<Props> = ({ value, returnStartPage }) => {
  const [isClose, setOnClose] = useState(true);
  const onClose = () => setOnClose(false);

  return (
    <>
      <Modal opened={isClose} centered onClose={onClose}>
        {value === 'failed' ? (
          <ModalError onClose={onClose} />
        ) : (
          <ModalSuccess returnStartPage={returnStartPage} />
        )}
      </Modal>
    </>
  );
};
