import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequest, createTodoRequest } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodosRequest({ currentPage: 1, pageSize: 30 }));
  }, [dispatch]);



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodoRequest({ name: "payload" })); // Dispatch createTodoRequest action with todo data
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos?.map((todo,) => (
          <li key={todo._id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;