import { useEffect } from "react";
import useHttp from "../components/hooks/use-http";
import QuetoList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    error,
    data: loadedQuote,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (status === "error")
    return (
      <div className="centered focused">
        <p>{error}</p>
      </div>
    );

  if (status === "completed" && loadedQuote.length === 0)
    return <NoQuotesFound />;

  if (status === "completed")
    return <QuetoList quotes={loadedQuote}></QuetoList>;
};

export default AllQuotes;
