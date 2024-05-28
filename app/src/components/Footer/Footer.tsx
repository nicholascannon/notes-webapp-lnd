import styled from '@emotion/styled';

export const Footer = () => {
    return (
        <StyledFooter>
            <p>
                View the code{' '}
                <a
                    href="https://github.com/nicholascannon/notes-webapp-lnd"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
                .
            </p>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer(({ theme }) => ({
    position: 'fixed',
    right: 0,
    left: 0,
    bottom: 0,
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',

    padding: theme.sizes[4],
    '& *': {
        color: theme.colors.greys[0],
    },
}));
