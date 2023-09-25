import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import ErrorPage from "./error-page";
import "./index.css";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import { action as deleteAction } from "./routes/delete";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

function App() {
  // here we define variable and that variable value is assigned an router constructor (with parameters as Objects)
  const router = createBrowserRouter([
    {
      // Home page
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
        {
          // children within a children is called pathless route
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Index />,
            },
            {
              // child elems will render in teh Outlet components
              path: "contacts/:contactId",
              element: <Contact />,
              loader: contactLoader,
              action: contactAction,
            },

            {
              //Contacts edit Page
              path: "contacts/:contactId/edit",
              element: <EditContact />,
              loader: contactLoader,
              action: editAction,
            },
            {
              // contact destroy / delete route or page
              path: "contacts/:contactId/destroy",
              action: deleteAction,
              errorElement: <div>Oops there was an error!</div>,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
