import { useState } from "react";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { useDispatch } from "react-redux";
import { LiaEyeSlash, LiaEye } from "react-icons/lia";
import { login } from "../../redux/actions/userAction";
import { Box, Text, Card, Flex, Input, Stack, Button, Heading } from "@chakra-ui/react";
import { FormLabel, InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const formHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<Flex minH="95vh" justify={"center"} align={"center"}>
			<Card
				rounded={["none", "xl"]}
				width={"full"}
				maxW={["100vw", "85vw", "70vw", "60vw", "60vw", "1000px"]}
				boxShadow={"none"}
				my={[0, 2]}
				px={6}
				py={8}
				pt={[12, 8]}
			>
				<Stack height="full" justify="center" align="center">
					<Heading
						textAlign="center"
						fontSize={["2xl", "3xl", "4xl", "4xl", "5xl"]}
						fontFamily={"monospace"}
						color={useColorModeValue("yellow.500", "teal.500")}
						textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
						children="Login Your Account"
						letterSpacing="wide"
						mb={["4", ""]}
					/>
					<form
						onSubmit={formHandler}
						style={{ width: "100%", display: "flex", flexDirection: "column", gap: "25px" }}
					>
						<Box>
							<FormLabel htmlFor="email" children="Email:" />
							<Input
								size="lg"
								type="email"
								id="email"
								required
								autoFocus
								value={email}
								focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
								placeholder="Enter your email"
								onChange={(e) => setEmail(e.target.value)}
								autoComplete="username"
							/>
						</Box>
						<Box>
							<FormLabel children="Password:" htmlFor="password" />
							<InputGroup size="md">
								<Input
									size="lg"
									id="password"
									pr="4.5rem"
									required
									type={show ? "text" : "password"}
									placeholder="Enter password"
									focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									autoComplete="current-password"
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
							<Link to="/forgetpassword">
								<Button fontSize="lg" colorScheme={useColorModeValue("yellow", "teal")} variant="link">
									Forgot Password
								</Button>
							</Link>
						</Box>
						<Box>
							<Button
								type="submit"
								width="full"
								fontSize="lg"
								variant="solid"
								colorScheme={useColorModeValue("yellow", "teal")}
								rightIcon={<MdLogin size={"22px"} />}
								children="Login"
							/>
						</Box>
						<Box display={"flex"} justifyContent={"center"} gap={2}>
							<Text fontSize={"18px"}>Need an account? </Text>
							<Link to="/signup">
								<Button
									colorScheme={useColorModeValue("yellow", "teal")}
									variant="link"
									fontSize="lg"
									children=" SIGN UP"
									mt={0.5}
								/>
							</Link>
						</Box>
					</form>
				</Stack>
			</Card>
		</Flex>
	);
};

export default Login;
