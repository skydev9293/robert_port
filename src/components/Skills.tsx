import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Skill } from '../types';

const Skills: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-dark-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h4>
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {skill.level}/5
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );

  const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
    >
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {skill.name.charAt(0)}
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            {skill.name}
          </h4>

          <div className="flex justify-center space-x-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: star * 0.1 }}
                className={`w-3 h-3 rounded-full ${star <= skill.level
                  ? 'bg-primary-500'
                  : 'bg-gray-300 dark:bg-dark-600'
                  }`}
              />
            ))}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            {skill.level === 5 ? 'Expert' :
              skill.level === 4 ? 'Advanced' :
                skill.level === 3 ? 'Intermediate' :
                  skill.level === 2 ? 'Beginner' : 'Learning'}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-width">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills Summary */}
          <motion.div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Skills Overview
            </h3>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {skills.filter(s => s.level >= 4).length}+
                </div>
                <p className="text-gray-600 dark:text-gray-400">Advanced Skills</p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {new Set(skills.map(s => s.category)).size}
                </div>
                <p className="text-gray-600 dark:text-gray-400">Skill Categories</p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  8+
                </div>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div variants={containerVariants}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Card View for smaller screens, Bar view for larger */}
              <div className="block lg:hidden">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications & Learning */}
          <motion.div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-justify">
              I believe in continuous learning and staying current with emerging technologies.
              I regularly attend conferences, complete online courses, and contribute to open-source projects
              to expand my skill set and share knowledge with the community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
