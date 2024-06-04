import * as router from 'react-router';

export const mockNavigate = () => {
    const navigate = vi.fn();
    vi.spyOn(router, 'useNavigate').mockReturnValue(navigate);
    return navigate;
};
