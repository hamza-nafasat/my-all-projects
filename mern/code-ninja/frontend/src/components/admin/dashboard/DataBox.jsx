import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";

const DataBox = ({ title, qty, qtypercentage, profit }) => {
	return (
		<Box
			minW={["80%", "250px", "240px", "270px"]}
			p={10}
			rounded={"lg"}
			boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
		>
			<Text children={title} />
			<HStack spacing={6}>
				<Text fontSize={"2xl"} fontWeight={"bold"} children={qty} />
				<HStack>
					<Text children={`${qtypercentage}%`} />
					{profit ? (
						<RiArrowUpLine fontSize={"1.5rem"} color="green" />
					) : (
						<RiArrowDownLine fontSize={"1.5rem"} color="red" />
					)}
				</HStack>
			</HStack>
			<Text opacity={0.6} children={"Since Last Month"} />
		</Box>
	);
};

export default DataBox;
