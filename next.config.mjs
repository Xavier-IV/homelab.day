import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",

	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
				pathname: "/**",
			},
		],
	},
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
	},
});

export default withMDX(nextConfig);
