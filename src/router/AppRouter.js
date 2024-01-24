import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

const AppRouter = () => {
    const router = createBrowserRouter ([
        {path: "/", element: <BookList/>},
        {path: "/header", element: <Header/>},
        {path: "/addbook", element: <AddBook/>},
    ]);

  return (
<>
<RouterProvider router={router}/>
</>
  );
};

export default AppRouter;