import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github-mark.png'

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <footer className="bg-secondary p-5 d-flex justify-content-center footer-section">
      <a className="p-2" href="https://github.com/Seidler93" target="_blank"><img className="footer-img" src={github} alt="" /></a>
      <a className="p-2" href="https://www.linkedin.com/in/a-j-seidler-a50556b2/" target="_blank"><img className="footer-img" src={linkedin} alt="" /></a>
    </footer>
  );
}