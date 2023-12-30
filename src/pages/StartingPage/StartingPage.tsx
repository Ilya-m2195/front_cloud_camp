import { useForm } from '@mantine/form';
import { Header } from '../../components/Header/Header';
import { StartingForm } from '../../components/StartingForm/StartingForm';
import { StepPagesWrapper } from '../StepPagesWrapper/StepPagesWrapper';
import { useState } from 'react';
import { IUserForm } from '../../App/types/types';
import { postUser } from '../../App/store/userSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { validateHelper } from '../../helpers/validateHelper';

export const StartingPage = () => {
  const [isStartFilling, setIsStartFilling] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmitHandler = (values: IUserForm) => dispatch(postUser(values));

  const form = useForm<IUserForm>({
    initialValues: {
      phone: '',
      email: '',
      nickname: '',
      name: '',
      surname: '',
      sex: 'man',
      advantages: [
        {
          advantage: '',
          key: 'mantine-kj3p299ol'
        }
      ],
      radio: 0,
      checkbox: [],
      about: ''
    },
    validate: validateHelper()
  });
  return (
    <div>
      <Header name={form.values.name} surname={form.values.surname} />
      <form onSubmit={form.onSubmit(onSubmitHandler)}>
        {!isStartFilling ? (
          <StartingForm setIsStartFilling={setIsStartFilling} form={form} />
        ) : (
          <StepPagesWrapper form={form} setIsStartFilling={setIsStartFilling} />
        )}
        <div></div>
      </form>
    </div>
  );
};
