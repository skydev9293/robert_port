import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-width">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A journey through my career building scalable systems and leading engineering teams
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-800 shadow-lg hidden md:block"></div>

                  {/* Content Card */}
                  <div className="md:ml-20 bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {exp.position}
                          </h3>
                          <div className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                            {exp.company}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar size={16} className="mr-2" />
                            <span className="text-sm font-medium">{exp.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin size={16} className="mr-2" />
                            <span className="text-sm font-medium">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-4 mb-6">
                        <ul className="space-y-2">
                          {exp.description.map((desc, idx) => (
                            <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                              <ChevronRight size={16} className="mr-2 mt-0.5 text-primary-500 flex-shrink-0" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
