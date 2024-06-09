export const NotesTutorial = () => {
    return (
        <div
            css={(theme) => ({
                textAlign: 'center',
                '& *': {
                    color: theme.colors.greys[0],
                },
            })}
        >
            <h1>Press + to add a note</h1>
            <p>Then click and drag notes to re-arrange them</p>
        </div>
    );
};
