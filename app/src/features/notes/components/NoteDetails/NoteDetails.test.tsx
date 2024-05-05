import { userEvent } from '@testing-library/user-event';
import { mockUseNotes } from '../../providers/NoteProvider/test/mockUseNotes';
import { NoteDetails } from '.';
import * as toasts from '@/providers/ToastProvider';
import { mockNavigate } from '@/utils/mocks/navigate';
import { fireEvent, render, screen } from '@/utils/testing';

describe('<NoteDetails />', () => {
    const navigate = mockNavigate();
    const addToast = jest.spyOn(toasts, 'addToast');
    const { editNote } = mockUseNotes();

    beforeEach(() => {
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

    it('should edit note on blur and add toast', async () => {
        const editor = screen.getByTestId('note-text-editor');

        await userEvent.type(editor, ' is now updated');
        fireEvent.blur(editor);

        expect(editNote).toHaveBeenCalledWith('1', 'My note is now updated');
        expect(addToast).toHaveBeenCalledWith('Note saved!');
    });
});
