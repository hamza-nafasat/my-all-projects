import { Link } from "react-router-dom";
import { Button, HStack, Heading, Image, Text, VStack, useColorMode } from "@chakra-ui/react";

const CourseCard = ({
	id = "",
	img = "",
	view = 0,
	title = "",
	creator = "",
	addToProfie,
	discription = "",
	LectureNumbers,
}) => {
	const { colorMode } = useColorMode();
	const bgColor = { light: "white", dark: "#21283a" };
	const buttonColorSchem = { dark: "teal", light: "yellow" };
	return (
		<VStack
			maxW={{ base: "290px", sm: "220px", md: "220px" }}
			mt="4"
			p={"10px"}
			bg={bgColor[colorMode]}
			borderRadius="md"
			borderColor="gray.200"
			align={"start"}
			boxShadow="lg"
			transition={".5s"}
			_hover={{ boxShadow: "xl", transform: "translateY(-10px)" }}
		>
			<Image src={img} objectFit="cover" w="100%" rounded="md" onClick={() => ATPL(id)} cursor="pointer" />
			<Heading mt={2} noOfLines={1} size={{ base: "lg", md: "sm", sm: "sm" }} children={title} />
			<Text noOfLines={2} children={discription} />
			<HStack spacing={2} w={"100%"}>
				<Text fontWeight="bold" textTransform="uppercase" children="Creator" />
				<Text fontFamily="serif" children={creator} />
			</HStack>
			<Heading size={"sm"} transform="uppercase" children={`Lectures - ${LectureNumbers}`} />
			<Heading size="xs" children={`Views - ${view}`} />
			<HStack w={"100%"} justify={"space-between"}>
				<Link to={`/course/${id}`}>
					<Button
						children="Watch Now"
						size={{ base: "lg", sm: "sm", md: "sm" }}
						colorScheme={buttonColorSchem[colorMode]}
					/>
				</Link>
				<Button
					variant="outline"
					onClick={() => addToProfie(id)}
					children="Add To Profile"
					size={{ base: "lg", sm: "sm", md: "sm" }}
					colorScheme={buttonColorSchem[colorMode]}
				/>
			</HStack>
		</VStack>
	);
};

export default CourseCard;
