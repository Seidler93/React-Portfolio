import portrait from '../assets/port.webp'

export default function AboutMePage() {
  return (
    <div className="p-4 d-flex pt-4">
      <img src={portrait} alt="" className="abt-me-port"/>
      <p className="ps-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
        impedit suscipit sed magnam alias in, repellat expedita hic explicabo
        architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Velit voluptate exercitationem quaerat pariatur
        mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
        nostrum temporibus ad omnis nam rerum eligendi.
      </p>
    </div>
  );
}
