import { useRef, useEffect } from 'react';

/**
 * Run the onEscape function when the escape key is pressed on the
 * returned ref. To customise the ref type, use a generic:
 *  ```ts
 *  useOnEscapeKey<HTMLDivElement>(() => {});
 *  ```
 */
export const useOnEscapeKey = <T extends HTMLElement>(onEscape: () => void) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onEscape();
        };

        element?.addEventListener('keydown', handleKeyDown);
        return () => element?.removeEventListener('keydown', handleKeyDown);
    }, [onEscape]);

    return ref;
};
