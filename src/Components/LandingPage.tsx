import React from "react";
import Hero from "./Hero/Hero";
import styled from "@emotion/styled";
import Experience from "./Experience/Experience";

const Wrapper = styled.div`
	overflow-x: hidden;
	/* width: 90%; */
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		padding: 20px;
	}
`;

const LandingPage: React.FC = () => {
	return (
		<Wrapper>
			<Hero />
			<Experience />
		</Wrapper>
	);
};

export default LandingPage;
