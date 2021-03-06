import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "../apollo/_apollo-client";
import Layout from "../components/Layout";

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		pageProps.query = ctx.query;
		return { pageProps };
	}

	render() {
		const { Component, apolloClient, pageProps } = this.props;

		return (
			<Container>
				<ApolloProvider client={apolloClient}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ApolloProvider>
			</Container>
		);
	}
}

export default ApolloClient(MyApp);
