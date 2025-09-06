// All the schemas used in this project.

import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  sites: defineTable({
    name: v.string(),
    slug: v.string(),
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
    price: v.union(v.number(), v.null()),
    opening_hours: v.union(v.string(), v.null()),
    tags: v.array(v.string()),
    duration_from_cotonou: v.union(v.number(), v.null()),
    contentHtml: v.union(v.string(), v.null()),
  })
    .index('by_slug', ['slug'])
    .index('by_city', ['city'])
    .index('by_category', ['category'])
    .index('by_coordinates', ['coordinates'])
    .searchIndex('search_name', {
      searchField: 'name',
    })
    .searchIndex('search_content', {
      searchField: 'contentHtml',
    }),
});
