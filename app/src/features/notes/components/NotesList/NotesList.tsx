import styled from '@emotion/styled';
import { motion } from 'framer-motion';
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
    );
};

const List = styled(motion.ul)({
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',
});
