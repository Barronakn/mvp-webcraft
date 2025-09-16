import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

// -------------------
// Query pour récupérer un site par ID
// -------------------
export const getById = query({
  args: { id: v.id('sites') },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// -------------------
// Query pour lister les sites les plus populaires
// -------------------
export const listPopular = query({
  args: {},
  handler: async (ctx) => {
    // ✅ Utilisation correcte : avec index sur rating
    return await ctx.db
      .query('sites')
      .withIndex('by_rating')   // Index à créer dans le schema
      .order('desc')            // On précise uniquement l'ordre
      .take(6);                 // Limite à 6 résultats
  },
});

// -------------------
// Mutation pour insérer ou mettre à jour plusieurs sites
// -------------------
export const insertSites = mutation({
  args: {
    sites: v.array(
      v.object({
        name: v.string(),
        slug: v.string(),
        description: v.optional(v.string()),
        category: v.string(),
        city: v.string(),
        region: v.optional(v.string()),
        rating: v.number(),
        photos: v.array(v.string()),
        coordinates: v.object({ latitude: v.number(), longitude: v.number() }),
        reviews_count: v.number(),
        entry_type: v.string(),
        price: v.union(v.number(), v.null()),
        opening_hours: v.union(v.string(), v.null()),
        tags: v.array(v.string()),
        duration_from_cotonou: v.union(v.number(), v.null()),
        duration: v.optional(v.string()),
        visitors: v.optional(v.string()),
        contentHtml: v.union(v.string(), v.null()),
        story: v.optional(v.string()),
        heritage: v.optional(v.string()),
      })
    ),
  },
  handler: async (ctx, args) => {
    for (const site of args.sites) {
      const existingSite = await ctx.db
        .query('sites')
        .withIndex('by_slug', (q) => q.eq('slug', site.slug))
        .first();
      if (existingSite) {
        await ctx.db.patch(existingSite._id, site);
      } else {
        await ctx.db.insert('sites', site);
      }
    }
  },
});
