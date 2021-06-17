import React from "react";

function About() {
  let Presentation = (
    <h1>
      Hello, my name is
      <span class="rotate text-important"> John Doe</span>,<br />
      and I make horrible websites.
    </h1>
  );
  return <p> {Presentation} </p>;
}
export default About;
