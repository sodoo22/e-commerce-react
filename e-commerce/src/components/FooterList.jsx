import { Link } from "react-router-dom";

export default function FooterList(props) {
  return (
    <div className="footerList">
      <h3>Find product</h3>
      <ul>
        {props.data.map((data, index) => {
          return (
            <li key={index} className="my-3">
              <Link>{data.ul}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
