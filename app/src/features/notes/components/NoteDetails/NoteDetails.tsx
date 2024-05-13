import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Note } from '../..';
import { useNotes } from '../../providers/NoteProvider/NoteProvider';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { addToast } from '@/providers/ToastProvider';

export const NoteDetails = ({
    note,
    autoFocus,
}: {
    note: Note;
    autoFocus?: boolean;
}) => {
    const navigate = useNavigate();
    const [noteText, setNoteText] = useState(note.text);
    const { editNote } = useNotes();

    const saveNote = () => {
        if (note.text === noteText) return;
        try {
            editNote(note.id, noteText);
            addToast('Note saved!');
        } catch (e) {
            addToast("Failed to save, note doesn't exist");
        }
    };

    const onClose = () => {
        saveNote();
        navigate('/');
    };

    return (
        <Modal onModalClose={onClose}>
            <DetailsContainer>
                <Button
                    $variant="SECONDARY"
                    data-testid="close-button"
                    css={{
                        position: 'absolute',
                        right: '-10px',
                        top: '-10px',
                    }}
                    onClick={onClose}
                >
                    x
                </Button>

                <TextEditor
                    data-testid="note-text-editor"
                    onChange={(e) => setNoteText(e.target.value)}
                    value={noteText}
                    autoFocus={autoFocus}
                />
            </DetailsContainer>
        </Modal>
    );
};

const DetailsContainer = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.greys[3],
    border: `2px solid ${theme.colors.greys[2]}`,
    borderRadius: theme.borderRadius.radii.lg,

    width: theme.sizes.lg,
    height: theme.sizes.md,

    // avoid overflow on small screens
    maxHeight: '100vh',
    maxWidth: `calc(100vw - ${theme.sizes[16]})`,

    position: 'relative',

    padding: theme.sizes[8],
}));

const TextEditor = styled.textarea(({ theme }) => ({
    color: theme.colors.foreground,
    backgroundColor: 'transparent',

    width: '100%',
    height: '100%',
    resize: 'none',

    border: 'none',
    outline: 'none',
}));
