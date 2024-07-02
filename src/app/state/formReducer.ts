interface FormState {
  name: string;
  email: string;
  rsvp: string;
  notification_type: string;
}

interface State {
  formData: FormState;
  showSuccess: boolean;
  error: string | null;
  isLoading: boolean;
}

export const initialState: State = {
  formData: {
    name: '',
    email: '',
    rsvp: 'yes',
    notification_type: 'rsvp',
  },
  showSuccess: false,
  error: null,
  isLoading: false,
};

type Action =
  | { type: 'SET_FORM_DATA'; payload: { name: string; value: string } }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_SUCCESS'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET_FORM' };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_SUCCESS':
      return { ...state, showSuccess: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET_FORM':
      return {
        ...state,
        formData: {
          name: '',
          email: '',
          rsvp: 'yes',
          notification_type: 'rsvp',
        },
        showSuccess: false,
        error: null,
        isLoading: false,
      };
    default:
      return state;
  }
}