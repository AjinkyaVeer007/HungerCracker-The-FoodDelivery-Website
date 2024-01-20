import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./herosection/Dashboard";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
