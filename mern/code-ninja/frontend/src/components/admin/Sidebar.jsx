import { Link, useLocation } from "react-router-dom";
import { Button, HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from "react-icons/ri";

const Sidebar = () => {
	const location = useLocation();
	return (
		<VStack
			px={[6, 4]}
			py={[4, 4, 20, 20]}
			spacing={8}
			boxShadow={"-2px 0 10px rgba(107,70,193,0.5) "}
		>
			<LinkButton
				url="dashboard"
				Icon={<RiDashboardFill />}
				text="Dashboard"
				active={location.pathname === "/admin/dashboard"}
			/>
			<LinkButton
				url="addcourse"
				Icon={<RiAddCircleFill />}
				text="Add Course"
				active={location.pathname === "/admin/addcourse"}
			/>

			<LinkButton
				url="courses"
				Icon={<RiEyeFill />}
				text="Courses"
				active={location.pathname === "/admin/courses"}
			/>
			<LinkButton
				url="users"
				Icon={<RiUser3Fill />}
				text="Users"
				active={location.pathname === "/admin/users"}
			/>
		</VStack>
	);
};

export default Sidebar;

function LinkButton({ url, Icon, text, active }) {
	return (
		<Link style={{ width: "100%" }} to={`/admin/${url}`}>
			<Button
				width={"full"}
				maxW={"80vw"}
				display="block"
				mx={"auto"}
				colorScheme={
					active ? useColorModeValue("purple", "teal") : useColorModeValue("gray", "gray")
				}
			>
				<HStack justify={"center"} spacing={2} align="center">
					{Icon}
					<Text>{text}</Text>
				</HStack>
			</Button>
		</Link>
	);
}
