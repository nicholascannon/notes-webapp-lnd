import { useRef, useEffect } from 'react';

export const useOnEscapeKey = (onEscape: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;

        const handleKeyDown = (event: KeyboardEvent) => {
            console.log('keydown');
            if (event.key === 'Escape') onEscape();
        };

        element?.addEventListener('keydown', handleKeyDown);
        return () => element?.removeEventListener('keydown', handleKeyDown);
    }, [onEscape]);

    return ref;
};
