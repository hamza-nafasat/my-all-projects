import { Link } from "react-router-dom";
import bgImage from "../../assets/images/lampbg.webp";
import { Box, Button, Heading, Image, Stack, Text, VStack, useColorMode } from "@chakra-ui/react";

const Home = () => {
	const { colorMode } = useColorMode();
	const textColor = { dark: "white", light: "balck" };
	const buttonColor = { dark: "purple", light: "yellow" };
	const bgColor = {
		light: "linear(to-r, teal.500, yellow.400)",
		dark: "linear(to-r, purple.800 ,gray.900)",
	};

	return (
		<Box
			h={"100vh"}
			pt={["70px", "60px", "40px", "30px"]}
			px={{ base: "1rem", sm: "4rem", md: "4rem" }}
			bgGradient={bgColor[colorMode]}
			color={textColor[colorMode]}
		>
			<Stack
				direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
				height="100%"
				justifyContent={["center", "space-evenly"]}
				alignItems="center"
				spacing={["10px", "40px"]}
			>
				<VStack
					width={["80%", "90%", "90%", "60%"]}
					alignItems={["center", "center", "center", "end"]}
					textAlign={["center", "center", "center", "end"]}
					spacing={4}
				>
					<Heading
						size={"xl"}
						whiteSpace={["normal", "nowrap"]}
						children="LEARN FROM THE EXPERTS"
						textShadow={"2px 2px 4px rgba(0, 0, 0, 0.2)"}
					/>
					<Text maxW={"450px"}>
						Discover valuable content at an affordable price. Start your learning journey today with
						CodeNinjas!
					</Text>
					<Link to="/courses">
						<Button
							size={"lg"}
							boxShadow={"xl"}
							colorScheme={buttonColor[colorMode]}
							children="Explore Courses"
						/>
					</Link>
				</VStack>
				<Image
					alignSelf={"center"}
					className="bgImage"
					boxSize={["60%", "50%"]}
					src={bgImage}
					objectFit={"contain"}
					cursor={"pointer"}
				/>
			</Stack>
		</Box>
	);
};

export default Home;
