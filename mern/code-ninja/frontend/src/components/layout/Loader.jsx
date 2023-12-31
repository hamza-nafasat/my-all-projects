import React from "react";
import { Spinner, VStack, useColorModeValue } from "@chakra-ui/react";

const Loader = () => {
	return (
		<VStack h="100vh" justifyContent={"center"}>
			<div style={{ transform: "scale(4)" }}>
				<Spinner
					thickness="2px"
					speed="0.65s"
					emptyColor="transparent"
					color={useColorModeValue("yellow.500", "teal.500")}
					size="xl"
				/>
			</div>
		</VStack>
	);
};

export default Loader;
