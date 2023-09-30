const token = '8|SQWwFzUiCRoWVdEO1BCzOWN9FAjgOWJqRXHaGkvJ';

export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
};
