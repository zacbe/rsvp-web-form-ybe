interface Form {
  name: string;
  email: string;
  rsvp: string;
}

export const submitForm = async (form: Form): Promise<void | never> => {
  try {
    await fetch('api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
  } catch (error) {
    console.error('Failed to submit form:', error);
    throw error;
  }
}