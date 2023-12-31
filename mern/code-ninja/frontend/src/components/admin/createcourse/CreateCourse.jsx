import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { fileStyle } from "../../auth/Signup";
import { Categories } from "../../courses/Courses";
import cursor from "../../../assets/images/cursor.png";
import { useColorModeValue, FormLabel } from "@chakra-ui/react";
import { Box, Button, Grid, Heading, Image, Input, Select, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../../redux/actions/adminAction";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [createdBy, setCreatedBy] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");
	const [imagePrev, setImagePrev] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { message, error, loading } = useSelector((state) => state.admin);

	const ChangeDpHandler = (e) => {
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
		myFormData.append("title", title);
		myFormData.append("description", description);
		myFormData.append("createdBy", createdBy);
		myFormData.append("category", category);
		myFormData.append("file", image);
		dispatch(createCourse(myFormData));
	};
	// showing message when course upload successfully
	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch({ type: "clearError" });
		}

		if (message) {
			toast.success(message);
			dispatch({ type: "clearMessage" });
			setTitle("");
			setCategory("");
			setCreatedBy("");
			setImage("");
			setDescription("");
			setImagePrev("");
			navigate("/admin/courses");
		}
	}, [error, message, dispatch]);
	return (
		<Grid css={{ cursor: `url(${cursor}), default` }} minH={"80vh"} templateColumns={["1fr", "1fr", "5fr 1fr"]}>
			<Stack
				height="full"
				mx={"auto"}
				rounded={"xl"}
				width={"full"}
				maxW={["95vw", "85vw", "70vw", "60vw"]}
				px={6}
				py={8}
				justify="center"
				align="center"
			>
				<Heading
					textAlign="center"
					fontSize={["3xl", "4xl", "5xl"]}
					fontFamily={"monospace"}
					color={useColorModeValue("purple.600", "purple.400")}
					textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
					children="Create Course"
					letterSpacing="wide"
					mb={["4", ""]}
				/>

				<form
					onSubmit={formHandler}
					style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}
				>
					<Box>
						<FormLabel htmlFor="title" children="Title:" />
						<Input
							type="text"
							id="title"
							required
							autoFocus
							value={title}
							focusBorderColor={useColorModeValue("purple.400", "purple.300")}
							placeholder="Course title"
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Box>
					<Box>
						<FormLabel htmlFor="description" children="Description:" />
						<Input
							type="text"
							id="description"
							required
							value={description}
							focusBorderColor={useColorModeValue("purple.400", "purple.300")}
							placeholder="Describe the course"
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Box>
					<Box>
						<FormLabel htmlFor="createdBy" children="Author:" />
						<Input
							type="createdBy"
							id="createdBy"
							required
							value={createdBy}
							focusBorderColor={useColorModeValue("purple.400", "purple.300")}
							placeholder="Course author name"
							onChange={(e) => setCreatedBy(e.target.value)}
						/>
					</Box>
					<Box>
						<FormLabel htmlFor="category" children="Category:" />
						<Select
							id="category"
							required
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							focusBorderColor={useColorModeValue("purple.400", "purple.300")}
							placeholder="Select Category"
						>
							{Categories.map((item, i) => (
								<option key={i} value={item}>
									{item}
								</option>
							))}
						</Select>
					</Box>
					<Box cursor={"pointer"}>
						<FormLabel htmlFor="poster" children="Select Image:" />
						<Input
							accept="image/*"
							required
							id="poster"
							type={"file"}
							onChange={ChangeDpHandler}
							css={{
								"&::file-selector-button": {
									...fileStyle,
									color: useColorModeValue("#6B46C1", "#805AD5"),
								},
							}}
						/>
					</Box>
					<Box>{image && <Image w={["50vw", "40vw", "30vw", "18vw"]} src={imagePrev} mx={"auto"} />}</Box>
					<Box mt={4}>
						<Button
							type="submit"
							width="full"
							isLoading={loading}
							fontSize="lg"
							variant="solid"
							boxShadow="xl"
							colorScheme={useColorModeValue("purple", "teal")}
							children="Publish Course"
						/>
					</Box>
				</form>
			</Stack>

			<Sidebar />
		</Grid>
	);
};

export default CreateCourse;
