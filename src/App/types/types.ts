import { UseFormReturnType } from '@mantine/form';

export interface IAdvantage {
  advantage: string;
  key: string;
}

export interface IUserForm {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: string;
  advantages: Array<IAdvantage>;
  radio: number;
  checkbox: Array<number>;
  about: string;
}

export interface IUserInitialState {
  loading: null | 'pending' | 'succeeded' | 'failed';
}

export type FormProps = {
  form: TypeForm;
};

export type TypeForm = UseFormReturnType<IUserForm>;
