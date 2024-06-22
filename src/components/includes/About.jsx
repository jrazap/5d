import resImg from "../../assets/about/res-icon.svg";
import calImg from "../../assets/about/calender-icon.svg";

const About = () => {
  return (
    <section
      className="relative about section bg-negrolineal lg:pb-[6rem]"
      id="about"
    >
      <div className="container py-6">
        <h2 className="font-semibold text-center text-white lg:text-6xl md:text-5xl sm:text-3xl">
          About Me
        </h2>
        <div className="boxes">
          <div className="box">
            <img src={resImg} alt="" />
            <h3 className="box-percent">100%</h3>
            <p className="box-label">Responsibility</p>
          </div>
          <div className="box">
            <div className="card featured">
              <h3 className="box-percent">100%</h3>
              <p className="box-label">Colombian</p>
            </div>
          </div>
          <div className="box">
            <img src={calImg} alt="" />
            <h3 className="box-percent">100%</h3>
            <p className="box-label">Puntuality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
