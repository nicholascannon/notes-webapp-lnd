import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useNotes } from '../../providers/NoteProvider/NoteProvider';
import { Note } from '../../types';
import { CompactNote } from '../CompactNote';
import { Button } from '@/components/Button';
import { theme } from '@/theme';

export const NotesList = ({
    notes,
    enableInitAnimation,
}: {
    notes: Note[];
    enableInitAnimation?: boolean;
}) => {
    const navigate = useNavigate();
    const { addNote } = useNotes();

    return (
        <>
            <List
                initial={
                    enableInitAnimation
                        ? {
                              opacity: 0,
                              y: 100,
                          }
                        : false
                }
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.9,
                    ease: 'easeOut',
                }}
            >
                {notes.map((note) => (
                    <li key={note.id} data-testid="compact-note">
                        <CompactNote
                            note={note}
                            onClick={() => navigate(`/note/${note.id}`)}
                        />
                    </li>
                ))}
            </List>

            <Button
                css={{
                    position: 'absolute',
                    bottom: theme.sizes[16],
                    right: theme.sizes[16],
                }}
                $variant="SECONDARY"
                onClick={() => {
                    const { id } = addNote();
                    navigate(`/note/${id}`);
                }}
            >
                +
            </Button>
        </>
    );
};

const List = styled(motion.ul)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',
    gap: theme.sizes[8],
}));
