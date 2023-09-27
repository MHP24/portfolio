import { UIState } from '@/app/types';

type TActions = { type: '[Menu] toggle' }

export const navReducer = (state: UIState, action: TActions): UIState => {
  switch (action.type) {
    case '[Menu] toggle':
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};