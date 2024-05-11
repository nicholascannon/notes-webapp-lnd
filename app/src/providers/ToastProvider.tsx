import { ReactNode } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { theme } from '@/theme';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
            <Toaster
                position="bottom-left"
                toastOptions={{
                    duration: 2_000,
                    style: {
                        background: theme.colors.greys[3],
                        color: theme.colors.foreground,
                        borderRadius: theme.borderRadius.radii.md,
                    },
                }}
                containerStyle={{
                    zIndex: theme.zIndices.toast,
                }}
            />
        </>
    );
};

export const addToast = (message: string) => toast(message);
