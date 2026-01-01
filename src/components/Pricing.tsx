import { Check, X, Star } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: 'Silver',
      price: '50,000',
      currency: 'LKR',
      popular: false,
      features: [
        { name: 'Social Media Page Management', value: 'Facebook & Instagram', included: true },
        { name: 'Content Creation', value: '10 Custom Flyers', included: true },
        { name: 'Video Production', value: '1 x 30-sec Animated Video (Unlimited Revisions)', included: true },
        { name: 'Facebook & Instagram Ad Boosting', value: 'LKR 10,000 in Ad Spend Limit', included: true },
        { name: 'Campaign Type', value: '1 Ad Campaign (Brand Awareness or Engagement)', included: true },
        { name: 'YouTube Channel Management', value: null, included: false },
        { name: 'E-Commerce Store Setup & Management', value: null, included: false },
        { name: 'Monthly Report & Insights', value: 'Basic Performance Report', included: true },
      ],
    },
    {
      name: 'Gold',
      price: '75,000',
      currency: 'LKR',
      popular: true,
      features: [
        { name: 'Social Media Page Management', value: 'Facebook, Instagram & YouTube', included: true },
        { name: 'Content Creation', value: '15 Custom Flyers', included: true },
        { name: 'Video Production', value: '2 x 30-sec Animated Videos', included: true },
        { name: 'Facebook & Instagram Ad Boosting', value: 'LKR 20,000 in Ad Spend Limit', included: true },
        { name: 'Campaign Type', value: '2 Ad Campaigns (Traffic + Lead Generation)', included: true },
        { name: 'YouTube Channel Management', value: 'Video Uploading & SEO', included: true },
        { name: 'E-Commerce Store Setup & Management', value: null, included: false },
        { name: 'Monthly Report & Insights', value: 'Advanced Report with Optimization Suggestions', included: true },
      ],
    },
    {
      name: 'Platinum',
      price: '100,000',
      currency: 'LKR',
      popular: false,
      features: [
        { name: 'Social Media Page Management', value: 'Facebook, Instagram, YouTube & TikTok', included: true },
        { name: 'Content Creation', value: '20 Custom Flyers', included: true },
        { name: 'Video Production', value: '4 x 1-min Animated Videos + 2 Customer Review Videos + 2 Pro Opinion Videos', included: true },
        { name: 'Facebook & Instagram Ad Boosting', value: 'LKR 40,000 in Ad Spend Limit', included: true },
        { name: 'Campaign Type', value: '4 Ad Campaigns (Full-Funnel Strategy: Awareness, Traffic, Leads, Sales)', included: true },
        { name: 'YouTube Channel Management', value: 'Full Management & Promotion', included: true },
        { name: 'E-Commerce Store Setup & Management', value: 'Included', included: true },
        { name: 'Monthly Report & Insights', value: 'Premium Analytics & Growth Strategy', included: true },
      ],
    },
  ];

  const additionalServices = [
    { service: 'YouTube SEO', price: '5,000' },
    { service: 'Google Ads Management', price: '15,000' },
    { service: 'Website Design', price: '50,000' },
    { service: 'E-Commerce Setup', price: '75,000' },
    { service: 'Brand Identity Package', price: '25,000' },
    { service: 'Video Production (per video)', price: '10,000' },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-600 font-semibold text-lg tracking-wider">PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transparent Pricing Plans
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect package for your business needs. All plans include our commitment to exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border-2 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                pkg.popular
                  ? 'border-red-600 shadow-lg shadow-red-600/20 scale-105'
                  : 'border-gray-700 hover:border-red-600'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-gray-400 text-lg">{pkg.currency}</span>
                  <span className="text-5xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center mt-0.5">
                        <X className="w-4 h-4 text-gray-500" />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className={`font-medium ${feature.included ? 'text-white' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                      {feature.value && (
                        <span className={`text-sm ${feature.included ? 'text-gray-400' : 'text-gray-600'}`}>
                          {feature.value}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">À La Carte Services</h3>
            <p className="text-gray-400">Individual services available for custom needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium group-hover:text-red-600 transition-colors duration-300">
                    {item.service}
                  </span>
                  <span className="text-red-600 font-bold">
                    {item.price} <span className="text-sm">LKR</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">Need a custom package?</p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-red-600 font-semibold hover:text-red-500 transition-colors duration-300"
            >
              Contact us for a tailored solution →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
