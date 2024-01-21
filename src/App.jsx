import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./herosection/Dashboard";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store/store";

const persist = persistStore(store);

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
      <PersistGate persistor={persist}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
