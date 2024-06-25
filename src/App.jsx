import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import RestrictedRoute from "./RestrictedRoute.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

//Pages

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(
  () => import("./pages/RegisterPage/RegisterPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(
  () => import("./pages/ContactsPage/ContactsPage.jsx")
);
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

//Components
import Layout from "./components/Layout/Layout.jsx";
import { refreshUser } from "./redux/auth/authOperation.js";
import { selectIsRefreshing } from "./redux/auth/authSlice.js";

//Selectors and fetches

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return null;
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </Layout>
  );
}
