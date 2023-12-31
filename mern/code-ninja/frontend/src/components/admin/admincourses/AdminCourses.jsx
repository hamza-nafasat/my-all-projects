import Sidebar from "../Sidebar";
import CourseModle from "./CourseModal";
import { useEffect, useState } from "react";
import cursor from "../../../assets/images/cursor.png";
import { useDispatch, useSelector } from "react-redux";
import CoursesCustomTableRow from "./CoursesCustomTableRow";
import { getAllCourses, getCourseLectures } from "../../../redux/actions/courseAction";
import { Box, Grid, Heading, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { TableCaption, TableContainer, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { addLectures, deleteCourse, deleteLecture } from "../../../redux/actions/adminAction";
import Loader from "../../layout/Loader";

const MyStyle = {
	borderRadius: "md",
	borderColor: "#805AD5",
	textAlign: "center",
};
const AdminCourses = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [courseId, setCourseId] = useState("");
	const [courseTitle, setCourseTitle] = useState("");
	const [courseCategory, setCourseCategory] = useState("");
	const dispatch = useDispatch();
	const { courses, lectures, loading } = useSelector((state) => state.course);
	const { loading: adminLoading } = useSelector((state) => state.admin);

	// onClick on lectures
	// ===================
	const CourseDetailsHandler = (id, title, category) => {
		onOpen();
		setCourseId(id);
		setCourseTitle(title);
		setCourseCategory(category);
		////
		dispatch(getCourseLectures(id));
	};
	// delete course
	// =============
	const deleteCourseHandler = async (courseId) => {
		await dispatch(deleteCourse(courseId));
		dispatch(getAllCourses());
	};
	// delete Lectures
	// ===============
	const deleteLectureHandler = (courseId, lectureId) => {
		dispatch(deleteLecture(courseId, lectureId));
	};
	// add Lectures
	// ============
	const addLectureHandler = (e, courseId, title, description, video) => {
		e.preventDefault();
		const myFormData = new FormData();
		myFormData.append("title", title);
		myFormData.append("description", description);
		myFormData.append("file", video);
		////
		dispatch(addLectures(courseId, myFormData));
	};
	// get all courses
	// ===============
	useEffect(() => {
		dispatch(getAllCourses());
	}, [dispatch]);
	return (
		<Grid css={{ cursor: `url(${cursor}), default` }} minH={"100vh"} templateColumns={["1fr", "1fr", "5fr 1fr"]}>
			<Box overflowX={"auto"} px={[4, 6]} py={[10]}>
				<Heading
					textAlign="center"
					fontSize={["3xl", "4xl", "5xl"]}
					fontFamily={"monospace"}
					color={useColorModeValue("purple.600", "purple.400")}
					textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
					children=" Courses"
					letterSpacing="wide"
				/>
				{loading ? (
					<Loader />
				) : (
					<TableContainer w={["100vw", "full"]}>
						<Table colorScheme="purple" size="sm" {...MyStyle}>
							<TableCaption placement="top">All available Courses</TableCaption>
							<Thead>
								<Tr>
									<Th {...MyStyle}>Index</Th>
									<Th {...MyStyle}>Poster</Th>
									<Th {...MyStyle}>Title</Th>
									<Th {...MyStyle}>Category</Th>
									<Th {...MyStyle}>Creator</Th>
									<Th {...MyStyle}>Views</Th>
									<Th {...MyStyle}>Lecture</Th>
									<Th {...MyStyle}>Action</Th>
								</Tr>
							</Thead>
							<Tbody>
								{/* Courses map */}
								{courses.map((item, i) => (
									<CoursesCustomTableRow
										key={i}
										i={i}
										loading={adminLoading}
										MyStyle={MyStyle}
										item={item}
										CourseDetailsHandler={CourseDetailsHandler}
										deleteCourseHandler={deleteCourseHandler}
									/>
								))}
							</Tbody>
						</Table>
					</TableContainer>
				)}
				{/* MODAL */}
				<CourseModle
					isOpen={isOpen}
					onClose={onClose}
					courseId={courseId}
					lectures={lectures}
					courseTitle={courseTitle}
					courseCategory={courseCategory}
					addLectureHandler={addLectureHandler}
					deleteLectureHandler={deleteLectureHandler}
				/>
				<Text
					display={["block", "block", "block", "none"]}
					textAlign={"center"}
					color={"purple.400"}
					children={"Scroll the table for all details"}
				/>
			</Box>
			<Sidebar />
		</Grid>
	);
};

export default AdminCourses;
