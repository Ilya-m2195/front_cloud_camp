import { useDispatch } from 'react-redux';
import { AppDispatch } from '../App/store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
