import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, RootState, AppStore } from './store'

/** Use in place of plain `useDispatch` to get correct AppDispatch type */
export const useAppDispatch = () => useDispatch<AppDispatch>()

/** Use in place of plain `useSelector` to get RootState typed */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/** If you need direct access to the store with correct type */
export const useAppStore = () => useStore<AppStore>()
