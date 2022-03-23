import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import AddQuote from "./pages/AddQuote";
// import QuoteDetails from "./pages/QuoteDetail";
// import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import NotFound from "./pages/NotFound";

const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>

          <Route path="/add-quote">
            <AddQuote />
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
