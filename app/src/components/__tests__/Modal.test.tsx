import { userEvent } from '@testing-library/user-event';
import { Modal } from '../Modal';
import { fireEscapeKeyEvent, render, screen } from '@/utils/testing';

describe('<Modal />', () => {
    const onModalClose = vi.fn();

    beforeEach(() => {
        render(
            <Modal onModalClose={onModalClose}>
                <p>Content</p>
            </Modal>,
        );
    });

    it('should render modal and overlay', () => {
        expect(screen.getByTestId('modal-overlay')).toBeVisible();
        expect(screen.getByTestId('modal')).toBeVisible();
        expect(screen.getByText('Content')).toBeVisible();
    });

    it('should call onModalClose when clicking outside the modal', async () => {
        await userEvent.click(screen.getByTestId('modal'));

        expect(onModalClose).not.toHaveBeenCalled();

        await userEvent.click(screen.getByTestId('modal-overlay'));

        expect(onModalClose).toHaveBeenCalled();
    });

    it('should call onModalClose when pressing Escape key', () => {
        const modal = screen.getByTestId('modal');

        fireEscapeKeyEvent(modal);

        expect(onModalClose).toHaveBeenCalled();
    });
});
