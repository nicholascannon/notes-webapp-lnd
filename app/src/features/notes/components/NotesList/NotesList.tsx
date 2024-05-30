import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Note } from '../../types';
import { CompactNote } from '../CompactNote';

export const NotesList = ({
    notes,
    enableInitAnimation,
}: {
    notes: Note[];
    enableInitAnimation?: boolean;
}) => {
    const navigate = useNavigate();


    return (
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

                gridAutoRows: theme.sizes['xs'],

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
