// Mutations for itineraries

import { mutation } from '../_generated/server';
import { v } from 'convex/values';

export const createItinerary = mutation({
  args: {
    departure: v.object({
      lat: v.number(),
      lng: v.number(),
      name: v.optional(v.string()),
    }),
    destination: v.id('sites'),
    description: v.optional(v.string()),
    stopovers: v.array(v.id('sites')), // Ajoute des sites comme arrêts
    distance: v.number(),
  },
  async handler(ctx, args) {
    const itineraryId = await ctx.db.insert('itineraries', {
      departure: args.departure,
      destination: args.destination,
      description: args.description,
      stopovers: args.stopovers,
      distance: args.distance,
      createdAt: Date.now(),
    });
    return itineraryId;
  },
});

export const incrementPopularity = mutation({
  args: { id: v.id('itineraries') },
  async handler(ctx, args) {
    const itinerary = await ctx.db.get(args.id);
    if (!itinerary) throw new Error('Itinerary not found');

    await ctx.db.patch(args.id, {
      popularity: (itinerary.popularity ?? 0) + 1,
    });
  },
});
