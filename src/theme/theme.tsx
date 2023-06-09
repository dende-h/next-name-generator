import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const breakpoints = {
	sm: "40em",
	md: "52em",
	lg: "64em",
	xl: "80em"
};

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: false
};

const theme = extendTheme({
	config,
	colors: {
		black: "#16161D"
	},
	fonts: {
		heading: `'Raleway', sans-serif`,
		body: `'Open Sans', sans-serif`
	},
	breakpoints,
	components: {
		Divider: {
			baseStyle: {
				borderColor: "gray.500"
			}
		}
	},
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				color: mode("gray.700", "gray.100")(props),
				bg: mode("gray.200", "gray.800")(props),
				fontFamily: "body"
			},
			heading: {
				color: mode("gray.800", "gray.100")(props),
				fontFamily: "heading"
			},
			input: {
				color: mode("gray.600", "gray.200")(props),
				bgColor: mode("gray.200", "gray.500")(props),
				fontFamily: "body"
			},
			textarea: {
				color: mode("gray.600", "gray.200")(props),
				bgColor: mode("gray.200", "gray.500")(props),
				fontFamily: "body"
			}
		})
	}
});

export default theme;
