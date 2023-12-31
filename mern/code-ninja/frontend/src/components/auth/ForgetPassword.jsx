import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box, Button, Card, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { forgetpassword } from "../../redux/actions/userAction";

const ForgetPassword = () => {
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();
	const formHandler = (e) => {
		e.preventDefault();
		dispatch(forgetpassword(email));
	};

	return (
		<Flex minH="70vh" justify={"center"} align={"center"}>
			<Card
				rounded={"xl"}
				width={"full"}
				maxW={["95vw", "85vw", "70vw", "60vw"]}
				boxShadow={"lg"}
				px={6}
				pt={8}
				pb={12}
			>
				<Stack height="full" justify="center" align="center">
					<Heading
						textAlign="center"
						fontSize={["xl", "2xl", "3xl", "4xl"]}
						fontFamily={"monospace"}
						color={useColorModeValue("yellow.500", "teal.500")}
						textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
						children="Search Your Account"
						letterSpacing="wide"
						mb={8}
					/>

					<form
						onSubmit={formHandler}
						style={{ width: "100%", display: "flex", flexDirection: "column", gap: "30px" }}
					>
						<Box>
							<Input
								size={["md", "md", "lg"]}
								type="email"
								id="email"
								required
								autoFocus
								value={email}
								focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
								placeholder="Enter your email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Box>
						<Box>
							<Button
								type="submit"
								width="full"
								fontSize="lg"
								color={"blackAlpha.800"}
								variant="solid"
								colorScheme={useColorModeValue("yellow", "teal")}
								children="Search"
							/>
						</Box>
					</form>
				</Stack>
			</Card>
		</Flex>
	);
};

export default ForgetPassword;
