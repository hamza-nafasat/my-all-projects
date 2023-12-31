import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiaEyeSlash, LiaEye } from "react-icons/lia";
import { loadUser } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/actions/profileAction";
import { Box, Button, Card, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react";

const ResetPassword = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setnewPassword] = useState("");
	const { loading } = useSelector((state) => state.profile);
	const formHandler = async (e) => {
		e.preventDefault();
		await dispatch(changePassword(oldPassword, newPassword));
		await dispatch(loadUser());
		navigate("/profile");
	};
	return (
		<Flex minH={["70vh", "100vh"]} justify={"center"} align={"center"}>
			<Card
				px={6}
				pt={8}
				pb={12}
				width={"full"}
				rounded={"xl"}
				boxShadow={"none"}
				justifyContent={"center"}
				maxW={["100vw", "85vw", "70vw", "60vw", "50vw", "100px"]}
			>
				<Stack height="full" justify="center" align="center">
					<Heading
						textAlign="center"
						fontSize={["2xl", "3xl", "4xl", "4xl", "5xl"]}
						fontFamily={"sans-serif"}
						color={useColorModeValue("yellow.500", "teal.500")}
						textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
						children="Change Password"
						letterSpacing="wide"
						mb={["4", ""]}
					/>
					<form
						onSubmit={formHandler}
						style={{ width: "100%", display: "flex", flexDirection: "column", gap: "30px" }}
					>
						<Box>
							<InputGroup size="md">
								<Input
									id="oldPassword"
									pr="4.5rem"
									placeholder={"Old Password"}
									required
									type={show2 ? "text" : "password"}
									focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
									value={oldPassword}
									onChange={(e) => setOldPassword(e.target.value)}
									autoComplete="current-password"
								/>
								<InputRightElement h={"full"} minW={"5vw"}>
									<Button
										colorScheme={useColorModeValue("yellow", "teal")}
										variant="link"
										fontSize="2xl"
										onClick={() => setShow2(!show2)}
									>
										{show2 ? <LiaEye /> : <LiaEyeSlash />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</Box>
						<Box>
							<InputGroup size="md">
								<Input
									id="newpassword"
									pr="4.5rem"
									required
									type={show ? "text" : "password"}
									placeholder=" New Password"
									focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
									value={newPassword}
									onChange={(e) => setnewPassword(e.target.value)}
									autoComplete="new-password"
								/>
								<InputRightElement h={"full"} minW={"5vw"}>
									<Button
										variant="link"
										fontSize="2xl"
										onClick={() => setShow(!show)}
										colorScheme={useColorModeValue("yellow", "teal")}
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
								isLoading={loading}
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
