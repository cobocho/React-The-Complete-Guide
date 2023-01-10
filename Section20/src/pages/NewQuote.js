import { Fragment, useEffect } from "react";
import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const history = useHistory();

  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") history.push("/quotes");
  }, [status, history]);

  const addQuotehandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuotehandler} />
  );
};

export default NewQuote;
