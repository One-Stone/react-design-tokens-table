export type TokenType = {
	value: string
	type: string
	filePath?: string
	isSource?: boolean
	original?: any
	name: string
	comment?: string
	themeable?: boolean
	attributes?: {
		category?: string
		type?: string
		item?: string
		subitem?: string
		state?: string
		[key: string]: any
	}
	path?: string[]
	[key: string]: any
}

export type TokensType = {
	[key in string]: TokenType | TokensType
}

export type TableType = {
	tokens: TokensType
}
