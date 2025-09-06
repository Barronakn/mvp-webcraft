// All the queries related to sites.

import { query } from '../_generated/server';
import { v } from 'convex/values';

export const getSiteById = query({
  args: { id: v.id('sites') },
  handler: async (ctx, args) => {
    const site = await ctx.db.get(args.id);
    if (!site) {
      throw new Error('Site not found');
    }
    return site;
  },
});

export const getSiteBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const site = await ctx.db
      .query('sites')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .first();

    if (!site) {
      throw new Error('Site not found');
    }
    return site;
  },
});
