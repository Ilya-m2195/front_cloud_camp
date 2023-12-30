import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../App/store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
