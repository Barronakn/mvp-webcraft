import { testimonials } from "@/app/utils/data/mockData";

const Testimonials = () => (
    <section className="py-16 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">
          Ce que disent nos <span className="text-orange-600">Voyageurs</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Découvrez les témoignages de ceux qui ont exploré le Bénin grâce à
          Wakpon Bénin
        </p>
  
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-lg text-left"
            >
              <div className="flex gap-1 text-orange-500 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm text-gray-700 italic">{t.text}</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
export default Testimonials