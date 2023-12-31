import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text,
	Textarea,
	useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { contactUs } from "../../redux/actions/otherAction";

const Login = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [Message, setMessage] = useState("");

	const dispatch = useDispatch();
	const { error, message, loading } = useSelector((state) => state.other);

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch({ type: "clearError" });
		}
		if (message) {
			toast.success(message);
			dispatch({ type: "clearMessage" });
			setName("");
			setEmail("");
			setMessage("");
		}
	}, [dispatch, error, message]);

	const formHandler = (e) => {
		e.preventDefault();
		dispatch(contactUs(name, email, Message));
	};

	return (
		<Flex minH="100vh" justify={"center"} align={"center"}>
			<Stack
				px={6}
				pt={6}
				pb={10}
				rounded="xl"
				width="full"
				height="full"
				align="center"
				justify="center"
				maxW={["95vw", "85vw", "70vw", "60vw", "60vw", "1000px"]}
			>
				<Heading
					textAlign="center"
					fontSize={["3xl", "4xl", "4xl", "4xl", "5xl", "5xl"]}
					fontFamily={"sans-serif"}
					color={useColorModeValue("yellow.500", "teal.500")}
					textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
					children="Drop Us a Line"
					letterSpacing="wide"
					mb={["4", ""]}
				/>

				<form
					onSubmit={formHandler}
					style={{ width: "100%", display: "flex", flexDirection: "column", gap: "15px" }}
				>
					<Box>
						<FormLabel htmlFor="cotactName" children="Name:" />
						<Input
							type="name"
							id="cotactName"
							required
							autoFocus
							value={name}
							focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
							placeholder="Enter your name"
							onChange={(e) => setName(e.target.value)}
						/>
					</Box>

					<Box>
						<FormLabel htmlFor="email" children="Email:" />
						<Input
							id="email"
							pr="4.5rem"
							required
							type={"email"}
							placeholder="Enter your email"
							focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Box>

					<Box>
						<FormLabel htmlFor="message" children="Message:" />
						<Textarea
							size="lg"
							id="message"
							required
							placeholder="Enter your Message..."
							focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
							value={Message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</Box>

					<Box>
						<Button
							type="submit"
							isLoading={loading}
							width="full"
							fontSize="lg"
							color={"blackAlpha.800"}
							colorScheme={useColorModeValue("yellow", "teal")}
							children="Send message"
						/>
					</Box>

					<Box display={"flex"} justifyContent={"center"} gap={2}>
						<Text fontSize={"18px"}>Request for a course </Text>
						<Link to="/request">
							<Button
								colorScheme={useColorModeValue("yellow", "teal")}
								variant="link"
								fontSize="lg"
								children="Click here"
								mt={0.5}
							/>
						</Link>
					</Box>
				</form>
			</Stack>
		</Flex>
	);
};

export default Login;
