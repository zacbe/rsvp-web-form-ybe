interface Form {
  name: string;
  email: string;
  rsvp: string;
  notification_type: string;
}

export const submitForm = async (form: Form): Promise<void> => {
  try {
    const response = await fetch('api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    if (!response.ok) {
      throw new Error(`Failed to submit: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Failed to submit form:', error);
    throw error;
  }
}