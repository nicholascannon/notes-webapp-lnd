import { userEvent } from '@testing-library/user-event';
import { NoteDetails } from '.';
import { mockNavigate } from '@/utils/mocks/navigate';
import { render, screen } from '@/utils/testing';

describe('<NoteDetails />', () => {
    it('should render note content', () => {
        // TODO: implementation
    });

    it('should navigate back to / when closing modal', async () => {
        const navigate = mockNavigate();
        render(<NoteDetails id="1" />);

        // click outside modal
        await userEvent.click(screen.getByTestId('generic-modal-overlay'));

        expect(navigate).toHaveBeenCalledWith('/');
    });

    it('should navigate back to / when closing modal', () => {});
});
