import { userEvent } from '@testing-library/user-event';
import { mockUseNotes } from '../../utils/mockUseNotes';
import { CompactNote } from '../CompactNote';
import { getUUID } from '@/utils/getUUID';
import { render, screen } from '@/utils/testing';

describe('<CompactNote />', () => {
    const { deleteNote } = mockUseNotes();
    const onClick = vi.fn();

    beforeEach(() => {
        render(
            <CompactNote
                note={{
                    id: getUUID(),
                    lastUpdate: new Date(),
                    text: 'My note',
                }}
                onClick={onClick}
            />,
        );
    });

    it('should display note text', () => {
        expect(screen.getByText('My note')).toBeVisible();
    });

    it('should delete note when clicking close button', async () => {
        await userEvent.click(screen.getByTestId('delete-note-button'));
        expect(deleteNote).toHaveBeenCalled();
    });

    it('should run onClick', async () => {
        await userEvent.click(screen.getByTestId('compact-note'));
        expect(onClick).toHaveBeenCalled();
    });
});
