import { PreviewType } from './Preview.type'
import { styled } from '@stitches/react'

export const Preview = ({ type, value }: PreviewType) => {
	const parsedValue = JSON.parse(value)
	return (
		<>
			{type === 'color' && typeof value === 'string' && (
				<Color css={{ backgroundColor: parsedValue }} />
			)}
			{type === 'opacity' && (
				<Opacity
					css={{
						div: { opacity: parsedValue },
					}}>
					<div />
					<div />
					<div />
				</Opacity>
			)}
			{type === 'boxShadow' && (
				<BoxShadow
					css={{
						boxShadow: `${parsedValue.x}px ${parsedValue.y}px ${
							parsedValue.blur
						}px ${parsedValue.spread}px  ${parsedValue.color} ${
							parsedValue.type === 'innerShadow' ? 'inset' : ''
						}`,
					}}
				/>
			)}
			{type === 'borderWidth' && (
				<BorderWidth
					css={{
						height: parsedValue,
					}}
				/>
			)}
			{type === 'borderRadius' && (
				<BorderRadius
					css={{
						borderRadius: parsedValue,
						height: `calc(${parsedValue} * 2 + 16px)`,
					}}
				/>
			)}
			{type === 'sizing' && <Sizing css={{ width: `calc(${parsedValue})` }} />}
			{type === 'fontFamilies' && (
				<FontFamily
					css={{
						fontFamily: parsedValue,
					}}>
					Lorem ipsum
				</FontFamily>
			)}
			{type === 'fontSizes' && (
				<FontSize
					css={{
						fontSize: `calc(${parsedValue})`,
					}}>
					Lorem ipsum
				</FontSize>
			)}
			{type === 'fontWeights' && (
				<FontWeight
					css={{
						fontWeight: parsedValue,
					}}>
					Lorem ipsum
				</FontWeight>
			)}
			{type === 'letterSpacing' && (
				<LetterSpacing
					css={{
						letterSpacing: `${parsedValue}rem`,
					}}>
					Lorem ipsum
				</LetterSpacing>
			)}
			{type === 'lineHeights' && (
				<LineHeights
					css={{
						lineHeight: parsedValue,
					}}>
					Lorem ipsum
				</LineHeights>
			)}
			{type === 'paragraphSpacing' && (
				<ParagraphSpacing
					css={{
						paragraphSpacing: parsedValue,
					}}>
					Lorem ipsum
				</ParagraphSpacing>
			)}
			{type === 'typography' && (
				<Typography css={{ ...parsedValue }}>Lorem ipsum</Typography>
			)}
		</>
	)
}

const Color = styled('div', {
	width: 128,
	height: '100%',
	minHeight: 24,
	borderRadius: 2,
	border: '1px solid #EEEEEE',
})

const Opacity = styled('div', {
	position: 'relative',
	display: 'flex',
	height: 32,
	margin: '0 auto',
	div: {
		display: 'block',
		width: 24,
		height: 24,
		borderRadius: '100% !important',
		'&:nth-child(1)': {
			background: 'rgb(255, 0, 0)',
			transform: 'translate(0, 50%)',
		},
		'&:nth-child(2)': {
			background: 'rgb(0, 255, 0)',
			transform: 'translate(-75%, 0)',
		},
		'&:nth-child(3)': {
			background: 'rgb(0, 0, 255)',
			transform: 'translate(-150%, 50%)',
		},
	},
})

const BoxShadow = styled('div', {
	width: 24,
	height: 24,
})

const BorderWidth = styled('div', {
	backgroundColor: '#464646',
	width: 128,
})

const BorderRadius = styled('div', {
	width: 128,
	minHeight: 32,
	maxHeight: 48,
	backgroundColor: '#464646',
})

const Sizing = styled('div', {
	position: 'relative',
	borderLeft: '1px solid red',
	borderRight: '1px solid red',
	height: 32,
	'&:before': {
		content: '" "',
		display: 'block',
		height: 16,
		backgroundColor: '#FCC3C6',
		transform: 'translateY(8px)',
	},
})

const FontFamily = styled('span', {
	whiteSpace: 'nowrap',
})

const FontSize = styled('span', { whiteSpace: 'nowrap' })

const FontWeight = styled('span', { whiteSpace: 'nowrap' })

const LetterSpacing = styled('span', { whiteSpace: 'nowrap' })

const LineHeights = styled('span', {
	whiteSpace: 'nowrap',
	backgroundColor: 'rgba(250, 100, 100, 0.2)',
})

const ParagraphSpacing = styled('span', { whiteSpace: 'nowrap' })

const Typography = styled('span', { whiteSpace: 'nowrap' })
