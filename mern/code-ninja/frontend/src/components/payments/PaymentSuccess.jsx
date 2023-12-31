import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link, useSearchParams } from "react-router-dom";
import { Box, Button, Card, Flex, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const PaymentSuccess = () => {
	const reference = useSearchParams()[0].get("reference");

	return (
		<Flex minH="100vh" justify={"center"} align={"center"} direction={"column"}>
			<Card
				px={6}
				pt={6}
				my={6}
				gap={4}
				pb={10}
				rounded={"xl"}
				width={"full"}
				boxShadow={"lg"}
				bg={useColorModeValue("whitesmoke")}
				maxW={["95vw", "85vw", "70vw", "60vw"]}
			>
				<VStack alignItems="stretch" borderRadius={"lg"} spacing="0">
					<Box
						py={4}
						px={2}
						color={"black"}
						textAlign={"center"}
						css={{ borderRadius: "8px 8px 0 0" }}
						bg={useColorModeValue("yellow.400", "teal.400")}
					>
						<Heading opacity={0.8} fontSize={"xl"} children="Payment done successfully" />
					</Box>

					<Box>
						<VStack textAlign={"justify"} px={2} my={"4"} spacing="4">
							<Text children="Congratulations! You are now a premium member, unlocking exclusive resources reserved for our premium users. Enjoy your learning journey and make it awesome!" />

							<RiCheckboxCircleFill fontSize={"4rem"} color="green" />

							<Link to="/profile">
								<Button variant={"link"} fontWeight={"bold"} children="Click here and go to profile" />
							</Link>
						</VStack>
					</Box>

					<Box
						bg={useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)")}
						py="4"
						px="2"
						css={{ borderRadius: "0 0 8px 8px" }}
						textAlign={"center"}
					>
						<Heading
							color={useColorModeValue("black", "teal.400")}
							textTransform="uppercase"
							size="sm"
							children={`Reference - ${reference}`}
						/>
					</Box>
				</VStack>
			</Card>
		</Flex>
	);
};

export default PaymentSuccess;
