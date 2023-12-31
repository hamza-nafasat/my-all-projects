import Sidebar from "../Sidebar";
import { Box, Grid, HStack, Heading, Progress, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import cursor from "../../../assets/images/cursor.png";
import DataBox from "./DataBox";
import { DoughnutChart, LineChart } from "./Graph";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminStats } from "../../../redux/actions/adminAction";
import Loader from "../../layout/Loader";

const Bar = ({ title, value, profit }) => {
	return (
		<Box py={4} px={[0, 20]}>
			<Heading size={"sm"} children={title} my={2} />
			<HStack w={"full"} alignItems={"center"}>
				<Text children={!profit ? `-${value}` : `${value}`} />
				<Progress w={"full"} colorScheme="purple" value={profit ? value : "0"} />
				<Text children={value < 100 ? "100%" : `${value}%`} />
			</HStack>
		</Box>
	);
};

const Dashboard = () => {
	const dispatch = useDispatch();
	const {
		loading,
		stats,
		usersCounts,
		usersProfit,
		usersPercentage,
		viewsCounts,
		viewsProfit,
		viewsPercentage,
		subscriptionsCounts,
		subscriptionsProfit,
		subscriptionsPercentage,
	} = useSelector((state) => state.admin);

	useEffect(() => {
		dispatch(getAdminStats());
	}, [dispatch]);
	return (
		<Grid css={{ cursor: `url(${cursor}), default` }} minH={"100vh"} templateColumns={["1fr", "1fr", "5fr 1fr"]}>
			<Box boxSizing="border-box" py={[2, 8]}>
				{stats?.length > 0 && (
					<Text
						textAlign={"center"}
						opacity={0.5}
						fontSize={["12px"]}
						children={`Last change was on ${String(new Date(stats[11].updatedAt)).split("G")[0]} `}
					/>
				)}
				<Heading
					textAlign="center"
					fontSize={"5xl"}
					fontFamily={"monospace"}
					color={useColorModeValue("purple.600", "purple.400")}
					textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
					children="Dashboard"
					letterSpacing="wide"
					my={["4", ""]}
				/>
				{loading ? (
					<Loader />
				) : (
					<>
						{/*=============== DATA BOXES =============== */}
						<Stack justify={"space-evenly"} direction={"row"} flexWrap={"wrap"}>
							<DataBox
								title={"Users"}
								qty={usersCounts}
								profit={usersProfit}
								qtypercentage={usersPercentage}
							/>
							<DataBox
								title={"Views"}
								qty={viewsCounts}
								profit={viewsProfit}
								qtypercentage={viewsPercentage}
							/>
							<DataBox
								title={"Subscription"}
								qty={subscriptionsCounts}
								profit={subscriptionsProfit}
								qtypercentage={subscriptionsPercentage}
							/>
						</Stack>
						{/* =============== VIEWS GRAPH =============== */}
						<Box
							m={[2, 4, 8, 16]}
							rounded={"lg"}
							px={[2, 4, 8, 8]}
							py={[4, 4, 8, 6]}
							my={[6, 16]}
							boxShadow={"-2px 0 10px rgba(107,70,193,0.5) "}
						>
							<Heading
								textAlign={"center"}
								size={"lg"}
								color={useColorModeValue("yellow.600", "teal.500")}
								mb={2}
								children="Views Graph"
							/>
							<LineChart views={stats?.map((item) => item.views)} />
						</Box>

						{/*=============== PREGRESS BAR =============== */}

						<Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]}>
							<Box p={4} m={4}>
								<Heading
									textAlign={"center"}
									size={"lg"}
									color={useColorModeValue("yellow.600", "teal.500")}
									mb={2}
									children="Progress bar"
								/>
								<Bar title="Users" value={usersCounts} profit={usersProfit} />
								<Bar title="Views" value={viewsCounts} profit={viewsProfit} />
								<Bar
									title="Subscription"
									value={subscriptionsCounts}
									profit={subscriptionsPercentage}
								/>
							</Box>

							{/*===============  DOUGHNUT GRAPH =============== */}

							<Box maxW={"350px"} mx={"auto"} boxSizing="border-box" py={4}>
								<Heading
									textAlign={"center"}
									size={"lg"}
									color={useColorModeValue("yellow.600", "teal.500")}
									mb={2}
									children="Users Graph"
								/>
								<DoughnutChart data={[subscriptionsCounts, usersCounts - subscriptionsCounts]} />
							</Box>
						</Grid>
					</>
				)}
			</Box>
			<Sidebar />
		</Grid>
	);
};

export default Dashboard;
