import React from 'react'
import { DesignTokensTable as DesignTokensTableComponent } from './DesignTokensTable'
import tokens from './tokens.json'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'DesignTokensTable',
	component: DesignTokensTableComponent,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DesignTokensTableComponent {...args} />

export const Color = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Color.args = {
	tokens: tokens.color,
}

export const Opacity = Template.bind({})
Opacity.args = {
	tokens: tokens.opacity,
}

export const BoxShadow = Template.bind({})
BoxShadow.args = {
	tokens: tokens.shadow,
}

export const BorderWidth = Template.bind({})
BorderWidth.args = {
	tokens: tokens.border,
}

export const BorderRadius = Template.bind({})
BorderRadius.args = {
	tokens: tokens.radius,
}

export const Sizing = Template.bind({})
Sizing.args = {
	tokens: tokens.grid,
}

export const FontFamily = Template.bind({})
FontFamily.args = {
	tokens: tokens.font.family,
}

export const FontSize = Template.bind({})
FontSize.args = {
	tokens: tokens.font.size,
}

export const FontWeight = Template.bind({})
FontWeight.args = {
	tokens: tokens.font.weight,
}

export const LetterSpacing = Template.bind({})
LetterSpacing.args = {
	tokens: tokens.font['letter-spacing'],
}

export const LineHeights = Template.bind({})
LineHeights.args = {
	tokens: tokens.font['line-height'],
}

export const ParagraphSpacing = Template.bind({})
ParagraphSpacing.args = {
	tokens: tokens.font['paragraph-spacing'],
}

export const Typography = Template.bind({})
Typography.args = {
	tokens: tokens.typography,
}

export const Layout = Template.bind({})
Layout.args = {
	tokens: {
		button: {
			primary: {
				type: 'layout',
				description: '',
				value: {
					borderRadius: 8,
					backgroundColor: 'black',
					padding: '4px 12px',
					color: 'white',
					textAlign: 'center',
				},
				name: 'LayoutButtonPrimary',
				path: ['layout', 'button', 'primary'],
			},
		},
		secondary: {
			type: 'layout',
			description: '',
			value: {
				borderRadius: 8,
				backgroundColor: 'white',
				border: '1px solid black',
				padding: '4px 12px',
				color: 'black',
				textAlign: 'center',
			},
			name: 'LayoutButtonSecondary',
			path: ['layout', 'button', 'secondary'],
		},
	},
}
