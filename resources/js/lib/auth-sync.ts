import { router } from '@inertiajs/react';
import axios from 'axios';

export async function syncSupabaseWithLaravel(accessToken: string) {
    const { data } = await axios.post('/auth/supabase/sync', {
        access_token: accessToken,
    });
    router.visit(data.redirect || '/dashboard');
}
