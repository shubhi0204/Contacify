import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <AppLayout />
      </RouterProvider>
    </Provider>
  );
}

export default App;
