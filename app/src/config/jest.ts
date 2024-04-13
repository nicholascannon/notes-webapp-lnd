import '@testing-library/jest-dom';

beforeEach(() => {
    // IntersectionObserver isn't available in JSDom
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
});
