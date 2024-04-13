import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const GenericModal = ({
    children,
    onModalClose,
}: {
    children: ReactNode;
    onModalClose?: () => void;
}) => {
    return createPortal(
        <Overlay onClick={onModalClose}>
            <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </Overlay>,
        document.body,
    );
};

const Overlay = styled.div(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: 'transparent',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: theme.zIndices.modal,
}));
