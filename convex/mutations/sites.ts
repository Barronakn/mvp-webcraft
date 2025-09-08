// Mutattions for sites

import { mutation } from '../_generated/server';
import { v } from 'convex/values';

export const addRating = mutation({
  args: { siteId: v.id('sites'), userId: v.string(), rating: v.number() },
  async handler(ctx, args) {
    // Vérifie si l'utilisateur a déjà noté (simplifié)
    const existing = await ctx.db
      .query('ratings')
      .filter((q) => q.eq(q.field('siteId'), args.siteId))
      .unique();
    if (existing) {
      throw new Error('User already rated this site');
    }

    const ratingId = await ctx.db.insert('ratings', {
      siteId: args.siteId,
      rating: args.rating,
      createdAt: Date.now(),
    });

    // Mise à jour moyenne (simplifiée)
    const ratings = await ctx.db
      .query('ratings')
      .filter((q) => q.eq(q.field('siteId'), args.siteId))
      .collect();
    const avgRating =
      ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
    await ctx.db.patch(args.siteId, {
      rating: avgRating,
      reviews_count: ratings.length,
    });

    return ratingId;
  },
});
