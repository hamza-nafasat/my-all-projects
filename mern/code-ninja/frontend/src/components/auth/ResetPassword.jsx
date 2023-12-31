import {
	Box,
	Button,
	Card,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { LiaEyeSlash, LiaEye } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetpassword } from "../../redux/actions/userAction";

const ResetPassword = () => {
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const formHandler = (e) => {
		e.preventDefault();
		const token = params.token || "no Token";
		dispatch(resetpassword(password, token));
		navigate("/login");
	};

	return (
		<Flex minH={["70vh", "100vh"]} justify={"center"} align={"center"}>
			<Card
				rounded={"xl"}
				width={"full"}
				boxShadow={"none"}
				maxW={["100vw", "85vw", "70vw", "60vw", "50vw", "100px"]}
				px={6}
				pt={8}
				pb={12}
				justifyContent={"center"}
			>
				<Stack height="full" justify="center" align="center">
					<Heading
						textAlign="center"
						fontSize={["2xl", "3xl", "4xl", "4xl", "5xl"]}
						fontFamily={"monospace"}
						color={useColorModeValue("yellow.500", "teal.500")}
						textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
						children="Reset Password"
						letterSpacing="wide"
						mb={[12, ""]}
					/>
					<form
						onSubmit={formHandler}
						style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}
					>
						<Box>
							<InputGroup size="md">
								<Input
									id="password"
									pr="4.5rem"
									required
									type={show ? "text" : "password"}
									placeholder="Enter new password"
									focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<InputRightElement h={"full"} minW={"5vw"}>
									<Button
										colorScheme={useColorModeValue("yellow", "teal")}
										variant="link"
										fontSize="2xl"
										onClick={() => setShow(!show)}
									>
										{show ? <LiaEye /> : <LiaEyeSlash />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</Box>
						<Box>
							<Button
								type="submit"
								width="full"
								fontSize="lg"
								variant="solid"
								color={"blackAlpha.800"}
								colorScheme={useColorModeValue("yellow", "teal")}
								children="Update Password"
							/>
						</Box>
					</form>
				</Stack>
			</Card>
		</Flex>
	);
};

export default ResetPassword;
