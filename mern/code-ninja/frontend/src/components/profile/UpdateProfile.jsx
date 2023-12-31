import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/userAction";
import { updateProfile } from "../../redux/actions/profileAction";
import { Box, Button, Card, Flex, FormLabel, Heading, Input, Stack, useColorModeValue } from "@chakra-ui/react";

const UpdateProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const { loading } = useSelector((state) => state.profile);

	const formHandler = async (e) => {
		e.preventDefault();
		await dispatch(updateProfile(name, email));
		await dispatch(loadUser());
		navigate("/profile");
	};
	return (
		<Flex minH="70vh" justify={"center"} align={"center"} py={10}>
			<Card
				rounded={"xl"}
				boxShadow={"none"}
				width={"full"}
				maxW={["95vw", "85vw", "70vw", "60vw"]}
				px={6}
				pt={8}
				pb={12}
			>
				<Stack height="full" justify="center" align="center">
					<Heading
						textAlign="center"
						fontSize={["2xl", "3xl", "4xl", "4xl", "5xl"]}
						fontFamily={"sans-serif"}
						color={useColorModeValue("yellow.500", "teal.500")}
						textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
						children="Update Profile"
						letterSpacing="wide"
						mb={["4", ""]}
					/>
					<form
						onSubmit={formHandler}
						style={{ width: "100%", display: "flex", flexDirection: "column", gap: "30px" }}
					>
						<Box>
							<FormLabel htmlFor="name">Name:</FormLabel>
							<Input
								size="lg"
								id="name"
								pr="4.5rem"
								placeholder={"Enter your new name"}
								type={"text"}
								focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Box>
						<Box>
							<FormLabel htmlFor="email">Email:</FormLabel>
							<Input
								size="lg"
								id="email"
								pr="4.5rem"
								type={"email"}
								placeholder="Enter your New email"
								focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Box>
						<Box>
							<Button
								type="submit"
								width="full"
								fontSize="lg"
								isLoading={loading}
								variant="solid"
								colorScheme={useColorModeValue("yellow", "teal")}
								children="Update Profile"
							/>
						</Box>
					</form>
				</Stack>
			</Card>
		</Flex>
	);
};

export default UpdateProfile;
