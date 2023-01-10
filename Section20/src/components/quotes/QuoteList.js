import { Fragment } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((a, b) => {
    if (ascending) {
      return a.id > b.id ? 1 : -1;
    } else {
      return a.id > b.id ? -1 : 1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortAscending = queryParams.get("sort") === "asc";

  const match = useRouteMatch();

  const changeSortingHandler = () => {
    history.push({
      pathname: match.path,
      search: "?sort=" + (isSortAscending ? "desc" : "asc"),
    });
  };

  const sortedQuotes = sortQuotes(props.quotes, isSortAscending);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortAscending ? "descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
