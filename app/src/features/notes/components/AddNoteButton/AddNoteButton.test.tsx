import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { mockUseNotes } from '../../providers/NoteProvider/test/mockUseNotes';
import { AddNoteButton } from '.';
import { mockNavigate } from '@/utils/mocks/navigate';
import { render } from '@/utils/testing';

describe('<AddNoteButton />', () => {
    const navigate = mockNavigate();
    const { addNote } = mockUseNotes();

    beforeEach(() => {
        addNote.mockReturnValue({ id: '1' });

        render(<AddNoteButton />);
    });

    it('should add new note and navigate to the details page', async () => {
        await userEvent.click(screen.getByText('+'));

        expect(addNote).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith('/note/1', {
            state: { autoFocus: true },
        });
    });
});
