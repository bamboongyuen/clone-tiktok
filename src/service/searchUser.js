import { api } from '~/config/api';

export async function searchUser(value, type = 'less') {
    if (!value || value.includes('?')) return;
    try {
        const res = await fetch(`${api}users/search?q=${value}&type=${type}`);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}
