import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const COOKIE_NAME = 'show_entry';

export const POST: RequestHandler = async ({ cookies, url }) => {
    const enabled = cookies.get(COOKIE_NAME) === '1';
    const next = enabled ? '0' : '1';

    cookies.set(COOKIE_NAME, next, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: url.protocol === 'https:',
        maxAge: 60 * 60 * 24 * 365
    });

    return json({ showEntry: next === '1' });
};