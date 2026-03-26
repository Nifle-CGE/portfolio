import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
    return {
        showEntry: cookies.get('show_entry') === '1'
    };
};