const token = '6|33gRa3LxkAtrtFuYu6AMrQiGTiMOItgAH5ZfhIyV';

export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data', // Dosya yükleme işlemi olduğu için bu başlığı ayarlamalısınız.
  },
};
