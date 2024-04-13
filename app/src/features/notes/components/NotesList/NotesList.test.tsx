import { userEvent } from '@testing-library/user-event';
import { Note } from '../..';
import { NotesList } from '.';
import { mockNavigate } from '@/utils/mocks/navigate';
import { render, screen } from '@/utils/testing';

const renderNotesList = ({ notes }: { notes: Note[] }) => {
    return render(<NotesList notes={notes} enableInitAnimation={false} />);
};

describe('<NotesList />', () => {
    it('should render all compact notes', () => {
        renderNotesList({
            notes: [
                { id: '1', lastUpdate: new Date(), text: 'Note 1' },
                { id: '2', lastUpdate: new Date(), text: 'Note 2' },
                { id: '3', lastUpdate: new Date(), text: 'Note 3' },
            ],
        });

        expect(screen.getAllByTestId('compact-note').length).toBe(3);
    });

    it('should navigate to note details on click', async () => {
        const navigate = mockNavigate();
        renderNotesList({
            notes: [{ id: '1', lastUpdate: new Date(), text: 'Note 1' }],
        });

        await userEvent.click(screen.getByText('Note 1'));

        expect(navigate).toHaveBeenCalledWith('/note/1');
    });
});
