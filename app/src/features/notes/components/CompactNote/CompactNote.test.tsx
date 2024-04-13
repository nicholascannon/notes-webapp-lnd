import { userEvent } from '@testing-library/user-event';
import { v4 as uuid } from 'uuid';
import { CompactNote } from '.';
import { render, screen } from '@/utils/testing';

describe('<CompactNote />', () => {
    it('should display note text', () => {
        render(
            <CompactNote
                note={{ id: uuid(), lastUpdate: new Date(), text: 'My note' }}
            />,
        );

        expect(screen.getByText('My note')).toBeVisible();
    });

    it('should render delete button on hover only', async () => {
        render(
            <CompactNote
                note={{ id: uuid(), lastUpdate: new Date(), text: 'My note' }}
            />,
        );

        await userEvent.hover(screen.getByText('My note'));

        expect(screen.getByTestId('close-button')).toBeVisible();

        await userEvent.unhover(screen.getByText('My note'));

        expect(() => screen.getByTestId('close-button')).toThrow();
    });
});
