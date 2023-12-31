import toast from "react-hot-toast";
import CourseCard from "./CourseCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/courseAction";
import { addToPlaylist, loadUser } from "../../redux/actions/userAction";
import { Button, Container, HStack, Heading, Input, Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react";

export const Categories = [
	"Web Development",
	"WordPress",
	"Artificial Intelligence",
	"Machine Learning",
	"Computer Science",
	"Data Structure",
];

const Courses = () => {
	const dispatch = useDispatch();
	const [keywords, setKeywords] = useState("");
	const [category, setCategory] = useState("");
	const { courses, error, message, loading } = useSelector((state) => state.course);

	const addToPlaylistHandler = async (couseId) => {
		await dispatch(addToPlaylist(couseId));
		dispatch(loadUser());
	};
	// get all courses
	// ===============
	useEffect(() => {
		dispatch(getAllCourses(keywords, category));
	}, [keywords, category, dispatch]);
	// show toast message
	// ==================
	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch({ type: "clearError" });
		}
		if (message) {
			toast.success(message);
			dispatch({ type: "clearMessage" });
		}
	}, [error, message, dispatch]);

	return (
		<Container minH="95vh" w={{ base: "100%", lg: "container.lg" }} maxW={{ base: "100%", lg: "95vw" }} mt={0}>
			<Heading
				p={6}
				textAlign="center"
				fontSize={["3xl", "5xl"]}
				fontFamily={"monospace"}
				color={useColorModeValue("yellow.500", "teal.500")}
				textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
				letterSpacing="wide"
				mb={["4", ""]}
				children="All Courses"
			/>

			<Input
				size={"lg"}
				pr={"4.5rem"}
				autoFocus
				type="text"
				bg={useColorModeValue("white", "#21283a")}
				_hover={{
					background: ` ${useColorModeValue("white", "#21283a")}`,
				}}
				value={keywords}
				focusBorderColor={useColorModeValue("yellow.500", "teal.500")}
				placeholder="Search a course..."
				onChange={(e) => setKeywords(e.target.value)}
			/>
			<HStack
				overflowX="scroll"
				py={4}
				css={{
					"&::-webkit-scrollbar": {
						height: "8px",
						borderRadius: "3px",
						background: "lightgray",
					},
					"&::-webkit-scrollbar-thumb": {
						background: "gray",
					},
				}}
			>
				{Categories.map((item, i) => (
					<Button
						key={i}
						variant={"outline"}
						isDisabled={loading}
						minW={["40", "52", "60"]}
						onClick={() => setCategory(item)}
						bg={useColorModeValue("white", "#21283a")}
						_hover={{ border: `2px solid ${useColorModeValue("#D69E2E", "#319795")}` }}
						_focus={{ border: `2px solid ${useColorModeValue("#D69E2E", "#319795")}` }}
					>
						{item}
					</Button>
				))}
			</HStack>

			<Wrap spacing={2} py={4} justify={"space-evenly"}>
				{courses?.length > 0 ? (
					courses?.map((item) => (
						<WrapItem key={item._id}>
							<CourseCard
								img={item.poster.url}
								title={item.title}
								discription={item.description}
								creator={item.createdBy}
								addToProfie={addToPlaylistHandler}
								LectureNumbers={item.numOfVideos}
								view={item.views}
								id={item._id}
							/>
						</WrapItem>
					))
				) : (
					<Heading
						p={6}
						textAlign="center"
						opacity={0.8}
						fontWeight={"bold"}
						fontSize={["3xl", "5xl"]}
						fontFamily={"monospace"}
						textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
						letterSpacing="wide"
						mb={["4", ""]}
						children="Courses Not Found"
					/>
				)}
			</Wrap>
		</Container>
	);
};

export default Courses;
