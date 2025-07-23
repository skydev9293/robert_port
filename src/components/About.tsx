import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Users, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Robust Systems",
      description: "11+ years building secure, large-scale systems for healthcare, finance, and e-commerce."
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Designed resilient cloud solutions and integrated AI to deliver high-performance applications."
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Specialized in leveraging AI tools like GPT and TensorFlow to automate workflows and boost efficiency."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led teams, mentored engineers, and championed best practices to drive growth and innovation."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I’m a passionate staff software engineer who loves building scalable systems and leading high-performing teams.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                Building the Future, One Line at a Time
              </h3>
              <div className="space-y-4 text-center">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-lg">
                  {personalInfo.bio}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                  Throughout my career, I've had the privilege of working with amazing teams to solve complex technical challenges.
                  I believe in writing clean, maintainable code and building systems that can scale with business needs.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                What Drives Me
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</span>
                  Solving complex technical problems with elegant solutions
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</span>
                  Mentoring engineers and fostering team growth
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</span>
                  Building systems that positively impact millions of users
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</span>
                  Staying current with emerging technologies and best practices
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto">
                    <highlight.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fun Facts */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-800 rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Fun Facts About Me
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">💻</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Built automation workflows that saved 1000+ hours of manual work
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">🚀</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Led projects handling 50M+ transactions monthly at Amazon
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">🌎</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Worked with global teams across 3 continents
                </p>
              </div>
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default About;
