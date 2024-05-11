import { userEvent } from '@testing-library/user-event';
import { mockUseNotes } from '../../providers/NoteProvider/test/mockUseNotes';
import { NotesList } from '.';
import { mockNavigate } from '@/utils/mocks/navigate';
import { render, screen } from '@/utils/testing';

describe('<NotesList />', () => {
    const navigate = mockNavigate();
    const { addNote } = mockUseNotes();

    beforeEach(() => {
        addNote.mockReturnValue({ id: '1' });

        render(
            <NotesList
                notes={[
                    { id: '1', lastUpdate: new Date(), text: 'Note 1' },
                    { id: '2', lastUpdate: new Date(), text: 'Note 2' },
                    { id: '3', lastUpdate: new Date(), text: 'Note 3' },
                ]}
            />,
        );
    });

    it('should render all compact notes', () => {
        expect(screen.getAllByTestId('compact-note').length).toBe(3);
    });

    it('should navigate to note details on click', async () => {
        await userEvent.click(screen.getByText('Note 1'));
        expect(navigate).toHaveBeenCalledWith('/note/1');
    });

    it('should add blank note and navigate to details page', async () => {
        await userEvent.click(screen.getByText('+'));

        expect(addNote).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith('/note/1', {
            state: { autoFocus: true },
        });
    });
});
