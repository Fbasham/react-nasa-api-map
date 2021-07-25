import { RiGithubFill } from "react-icons/ri";

const Header = () => (
  <header>
    <div>Wild Fire Tracker</div>
    <div className="github">
      <a href="https://github.com/fbasham" target="_blank" rel="noreferrer">
        <RiGithubFill />
      </a>
    </div>
  </header>
);

export default Header;
