/* eslint-disable react/prop-types */
import './Title.css';

export default function Title({text}) {
  return (
    <div className="portfolio-title">
      <h2 className="portfolio-title__h2">{text}</h2>
      <hr />
    </div>
  );
}
