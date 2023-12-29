import { Button, Container, Group, Stepper } from '@mantine/core';
import { ReactNode, useState, FC } from 'react';
import { PageStepOne } from '../PageStepOne/PageStepOne';
import { PageStepTwo } from '../PageStepTwo/PageStepTwo';
import { PageStepThree } from '../PageStepThree/PageStepThree';
import { TypeForm } from '../../App/types/types';
import { RootState } from '../../App/store/store';
import { useSelector } from 'react-redux';
import { ModalWindow } from '../../components/Modal/ModalWindow';

const containerProps = {
  maw: '900px',
  p: '110px 62px'
};

type Props = {
  form: TypeForm;
  setIsStartFilling: (value: boolean) => void;
};

export const StepPagesWrapper: FC<Props> = ({ form, setIsStartFilling }) => {
  const value = useSelector((state: RootState) => state.userSlice.loading);
  const [active, setActive] = useState(0);
  const returnStartPage = () => setIsStartFilling(false);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const returnStep = (value: number): ReactNode => {
    switch (value) {
      case 0:
        return <PageStepOne form={form} />;
      case 1:
        return <PageStepTwo form={form} />;
      case 2:
        return <PageStepThree form={form} />;
    }
  };

  return (
    <Container {...containerProps}>
      <Stepper active={active} onStepClick={setActive} mb={64}>
        <Stepper.Step></Stepper.Step>
        <Stepper.Step></Stepper.Step>
        <Stepper.Step></Stepper.Step>
        <Stepper.Completed>
          {value && <ModalWindow value={value} returnStartPage={returnStartPage} />}
        </Stepper.Completed>
      </Stepper>
      {returnStep(active)}
      <Group justify='space-between' mt='64'>
        <Button variant='outline' onClick={active ? prevStep : returnStartPage}>
          Назад
        </Button>
        <Button type={active <= 2 ? 'button' : 'submit'} onClick={nextStep}>
          {active < 2 ? 'Далее' : 'Отправить'}
        </Button>
      </Group>
    </Container>
  );
};
