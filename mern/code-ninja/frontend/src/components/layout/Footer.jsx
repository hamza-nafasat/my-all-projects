import { Box, Flex, Heading, HStack, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
	return (
		<Box
			bg={useColorModeValue("blackAlpha.800", "gray.900")}
			color="white"
			p={8}
			w={"100vw"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Box w={"full"} maxW={"1440px"}>
				<Flex gap={4} flexWrap="wrap" justifyContent="space-between" textAlign="left">
					<VStack spacing={4} flex={{ base: "0 0 100%", md: "0 0 30%" }}>
						<Heading fontSize={{ base: "lg", md: "xl" }} mb={4}>
							Hamza Nafasat
						</Heading>
						<Text fontSize="sm">Miani Chechian</Text>
						<Text fontSize="sm">Gujrat, Pakistan</Text>
						<Text fontSize="sm">hamzanafasat4155@gmail.com</Text>
					</VStack>

					<VStack spacing={4} flex={{ base: "0 0 100%", md: "0 0 30%" }}>
						<Heading fontSize={{ base: "lg", md: "xl" }} mb={4}>
							Follow Us
						</Heading>
						<HStack spacing={4} fontSize="1.5rem">
							<a href="https://github.com/hamzaNafasat" target="blank">
								<BsGithub />
							</a>
							<a href="https://www.instagram.com/crazy_hami_" target="blank">
								<BsInstagram />
							</a>
						</HStack>
						<HStack spacing={4} fontSize="1.5rem">
							<a href="https://www.google.com" target="blank">
								<BsGoogle />
							</a>
							<a href="https://www.youtube.com" target="blank">
								<BsYoutube />
							</a>
						</HStack>
						<HStack spacing={4} fontSize="1.5rem">
							<a href="https://www.facebook.com" target="blank">
								<BsFacebook />
							</a>
							<a href="https://www.twitter.com" target="blank">
								<BsTwitter />
							</a>
						</HStack>
					</VStack>
				</Flex>

				<Box mt={[4, 4, 2, 0]} textAlign="center">
					<Text fontSize="sm">
						&copy; {new Date().getFullYear()} Hamza-Nafasat All rights reserved | Terms of Service | Privacy
						Policy
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
