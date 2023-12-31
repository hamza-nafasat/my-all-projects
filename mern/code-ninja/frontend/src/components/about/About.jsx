import Founder from "./Founder";
import termsAndCondition from "../../assets/docs/termsAndCondition.js";
import { Box, Card, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const About = () => {
	return (
		<Flex minH="100vh" justify={"center"} align={"start"}>
			<Card width={"full"} maxW={"1440px"} boxShadow={"none"} px={[8, 4]} py={10} gap={10}>
				<Heading
					textAlign="center"
					fontSize={["3xl", "5xl"]}
					fontFamily={"sans-serif"}
					color={useColorModeValue("yellow.500", "teal.500")}
					textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
					children="Harmony Makers"
					letterSpacing="wide"
					minW={"full"}
				/>
				<Founder />

				<Box>
					<Heading
						textAlign="center"
						fontSize={["2xl", "4xl"]}
						fontFamily={"sans-serif"}
						letterSpacing="wide"
						children="Terms & Conditions"
						my="4"
					/>
					<Box h="sm" p="4" overflowY={"scroll"}>
						<Text fontFamily={"heading"} letterSpacing={"widest"} textAlign={"justify"}>
							{termsAndCondition}
						</Text>
						<Heading
							my="4"
							size={"xs"}
							textAlign="center"
							children="Refund only applicable for cancellation within 7 days."
						/>
					</Box>
				</Box>
			</Card>
		</Flex>
	);
};

export default About;
