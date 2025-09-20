import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  role: string;
  message: string;
}

export interface DemoFormData {
  name: string;
  email: string;
  institution: string;
  role: string;
  phone: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      institution: formData.institution,
      role: formData.role,
      message: formData.message,
      to_email: 'shivansh211299@gmail.com', // Your email address
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendDemoRequestEmail = async (formData: DemoFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      institution: formData.institution,
      role: formData.role,
      phone: formData.phone,
      message: `Demo Access Request from ${formData.name} at ${formData.institution}. Role: ${formData.role}. Phone: ${formData.phone || 'Not provided'}`,
      to_email: 'shivansh211299@gmail.com', // Your email address
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Demo request email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending demo request email:', error);
    return false;
  }
};

export const validateForm = (formData: ContactFormData): string[] => {
  const errors: string[] = [];

  if (!formData.firstName.trim()) {
    errors.push('First name is required');
  }

  if (!formData.lastName.trim()) {
    errors.push('Last name is required');
  }

  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.institution.trim()) {
    errors.push('Institution name is required');
  }

  if (!formData.role) {
    errors.push('Please select your role');
  }

  if (!formData.message.trim()) {
    errors.push('Message is required');
  } else if (formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return errors;
};

export const validateDemoForm = (formData: DemoFormData): string[] => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('Name is required');
  }

  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.institution.trim()) {
    errors.push('Institution name is required');
  }

  if (!formData.role) {
    errors.push('Please select your role');
  }

  return errors;
};
