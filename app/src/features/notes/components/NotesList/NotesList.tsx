import { motion } from 'framer-motion';
import { ReactNode } from 'react';
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
            <AnimatedList enableInitAnimation={enableInitAnimation}>
                {notes.map((note) => (
                    <li key={note.id} data-testid="compact-note">
                        <CompactNote
                            note={note}
                            onClick={() => navigate(`/note/${note.id}`)}
                        />
                    </li>
                ))}
            </AnimatedList>

            <AddNoteButton
                onClick={() => {
                    const { id } = addNote();
                    navigate(`/note/${id}`);
                }}
            />
        </>
    );
};

const AnimatedList = ({
    children,
    enableInitAnimation,
}: {
    children: ReactNode;
    enableInitAnimation?: boolean;
}) => {
    return (
        <motion.ul
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
            css={(theme) => ({
                display: 'grid',
                gap: theme.sizes[8],

                gridTemplateColumns: '1fr',
                [`@media (min-width: ${theme.breakpoints.md})`]: {
                    gridTemplateColumns: 'repeat(2, 1fr)',
                },
                [`@media (min-width: ${theme.breakpoints.lg})`]: {
                    gridTemplateColumns: 'repeat(3, 1fr)',
                },
                [`@media (min-width: ${theme.breakpoints.xl})`]: {
                    gridTemplateColumns: 'repeat(4, 1fr)',
                },
            })}
        >
            {children}
        </motion.ul>
    );
};

const AddNoteButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <Button
            css={{
                position: 'fixed',
                bottom: theme.sizes[16],
                right: theme.sizes[16],
            }}
            $variant="SECONDARY"
            onClick={onClick}
        >
            +
        </Button>
    );
};
