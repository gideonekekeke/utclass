import React from "react";
import styled from "@emotion/styled";
import pic from "../../assets/google.9d00820e.jpeg";

const Container = styled.div`
	margin-top: 40px;
	background-color: white;
	padding: 50px;

	span {
		margin-top: 30px;
	}
`;
const Exp = styled.div`
	font-size: 30px;
	font-weight: bold;
	color: var(--color-primary);
`;

const Img = styled.img`
	:hover {
		filter: grayscale(1);
	}
`;

const Experience = () => {
	return (
		<Container>
			<Exp>
				Experience Lifelong Learning <br />
				with Utiva Bootcamps
			</Exp>
			<span>Bootcamp Bootcamp + Internship</span>

			<Img src={pic} />
		</Container>
	);
};

export default Experience;
