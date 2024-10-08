import { userEvent } from '@testing-library/user-event';
import { Mock } from 'vitest';
import { useOnEscapeKey } from '../useOnEscapeKey';
import { fireEscapeKeyEvent, fireEvent, render, screen } from '@/utils/testing';

const TestComponent = ({ fn }: { fn: Mock }) => {
    const ref = useOnEscapeKey<HTMLDivElement>(fn);
    return <div ref={ref} data-testid="container"></div>;
};

describe('useOnEscapeKey', () => {
    it('should run function when escape key pressed', async () => {
        const onEscapeMock = vi.fn();
        render(<TestComponent fn={onEscapeMock} />);

        const container = screen.getByTestId('container');
        fireEscapeKeyEvent(container);

        expect(onEscapeMock).toHaveBeenCalledTimes(1);
    });

    it('should not run when other keys are pressed', () => {
        const onEscapeMock = vi.fn();
        render(<TestComponent fn={onEscapeMock} />);

        const container = screen.getByTestId('container');

        fireEvent.keyPress(container, {
            key: 'Shift',
            code: 'ShiftLeft',
            keyCode: 16,
            charCode: 16,
        });
        userEvent.type(container, 'This should not close the modal');

        expect(onEscapeMock).not.toHaveBeenCalled();
    });
});
