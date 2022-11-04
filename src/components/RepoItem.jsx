import React from "react";
import { Link } from 'react-router-dom';

export default function RepoItem(props) {

    const{name, language } = props;

  return (
    <>
    <Link className="list_Item" to={`/repos/${name}`}>
    <li className="list-group-item  bg-dark ">
        <div className="repo__row">
          <div className="alert alert-info" role="alert">
            <span className="repo__value">
              {name}
              {" | "}
              <span>
                Language__
                {language != null ? language : "Not Available"}
              </span>
            </span>
          </div>
        </div>
      </li>
    </Link>
      
    </>
  );
}
