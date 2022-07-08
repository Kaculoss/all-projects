import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { projectData } from "../projectData";
import ProjectItem from "./ProjectItem";
import SectionTitle from "./SectionTitle";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

export default function ProjectSection() {
  return (
    <div className="projectSection">
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my projects" />
        <div className="projects-allitems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {projectData.allProjects[0].projects.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem img={project.img} title={project.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
