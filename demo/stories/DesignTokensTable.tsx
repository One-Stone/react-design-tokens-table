import React from 'react'
import { DesignTokensTable as DesignTokensTableComponent } from 'react-design-tokens-table'

/**
 * Primary UI component for user interaction
 */
export const DesignTokensTable = ({ tokens, css, noStyle, ...props }) => {
	return <DesignTokensTableComponent tokens={tokens} {...props} />
}
