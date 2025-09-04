"use client"

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import Image from "next/image";

export default function TestGetSite() {
    // ⚠️ Mets ici un vrai _id d’un site existant en base Convex
    const site = useQuery(api.queries.sites.getSiteById, { id: "j57716dtb14w3rzzfd3kkam8fd7pyk4p" as Id<"sites"> });

    if (site === undefined) return <p>Chargement...</p>;
    if (site === null) return <p>Pas de site trouvé.</p>;

    return (
        <div className="p-10">
            <h2 className="font-bold text-3xl">{site.name}</h2>
            <p className="text-lg font-light">{site.description}</p>
            <Image src={site.photos[0]} width={1200} height={600} alt={`Image de ${site.name}`} />
        </div>
    );
}