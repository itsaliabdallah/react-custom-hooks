import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </>
  );
}
