import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Note } from '../..';
import { useNotes } from '../../providers/NoteProvider/NoteProvider';
import { CloseButton } from '@/components/CloseButton';
import { GenericModal } from '@/components/GenericModal';
import { addToast } from '@/providers/ToastProvider';

export const NoteDetails = ({ note }: { note: Note }) => {
    const navigate = useNavigate();
    const [noteText, setNoteText] = useState(note.text);
    const { editNote } = useNotes();

    return (
        <GenericModal onModalClose={() => navigate('/')}>
            <DetailsContainer>
                <CloseButton onClick={() => navigate('/')} />

                <TextEditor
                    data-testid="note-text-editor"
                    onChange={(e) => setNoteText(e.target.value)}
                    onBlur={() => {
                        if (note.text === noteText) return;
                        editNote(note.id, noteText);
                        addToast('Note saved!');
                        // TODO: save to localStorage
                    }}
                    value={noteText}
                />
            </DetailsContainer>
        </GenericModal>
    );
};

const DetailsContainer = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.greys[2],

    width: theme.sizes.lg,
    height: theme.sizes.md,

    // avoid overflow on small screens
    maxHeight: '100vh',
    maxWidth: '100vw',

    position: 'relative',

    padding: theme.sizes[8],
    borderRadius: theme.borderRadius.radii.lg,
}));

const TextEditor = styled.textarea(({ theme }) => ({
    color: theme.colors.foreground,
    backgroundColor: 'transparent',

    width: '100%',
    height: '100%',
    resize: 'none',

    border: 'none',
    borderRadius: theme.borderRadius.radii.md,
    outline: 'none',
}));
