import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";
import { getCourseLectures } from "../../redux/actions/courseAction";
import { Box, Button, Card, Flex, Grid, HStack, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import Loader from "../layout/Loader";

const CoursePage = ({ user }) => {
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [lectureNumber, setLectureNumber] = useState(0);
	const [showDescription, setShowDescription] = useState(false);
	const { lectures, loading } = useSelector((state) => state.course);

	useEffect(() => {
		dispatch(getCourseLectures(params.id));
	}, [dispatch]);

	useEffect(() => {
		if (user.role !== "admin" && (!user.subscription || user.subscription.status !== "active"))
			navigate("/subscribe");
	}, [user, navigate]);
	return (
		<Flex minH="100vh" direction={"column"} justify={"center"} align={"center"}>
			<Card
				rounded={"xl"}
				width={"full"}
				maxW={["98vw", "95vw", "90vw", "80vw"]}
				px={6}
				boxShadow={"lg"}
				my={2}
				py={10}
			>
				<Heading
					textAlign={"center"}
					fontSize={["1.8rem", "4xl", "5xl"]}
					fontFamily={"monospace"}
					color={useColorModeValue("yellow.500", "teal.500")}
					textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
					letterSpacing="wide"
					mb={6}
					children="Web Development"
				/>
				{loading ? (
					<Loader />
				) : (
					<Grid templateColumns={["1fr", "1fr", "1fr", "3fr 1fr"]}>
						<Box>
							<video
								width={"100%"}
								style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)" }}
								controls
								controlsList="nodownload noremoteplayback"
								disablePictureInPicture
								muted
								autoPlay
								disableRemotePlayback
								src={lectures[lectureNumber]?.video.url}
							/>
							<Heading
								mt="4"
								color={useColorModeValue("yellow.500", "teal.500")}
								fontSize={["lg", "3xl", "4xl"]}
								children={`#${lectureNumber + 1} ${lectures[lectureNumber]?.title || "Not available"}`}
							/>
							<HStack gap={0}>
								<Heading
									fontSize={"5xl"}
									my={4}
									style={{ cursor: "pointer" }}
									onClick={() => setShowDescription(!showDescription)}
								>
									{showDescription ? <MdArrowDropDown /> : <MdArrowRight />}
								</Heading>
								<Heading
									opacity={0.8}
									my={4}
									ml={"-0.5rem"}
									onClick={() => setShowDescription(!showDescription)}
									style={{ cursor: "pointer" }}
									children="Discription"
								/>
							</HStack>

							{showDescription &&
								(lectures.length > 0 ? (
									<Text
										textAlign={"justify"}
										mt="4"
										children={lectures[lectureNumber]?.description}
									/>
								) : (
									<Text
										mt="4"
										textAlign={"justify"}
										children={"Lectures not available for this course"}
									/>
								))}
						</Box>
						<VStack>
							{lectures.map((element, index) => (
								<Button
									variant={"ghost"}
									onClick={() => setLectureNumber(index)}
									key={element._id}
									style={{
										width: "100%",
										padding: "1rem",
										textAlign: "center",
										margin: 0,
										borderBottom: "1px solid rgba(0,0,0,0.2)",
									}}
								>
									<Text noOfLines={1}>
										#{index + 1} {element.title}
									</Text>
								</Button>
							))}
						</VStack>
					</Grid>
				)}
			</Card>
		</Flex>
	);
};

export default CoursePage;
