import { userEvent } from '@testing-library/user-event';
import { CompactNote } from '.';
import { getUUID } from '@/utils/getUUID';
import { render, screen } from '@/utils/testing';

describe('<CompactNote />', () => {
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

    it('should render delete button on hover only', async () => {
        await userEvent.hover(screen.getByText('My note'));

        expect(screen.getByTestId('close-button')).toBeVisible();

        await userEvent.unhover(screen.getByText('My note'));

        expect(() => screen.getByTestId('close-button')).toThrow();
    });
});
