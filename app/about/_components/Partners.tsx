import Image, { StaticImageData } from "next/image"

type Partner = {
  name: string;
  logo: StaticImageData;
  url?: string;
};

type PartnersProps = {
  title?: string;
  partners: Partner[];
};

export default function Partners({ title = "Nos Partenaires", partners }: PartnersProps) {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50">
      <h2 className="text-center font-bold text-2xl lg:text-3xl xl:text-4xl text-delft-blue mb-12">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {partners.map((partner, i) => (
          <div key={i} className="flex justify-center">
            {partner.url ? (
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            ) : (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={80}
                className="object-contain grayscale"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
