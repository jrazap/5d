const Footer = () => {
  const LINKS = [
    {
      icon: "fa fa-instagram",
      url: "#",
    },
    {
      icon: "fa fa-facebook-square",
      url: "#",
    },
    {
      icon: "fa fa-linkedin-square",
      url: "#",
    },
    {
      icon: "fa fa-twitter",
      url: "#",
    },
  ];

  return (
    <footer className="relative py-3 rounded-t-3xl bg-moradoclaro">
      <div className="contianer">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex gap-3 text-xl links">
            {LINKS.map((link, index) => {
              return (
                <a href={link.url} key={index}>
                  <i className={`${link.icon} gradient-text`} />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-negroclaro">Hassan Abu Ali © 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
