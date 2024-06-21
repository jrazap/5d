import heroImg from "../../assets/banner/hero-img.webp";
import { Icon } from "@iconify/react/dist/iconify.js";
const Banner = () => {
  return (
    <>
      <section className="banner relative section">
        <div className="container lg:flex lg:flex-row lg:gap-3 lg:items-center">
          <div className="basis-1/2">
            <h1 className="hero-text relative lg:text-[6rem] md:text-[4rem] sm:text-[3rem] font-semibold text-negrolineal lg:leading-[100px] md:leading-[80px] sm:leading-[60px]">
              <span className="relative block">Hi, I am</span> Hassan 🎨
            </h1>
            <p className="text-black font-light text-sm my-4 md:w-3/4 sm:w-3/4">
              I am a UI/UX Designer, I like to make interfaces simple and
              aesthetically pleasing for users; The idea is not to create an
              interface for creating it, it is that users prefer you because
              your product is easy to use.
            </p>
            <a href="#" className="btn gradient-btn">
              <span>Contact Me</span>
              <Icon icon="ei:arrow-right" className="text-lg" />
            </a>
          </div>
          <div className="lg:basis-1/2 md:hidden sm:hidden">
            <img
              className="w-full h-full object-contain"
              src={heroImg}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
