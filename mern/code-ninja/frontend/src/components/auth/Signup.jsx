import { useState } from "react";
import {
	Avatar,
	Box,
	Button,
	Card,
	Flex,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LiaEyeSlash, LiaEye } from "react-icons/lia";
import { MdPersonAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userAction";

export const fileStyle = {
	cursor: "pointer",
	marginLeft: "-5%",
	fontSize: "19px",
	fontFamily: "sans-serif",
	width: "110%",
	height: "100%",
	border: "none",
	backgroundColor: "transparent",
};

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [image, setImage] = useState();
	const [imagePrev, setImagePrev] = useState();
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const ChangeImageHandler = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setImagePrev(reader.result);
			setImage(file);
		};
	};

	const formHandler = (e) => {
		e.preventDefault();
		const myFormData = new FormData();
		myFormData.append("name", name);
		myFormData.append("email", email);
		myFormData.append("password", password);
		myFormData.append("file", image);
		dispatch(register(myFormData));
	};
	return (
		<Flex minH="95vh" justify={"center"} align={"center"}>
			<Card
				rounded={["none", "xl"]}
				width={"full"}
				maxW={["100vw", "85vw", "70vw", "60vw", "60vw", "1000px"]}
				boxShadow={"none"}
				my={[0, 4]}
				px={6}
				py={8}
				pt={[12, 8]}
			>
				<form
					onSubmit={formHandler}
					style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}
				>
					<Box alignSelf={"center"}>
						<Avatar src={imagePrev} size="2xl"></Avatar>
					</Box>
					<Box>
						<FormLabel htmlFor="name" children="Name:" />
						<Input
							type="text"
							id="name"
							required
							autoFocus
							value={name}
							focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
							placeholder="Enter your name"
							onChange={(e) => setName(e.target.value)}
							autoComplete="name"
						/>
					</Box>
					<Box>
						<FormLabel htmlFor="email" children="Email:" />
						<Input
							type="email"
							id="email"
							required
							value={email}
							focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
							placeholder="Enter your email"
							onChange={(e) => setEmail(e.target.value)}
							autoComplete="email"
						/>
					</Box>
					<Box>
						<FormLabel htmlFor="password" children="Password:" />
						<InputGroup size="md">
							<Input
								id="password"
								required
								pr="4.5rem"
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
					<Box cursor={"pointer"}>
						<FormLabel htmlFor="avatar" children="Select image:" />
						<Input
							accept="image/*"
							required
							id="avatar"
							type={"file"}
							onChange={ChangeImageHandler}
							css={{
								"&::file-selector-button": {
									...fileStyle,
									color: useColorModeValue("#D69E2E", "#319795"),
								},
							}}
						/>
					</Box>
					<Box>
						<Button
							type="submit"
							width="full"
							fontSize="lg"
							colorScheme={useColorModeValue("yellow", "teal")}
							rightIcon={<MdPersonAdd size={"22px"} />}
							children="Sign up"
						/>
					</Box>
					<Box display={"flex"} justifyContent={"center"} gap={2}>
						<Text fontSize={"18px"}>Alrady have an account?</Text>
						<Link to="/login">
							<Button
								mt={0.5}
								variant={"link"}
								fontSize="lg"
								children="LOGIN"
								colorScheme={useColorModeValue("yellow", "teal")}
							/>
						</Link>
					</Box>
				</form>
			</Card>
		</Flex>
	);
};

export default Signup;
