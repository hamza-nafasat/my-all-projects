import toast from "react-hot-toast";
import {
	Text,
	Flex,
	Card,
	Image,
	Stack,
	Modal,
	Input,
	VStack,
	Avatar,
	HStack,
	Button,
	Heading,
	Container,
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalContent,
	ModalOverlay,
	useDisclosure,
	ModalCloseButton,
	useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { fileStyle } from "../auth/Signup";
import { useState, useEffect } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, removeFromPlaylist } from "../../redux/actions/userAction";
import { updateProfilePicture } from "../../redux/actions/profileAction";
import { cancelSubscription } from "../../redux/actions/subscriptionAction";

const Profile = ({ user }) => {
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { loading, message, error } = useSelector((state) => state.profile);
	const { message: subMesg, error: subErr, loading: subLoad } = useSelector((state) => state.subscription);
	// Remove Course Frome PlayList
	// ============================
	const removeFromPlaylistHandler = async (courseId) => {
		await dispatch(removeFromPlaylist(courseId));
		dispatch(loadUser());
	};
	// Change Dp Handler
	// =================
	const changeImageSubmitHandler = async (e, image) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", image);
		await dispatch(updateProfilePicture(formData));
		dispatch(loadUser());
	};
	// Cancel Subsciption Handler
	// ==========================
	const cancelSubsciptionHandler = () => {
		dispatch(cancelSubscription());
	};
	// USE EFFECT FOR TOAST MESSAGE
	// ============================
	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch({ type: "clearError" });
		}
		if (message) {
			toast.success(message);
			dispatch({ type: "clearMessage" });
		}
		if (subErr) {
			toast.error(subErr);
			dispatch({ type: "clearError" });
		}
		if (subMesg) {
			toast.success(subMesg);
			dispatch({ type: "clearMessage" });
			dispatch(loadUser());
		}
	}, [dispatch, message, error, subErr, subMesg]);

	return (
		<Flex minH={"100vh"} alignItems={"center"} justify={"center"}>
			<Card
				rounded={"xl"}
				px={[8, 4]}
				py={[10, 8]}
				gap={10}
				pb={20}
				minW={["100vw", "85vw", "70vw", "60vw", "60vw", "1000px"]}
			>
				<Heading
					children={`Wellcome ${user?.name?.toUpperCase() || "SIR"}`}
					textAlign="center"
					fontSize={["3xl", "4xl", "4xl", "5xl", "5xl"]}
					fontFamily={"monospace"}
					color={useColorModeValue("yellow.500", "teal.500")}
					textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
					letterSpacing="wide"
				/>
				<Stack
					direction={["column", "column", "row"]}
					alignItems={"center"}
					justify={["center", "center", "space-around"]}
					spacing={[4, 4]}
				>
					{/* ==================== */}
					{/* PROFILE PIC SECTION  */}
					{/* ==================== */}
					<VStack gap={[0, 0, 0]}>
						<Avatar src={user.avatar.url} boxSize={[48, 52, 56, 64]} />
						<Button
							onClick={onOpen}
							variant="ghost"
							size={"lg"}
							colorScheme={useColorModeValue("yellow", "teal")}
						>
							Change DP
						</Button>
					</VStack>
					{/* ================ */}
					{/* DETAILS SECTION  */}
					{/* ================ */}
					<VStack fontSize={"20px"} spacing={4} align={"flex-start"}>
						<HStack>
							<Text children="Name:" fontWeight={"bold"} />
							<Text children={user?.name || "Sir"} />
						</HStack>
						<HStack>
							<Text children="Email:" fontWeight={"bold"} />
							<Text children={user?.email || "example@mail.com"} />
						</HStack>
						<HStack>
							<Text children="CreatedAt:" fontWeight={"bold"} />
							<Text
								children={
									user?.createdAt?.split("T")[0] || String(new Date().toISOString()).split("T")[0]
								}
							/>
						</HStack>
						{user?.role === "admin" && (
							<HStack>
								<Text
									color={"green"}
									fontWeight={"bold"}
									fontSize={"24px"}
									children={`You are an Admin Sir`}
									textShadow={"2px 2px 4px rgba(0, 0, 0, 0.2)"}
								/>
							</HStack>
						)}
						{user?.role !== "admin" && (
							<HStack>
								<Text children="Subscription" fontWeight={"bold"} />
								<Text
									children={
										user?.subscription && user?.subscription?.status === "active"
											? "Subscriber"
											: "Not Subscriber"
									}
								/>
							</HStack>
						)}

						{/* ================ */}
						{/* BUTTONS SECTION  */}
						{/* ================ */}
						<Stack direction={"column"} alignItems={"center"}>
							{user?.role !== "admin" && user?.subscription && user?.subscription?.status === "active" ? (
								<Button
									minW={"270px"}
									isLoading={subLoad}
									onClick={cancelSubsciptionHandler}
									colorScheme={useColorModeValue("yellow", "teal")}
								>
									Cancel Subscription
								</Button>
							) : (
								user?.role !== "admin" && (
									<Link to="/subscribe">
										<Button minW={"270px"} colorScheme={useColorModeValue("yellow", "teal")}>
											Subscribe Now
										</Button>
									</Link>
								)
							)}
							<Link to="/updateprofile">
								<Button minW={"270px"}>Update Profile</Button>
							</Link>
							<Link to="/changepassword">
								<Button minW={"270px"}>Change Password</Button>
							</Link>
						</Stack>
					</VStack>
				</Stack>
				{/* ================= */}
				{/* PLAYLIST SECTION  */}
				{/* ================= */}
				<Heading children="Playlist" size={"md"} textAlign={"center"} />
				{user.playlist.length > 0 && (
					<Stack
						alignSelf={"center"}
						maxW={["100%", "98%", "80%", "75%"]}
						direction={"row"}
						align={"center"}
						justify={"center"}
						flexWrap="wrap"
						py="4"
						gap={[4]}
					>
						{user.playlist.map((item, i) => (
							<VStack w={["95%", "40%", "30%", "20%"]} gap={2} key={i}>
								<Image src={item.poster} objectFit="cover" w="100%" rounded="md" />
								<HStack w={"100%"} justify={"space-between"}>
									<Link style={{ width: "100%" }} to={`/course/${item.course}`}>
										<Button
											w={"100%"}
											colorScheme={useColorModeValue("yellow", "teal")}
											children="Watch Now"
										/>
									</Link>
									<Button
										w={"30%"}
										colorScheme={useColorModeValue("yellow", "teal")}
										onClick={() => removeFromPlaylistHandler(item.course)}
									>
										<RiDeleteBin7Fill />
									</Button>
								</HStack>
							</VStack>
						))}
					</Stack>
				)}
				{/* ================== */}
				{/* CHANGE DP SECTION  */}
				{/* ================== */}
				<ChangePhotoBox
					isOpen={isOpen}
					onClose={onClose}
					loading={loading}
					changeImageSubmitHandler={changeImageSubmitHandler}
				/>
			</Card>
		</Flex>
	);
};

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler, loading }) {
	const [image, setImage] = useState("");
	const [imagePrev, setImagePrev] = useState("");
	const changeImage = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImagePrev(reader.result);
			setImage(file);
		};
	};
	const closeHandler = () => {
		onClose();
		setImagePrev("");
		setImage("");
	};
	return (
		<Modal isOpen={isOpen} onClose={closeHandler}>
			<ModalOverlay backdropFilter={"blur(10px)"} />
			<ModalContent>
				<ModalHeader>Change Photo</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Container>
						<form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
							<VStack spacing={"8"}>
								{imagePrev && <Avatar src={imagePrev} boxSize={"48"} />}
								<Input
									type={"file"}
									css={{ "&::file-selector-button": fileStyle }}
									onChange={changeImage}
								/>
								<Button
									w="full"
									type="submit"
									isLoading={loading}
									colorScheme={useColorModeValue("yellow", "teal")}
								>
									Change
								</Button>
							</VStack>
						</form>
					</Container>
				</ModalBody>
				<ModalFooter>
					<Button mr="3" onClick={closeHandler}>
						Cancel
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default Profile;
