import React from "react";
import styles from "./Pagination.module.css";

function Pagination(props) {
  const pageNumbers = [];
  for (let x = 1; x <= Math.ceil(props.totalItems / props.itemsPerPage); x++) {
    pageNumbers.push(x);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              onClick={event => {
                event.preventDefault();
                props.paginate(number);
              }}
              href="!#"
              className={"page-link"}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;

// implemented pagination functionality from this Brad Traversy Video - https://www.youtube.com/watch?v=IYCa1F-OWmk
