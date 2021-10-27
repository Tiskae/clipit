import React from "react";
import * as classes from "./StoredText.module.css";

const StoredText = (props) => {
  return (
    <div className={classes.StoredText}>
      <div className={classes.Heading}>
        <h3>Something I copied!!!</h3>
        <button>Copy</button>
      </div>
      <div className={classes.Body}>
        <p>
          This is the body of the text!!!!This is the body of the text!!!!This
          is the body of the text!!!!This is the body of the text!!!!This is the
          body of the text!!!!This is the body of the text!!!!
        </p>
      </div>
    </div>
  );
};
export default StoredText;
