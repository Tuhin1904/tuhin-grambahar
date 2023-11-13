export const humanityText = (text) => {
  const wordsArray = text
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .split(/\s+/);

  const joinedText = wordsArray.join(' ');

  const capitalizedText = joinedText.replace(/\b\w/g, (char) => char.toUpperCase());

  return capitalizedText;
};

export const extractServerValidationError = (error) => {
  let errorMessage = '';
  try {
    if (error?.response?.data?.errors) {
      const errors = error?.response?.data?.errors || [];
      if (typeof errors === 'string') {
        errorMessage = errors;
      } else if (errors.length) {
        errorMessage = errors.map((err) => `Error: ${humanityText(err.path)} --> ${err.msg}`).join(' ');
      }
    }
  } catch {
    errorMessage = '';
  }

  return errorMessage;
};
