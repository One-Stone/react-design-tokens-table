# React Design Tokens Table

Visualize design tokens. Dynamically insert beautiful tables of design tokens into your storybook.

[DEMO](https://react-design-tokens-table.netlify.app/)

| Color                                                                                                                                                                       | Spacing                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="100%" alt="スクリーンショット 2022-07-30 14 10 31" src="https://user-images.githubusercontent.com/12825004/181875752-afce1af4-e072-4b46-af14-25a85f12848a.png"> | <img width="100%" alt="スクリーンショット 2022-07-31 0 09 01" src="https://user-images.githubusercontent.com/12825004/181920461-c555ca0b-9a73-4910-a888-610f353e5aef.png"> |

| Typography                                                                                                                                                                  | Border                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="100%" alt="スクリーンショット 2022-07-30 14 11 25" src="https://user-images.githubusercontent.com/12825004/181875768-5fa57ff7-5b7c-42a4-b20a-5220e543e61c.png"> | <img width="100%" alt="スクリーンショット 2022-07-30 14 10 50" src="https://user-images.githubusercontent.com/12825004/181875761-fedeaae9-d057-4b98-a5af-f93f486c26c2.png"> |

| Shadow                                                                                                                                                                     | Opacity                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="100%" alt="スクリーンショット 2022-07-31 0 08 24" src="https://user-images.githubusercontent.com/12825004/181920525-7aed393a-cfb8-4df0-a87d-85d8f608cb52.png"> | <img width="100%" alt="スクリーンショット 2022-07-30 14 10 40" src="https://user-images.githubusercontent.com/12825004/181875759-286f6d1e-6c13-4303-aafe-bbb25d0cf44f.png"> |

## 🎨 Previewable Design Tokens

Design tokens can be visualized for the following properties.
If you want to see all the examples, check out our [Storybook DEMO](https://react-design-tokens-table.netlify.app/).

- Color
- Opacity
- Box Shadow
- BorderWidth
- Border Radius
- Sizing / Spacing
- Font
  - Family
  - Size
  - Weight
- Letter Spacing
- Line Height
- Paragraph Spacing
- Typograhy

---

## 🚧 Getting Started

### 1. Install

run: `$ npm i react-design-tokens-table`

### 2. Create design tokens `JSON`

ex.) [design-token-transformer](https://github.com/lukasoppermann/design-token-transformer) or [Figma Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens).

FigmaTokens is a useful tool to export json.

<img width="724" alt="FigmaTokensExportExample" src="https://user-images.githubusercontent.com/12825004/181871985-0725e911-cc90-4fef-a615-d05a2d580cd7.png">

### 3. Convert `JSON` to `JS`

Generate `js` files with [style-dictionary](https://amzn.github.io/style-dictionary/#/).

run: `$ npm i -D style-dictionary`

```json
// ./style-dictionary/config.json
{
	"source": ["./.style_dictionary/tokens.json"],
	"platforms": {
		"js": {
			"transformGroup": "js",
			"buildPath": "./stories/tokens/",
			"files": [
				{
					"format": "javascript/module",
					"destination": "tokens.js"
				},
				{
					"format": "typescript/module-declarations",
					"destination": "tokens.d.ts"
				}
			]
		}
	}
}
```

run: `$ npx style-dictionary build `
If style-dictionary conversion is successful, file like the following is generated.

```js
module.exports = {
	color: {
		brand: {
			primary: {
				value: '#16d4c8',
				type: 'color',
				description: 'This is the main color.',
				filePath: './.style_dictionary/tokens.json',
				isSource: true,
				original: {
					value: '#16D4C8',
					type: 'color',
				},
				name: 'ColorBrandPrimary',
				attributes: {
					category: 'color',
					type: 'brand',
					item: 'primary',
				},
				path: ['color', 'brand', 'primary'],
			},
		},
	},
	/* Other Tokens*/
}
```

### 4. Import and use

```jsx
import { DesignTokensTable } from 'react-design-tokens-table'
import tokens from './tokens'

const Page = () => {
	return {
		<>
			<h1>Colors</h1>
			<DesignTokensTable tokens={tokens.color} />

			<h1>Opacities</h1>
			<DesignTokensTable tokens={tokens.opacity} />
		</>
	}
}
```

#### Parse Method

The JSON object passed to the component will be parsed into a table as follows.

```json
color: {
	brand: {
		primary: {
			value: '#16d4c8',
			type: 'color',
			description: 'This is the main color.',
			name: 'ColorBrandPrimary',
			path: ['color', 'brand', 'primary'],
		},
	},
}
```

| Propaty     |     | Table           | Result                                                 |
| ----------- | --- | --------------- | ------------------------------------------------------ |
| name        | =>  | **Name**        | ColorBrandPrimary                                      |
| description | =>  | **Description** | This is the main color.                                |
| path        | =>  | **Variable**    | `color.brand.promary`                                  |
| value       | =>  | **Value**       | `#16d4c8`                                              |
| type        | =>  | **Preview**     | _Show previews depending on the type of design token._ |

### Component Properties

**React Design Tokens Table** uses [Stitches](https://stitches.dev/) to assign a Storybook-like style.
If you don't like this, you can override the style with css props.
If noStyle is specified, you get a plain dom component.

| Propaty  | Type                                                                                                            |                                           |
| -------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| tokens\* | [TokenType](https://github.com/One-Stone/react-design-tokens-table/blob/master/src/ui/Table/TokenTable.type.ts) | Token object to be reflected in the table |
| css      | @stitches/react/CSS                                                                                             | To override the style.                    |
| noStyle  | boolean                                                                                                         | If true, no style is applied.             |

---

## 📖 Example in Storybook Docs Addon

It is useful to visualize design tokens in a storybook.

```jsx
// *.stories.mdx

import { Meta } from '@storybook/addon-docs'
import { DesignTokensTable } from 'react-design-tokens-table' //👈
import tokens from './tokens' //👈

<Meta title='ReactDesignTokensTableExample' />

# React Design Tokens Table Example

<DesignTokensTable tokens={tokens.color} /> //👈
```

---

## 🚀 Roadmap

Upcoming ideas:

- Testing Framework
- Input form of token's value
- `JSON` support
- Other design token properties

---

## 🐛 Feature request & bugs

Please create an [issues in the repository](https://github.com/One-Stone/react-design-tokens-table/issues).
