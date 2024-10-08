import { Note } from '../..';
import * as storage from '../../storage/noteStorage';
import { NoteProvider, useNotes } from '../NoteProvider';
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
        vi.useFakeTimers().setSystemTime(new Date('2024-01-01'));
        vi.spyOn(utils, 'getUUID');
        vi.spyOn(storage, 'saveNotes');

        localStorage.clear();
    });

    describe('adding notes', () => {
        it('should add a note', async () => {
            const { result } = renderUseNotes();

            const note = await act(() => result.current.addNote('My note'));

            expect(note.id).toMatch(UUID_REGEX);
            expect(note.text).toBe('My note');
            expect(utils.getUUID).toHaveBeenCalled();
            expect(note.lastUpdate.toDateString()).toBe('Mon Jan 01 2024');
            expect(storage.saveNotes).toHaveBeenCalledWith([note]);
        });

        it('should add a blank note', async () => {
            const { result } = renderUseNotes();

            const note = await act(() => result.current.addNote());

            expect(note.id).toMatch(UUID_REGEX);
            expect(note.text).toBe('');
            expect(utils.getUUID).toHaveBeenCalled();
            expect(note.lastUpdate.toDateString()).toBe('Mon Jan 01 2024');
            expect(storage.saveNotes).toHaveBeenCalledWith([note]);
        });
    });

    describe('getting notes', () => {
        it('should return a list of notes', () => {
            const { result } = renderUseNotes({
                initialNotes: TEST_NOTES_LIST,
            });

            expect(result.current.notes).toStrictEqual(TEST_NOTES_LIST);
        });

        it('should get a note by id', () => {
            const { result } = renderUseNotes({
                initialNotes: TEST_NOTES_LIST,
            });
            const note = TEST_NOTES_LIST[0];

            expect(result.current.getNote(note.id)).toBe(note);
        });

        it('should return undefined if note does not exist', () => {
            const { result } = renderUseNotes({
                initialNotes: TEST_NOTES_LIST,
            });

            expect(result.current.getNote('does-note-exist')).toBeUndefined();
        });
    });

    describe('deleting notes', () => {
        it('should delete a note and return it', async () => {
            const { result } = renderUseNotes({
                initialNotes: TEST_NOTES_LIST,
            });

            const note = await act(() =>
                result.current.deleteNote(TEST_NOTES_LIST[0].id),
            );

            expect(note).toBe(TEST_NOTES_LIST[0]);
            expect(result.current.notes).toStrictEqual(
                TEST_NOTES_LIST.slice(1),
            );
            expect(storage.saveNotes).toHaveBeenCalledWith(
                TEST_NOTES_LIST.slice(1),
            );
        });

        it('should do nothing when deleting a note that does not exist', async () => {
            const { result } = renderUseNotes({
                initialNotes: TEST_NOTES_LIST,
            });

            const note = await act(() =>
                result.current.deleteNote('does-not-exist'),
            );

            expect(note).toBeUndefined();
            expect(result.current.notes).toStrictEqual(TEST_NOTES_LIST);
        });
    });

    describe('editing notes', () => {
        it('should edit a note and return it', async () => {
            const { result } = renderUseNotes({
                initialNotes: TEST_NOTES_LIST,
            });

            act(() => result.current.editNote('1', 'Updated'));

            expect(result.current.notes[0]).toStrictEqual({
                id: '1',
                text: 'Updated',
                lastUpdate: new Date(),
            });
        });

        it('should throw when editing a note that does not exist', () => {
            const { result } = renderUseNotes();

            expect(() =>
                result.current.editNote('does-not-exist', 'Should throw'),
            ).toThrow(
                'Unable to edit note: note with id does-not-exist does not exist',
            );
            expect(storage.saveNotes).not.toHaveBeenCalled();
        });
    });

    describe('moving notes', () => {
        it('should swap the first and last notes', () => {
            const { result } = renderUseNotes({
                initialNotes: TEST_NOTES_LIST,
            });

            act(() => result.current.moveNotes(2, 0));

            expect(result.current.notes).toStrictEqual([
                TEST_NOTES_LIST[2],
                TEST_NOTES_LIST[1],
                TEST_NOTES_LIST[0],
            ]);
        });

        it('should do nothing if positions are out of bounds', () => {
            const { result } = renderUseNotes({
                initialNotes: TEST_NOTES_LIST,
            });

            act(() => result.current.moveNotes(2, -1));
            act(() => result.current.moveNotes(-2, 1));
            act(() => result.current.moveNotes(3, 1));
            act(() => result.current.moveNotes(1, 3));

            expect(result.current.notes).toStrictEqual(TEST_NOTES_LIST);
        });
    });
});

const TEST_NOTES_LIST: Note[] = [
    {
        id: '1',
        lastUpdate: new Date(),
        text: 'Note 1',
    },
    {
        id: '2',
        lastUpdate: new Date(),
        text: 'Note 2',
    },
    {
        id: '3',
        lastUpdate: new Date(),
        text: 'Note 3',
    },
];
