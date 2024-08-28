import { screen } from '@testing-library/react';
import { Layout } from '../Layout';
import { render } from '@/utils/testing';

describe('<Layout />', () => {
    it('should render children', () => {
        render(
            <Layout>
                <p>Visible</p>
            </Layout>,
        );

        expect(screen.getByText('Visible')).toBeVisible();
    });
});
