import { RiDeleteBin7Fill } from "react-icons/ri";
import { Button, HStack, Image, Td, Tr } from "@chakra-ui/react";

const CoursesCustomTableRow = ({ i, item, MyStyle, CourseDetailsHandler, deleteCourseHandler, loading }) => {
	return (
		<Tr>
			<Td {...MyStyle}>{i + 1}</Td>
			<Td {...MyStyle}>
				<Image mx="auto" src={item.poster.url} />
			</Td>
			<Td {...MyStyle}>{item.title}</Td>
			<Td {...MyStyle}>{item.category}</Td>
			<Td {...MyStyle}>{item.createdBy}</Td>
			<Td {...MyStyle}>{item.views}</Td>
			<Td {...MyStyle}>{item.numOfVideos}</Td>
			<Td {...MyStyle}>
				<HStack justifyContent="flex-end">
					<Button
						variant="outline"
						color="purple.500"
						colorScheme="purple"
						children="Lectures"
						onClick={(e) => CourseDetailsHandler(item._id, item.title, item.category)}
					/>
					<Button
						isDisabled={loading}
						color="purple.600"
						onClick={(e) => deleteCourseHandler(item._id)}
						children={<RiDeleteBin7Fill style={{ fontSize: "20px" }} />}
					/>
				</HStack>
			</Td>
		</Tr>
	);
};

export default CoursesCustomTableRow;
