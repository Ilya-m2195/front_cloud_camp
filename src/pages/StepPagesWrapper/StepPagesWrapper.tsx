import { Button, Container, Group, Stepper } from '@mantine/core';
import { ReactNode, useState, FC } from 'react';
import { PageStepOne } from '../PageStepOne/PageStepOne';
import { PageStepTwo } from '../PageStepTwo/PageStepTwo';
import { PageStepThree } from '../PageStepThree/PageStepThree';
import { TypeForm } from '../../App/types/types';
import { RootState } from '../../App/store/store';
import { ModalWindow } from '../../components/Modal/ModalWindow';
import { useAppSelector } from '../../hooks/useAppSelector';

const containerProps = {
  maw: '900px',
  p: '110px 62px'
};
enum buttonValue {
  next = 'Далее',
  submit = 'Отправить'
}

enum buttonType {
  button = 'button',
  submit = 'submit'
}

enum pageRange {
  maxPage = 3,
  null = 0
}

type Props = {
  form: TypeForm;
  setIsStartFilling: (value: boolean) => void;
};

export const StepPagesWrapper: FC<Props> = ({ form, setIsStartFilling }) => {
  const value = useAppSelector((state: RootState) => state.userSlice.loading);
  const [active, setActive] = useState(0);
  const returnStartPage = () => setIsStartFilling(false);
  const nextStep = () =>
    setActive((current) => (current < pageRange.maxPage ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > pageRange.null ? current - 1 : current));

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
        <Button type={active <= 2 ? buttonType.button : buttonType.submit} onClick={nextStep}>
          {active < 2 ? buttonValue.next : buttonValue.submit}
        </Button>
      </Group>
    </Container>
  );
};
