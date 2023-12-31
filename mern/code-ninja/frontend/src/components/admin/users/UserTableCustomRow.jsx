import { Button, HStack, Td, Tr } from "@chakra-ui/react";
import { RiDeleteBin7Fill } from "react-icons/ri";

const UserTableCustomRow = ({ i, item, CustomStyle, updateHandler, deleteHandler }) => {
	return (
		<Tr key={item._id}>
			<Td {...CustomStyle}>{i + 1}</Td>
			<Td {...CustomStyle}>{item.name}</Td>
			<Td {...CustomStyle}>{item.email}</Td>
			<Td {...CustomStyle}>{item.role}</Td>
			<Td {...CustomStyle}>
				{item.role === "admin" ? "Active" : item.subscription?.status === "active" ? "Active" : "Not Active"}
			</Td>
			<Td {...CustomStyle}>
				<HStack justifyContent="flex-end">
					<Button
						variant="outline"
						color="purple.500"
						colorScheme="purple"
						children="Change role"
						onClick={(e) => updateHandler(item._id)}
					/>
					<Button
						color="purple.600"
						onClick={(e) => deleteHandler(item._id)}
						children={<RiDeleteBin7Fill style={{ fontSize: "20px" }} />}
					/>
				</HStack>
			</Td>
		</Tr>
	);
};

export default UserTableCustomRow;
