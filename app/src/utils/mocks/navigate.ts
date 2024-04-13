import * as router from 'react-router';

export const mockNavigate = () => {
    const navigate = jest.fn();
    jest.spyOn(router, 'useNavigate').mockReturnValue(navigate);
    return navigate;
};
