import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
    if (cookies.get('show_entry') !== '1') {
        throw error(404, 'Not Found');
    }
};