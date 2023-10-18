const token = '2|3e8TCjO33miKjHgQXWrhzOB5PW9vmj9iPcRDRIXI';

export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
};
