import React, { useEffect, useState } from "react";
import {
	Box,
	Button,
	Grid,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { fileStyle } from "../../auth/Signup";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../layout/Loader";
import { getAllCourses, getCourseLectures } from "../../../redux/actions/courseAction";

const CourseModal = ({
	isOpen,
	onClose,
	courseId,
	lectures = [],
	courseTitle,
	courseCategory,
	addLectureHandler,
	deleteLectureHandler,
}) => {
	const dispatch = useDispatch();
	const [lectureTitle, setLectureTitle] = useState("");
	const [lectureDescription, setLectureDescription] = useState("");
	const [lectureVideo, setLectureVideo] = useState("");
	const [lectureVideoPrev, setLectureVideoPrev] = useState("");
	const { message, error, loading } = useSelector((state) => state.admin);
	const { loading: userLoading } = useSelector((state) => state.course);

	const changeVideoHandler = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setLectureVideo(file);
			setLectureVideoPrev(reader.result);
		};
	};
	const handleClose = () => {
		setLectureTitle("");
		setLectureDescription("");
		setLectureVideo("");
		setLectureVideoPrev("");
		dispatch(getAllCourses());
		onClose();
	};
	// showing message when course upload successfully
	// ===============================================
	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch({ type: "clearError" });
		}
		if (message) {
			toast.success(message);
			dispatch(getCourseLectures(courseId));
			dispatch({ type: "clearMessage" });
			setLectureTitle("");
			setLectureDescription("");
			setLectureVideo("");
			setLectureVideoPrev("");
		}
	}, [error, message, dispatch]);
	return (
		<Modal isOpen={isOpen} size={"full"} onClose={handleClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalHeader
					textAlign="center"
					fontSize={["3xl", "4xl", "5xl"]}
					fontFamily={"monospace"}
					color={useColorModeValue("purple.600", "purple.400")}
					textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
					letterSpacing="wide"
					children={courseCategory}
				/>
				<ModalBody alignContent={"center"}>
					<Grid templateColumns={["1fr", "1fr", "1fr", "3fr 1fr"]}>
						{!userLoading ? (
							<Box px={[0, 4, 16]}>
								<Box my={2}>
									<Heading
										opacity={0.9}
										children={courseTitle}
										fontFamily={"monospace"}
										fontSize={["2xl", "3xl", "4xl"]}
									/>
								</Box>
								{lectures.length > 0 ? (
									lectures?.map((item, i) => (
										<Box key={item._id}>
											<Heading
												opacity={0.7}
												children={"Lectures"}
												fontSize={"large"}
												fontFamily={"monospace"}
											/>
											<Stack
												p={4}
												my="4"
												borderRadius={"lg"}
												direction={["column", "row"]}
												boxShadow={"0 0 10px rgba(107,70,193,0.5)"}
												justifyContent={["flex-start", "space-between"]}
											>
												<Box>
													<Heading size={"sm"} children={`#${i + 1} ${item.title}`} />
													<Text children={item.description} />
												</Box>
												<Button
													color={"red"}
													isDisabled={loading}
													onClick={() => deleteLectureHandler(courseId, item._id)}
												>
													<RiDeleteBin7Fill style={{ fontSize: "1.8rem" }} />
												</Button>
											</Stack>
										</Box>
									))
								) : (
									<Box>
										<Stack
											p={4}
											my="4"
											opacity={0.6}
											borderRadius={"lg"}
											direction={["column", "row"]}
											boxShadow={"0 0 10px rgba(107,70,193,0.5)"}
											justifyContent={["center"]}
										>
											<Heading children="Lectures Not Found" />
										</Stack>
									</Box>
								)}
							</Box>
						) : (
							<Loader />
						)}
						{/* add lecture section  */}
						<Box>
							<form
								onSubmit={(e) =>
									addLectureHandler(e, courseId, lectureTitle, lectureDescription, lectureVideo)
								}
							>
								<VStack spacing={"4"} mt={[, , , 28]}>
									<Heading
										fontSize={["2xl", "3xl", "4xl"]}
										fontFamily={"monospace"}
										children="Add Lecture"
										opacity={0.8}
									/>
									<Input
										focusBorderColor={useColorModeValue("purple.400", "purple.300")}
										placeholder="Title"
										required
										value={lectureTitle}
										onChange={(e) => setLectureTitle(e.target.value)}
									/>
									<Input
										focusBorderColor={useColorModeValue("purple.400", "purple.300")}
										placeholder="Description"
										required
										value={lectureDescription}
										onChange={(e) => setLectureDescription(e.target.value)}
									/>
									<Input
										accept="video/*"
										required
										type={"file"}
										focusBorderColor={useColorModeValue("purple.400", "purple.300")}
										css={{
											"&::file-selector-button": {
												...fileStyle,
												color: useColorModeValue("#6B46C1", "#805AD5"),
											},
										}}
										onChange={changeVideoHandler}
									/>
									{lectureVideoPrev && (
										<video controlsList="nodownload" controls src={lectureVideoPrev} />
									)}
									<Button
										w="full"
										isDisabled={loading}
										colorScheme={useColorModeValue("purple", "teal")}
										type="submit"
									>
										Upload
									</Button>
								</VStack>
							</form>
						</Box>
					</Grid>
				</ModalBody>
				<ModalFooter>
					<Button onClick={handleClose} children={"Close"} />
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CourseModal;
