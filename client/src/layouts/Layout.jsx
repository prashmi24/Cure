import React, { Suspense } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Routers from "../routes/Router.jsx";
import Loading from "../components/Loader/Loading.jsx";
import ErrorBoundary from "../components/Error/ErrorBoundary.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main role="main">
        <ErrorBoundary
          fallback={<div>An error occurred. Please try again later.</div>}
        >
          <Suspense fallback={<Loading />}>
            <Routers />
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* Lazy load footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};
export default Layout;
