import { usePasskeyVerify } from '@laravel/passkeys/react';
import { Button } from '@/components/ui/button';

type PasskeyVerifyProps = {
    routes: {
        options: string;
        submit: string;
    };
    label: string;
    loadingLabel: string;
    separator: string;
};

export default function PasskeyVerify({
    routes,
    label,
    loadingLabel,
    separator,
}: PasskeyVerifyProps) {
    const { verify, isLoading, isSupported, error } = usePasskeyVerify({
        routes,
        onSuccess: (response) => {
            if (response.redirect) {
                window.location.href = response.redirect;
            }
        },
    });

    if (!isSupported) {
        return null;
    }

    return (
        <div className="space-y-4">
            <Button
                type="button"
                className="w-full"
                onClick={() => void verify()}
                disabled={isLoading}
            >
                {isLoading ? loadingLabel : label}
            </Button>

            {error && <p className="text-destructive text-sm">{error}</p>}

            <div className="text-muted-foreground flex items-center gap-3 text-sm">
                <div className="bg-border h-px flex-1" />
                <span>{separator}</span>
                <div className="bg-border h-px flex-1" />
            </div>
        </div>
    );
}
