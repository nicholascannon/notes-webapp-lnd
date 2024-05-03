import { userEvent } from '@testing-library/user-event';
import * as useNotes from '../../providers/NoteProvider/NoteProvider';
import { CompactNote } from '.';
import { getUUID } from '@/utils/getUUID';
import { render, screen } from '@/utils/testing';

describe('<CompactNote />', () => {
    const deleteNote = jest.fn();

    beforeEach(() => {
        // must use long import here for spy to work :(
        jest.spyOn(useNotes, 'useNotes').mockImplementation(() => ({
            addNote: jest.fn(),
            editNote: jest.fn(),
            deleteNote,
            getNote: jest.fn(),
            notes: [],
        }));

        render(
            <CompactNote
                note={{
                    id: getUUID(),
                    lastUpdate: new Date(),
                    text: 'My note',
                }}
            />,
        );
    });

    it('should display note text', () => {
        expect(screen.getByText('My note')).toBeVisible();
    });

    it('should delete note when clicking close button', async () => {
        await userEvent.click(screen.getByTestId('close-button'));
        expect(deleteNote).toHaveBeenCalled();
    });
});
