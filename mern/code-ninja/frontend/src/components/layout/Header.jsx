import { Link } from "react-router-dom";
import { Button, useDisclosure, VStack, Box, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerFooter,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react";
import { TfiMenu } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { MdLogin, MdPersonAdd } from "react-icons/md";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { RiLogoutBoxLine, RiDashboardFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";

// LINK COMPONENT  FOR DRAWER BUTTON
// =================================
const LinkButton = ({ url = "/", title = "Home", onClick }) => (
	<Link onClick={onClick} to={url}>
		<Button variant={"ghost"}>{title}</Button>
	</Link>
);
// HEADER COMPONENT
// ================
const Header = ({ isAuthenticated = false, user }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode } = useColorMode();
	const dispatch = useDispatch();

	const logoutHand = () => {
		onClose();
		dispatch(logout());
	};
	return (
		<Box maxW={"1440px"}>
			<IconButton
				position={"fixed"}
				top={3}
				left={[1, 3]}
				onClick={onOpen}
				icon={<TfiMenu />}
				size="lg"
				fontSize={["xl", "2xl", "3xl"]}
				variant="ghost"
				color="current"
				zIndex={"overlay"}
			/>
			<ColorModeSwitcher />
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader
						color={colorMode == "dark" ? "teal.500" : "yellow.500"}
						textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
						borderBottomWidth={"2px"}
						fontWeight={"bolder"}
						fontFamily={"sans-serif"}
						fontSize={"22px"}
						children="Wellcome To CodeNinja"
						mt={"1.2rem"}
					/>
					<DrawerBody>
						<VStack fontFamily={"sans-serif"} size="40px" spacing={4} alignItems={"flex-start"}>
							<LinkButton url="/" title="Home" onClick={onClose} />
							<LinkButton url="/courses" title="Courses" onClick={onClose} />
							<LinkButton url="/about" title="About Us" onClick={onClose} />
							<LinkButton url="/contact" title="Contact Us" onClick={onClose} />
							<LinkButton url="/request" title="Request A Course" onClick={onClose} />
						</VStack>
					</DrawerBody>
					<DrawerFooter w={"95%"}>
						{isAuthenticated ? (
							<VStack spacing={4}>
								<HStack spacing={5}>
									<Link to={"/profile"}>
										<Button
											onClick={onClose}
											leftIcon={<CgProfile />}
											variant="outline"
											colorScheme="yellow"
										>
											Profile
										</Button>
									</Link>
									<Button
										leftIcon={<RiLogoutBoxLine />}
										onClick={logoutHand}
										variant="outline"
										colorScheme="yellow"
									>
										Logout
									</Button>
								</HStack>
								{user && user.role === "admin" ? (
									<Link to={"/admin/dashboard"}>
										<Button
											width="200px"
											fontSize={18}
											onClick={onClose}
											variant="outline"
											colorScheme="purple"
											leftIcon={<RiDashboardFill />}
										>
											Dashboard
										</Button>
									</Link>
								) : (
									""
								)}
							</VStack>
						) : (
							<HStack width={"full"} justify={"space-around"}>
								<Link to={"/login"}>
									<Button minW={"100px"} onClick={onClose} colorScheme="yellow" children="Login" />
								</Link>

								<Link to={"/signup"}>
									<Button onClick={onClose} colorScheme="yellow" minW={"100px"} children="Sign Up" />
								</Link>
							</HStack>
						)}
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default Header;
