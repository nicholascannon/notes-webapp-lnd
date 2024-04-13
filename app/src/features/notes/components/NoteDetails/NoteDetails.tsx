import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Note } from '../..';
import { CloseButton } from '../../../../components/CloseButton';
import { GenericModal } from '@/components/GenericModal';

export const NoteDetails = ({ note }: { note: Note }) => {
    const navigate = useNavigate();

    return (
        <GenericModal onModalClose={() => navigate('/')}>
            <DetailsContainer>
                <CloseButton onClick={() => navigate('/')} />
                <p>{note.text}</p>
            </DetailsContainer>
        </GenericModal>
    );
};

const DetailsContainer = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.greys[2],

    width: theme.sizes.lg,
    height: theme.sizes.md,
    maxHeight: '100vh', // avoid overflow on small heights

    position: 'relative',

    padding: theme.sizes[8],
    borderRadius: theme.borderRadius.radii.lg,
}));
