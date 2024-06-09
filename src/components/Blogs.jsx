import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

import "react-vertical-timeline-component/style.min.css";

import { Link } from "react-router-dom";
import { blogs } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const BlogCard = ({ blog, index }) => {
  const { image, title, description, id } = blog;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Link to={`/blog/${id}`}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-secondary text-[14px]">
              {description.slice(0, 200) + "..."}
            </p>
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>My Blogs</h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3">
        {blogs.map((b, i) => (
          <BlogCard key={i} index={i} blog={b} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");
