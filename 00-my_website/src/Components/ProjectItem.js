import React from "react";
import { Link } from "react-router-dom";

export default function ProjectItem({
  img = "/images/tours.png",
  title = "Project Name",
  desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,vitae!",
}) {
  return (
    <div className="projectItem">
      <Link to="/projects" className="projectItem-img">
        <img src={img} alt="project" />
      </Link>
      <div className="projectItem-info">
        <Link to="#">
          <h3 className="projectItem-title">{title}</h3>
        </Link>
        <p className="projectItem-desc">{desc}</p>
      </div>
    </div>
  );
}
