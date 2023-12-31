import Sidebar from "../Sidebar";
import cursor from "../../../assets/images/cursor.png";
import UserTableCustomRow from "./UserTableCustomRow";
import { Box, Grid, Heading, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { TableCaption, TableContainer, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserRole, deleteUser, getAllUsers } from "../../../redux/actions/adminAction";
import Loader from "../../layout/Loader";
import toast from "react-hot-toast";

const CustomStyle = {
	borderRadius: "md",
	borderColor: "#805AD5",
	textAlign: "center",
};
const Users = () => {
	const dispatch = useDispatch();
	const { users, loading, error, message } = useSelector((state) => state.admin);
	// delete user
	// ===========
	const deleteHandler = (id) => {
		dispatch(deleteUser(id));
	};
	// update user role
	// ================
	const updateHandler = (id) => {
		dispatch(changeUserRole(id));
	};
	// get all users
	// =============
	useEffect(() => {
		dispatch(getAllUsers());
	}, []);
	// showing message when course upload successfully
	// ===============================================
	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch({ type: "clearError" });
		}
		if (message) {
			toast.success(message);
			dispatch({ type: "clearMessage" });
			dispatch(getAllUsers());
		}
	}, [error, message, dispatch]);
	return (
		<Grid css={{ cursor: `url(${cursor}), default` }} minH={"100vh"} templateColumns={["1fr", "1fr", "5fr 1fr"]}>
			<Box overflowX={"auto"} px={[4, 6, 8, 10]} py={[10]}>
				<Heading
					textAlign="center"
					fontSize={["3xl", "4xl", "5xl"]}
					fontFamily={"monospace"}
					color={useColorModeValue("purple.600", "purple.400")}
					textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
					children=" Users List"
					letterSpacing="wide"
				/>
				{loading ? (
					<Loader />
				) : (
					<TableContainer w={["100vw", "full"]}>
						<Table colorScheme="purple" size="sm" {...CustomStyle}>
							<TableCaption placement="top">All available users</TableCaption>
							<Thead>
								<Tr>
									<Th {...CustomStyle}>Index</Th>
									<Th {...CustomStyle}>Name</Th>
									<Th {...CustomStyle}>Email</Th>
									<Th {...CustomStyle}>Role</Th>
									<Th {...CustomStyle}>Subscription</Th>
									<Th {...CustomStyle}>Action</Th>
								</Tr>
							</Thead>
							<Tbody>
								{users.map((item, i) => (
									<UserTableCustomRow
										key={i}
										i={i}
										item={item}
										CustomStyle={CustomStyle}
										updateHandler={updateHandler}
										deleteHandler={deleteHandler}
									/>
								))}
							</Tbody>
						</Table>
					</TableContainer>
				)}
				<Text
					textAlign={"center"}
					color={"purple.400"}
					display={["block", "block", "block", "none"]}
					children={"Scroll the table for more details"}
				/>
			</Box>
			<Sidebar />
		</Grid>
	);
};

export default Users;
