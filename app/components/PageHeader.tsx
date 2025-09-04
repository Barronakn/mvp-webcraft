import { ChevronRight } from "lucide-react";
import Link from "next/link";

type PageHeaderProps = {
  title: string;
  description: string;
  breadcrumb?: { label: string; href?: string }[];
};

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative w-full bg-linear-65 to-terracotta-500 from-sand-500 text-white py-12 px-4 text-center mt-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>

      {breadcrumb && (
        <nav className="flex justify-center items-center space-x-2 text-sm text-gray-200">
          {breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {item.href ? (
                <Link href={item.href} className="text-base transition duration-500 hover:text-delft-blue font-semibold">
                  {item.label}
                </Link>
              ) : (
                <span className="text-base font-semibold">{item.label}</span>
              )}
              {index < breadcrumb.length - 1 && (
                <ChevronRight size={14} className="text-white" />
              )}
            </div>
          ))}
        </nav>
      )}
      <p className="text-lg md:w-1/2 mx-auto mt-4">
        {description}
      </p>
    </section>
  );
}
