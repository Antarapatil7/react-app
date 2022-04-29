import React from "react";
import "../App.css";
import image1 from "../images/image1.svg";

const Main = () => {
  return (
    <div className="welcome container">
      <div className="row pb-4">
        <div className="col-lg-6 col-12">
          <div className="text-center para pt-4">
            <h4 className="py-2 fw-bold text-black text-justify">
              Welcome to Behance
            </h4>
            <p className="text-black text-justify">
            Behance, part of Adobe, is the leading online platform to showcase & discover creative work. 
            Creative people around the world join Behance, entering a community made with their original work and creative process in mind. Here, users showcase their work in the form of profiles comprised of Projects. 
            A Project is a grouping of images, videos, and other digital content with a related theme or process. Every project has a unique URL that can be shared across the web, as well as a View and Appreciation counter so you can track how many people have seen your project and given you kudos on a job well done. Here is an example of a Project created by the Behance Design Team.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="text-center">
            <img
              src={image1}
              className="img-fluid logo-class"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
