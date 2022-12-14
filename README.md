## Astro Imports

An auto-import integration for astro.

## Install

### Use `astro add astro-imports` (Simplest and fastest)

You can use npm, yarn or pnpm.

```shell
npx astro add astro-imports
```

That's it!

### Install manually

Install the latest version of `astro-imports` manually using whichever package manager you prefer to use. For example:

```shell
pnpm add astro-imports@latest
```

The import `astro-imports` in your astro config file (e.g. astro.config.ts):

```ts
import { defineConfig } from "astro/config"
import imports from "astro-imports"

export default defineConfig({
	integrations: [imports()],
})
```

## Usage

Add `/// <reference types="../imports.d.ts" />` to your `env.d.ts` in the `src` directory (or vite-env.d.ts) for type intellisense:

```ts
/// <reference types="astro/client" />
/// <reference types="../imports.d.ts" />
```

If this file doesn't exist, add the file (`env.d.ts`) to your `src` directory.

You have auto imports now!

All the files in the `components`, `layouts` and `lib` directories will be auto imported. For example, let's say we have a `Sidebar.astro` in the `components` directory, you can use it like this:

```astro
---
---

<Sidebar />
```

As you can see, no import statements are required. The Astro components in the `layouts` directory will be auto imported as well as the components in the `components` directory.

Another example, we have a `post.ts` in the `lib` directory, which contains the content below:

```ts
const getPosts = () => (/** Get some actual data */)

export default { getPosts }
```

Now you can use it without importing the file:

```astro
---
const posts = post.getPosts()
---

{posts.map((post) => (/** Render the post */))}
```

## Options

Here is an example of passing options to the `imports` function:

```ts
import { defineConfig } from "astro/config"
import imports from "astro-imports"

export default defineConfig({
	integrations: [
		imports({
			// You can provide a boolean that indicates if you want to generate the TypeScript Declaration file, or a string that specifies the name of the `.d.ts` file.
			dts: "auto-imports.d.ts",
			// See [Unimport's docs](https://github.com/unjs/unimport#custom-presets) to find more info about the presets option.
			presets: ["vue"],
		}),
	],
})
```

# Further

If some problem occured when using astro-imports, you can open a new issue in this repo. Some more features (e.g. eslint support (I have to care about those people who are using eslint with Astro🥲)) may be added soon.
