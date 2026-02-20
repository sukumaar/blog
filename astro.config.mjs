// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			tableOfContents: false, // hide `on this page` on the right side
			title: 'rovingdev',
			logo: {
				src: '/public/round-logo.webp'
			},
			customCss: ['./src/styles/logo.css'],
			components: {
				// Override the default SocialIcons component
				SocialIcons: './src/components/AboutButton.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Recent Posts',
					items: [
						{ label: 'Blog2', slug: 'p/blog2' },
						{ label: 'Dataform: The ELT Game Changer for GCP', slug: 'p/dataform-the-elt-game-changer-for' },
						{ label: 'Poetry : A Better Alternative to requirements.txt. The Maven for Python ?', slug: 'p/poetry-a-better-alternative-to-requirementstxt' },
						{ label: 'Apache Spark Unit Testing Strategies', slug: 'p/apache-spark-unit-testing-strategies' },
						{ label: 'How to share constant values in Terraform?', slug: 'p/how-to-share-constant-values-in-terraform' },
						{ label: 'Guide to : Java Spring Boot Docker Container Image', slug: 'p/guide-to-java-spring-boot-docker' }
					]
				},
			],
			plugins: [
				starlightImageZoom(),
				starlightThemeNova({
					nav: [
						{ label: 'Quick start', href: '/guide/getting-started' },
						{ label: 'External link', href: 'https://example.com' },
					],
				}),
			],
		}),
	],
});
