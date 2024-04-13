import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { CloseButton } from '../../../../components/CloseButton';
import { GenericModal } from '@/components/GenericModal';

export const NoteDetails = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    // TODO: load note data

    return (
        <GenericModal onModalClose={() => navigate('/')}>
            <DetailsContainer>
                <CloseButton onClick={() => navigate('/')} />
                NoteDetails for {id}
            </DetailsContainer>
        </GenericModal>
    );
};

const DetailsContainer = styled.div(({ theme }) => ({
    backgroundColor: 'red',

    width: theme.sizes.lg,
    height: theme.sizes.md,
    maxHeight: '100vh', // avoid overflow on small heights

    position: 'relative',
}));
