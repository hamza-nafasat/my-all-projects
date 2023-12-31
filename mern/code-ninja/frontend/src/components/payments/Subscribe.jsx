import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { server } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { buySubscription } from "../../redux/actions/subscriptionAction";
import { Box, Button, Card, Flex, Heading, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";

const Subscribe = ({ user }) => {
	const [key, setKey] = useState("");
	const { colorMode } = useColorMode();
	const dispatch = useDispatch();
	const { error, message } = useSelector((state) => state.course);
	const {
		error: subError,
		message: subMessage,
		subscriptionId,
		loading,
	} = useSelector((state) => state.subscription);
	// useEffect for message
	// =====================
	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch({ type: "clearError" });
		}
		if (message) {
			toast.success(message);
			dispatch({ type: "clearMessage" });
		}
		if (subError) {
			toast.error(subError);
			dispatch({ type: "clearError" });
		}
		if (subMessage) {
			toast.success(subMessage);

			dispatch({ type: "clearMessage" });
		}
	}, [error, message, subError, subMessage, dispatch]);
	// subscribe Handler
	// =================
	const subscribeHandler = async () => {
		const { data } = await axios.get(`${server}/getrezorpaykey`);
		setKey(data.key);
		dispatch(buySubscription());
	};
	// open popup for payment
	// ======================
	useEffect(() => {
		if (subscriptionId) {
			const openPopUp = () => {
				let options = {
					key,
					name: "CodeNinja",
					description: "Get access to all premium content",
					subscription_Id: subscriptionId,
					callback_url: `${server}//paymentverification`,
					prefill: {
						name: user.name,
						email: user.email,
						contact: "",
					},
					notes: {
						address: "Hamza Nafasat",
					},
					theme: {
						color: "#FFC800",
					},
				};
				const razor = new window.Razorpay(options);
				razor.open();
			};
			openPopUp();
		}
	}, [subscriptionId, user.name, user.email, key, dispatch]);

	return (
		<Flex minH="100vh" justify={"center"} align={"center"}>
			<Card
				rounded={"xl"}
				width={"full"}
				maxW={["95vw", "85vw", "70vw", "600px"]}
				boxShadow={"none"}
				bg={useColorModeValue("whitesmoke")}
				my={6}
				px={6}
				pt={6}
				pb={10}
				gap={4}
			>
				<Heading
					children="Exclusive Premium Access"
					textAlign="center"
					fontSize={["2xl", "3xl", "4xl", "4xl"]}
					fontFamily={"sans-serif"}
					color={colorMode === "dark" ? "teal.500" : "yellow.500"}
					textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
					letterSpacing="wide"
					mb={["4", ""]}
				/>

				<VStack alignItems="stretch" borderRadius={"lg"} spacing="0">
					<Box
						bg={colorMode === "light" ? "yellow.400" : "teal.400"}
						py={4}
						px={2}
						css={{ borderRadius: "8px 8px 0 0" }}
						textAlign={"center"}
						color={"black"}
					>
						<Text children="Unlock premium features with the Pro Pack" />
					</Box>

					<Box>
						<VStack textAlign={"justify"} px={2} mt={"4"} spacing="8">
							<Text children="Subscribe to us and unlock premium access to lectures, exclusive features, and embark on a coding journey like never before as our esteemed premium member" />
							<Heading size="md" children="Limited-Time Offer Grab it now for just 299 RS!" />
							<Heading size="md" opacity={0.8}>
								if u dont want this then go to{" "}
								<Link to={"/profile"} style={{ textDecoration: "underline", opacity: 1 }}>
									Your Profile
								</Link>
							</Heading>
						</VStack>
						<Button
							my="8"
							w="full"
							isLoading={loading}
							onClick={subscribeHandler}
							fontFamily={"sans-serif"}
							colorScheme={colorMode === "light" ? "yellow" : "teal"}
							children="Subscribe Now"
						/>
					</Box>

					<Box
						bg={colorMode === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"}
						py="4"
						px="2"
						css={{ borderRadius: "0 0 8px 8px" }}
						textAlign={"center"}
					>
						<Heading
							color={colorMode === "light" ? "black" : "white"}
							textTransform="uppercase"
							size="sm"
							children="Your satisfaction guaranteed or refunded!"
						/>
						<Text fontSize={"xs"} color={colorMode === "light" ? "black" : "white"}>
							We're confident you'll love it. If not, we'll refund you 100%.
						</Text>
					</Box>
				</VStack>
			</Card>
		</Flex>
	);
};

export default Subscribe;
