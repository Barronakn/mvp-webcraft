import { ArrowRight, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import BtnAndArrow from '../btnandarrow';
import Link from 'next/link';
import { usePaginatedQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Destinations = () => {
  const router = useRouter()
  const { results, status, loadMore } = usePaginatedQuery(
    api.queries.sites.listSites,
    {}, // pas besoin de cursor/limit
    { initialNumItems: 8 }
  );

  if (status === 'LoadingFirstPage') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-terracotta-500 border-dashed rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }
  

  return (
    <section className="container p-6 md:p-16">
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-y-2 pb-12">
        <div>
          <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl text-delft-blue">
            Les destinations les plus populaires
          </h2>
        </div>
        <Link
          className="flex flex-row gap-x-2 lg:gap-x-4 self-end md:items-center"
          href="#"
        >
          <span className="text-black text-lg lg:text-2xl font-medium underline">
            Voir toutes les destinations
          </span>
          <ArrowRight className="text-delft-blue w-6 h-6 lg:w-7 lg:h-7" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 mx-auto">
        {results.map((site) => (
          <div
            key={site._id}
            className="bg-white rounded-[1.25rem] shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-56">
              {site.photos?.[0] && (
                <Image
                  src={site.photos[0]}
                  alt={site.name}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="text-xl sm:text-[1.75rem] font-semibold">{site.name}</h3>
                <p className="text-sm sm:text-base font-medium">{site.city}</p>
              </div>
            </div>

            <div className="p-4 space-y-[0.833125rem]">
              <p className="text-delft-blue text-base line-clamp-3">{site.description}</p>

              <div className="flex items-center gap-4 text-terracotta-500 font-medium text-base">
                {site.opening_hours && (
                  <span className="flex items-center gap-x-2.5">
                    <Clock size={16} /> {site.opening_hours}
                  </span>
                )}
                {site.reviews_count && (
                  <span className="flex items-center gap-x-2.5">
                    <Users size={16} /> {site.reviews_count} avis
                  </span>
                )}
              </div>

              {site.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2.5">
                  {site.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[0.625rem] px-4.5 py-0.75 rounded-full bg-sand-100 font-medium text-terracotta-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <BtnAndArrow onClick={() => router.push(`/site/${site._id}`)} classname="text-lg lg:text-xl !py-5 lg:!py-7 !px-2 sm:!px-5 md:!px-10 xl:!px-16" />
            </div>
          </div>
        ))}
      </div>

      {status === 'CanLoadMore' && (
        <div className="flex justify-center mt-8">
          <Button onClick={() => loadMore(5)}>Load More</Button>
        </div>
      )}
    </section>
  );
};

export default Destinations;
