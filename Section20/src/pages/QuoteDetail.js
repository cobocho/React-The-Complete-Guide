import { Fragment, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router";
import { Route } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Link } from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const { quoteId: id } = useParams();

  const { sendRequest, data: quote, status } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  const match = useRouteMatch();

  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.url} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Open Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
