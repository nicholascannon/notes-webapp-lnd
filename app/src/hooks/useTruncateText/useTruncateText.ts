import debounce from 'lodash.debounce';
import { useRef, useEffect } from 'react';
import shave from 'shave';

/**
 * Truncate text if it exceeds parent element's height.
 */
export const useTruncateText = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const observer = new ResizeObserver(
            debounce((entries) => {
                const element = entries[0].target;
                const parentElement = element.parentElement;

                if (element && parentElement) {
                    shave(element, getContentHeight(parentElement), {
                        spaces: false,
                    });
                }
            }, 25),
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return ref;
};

const getContentHeight = (element: HTMLElement): number => {
    const style = getComputedStyle(element);
    const paddingTop = parseInt(style.paddingTop, 10);
    const paddingBottom = parseInt(style.paddingBottom, 10);
    const contentHeight = element.offsetHeight - paddingTop - paddingBottom;
    return contentHeight || 0;
};
