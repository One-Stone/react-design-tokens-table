import { useState, useEffect } from 'react'
import { TableType } from './Table.type'

export const Table = (props: TableType) => {
	const [rows, setRows] = useState<JSX.Element[]>([])

	const parse = (tokens: TableType['tokens'], path?: string[]): void => {
		if (Object.keys(tokens).length === 0) return
		Object.keys(tokens).forEach((key, index) => {
			const token = tokens[key]
			if ('value' in token && 'name' in token && 'type' in token) {
				setRows((r) => [
					...r,
					<tr key={`${index}:${token.name}`}>
						{/* <td>{index}</td> */}
						<td>{typeof token.name === 'string' && token.name}</td>
						<td>{token.path?.join('.')}</td>
						<td>{typeof token.value === 'string' && token.value}</td>
						<td>{token.comment?.toString()}</td>
						<td>preview</td>
					</tr>,
				])
			} else {
				parse(tokens[key], path?.concat(key))
			}
		})
	}

	useEffect(() => {
		setRows([])
		parse(props.tokens)
	}, [props.tokens])

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Variable</th>
					<th>Value</th>
					<th>Description</th>
					<th>Preview</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}
