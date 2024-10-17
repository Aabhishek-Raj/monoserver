import expressLoader from './express/initExpress';
import postgresLoader from './postgres/initPostgres';
import type { Express } from 'express';

export default async function({ app }: { app: Express }) {
    await postgresLoader();
    console.log('postgres loaded');

    await expressLoader({ app });
    console.log('express loaded');
}