import { getNotes, saveNotes } from './noteStorage';

describe('noteStorage', () => {
    beforeEach(() => {
        vi.spyOn(Storage.prototype, 'setItem');
        vi.spyOn(Storage.prototype, 'getItem');

        localStorage.clear();
    });

    it('should save notes', () => {
        const notes = [
            { id: '1', lastUpdate: new Date(), text: 'My note' },
            { id: '2', lastUpdate: new Date(), text: 'My note 2' },
        ];

        saveNotes(notes);

        expect(localStorage.setItem).toHaveBeenCalledWith(
            'notes_app_data',
            JSON.stringify(notes),
        );
    });

    it('should get notes', () => {
        const notes = [
            { id: '1', lastUpdate: new Date(), text: 'My note' },
            { id: '2', lastUpdate: new Date(), text: 'My note 2' },
        ];

        saveNotes(notes);

        expect(getNotes()).toStrictEqual(notes);
    });

    it('should return an empty list when theres no notes', () => {
        expect(getNotes()).toStrictEqual([]);
    });
});
