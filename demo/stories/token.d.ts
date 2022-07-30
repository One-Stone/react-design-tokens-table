/**
 * Do not edit directly
 * Generated on Fri, 29 Jul 2022 14:59:11 GMT
 */

export default tokens

declare interface DesignToken {
	value: any
	name?: string
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
	[key: string]: any
}

declare const tokens: {
	color: {
		brand: {
			primary: DesignToken
			secondary: DesignToken
			neutral: DesignToken
		}
		status: {
			error: DesignToken
			warn: DesignToken
			success: DesignToken
		}
		border: {
			lv1: DesignToken
			lv2: DesignToken
			lv3: DesignToken
		}
		bg: {
			lv0: DesignToken
			lv1: DesignToken
			lv2: DesignToken
			lv3: DesignToken
		}
		text: {
			neutral: DesignToken
			weak: DesignToken
			muted: DesignToken
			light: DesignToken
			link: DesignToken
		}
	}
	opacity: {
		muted: DesignToken
		focused: DesignToken
	}
	radius: {
		sharp: DesignToken
		rounded: DesignToken
		circle: DesignToken
	}
	grid: {
		half: DesignToken
		'1x': DesignToken
		'2x': DesignToken
		'3x': DesignToken
		'4x': DesignToken
		'5x': DesignToken
		'6x': DesignToken
		'7x': DesignToken
		'8x': DesignToken
		'9x': DesignToken
		'10x': DesignToken
		'11x': DesignToken
		'12x': DesignToken
		'13x': DesignToken
		'14x': DesignToken
		'15x': DesignToken
		'16x': DesignToken
	}
	border: {
		thin: DesignToken
		normal: DesignToken
		bold: DesignToken
	}
	shadow: {
		float: {
			lv1: DesignToken
			lv2: DesignToken
			lv3: DesignToken
		}
		fall: {
			lv1: DesignToken
			lv2: DesignToken
			lv3: DesignToken
		}
		border: {
			left: DesignToken
			top: DesignToken
			right: DesignToken
			bottom: DesignToken
		}
	}
	font: {
		family: DesignToken
		'letter-spacing': {
			default: DesignToken
		}
		weight: {
			lv0: DesignToken
			up: {
				lv1: DesignToken
				lv2: DesignToken
			}
			down: {
				lv1: DesignToken
				lv2: DesignToken
			}
		}
		size: {
			default: DesignToken
			up: {
				lv1: DesignToken
				lv2: DesignToken
				lv3: DesignToken
			}
			down: {
				lv1: DesignToken
				lv2: DesignToken
				lv3: DesignToken
			}
			heading: {
				h1: DesignToken
				h2: DesignToken
				h3: DesignToken
			}
		}
		'linehe-ight': DesignToken
		'paragraph-spacing': {
			default: DesignToken
		}
		en: DesignToken
		ja: DesignToken
	}
	breakpoint: {
		sp: DesignToken
	}
	typography: {
		root: DesignToken
		h1: DesignToken
		h2: DesignToken
		h3: DesignToken
	}
	icon: {
		size: {
			default: DesignToken
			down: {
				lv1: DesignToken
			}
			up: {
				lv1: DesignToken
				lv2: DesignToken
			}
		}
		family: DesignToken
	}
}
