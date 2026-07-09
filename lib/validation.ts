export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function validateName(name: string): string | undefined {
  const trimmed = name.trim();
  if (!trimmed) return "Name is required";
  if (trimmed.length < 2) return "Name must be at least 2 characters";
  if (trimmed.length > 100) return "Name must be under 100 characters";
  if (!/^[a-zA-Z\u0600-\u06FF\s'-]+$/.test(trimmed))
    return "Name contains invalid characters";
  return undefined;
}

export function validateEmail(email: string): string | undefined {
  const trimmed = email.trim();
  if (!trimmed) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) return "Please enter a valid email address";
  if (trimmed.length > 254) return "Email is too long";
  return undefined;
}

export function validatePhone(phone: string): string | undefined {
  const trimmed = phone.trim();
  if (!trimmed) return undefined; // Phone is optional
  const cleaned = trimmed.replace(/[\s\-\(\)\.]/g, "");
  const phoneRegex = /^\+?\d{7,15}$/;
  if (!phoneRegex.test(cleaned))
    return "Please enter a valid phone number (e.g. +20 101 263 9673)";
  return undefined;
}

export function validateMessage(message: string): string | undefined {
  const trimmed = message.trim();
  if (!trimmed) return "Message is required";
  if (trimmed.length < 10) return "Message must be at least 10 characters";
  if (trimmed.length > 5000) return "Message must be under 5000 characters";
  return undefined;
}

export function validateContactForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  const messageError = validateMessage(data.message);
  if (messageError) errors.message = messageError;

  return errors;
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
