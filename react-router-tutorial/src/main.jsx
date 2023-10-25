// - - - - - - - - - -
// The React libraries
// - - - - - - - - - -
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// - - - - - - - - - -
// My routed components:
// - - - - - - - - - -
// The routed root component aka. the application layout
import Root, {
    loader as rootLoader,
    action as rootAction,
} from "./routes/root";

// The routed error page component (each error)
import ErrorPage from "./error-page";

// The routed contact component with actions
import Contact, {
    loader as contactLoader,
    action as contactAction,
} from "./routes/contact";

import EditContact, { action as editAction } from "./routes/edit";

import { action as destroyAction } from "./routes/destroy";

// An index page component that is rendered when no route matches
import Index from "./routes/index";

// My new component
import NewComponent from "./new-component";

// - - - - - - - - - -
// My routes configuration
// - - - - - - - - - -
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
          {
              newComponent: <NewComponent/>,
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Index /> },
                    {
                        path: "contacts/:contactId",
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction,
                    },
                    { index: true, element: <Index /> },
                    {
                        path: "contacts/:contactId",
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction,
                    },
                    {
                        path: "contacts/:contactId/edit",
                        element: <EditContact />,
                        loader: contactLoader,
                        action: editAction,
                    },
                    {
                        path: "contacts/:contactId/destroy",
                        action: destroyAction,
                        errorElement: <div>Oops! There was an error.</div>,
                    },
                ],
            },
        ],
  },
  {
    path: "/comp",
    element: <NewComponent />,
  }
]);

// - - - - - - - - - -
// Render the application root element
// - - - - - - - - - -
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
