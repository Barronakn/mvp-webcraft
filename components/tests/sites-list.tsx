"use client"

import { usePaginatedQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Image from "next/image";

export default function SitesList() {
    const { results, status, loadMore } = usePaginatedQuery(
        api.queries.sites.listSites,
        {}, // pas besoin de passer cursor/limit, c’est géré automatiquement
        { initialNumItems: 8 }
    );

    if (status === "LoadingFirstPage") return <p>Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-terracotta mb-6">
                Tourist Sites
            </h1>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.map((site) => (
                    <li
                        key={site._id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col"
                    >
                        {site.photos?.length > 0 && (
                            <Image
                                src={site.photos[0]}
                                alt={site.name}
                                className="w-full h-48 object-cover rounded-md mb-4"
                                width={500}
                                height={300}
                            />
                        )}
                        <h2 className="text-lg font-semibold text-gray-800">
                            {site.name}
                        </h2>
                        <p className="text-sm text-gray-600">{site.city}</p>
                        <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                            {site.description}
                        </p>
                    </li>
                ))}
            </ul>

            {status === "CanLoadMore" && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => loadMore(5)}
                        className="px-6 py-2 bg-amber-600 text-white font-medium rounded-lg shadow hover:bg-amber-600/90 transition cursor-pointer"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
