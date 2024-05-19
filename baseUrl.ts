let protocol = 'http://';

if (process.env.VERCEL_ENV === 'production') {
  protocol = 'https://';
}

const baseUrl = `${protocol}${process.env.VERCEL_URL}`;
export default baseUrl;
