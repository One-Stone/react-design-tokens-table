import React from 'react'
import { DesignTokensTable as DesignTokensTableComponent } from 'react-design-tokens-table'

/**
 * Primary UI component for user interaction
 */
export const DesignTokensTable = ({ tokens, css, noStyle }) => {
	return (
		<DesignTokensTableComponent tokens={tokens} css={css} noStyle={noStyle} />
	)
}
