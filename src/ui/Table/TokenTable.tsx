import { useState, useEffect } from 'react'
import { Preview } from '../Preview'
import JSONPretty from 'react-json-pretty'

import { DesignTokensTableType } from '.'
import { styled } from '@stitches/react'

export const DesignTokensTable = (props: DesignTokensTableType) => {
	const [rows, setRows] = useState<JSX.Element[]>([])

	const row = (token: DesignTokensTableType['tokens']) => {
		setRows((r) => [
			...r,
			<tr key={`${token.name}.${token.path?.join('.')}`}>
				<td className='no-wrap'>
					{typeof token.name === 'string' && token.name}
				</td>
				<td>{token.comment?.toString()}</td>
				<td className='no-wrap'>
					<span className='code'>{token.path?.join('.')}</span>
				</td>
				<td>
					{typeof token.value === 'string' && (
						<span className='code'>{token.value}</span>
					)}
					{typeof token.value === typeof JSON && (
						<span className='code-box wrap'>
							<JSONPretty data={token.value} />
						</span>
					)}
				</td>
				<td>
					{typeof token.type === 'string' && (
						<Preview type={token.type} value={JSON.stringify(token.value)} />
					)}
				</td>
			</tr>,
		])
	}

	const parse = (
		tokens: DesignTokensTableType['tokens'],
		path?: string[]
	): void => {
		if (Object.keys(tokens).length === 0) return

		if ('value' in tokens && 'name' in tokens && 'type' in tokens)
			return row(tokens)

		for (const key in tokens) {
			const token = tokens[key]
			if ('value' in token && 'name' in token && 'type' in token) row(token)
			else parse(tokens[key], path?.concat(key))
		}
	}

	useEffect(() => {
		setRows([])
		console.log(props.noStyle)
		parse(props.tokens)
	}, [props.tokens])

	const tableContent = (
		<>
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Variable</th>
					<th>Value</th>
					<th>Preview</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</>
	)
	return props.noStyle ? (
		<Table css={props.css}>{tableContent}</Table>
	) : (
		<StyledTable css={props.css}>{tableContent}</StyledTable>
	)
}

const Table = styled('table', {})
const StyledTable = styled('table', {
	tableLayout: 'auto',
	borderCollapse: 'collapse',
	width: '100%',
	color: '#333333',
	fontSize: 13,
	fontFamily:
		'"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
	borderSpacing: 0,
	margin: '20px 0',
	thead: {
		th: {
			border: 0,
			padding: '10px 15px',
			textAlign: 'left',
			color: '#333333BF',
			'&:first-child': {
				padding: '10px 15px 10px 20px',
			},
			'&:last-child': {
				padding: '10px 20px 10px 15px',
			},
			'&.w100': {
				width: '100%',
			},
		},
	},
	tbody: {
		borderRadius: 8,
		boxShadow: 'rgb(0 0 0 / 10%) 0 1px 3px 1px, rgb(0 0 0 / 7%) 0 0 0 1px',
		tr: {
			borderBottom: '1px solid #e6e6e6',
		},
		td: {
			padding: '10px 15px',
			textAlign: 'left',
			lineHeight: 1.6,
			wordBreak: 'break-all',
			overflow: 'hidden',
			'&:first-child': {
				padding: '10px 0 10px 20px',
				fontWeight: 'bold',
			},
			'&:last-child': {
				padding: '10px 20px 10px 15px',
			},
			'&.no-wrap': {
				whiteSpace: 'nowrap',
			},
			'.wrap': {
				whiteSpace: 'auto',
				'*': {
					textWrap: 'wrap !important',
				},
			},
			'.code': {
				background: '#f8f8f8',
				padding: '2px 5px',
				border: '1px solid #EEEEEE',
				borderRadius: '2px',
			},
			'.code-box': {
				display: 'inline-block',
				background: '#f8f8f8',
				padding: '2px 5px',
				border: '1px solid #EEEEEE',
				borderRadius: '2px',
			},
		},
	},
})
