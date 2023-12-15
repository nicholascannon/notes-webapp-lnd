import { Note } from '@/graphql/types';

export const CompactNote = ({ note }: { note?: Note }) => {
    if (!note) return <p>Loading...</p>;

    return (
        <div>
            <p>{note.text}</p>
        </div>
    );
};
