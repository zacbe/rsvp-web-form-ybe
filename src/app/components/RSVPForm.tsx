'use client';
import { useState } from 'react';
import Image from 'next/image';
import { submitForm } from '../actions';
import SuccessMessage from './SuccessMessage';

interface FormState {
  name: string;
  email: string;
  rsvp: string;
  notification_type: string;
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    rsvp: 'yes',
    notification_type: 'rsvp',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await submitForm(formData);
      setShowSuccess(true);
      setError(null);
    } catch (error) {
      setError('Error al enviar el formulario. Por favor, intenta de nuevo.');
      setShowSuccess(false);
    }
  };
  const handleOnClose = () => {
    setShowSuccess(false);
    setFormData({
      name: '',
      email: '',
      rsvp: 'yes',
      notification_type: 'rsvp',
    });
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
        {error && (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
            {error}
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondaryTextColor">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
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
            value={formData.email}
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
                checked={formData.rsvp === 'yes'}
                onChange={handleChange}
              />
              <span className="ml-2 text-sm text-secondaryTextColor">Si</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="rsvp"
                value="no"
                checked={formData.rsvp === 'no'}
                onChange={handleChange}
              />
              <span className="ml-2 text-sm text-secondaryTextColor">No</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="rsvp"
                value="maybe"
                checked={formData.rsvp === 'maybe'}
                onChange={handleChange}
              />
              <span className="ml-2 text-sm text-secondaryTextColor">Tal vez</span>
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-secondaryTextColor bg-primaryBackgroundColor rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryTextColor"
          >
            Submit
          </button>
        </div>
      </form>
      {showSuccess && <SuccessMessage onClose={handleOnClose} />}
    </>
  );
}