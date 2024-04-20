import { userEvent } from '@testing-library/user-event';
import { NoteDetails } from '.';
import { mockNavigate } from '@/utils/mocks/navigate';
import { render, screen } from '@/utils/testing';

describe('<NoteDetails />', () => {
    let navigate: jest.Mock;

    beforeEach(() => {
        navigate = mockNavigate();
        render(
            <NoteDetails
                note={{ id: '1', lastUpdate: new Date(), text: 'My note' }}
            />,
        );
    });

    it('should render note content', () => {
        expect(screen.getByText('My note')).toBeVisible();
    });

    it('should navigate back to / when closing modal', async () => {
        // click outside modal
        await userEvent.click(screen.getByTestId('generic-modal-overlay'));

        expect(navigate).toHaveBeenCalledWith('/');
    });

    it('should navigate back to / when closing modal', async () => {
        await userEvent.click(screen.getByTestId('close-button'));

        expect(navigate).toHaveBeenCalledWith('/');
    });

    it('should edit note text', () => {});
});
