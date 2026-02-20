import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: (context) => 
			docsSchema()(context) // Get the base Starlight schema
				.extend({
					// Add your custom fields here
					date: z.date().optional(),
					author: z.string().optional(),
					tags: z.array(z.string()).optional(),
				})
				.transform((data) => {
					// Now 'data' includes both Starlight fields (sidebar) and your custom fields (date)
					if (data.date) {
						return {
							...data,
							sidebar: {
								...data.sidebar,
								badge: data.sidebar?.badge ?? {
									text: data.date.getFullYear().toString(),
									variant: 'note'
								}
							}
						};
					}
					return data;
				}),
	}),
};
