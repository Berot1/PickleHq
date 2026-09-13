import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { syncSupabaseWithLaravel } from '@/lib/auth-sync';
import { Spinner } from '@/components/ui/spinner';

export default function AuthCallback() {
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.access_token) {
                syncSupabaseWithLaravel(session.access_token);
            }
        });
    }, []);

    return (
        <div className="flex h-screen items-center justify-center">
            <Spinner />
        </div>
    );
}