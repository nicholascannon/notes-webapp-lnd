import { useDrag, useDrop } from 'react-dnd';
import { useNotes } from '../providers/NoteProvider';

export const useDragAndDropNote = (dropIndex?: number) => {
    const { moveNotes } = useNotes();
    const [{ isDragging }, dragRef] = useDrag<
        DragObject,
        unknown,
        CollectedProps
    >({
        type: ITEM_TYPE,
        item: { fromIndex: dropIndex },
        collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    });

    const [_, dropRef] = useDrop<DragObject>({
        accept: ITEM_TYPE,
        drop: ({ fromIndex }) => {
            if (dropIndex === undefined || fromIndex === undefined) {
                return;
            }
            moveNotes(fromIndex, dropIndex);
        },
    });

    return {
        dragRef,
        dropRef,
        isDragging,
    };
};

type DragObject = {
    fromIndex?: number;
};

type CollectedProps = {
    isDragging: boolean;
};

const ITEM_TYPE = 'NOTE';
