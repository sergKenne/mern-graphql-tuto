import { gql } from '@apollo/client'

export const GET_ALL_TODO = gql`
    {
       todos {
            id
            title
            description
       } 
    }
`;

export const DELETE_TODO = gql`
    mutation  deleteTodo($id: ID ) {
        deleteTodo(id: $id) {
            id
        }
    }
`;