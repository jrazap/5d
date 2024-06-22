import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Project = (props) => {
  const { image, name, tags, url } = props;
  return (
    <a href={url} target="_blank" className="w-10/12 h-full mx-1 group">
      <div className="overflow-hidden rounded-2xl h-[12rem] w-10/12 mx-auto shadow-projectbox -mb-[5rem] group-hover:translate-y-1 transition-all duration-100 delay-100">
        <LazyLoadImage
          className="w-full h-full object-fit"
          src={image}
          alt={name}
          width="100%"
          height="100%"
        />
      </div>
      <div className="w-11/12 p-5 pt-[6rem] mx-auto shadow-projectbox rounded-2xl bg-white box">
        <h3 className="font-semibold text-md gradient-text">{name}</h3>
        <p className="text-sm font-light text-negroclaro">{tags.join(" - ")}</p>
      </div>
    </a>
  );
};

const ProjectsSlider = () => {
  const projects = [
    {
      image: "/portfolio/p1.webp",
      name: "Eventos Premium",
      tags: ["Elegante", "Serio", "Estatus"],
      url: "#",
    },
    {
      image: "/portfolio/p2.webp",
      name: "Mi Portal U",
      tags: ["Amigable", "Dashboard", "Simple"],
      url: "#",
    },
    {
      image: "/portfolio/p1.webp",
      name: "Eventos Premium",
      tags: ["Elegante", "Serio", "Estatus"],
      url: "#",
    },
    {
      image: "/portfolio/p2.webp",
      name: "Mi Portal U",
      tags: ["Amigable", "Dashboard", "Simple"],
      url: "#",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    lazyLoad: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (projects && projects.length === 0) return;
  else
    return (
      <>
        <Slider {...settings} className="bg-transparent">
          {projects &&
            projects.length > 0 &&
            projects.map((project, index) => (
              <Project
                key={index}
                image={project.image}
                name={project.name}
                tags={project.tags}
                url={project.url}
              />
            ))}
        </Slider>
      </>
    );
};

const Portfolio = () => {
  return (
    <section className="relative portfolio section" id="portfolio">
      <div className="container relative ">
        <h2 className="section-title gradient-text">Portfolio</h2>
        <hr className="my-4 border border-aliceblue" />
        <ProjectsSlider />
      </div>
    </section>
  );
};

export default Portfolio;
