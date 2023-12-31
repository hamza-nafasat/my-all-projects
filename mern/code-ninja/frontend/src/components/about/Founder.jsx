import { Link } from "react-router-dom";
import { Avatar, Button, Heading, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const Founder = () => {
	return (
		<Stack direction={["column", "column", "row"]} justify="center" align="center" gap={[4, 6, 16]}>
			<VStack>
				<Avatar boxSize={52} src="https://avatars.githubusercontent.com/u/149063128" />
			</VStack>

			<VStack textAlign={"justify"}>
				<Heading
					fontSize={["3xl", "4xl"]}
					fontFamily={"sans-serif"}
					color={useColorModeValue("yellow.500", "teal.500")}
					children="Hamza Nafasat"
					letterSpacing="wide"
				/>
				<Text
					fontSize="lg"
					fontWeight="bold"
					lineHeight="tall"
					maxW={"900px"}
					opacity={0.8}
					children={
						"Asslam o Alikum!🌟I'm Hamza Nafasat, a dedicated full-stack developer on a mission to transform your vision into reality. With a passion for crafting sophisticated solutions, I deliver quality code and innovative approaches—all at a reasonable investment.💻Ready to embark on a journey of digital excellence? Let's collaboratively create something extraordinary that not only meets your needs but surpasses expectations!"
					}
				/>

				<Text mt={4} fontSize="lg" maxW={"900px"} fontWeight="bold" fontFamily={"sans-serif"}>
					🌟Embark on an exhilarating learning journey with exclusive premium courses, reserved solely for our
					premium users! Elevate your experience to new heights. Dive into our subscription plans now and
					unlock a world of unparalleled knowledge🎓and entertainment! Immerse yourself in the extraordinary.
					<Link to="/subscribe">
						<Button
							fontSize="lg"
							variant={"link"}
							color={useColorModeValue("yellow.500", "teal.500")}
							children="Discover Our Premium Plans"
						/>
					</Link>
				</Text>
			</VStack>
		</Stack>
	);
};

export default Founder;
