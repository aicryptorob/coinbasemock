import * as React from "react";
import axios from "axios";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import { Coin } from "../interfaces/index"; // coin data

export const CoinData: React.FunctionComponent = (CoinData) => {
	const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
			)
			.then((res) => res.data)
	);

	if (isLoading) return "Loading...";

	if (error) return "An error has occurred: " + error.message;

	return (
		<div>
			{/* <h1>{data.name}</h1>
			<p>{data.description}</p>
			<strong>👀 {data.subscribers_count}</strong>{" "}
			<strong>✨ {data.stargazers_count}</strong>{" "}
			<strong>🍴 {data.forks_count}</strong>
			<div>{isFetching ? "Updating..." : ""}</div>
			<ReactQueryDevtools initialIsOpen /> */}
		</div>
	);
};
