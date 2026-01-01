import { Mail, Share2, Palette, Globe, Video, ShoppingCart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that drive engagement and conversions with personalized content and automation.',
      color: 'from-red-600 to-red-700',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic social media management across all platforms to build your brand presence and community.',
      color: 'from-red-600 to-pink-600',
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Eye-catching visual designs that communicate your brand story and captivate your audience.',
      color: 'from-pink-600 to-red-600',
    },
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences and drive business growth.',
      color: 'from-red-700 to-red-600',
    },
    {
      icon: Video,
      title: 'Video Creation',
      description: 'Compelling video content that tells your story and engages viewers across all digital channels.',
      color: 'from-red-600 to-red-500',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Platforms',
      description: 'Complete e-commerce solutions that turn browsers into buyers with optimized shopping experiences.',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-600 font-semibold text-lg tracking-wider">OUR EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of digital marketing services designed to elevate your brand and drive measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-red-600 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                <div className={`h-full bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
