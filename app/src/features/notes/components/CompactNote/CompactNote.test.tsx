import { userEvent } from '@testing-library/user-event';
import { mockUseNotes } from '../../providers/NoteProvider/test/mockUseNotes';
import { CompactNote } from '.';
import { getUUID } from '@/utils/getUUID';
import { render, screen } from '@/utils/testing';

describe('<CompactNote />', () => {
    const { deleteNote } = mockUseNotes();

    beforeEach(() => {
        render(
            <CompactNote
                note={{
                    id: getUUID(),
                    lastUpdate: new Date(),
                    text: 'My note',
                }}
            />,
        );
    });

    it('should display note text', () => {
        expect(screen.getByText('My note')).toBeVisible();
    });

    it('should delete note when clicking close button', async () => {
        await userEvent.click(screen.getByTestId('close-button'));
        expect(deleteNote).toHaveBeenCalled();
    });
});
