import { useForm } from '@mantine/form';
import { Header } from '../../components/Header/Header';
import { StartingForm } from '../../components/StartingForm/StartingForm';
import { StepPagesWrapper } from '../StepPagesWrapper/StepPagesWrapper';
import { useState } from 'react';
import { IUserForm } from '../../App/types/types';
import { postUser } from '../../App/store/userSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const StartingPage = () => {
  const [isStartFilling, setIsStartFilling] = useState(false);
  const dispatch = useAppDispatch();

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
    validate: {
      phone: (value) =>
        /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(
          value
        )
          ? null
          : 'Invalid phone',
      email: (value) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(value) ? null : 'Invalid email',
      name: (value) => (value.length > 50 ? 'Name must contain no more than 50 letters' : null),
      surname: (value) => (value.length > 50 ? 'Name must contain no more than 50 letters' : null),
      nickname: (value) => (value.length > 30 ? 'Name must contain no more than 30 letters' : null),
      about: (value) =>
        value.split(' ').join('').length > 200
          ? 'about must contain no more than 200 letters'
          : null
    }
  });
  return (
    <div>
      <Header name={form.values.name} surname={form.values.surname} />
      <form onSubmit={form.onSubmit((values: IUserForm) => dispatch(postUser(values)))}>
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
