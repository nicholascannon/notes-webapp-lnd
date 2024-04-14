import { Note } from '../..';
import { TEST_NOTES } from './test/testNotes';
import { NoteProvider, useNotes } from '.';
import * as uuid from '@/utils/getUUID';
import { UUID_REGEX, renderHook } from '@/utils/testing';

jest.useFakeTimers().setSystemTime(new Date('2024-01-01'));
jest.spyOn(uuid, 'getUUID');

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
    it('should add a note', () => {
        const { result, rerender } = renderUseNotes();

        result.current.addNote('My note');
        rerender();

        const note = result.current.notes[0];
        expect(note.id).toMatch(UUID_REGEX);
        expect(note.text).toBe('My note');
        expect(uuid.getUUID).toHaveBeenCalled();
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

    it('should delete a note and return it', () => {
        const { result, rerender } = renderUseNotes({
            initialNotes: TEST_NOTES,
        });

        const note = result.current.deleteNote(TEST_NOTES[0].id);
        rerender();

        expect(note).toBe(TEST_NOTES[0]);
        expect(result.current.notes).toStrictEqual(TEST_NOTES.slice(1));
    });

    it('should do nothing when deleting a note that does not exist', () => {
        const { result, rerender } = renderUseNotes({
            initialNotes: TEST_NOTES,
        });

        const note = result.current.deleteNote('does-not-exist');
        rerender();

        expect(note).toBeUndefined();
        expect(result.current.notes).toStrictEqual(TEST_NOTES);
    });
});
