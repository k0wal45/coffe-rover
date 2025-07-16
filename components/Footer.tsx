import React, { Fragment } from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Fragment>
      <footer className="flex justify-center items-center p-6 text-xl text-white bg-secondary">
        <p>Copyright &#169; All rights reserved - {year}</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
