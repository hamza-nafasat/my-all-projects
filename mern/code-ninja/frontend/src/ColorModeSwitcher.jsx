import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<IconButton
			size="lg"
			fontSize={["xl", "2xl", "3xl"]}
			aria-label={`Switch to ${text} mode`}
			variant="ghost"
			color="current"
			zIndex={"overlay"}
			position={"fixed"}
			top={3}
			right={[2, 4]}
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			{...props}
		/>
	);
};
