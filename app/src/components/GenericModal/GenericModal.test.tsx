import { userEvent } from '@testing-library/user-event';
import { GenericModal } from '.';
import { fireEscapeKeyEvent, render, screen } from '@/utils/testing';

describe('<GenericModal />', () => {
    const onModalClose = jest.fn();

    beforeEach(() => {
        render(
            <GenericModal onModalClose={onModalClose}>
                <p>Content</p>
            </GenericModal>,
        );
    });

    it('should render modal and overlay', () => {
        expect(screen.getByTestId('generic-modal-overlay')).toBeVisible();
        expect(screen.getByTestId('generic-modal')).toBeVisible();
        expect(screen.getByText('Content')).toBeVisible();
    });

    it('should call onModalClose when clicking outside the modal', async () => {
        await userEvent.click(screen.getByTestId('generic-modal'));

        expect(onModalClose).not.toHaveBeenCalled();

        await userEvent.click(screen.getByTestId('generic-modal-overlay'));

        expect(onModalClose).toHaveBeenCalled();
    });

    it('should call onModalClose when pressing Escape key', () => {
        const modal = screen.getByTestId('generic-modal');

        fireEscapeKeyEvent(modal);

        expect(onModalClose).toHaveBeenCalled();
    });
});
