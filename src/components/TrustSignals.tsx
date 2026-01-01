import { Award, CheckCircle } from 'lucide-react';

export default function TrustSignals() {
  const partners = [
    { name: 'Google Ads', verified: true },
    { name: 'Facebook Partner', verified: true },
    { name: 'Yahoo Partner', verified: true },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Award className="text-red-600 w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Official Partners
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted and certified by the industry leaders
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-gray-900">{partner.name}</div>
                {partner.verified && (
                  <CheckCircle className="text-red-600 w-6 h-6 flex-shrink-0" />
                )}
              </div>
              <div className="mt-2 text-sm text-gray-500">Official Partner</div>

              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 font-semibold">
            Top-tier Sri Lankan Digital Marketing Agency
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-white font-bold"
                >
                  ★
                </div>
              ))}
            </div>
            <span className="text-gray-600 ml-2">Rated 5.0 by our clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
