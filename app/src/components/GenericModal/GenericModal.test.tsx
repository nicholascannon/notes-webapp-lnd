import { userEvent } from '@testing-library/user-event';
import { GenericModal } from '.';
import { render, screen } from '@/utils/testing';

describe('<GenericModal />', () => {
    it('should render modal and overlay', () => {
        render(
            <GenericModal>
                <p>Content</p>
            </GenericModal>,
        );

        expect(screen.getByTestId('generic-modal-overlay')).toBeVisible();
        expect(screen.getByTestId('generic-modal')).toBeVisible();
        expect(screen.getByText('Content')).toBeVisible();
    });

    it('should call onModalClose when clicking outside the modal', async () => {
        const onModalClose = jest.fn();
        render(
            <GenericModal onModalClose={onModalClose}>
                <p>Content</p>
            </GenericModal>,
        );

        await userEvent.click(screen.getByTestId('generic-modal'));

        expect(onModalClose).not.toHaveBeenCalled();

        await userEvent.click(screen.getByTestId('generic-modal-overlay'));

        expect(onModalClose).toHaveBeenCalled();
    });
});
