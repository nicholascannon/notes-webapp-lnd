import { userEvent } from '@testing-library/user-event';
import { mockUseNotes } from '../../providers/NoteProvider/test/mockUseNotes';
import { NoteDetails } from '.';
import * as toasts from '@/providers/ToastProvider';
import { mockNavigate } from '@/utils/mocks/navigate';
import { fireEscapeKeyEvent, render, screen } from '@/utils/testing';

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

    describe('modal close', () => {
        it('should navigate back to / when closing modal', async () => {
            // click outside modal
            await userEvent.click(screen.getByTestId('modal-overlay'));

            expect(navigate).toHaveBeenCalledWith('/');
        });

        it('should navigate back to / when closing modal via close button', async () => {
            await userEvent.click(screen.getByTestId('close-button'));

            expect(navigate).toHaveBeenCalledWith('/');
        });
    });

    describe('edit note', () => {
        it('should edit note on close and add toast', async () => {
            const editor = screen.getByTestId('note-text-editor');

            await userEvent.type(editor, ' is now updated');
            fireEscapeKeyEvent(editor);

            expect(editNote).toHaveBeenCalledWith(
                '1',
                'My note is now updated',
            );
            expect(addToast).toHaveBeenCalledWith('Note saved!');
        });

        it('should not edit note and add toast if note content did not change', () => {
            const editor = screen.getByTestId('note-text-editor');

            fireEscapeKeyEvent(editor);

            expect(editNote).not.toHaveBeenCalled();
            expect(addToast).not.toHaveBeenCalled();
        });

        it('should add toast on error', async () => {
            editNote.mockImplementationOnce(() => {
                throw new Error();
            });

            const editor = screen.getByTestId('note-text-editor');

            await userEvent.type(editor, ' is now updated');
            fireEscapeKeyEvent(editor);

            expect(addToast).toHaveBeenCalledWith(
                "Failed to save, note doesn't exist",
            );
        });
    });
});
