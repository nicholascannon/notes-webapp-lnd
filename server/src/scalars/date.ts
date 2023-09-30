import { GraphQLScalarType } from 'graphql';

export const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Enables basic storage and retrieval of dates and times.',
    serialize: (value) => {
        if (value instanceof Date) {
            return value.toISOString();
        }
        throw new Error(`GraphQL Date scalar expected \`Date\` object but got ${typeof value}`);
    },
    parseValue: (value) => {
        if (typeof value === 'string') {
            return new Date(value);
        }
        throw new Error(`GraphQL Date parser expected string but got ${typeof value}`);
    },
});
