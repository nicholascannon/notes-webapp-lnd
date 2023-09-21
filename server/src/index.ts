import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import { randomUUID } from 'crypto';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Note, Resolvers } from './__generated__/resolvers-types';

const NOTES = new Map<string, Note>();

const resolvers: Resolvers = {
    Query: {
        notes: () => Array.from(NOTES.values()),
    },
    Mutation: {
        addNote: (_, { text }) => {
            const note = {
                id: randomUUID(),
                text,
                lastEdited: new Date(),
            };
            NOTES.set(note.id, note);
            return note;
        },
        editNote: (_, { id, text }) => {
            const note = NOTES.get(id);
            if (!note) throw new Error(`Note with ID ${id} doesn't exist`);

            const updatedNote = { ...note, text };
            NOTES.set(id, updatedNote);

            return updatedNote;
        },
        deleteNote: (_, { id }) => {
            return NOTES.delete(id);
        },
    },
};

const server = new ApolloServer<{}>({
    typeDefs: readFileSync(join(__dirname, './schema.graphql'), { encoding: 'utf-8' }),
    resolvers,
});

startStandaloneServer(server, { listen: { port: 8000 } }).then(({ url }) => {
    console.log(`Listening at ${url}`);
});
