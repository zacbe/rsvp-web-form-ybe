'use client';

import { useReducer } from 'react';
import Image from 'next/image';
import { submitForm } from '../actions';
import SuccessMessage from './SuccessMessage';
import { initialState, reducer } from '@/app/state/formReducer';

export default function RSVPForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FORM_DATA', payload: { name, value } });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await submitForm({
        name: state.formData.name,
        email: state.formData.email,
        rsvp: state.formData.rsvp,
        notification_type: state.formData.notification_type,
      });
      dispatch({ type: 'SET_SUCCESS', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Error al enviar el formulario. Por favor, intenta más tarde.' });
      dispatch({ type: 'SET_SUCCESS', payload: false });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handleOnClose = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40">
          <Image
            src="https://images.ctfassets.net/mmx0zs0k6u20/2croDCNt3kMCNnmz0aGsxm/30edc401907431360e71231739719680/yy-monogram.webp"
            alt="YY Monogram"
            fill
            sizes="100%"
            className="rounded-full object-cover"
          />
        </div>
        <h2 className="text-2xl p-4 font-medium text-center text-secondaryTextColor">Confirma tu asistencia</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {state.error && (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
            {state.error}
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondaryTextColor">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            value={state.formData.name}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 text-secondaryTextColor border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondaryTextColor">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={state.formData.email}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 text-secondaryTextColor border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondaryTextColor">RSVP</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="rsvp"
                value="yes"
                checked={state.formData.rsvp === 'yes'}
                onChange={handleChange}
              />
              <span className="ml-2 text-sm text-secondaryTextColor">Si</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="rsvp"
                value="no"
                checked={state.formData.rsvp === 'no'}
                onChange={handleChange}
              />
              <span className="ml-2 text-sm text-secondaryTextColor">No</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="rsvp"
                value="maybe"
                checked={state.formData.rsvp === 'maybe'}
                onChange={handleChange}
              />
              <span className="ml-2 text-sm text-secondaryTextColor">Tal vez</span>
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-secondaryTextColor bg-primaryBackgroundColor rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryTextColor ${state.isLoading ? 'cursor-not-allowed' : ''}`}
            disabled={state.isLoading}
          >
            {state.isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </div>
            ) : (
              'Enviar'
            )}
          </button>
        </div>
      </form>
      {state.showSuccess && <SuccessMessage onClose={handleOnClose} />}
    </>
  );
}