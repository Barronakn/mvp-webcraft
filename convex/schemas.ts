// All the schemas used in this project.

import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  sites: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    category: v.string(),
    city: v.string(),
    rating: v.number(),
    photos: v.array(v.string()),
    coordinates: v.object({
      latitude: v.number(),
      longitude: v.number(),
    }),
    reviews_count: v.number(),
    entry_type: v.string(),
    price: v.optional(v.number()),
    opening_hours: v.optional(v.string()),
    tags: v.array(v.string()),
    duration_from_cotonou: v.optional(v.number()),
    contentHtml: v.optional(v.string()),
  })
    .index('by_city', ['city'])
    .index('by_category', ['category'])
    .index('by_cooridinates', ['coordinates'])
    .searchIndex('search_name', {
      searchField: 'name',
    })
    .searchIndex('search_content', {
      searchField: 'contentHtml',
    }),
});
