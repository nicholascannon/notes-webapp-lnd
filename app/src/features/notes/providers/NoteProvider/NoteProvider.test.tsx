import { Note } from '../..';
import { useNotes } from './NoteProvider';
import { TEST_NOTES } from './test/testNotes';
import { NoteProvider } from '.';
import * as utils from '@/utils/getUUID';
import { UUID_REGEX, act, renderHook } from '@/utils/testing';

const renderUseNotes = (options?: { initialNotes?: Note[] }) => {
    return renderHook(() => useNotes(), {
        wrapper: ({ children }) => (
            <NoteProvider initialNotes={options?.initialNotes}>
                {children}
            </NoteProvider>
        ),
    });
};

describe('<NoteProvider />', () => {
    beforeEach(() => {
        jest.useFakeTimers().setSystemTime(new Date('2024-01-01'));
        jest.spyOn(utils, 'getUUID');
    });

    it('should add a note', async () => {
        const { result } = renderUseNotes();

        act(() => result.current.addNote('My note'));

        const note = result.current.notes[0];
        expect(note.id).toMatch(UUID_REGEX);
        expect(note.text).toBe('My note');
        expect(utils.getUUID).toHaveBeenCalled();
        expect(note.lastUpdate.toDateString()).toBe('Mon Jan 01 2024');
    });

    it('should return a list of notes', () => {
        const { result } = renderUseNotes({ initialNotes: TEST_NOTES });

        expect(result.current.notes).toStrictEqual(TEST_NOTES);
    });

    it('should get a note by id', () => {
        const { result } = renderUseNotes({ initialNotes: TEST_NOTES });
        const note = TEST_NOTES[0];

        expect(result.current.getNote(note.id)).toBe(note);
    });

    it('should return undefined if note does not exist', () => {
        const { result } = renderUseNotes({ initialNotes: TEST_NOTES });

        expect(result.current.getNote('does-note-exist')).toBeUndefined();
    });

    it('should delete a note and return it', async () => {
        const { result } = renderUseNotes({
            initialNotes: TEST_NOTES,
        });

        const note = await act(() =>
            result.current.deleteNote(TEST_NOTES[0].id),
        );

        expect(note).toBe(TEST_NOTES[0]);
        expect(result.current.notes).toStrictEqual(TEST_NOTES.slice(1));
    });

    it('should do nothing when deleting a note that does not exist', async () => {
        const { result } = renderUseNotes({
            initialNotes: TEST_NOTES,
        });

        const note = await act(() =>
            result.current.deleteNote('does-not-exist'),
        );

        expect(note).toBeUndefined();
        expect(result.current.notes).toStrictEqual(TEST_NOTES);
    });

    it('should throw when editing a note that does not exist', () => {
        const { result } = renderUseNotes();

        expect(() =>
            result.current.editNote('does-not-exist', 'Should throw'),
        ).toThrow(
            'Unable to edit note: note with id does-not-exist does not exist',
        );
    });

    it('should edit a note and return it', async () => {
        const { result } = renderUseNotes({ initialNotes: TEST_NOTES });

        await act(() => result.current.editNote('1', 'Updated'));

        expect(result.current.notes[0]).toStrictEqual({
            id: '1',
            text: 'Updated',
            lastUpdate: new Date(),
        });
    });
});
