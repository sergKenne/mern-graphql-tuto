import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_ALL_TODO } from '../graphql';
import Cart from './Cart';
import Loading from './Loading';

const TodoList = () => {
    const { loading, error, data } = useQuery(GET_ALL_TODO);
    
    if (loading) {
        return <Loading/>
    }

    if (data) {
        return (
            <div className="row">
                {data.todos.map((todo) => (
                    <div className="col-sm-12 col-md-12 col-lg-6 mb-4" key={todo.id}>
                        <Cart todo={todo} />
                    </div>
                ))}    
            </div>
        );
    }

  
}

export default TodoList