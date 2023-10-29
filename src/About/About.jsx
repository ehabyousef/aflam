import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex flex-column flex-lg-row">
          <div className="col-8 d-flex align-items-center ">
            <p className="fs-2">
              Hi ! My name is Ehab Yousef, a young creative developer from
              Egypt. I am passionate about creating visually stunning and
              innovative websites that not only look great but also provide
              exceptional user experiences.
            </p>
          </div>
          <div className="col-4">
            <img width="300px" className="rounded-4" src="bob.png" alt="" />
          </div>
        </div>
        <div className="d-flex my-5 justify-content-md-end gap-5">
          <div className="col-2 border-start px-2">
            <h3 className="border-bottom p-1">Experience</h3>
            <p>
              With nearly 2 years of experience in web development, I have built
              over 20 web projects for a lot of difference platform and
              bussiness.
            </p>
          </div>
          <div className="col-2 border-start px-2">
            <h3 className="border-bottom p-1">Skils</h3>
            <p>
              I use Html,Css , javaScript ,reactJs and Bootstrap to create
              Websites, interactive effect for small projects
            </p>
          </div>
          <div className="col-2 border-start px-2">
            <h3 className="border-bottom p-1"> Services</h3>
            <p>
              Whether you're a design agency, creative studio or just an
              individual designer I am here to help you transform your designs
              into an immersive website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
