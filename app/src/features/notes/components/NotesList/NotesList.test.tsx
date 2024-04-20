import { userEvent } from '@testing-library/user-event';
import { NotesList } from '.';
import { mockNavigate } from '@/utils/mocks/navigate';
import { render, screen } from '@/utils/testing';

describe('<NotesList />', () => {
    let navigate: jest.Mock;

    beforeEach(() => {
        navigate = mockNavigate();
        render(
            <NotesList
                notes={[
                    { id: '1', lastUpdate: new Date(), text: 'Note 1' },
                    { id: '2', lastUpdate: new Date(), text: 'Note 2' },
                    { id: '3', lastUpdate: new Date(), text: 'Note 3' },
                ]}
                enableInitAnimation={false}
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
});
