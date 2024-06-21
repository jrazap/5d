import resImg from "../../assets/about/res-icon.svg";
import calImg from "../../assets/about/calender-icon.svg";
const About = () => {
  return (
    <section className="about section relative bg-negrolineal">
      <div className="container py-6">
        <h2 className="text-white text-[4rem] font-semibold text-center sm:text-3xl xs:text-2xl">
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
