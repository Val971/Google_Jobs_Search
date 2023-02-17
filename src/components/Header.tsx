import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="mb-8">
      <Link to="/" className="text-2xl">
        <span className="font-bold">Google</span> Jobs
      </Link>
    </div>
  );
}
