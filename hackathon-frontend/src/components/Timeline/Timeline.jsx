
import React,{useState} from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from './TimeLineElement';
import { FaLocationDot,FaClock } from "react-icons/fa6";
import Heading from './Heading';


const TimelineWithAnimations = () => {
  const [x, setX] = useState(0); // Define x and its setter function
  const [y, setY] = useState(0); // Define y and its setter function
  const [isHovered, setIsHovered] = useState(false); // Define isHovered state

  const handleHover = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setX(xPct);
    setY(yPct);
  };

  const handleLeave = () => {
    setIsHovered(false);
    
    setX(0);
    setY(0);
  };

  return (
    <div className="bg-[#f8f6f3] rounded-lg">
    <Heading text="HOW TO INCREASE YOUR CATSCORE"/>
    <div className="flex flex-wrap place-content-center px-14 py-14 text-slate-900 bg-transparent">
      <VerticalTimeline lineColor="#374151">
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.id}
          >
            <motion.div
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="timeline-content bg-gradient-to-br from-slate-900 to-slate-400  rounded-xl shadow-lg "
            >
    
              <h3 className="vertical-timeline-element-title text-white font-bold flex justify-center items-center uppercase bg-slate-900 rounded">
                {element.title}
              </h3>

              {/* Location and Time */}
              <div className="location-time text-center text-gray-700">
                <p className="vertical-timeline-element-subtitle flex justify-center items-center text-white font-bold"><span className='px-4 flex items-center'></span>{element.desc}</p>
               
              </div>

            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    </div>
  );
};

export default TimelineWithAnimations;