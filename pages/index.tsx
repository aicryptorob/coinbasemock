import Link from "next/link";

import { Home } from "../components/Home";

// imports for react query
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";

// set-up client
const queryClient = new QueryClient();

const IndexPage = (): JSX.Element => (
	<>
		<QueryClientProvider client={queryClient}>
			<Home />
		</QueryClientProvider>
	</>
);

export async function getStaticProps() {
	return {
		props: {
			coins: [],
		},
	};
}

export default IndexPage;
