export const ENDPOINT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://tele-g-bot.up.railway.app';

export const API_ENDPOINT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api'
    : 'https://tele-g-bot.up.railway.app/api';
