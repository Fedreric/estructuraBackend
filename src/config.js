import * as dotenv from 'dotenv';

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/listaDeTareas_db';