import { createContext, useContext, useReducer, type ReactNode } from 'react';
import { type PrefillMapping } from '../types/prefill';

// Define the state type
type PrefillState = {
  prefillMappings: PrefillMapping[];
};

// Define action types
type PrefillAction =
  | { type: 'SET_PREFILL_MAPPING'; payload: PrefillMapping }
  | { type: 'REMOVE_PREFILL_MAPPING'; payload: {target_node_id: string, target_property_name: string} }
  | { type: 'CLEAR_PREFILL_MAPPINGS'}

// Initial state
const initialState: PrefillState = {
  prefillMappings: [],
};

// Create the reducer
const prefillReducer = (state: PrefillState, action: PrefillAction): PrefillState => {
  switch (action.type) {
    case 'SET_PREFILL_MAPPING':
      return {
        ...state,
        prefillMappings: [...state.prefillMappings, action.payload],
      };
    case 'REMOVE_PREFILL_MAPPING':
      const filteredPrefills = state.prefillMappings.filter(prefillMapping => {
        return prefillMapping.target.id !== action.payload.target_node_id || prefillMapping.target.label !== action.payload.target_property_name;
      });
      return {
        ...state,
        prefillMappings: filteredPrefills,
      };
    case 'CLEAR_PREFILL_MAPPINGS':
      return initialState;
    default:
      return state;
  }
};

// Create the context
type PrefillContextType = {
  state: PrefillState;
  dispatch: React.Dispatch<PrefillAction>;
};

const PrefillContext = createContext<PrefillContextType | undefined>(undefined);

// Create the provider component
export const PrefillProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(prefillReducer, initialState);

  return (
    <PrefillContext.Provider value={{ state, dispatch }}>
      {children}
    </PrefillContext.Provider>
  );
};

// Create a custom hook for using the context
export const usePrefillMappings = () => {
  const context = useContext(PrefillContext);
  if (context === undefined) {
    throw new Error('usePrefill must be used within a PrefillProvider');
  }
  return context;
}; 