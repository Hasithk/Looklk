import { useState } from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

type Category = 'all' | 'branding' | 'websites' | 'social';

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  stats?: { label: string; value: string }[];
  image: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'BIONA Social Media Campaign',
      category: 'social',
      description: 'Complete social media management and advertising campaign',
      stats: [
        { label: 'Reach', value: '89,462' },
        { label: 'Cost/Result', value: '$0.09' },
        { label: 'Engagement', value: '+245%' },
      ],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Plant Planet Branding',
      category: 'branding',
      description: 'Complete brand identity and logo design for eco-friendly business',
      image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'AI Prompt Gen Website',
      category: 'websites',
      description: 'Modern web application for AI prompt generation',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Arrow Logistics Marketing',
      category: 'social',
      description: 'Comprehensive digital marketing strategy and execution',
      stats: [
        { label: 'Leads', value: '150+' },
        { label: 'ROI', value: '320%' },
      ],
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Green Line Brand Identity',
      category: 'branding',
      description: 'Fresh and modern branding for sustainable transport',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Sinhara Art Suite Website',
      category: 'websites',
      description: 'Elegant portfolio website for art gallery',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 7,
      title: 'Aprodiate Branding',
      category: 'branding',
      description: 'Professional brand development and visual identity',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      title: 'Orex E-Commerce',
      category: 'websites',
      description: 'Full-featured e-commerce platform with payment integration',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 9,
      title: 'London Gift Shop Campaign',
      category: 'social',
      description: 'Social media advertising for retail growth',
      stats: [
        { label: 'Sales', value: '+180%' },
        { label: 'Traffic', value: '45K' },
      ],
      image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = [
    { id: 'all' as Category, label: 'All Projects' },
    { id: 'branding' as Category, label: 'Branding' },
    { id: 'websites' as Category, label: 'Websites' },
    { id: 'social' as Category, label: 'Social Media' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-600 font-semibold text-lg tracking-wider">OUR WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio of Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animation: 'fadeIn 0.5s ease-out',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'backwards',
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute top-4 right-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>

                {project.stats && (
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
