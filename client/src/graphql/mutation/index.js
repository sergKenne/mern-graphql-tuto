import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
    mutation createTodo($input: TodoInput) {
        createTodo(input: $input) {
            id
            title
            description
        }
    }
`;

export const DELETE_TODO = gql`
    mutation deleteTodo($id: ID) {
        deleteTodo(id: $id) {
            id
            title
        }
    }
`;