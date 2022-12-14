import { AstroIntegration, AstroConfig } from "astro"
import AutoImport from "unplugin-auto-import/vite"

type AutoImportOptions = NonNullable<Parameters<typeof AutoImport>[0]>
type Options = {
	imports?: AutoImportOptions["imports"]
}

export default (options: Options = {}) => {
	const { imports = [] } = options

	return {
		name: "astro-imports",
		hooks: {
			"astro:config:setup": ({ updateConfig }) => {
				updateConfig({
					vite: {
						plugins: [
							AutoImport({
								include: [
									/\.astro$/i,
									/\.vue$/i,
									/\.[tj]sx?$/i,
								],
								imports: [
									{
										astro: [],
									},
									...(imports as any),
								],
								dirs: [
									"./src/components",
									"./src/layouts",
									"./src/imports",
								],
							}),
						],
					},
                    integrations: []
				} as AstroConfig)
			},
		},
	} as AstroIntegration
}
