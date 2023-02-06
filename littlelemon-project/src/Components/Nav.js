import logo from "../images/logo512.png";

export default function Nav() {
  return (
    <nav>
      <img src={logo} width={100} height={100} alt="logo" />
      <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">Menu</a>
        </li>
        <li>
          <a href="/#">Booking</a>
        </li>
        <li>
          <a href="/#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
