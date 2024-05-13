import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useOnEscapeKey } from '@/hooks/useOnEscapeKey';

export const Modal = ({
    children,
    onModalClose,
}: {
    children: ReactNode;
    onModalClose: () => void;
}) => {
    const ref = useOnEscapeKey<HTMLDivElement>(onModalClose);

    return createPortal(
        <Overlay data-testid="generic-modal-overlay" onClick={onModalClose}>
            <div
                data-testid="generic-modal"
                ref={ref}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </Overlay>,
        document.body,
    );
};

const Overlay = styled.div(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: 'transparent',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: theme.zIndices.modal,

    cursor: 'pointer',
}));
