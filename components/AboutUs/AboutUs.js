import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs(props) {
  return (
    <div className={styles.aboutUsContainer}>
      <h2>
        <strong>About RSC SHOP</strong>
      </h2>
      <p>Welcome to RSC SHOP, your number one source for all things clothing. We're dedicated to giving you the very best, with a focus on quality and design. Founded in 2020 by Robert Castillo, RSC SHOP has come a long way from its beginnings in a home office. When Robert first started out, his drive for providing a quality clothing, gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over the US, and are thrilled to be a part of the new and fresh wing of the clothing industry.</p>
      <br />
      <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
    </div>
  );
}

export default AboutUs;
