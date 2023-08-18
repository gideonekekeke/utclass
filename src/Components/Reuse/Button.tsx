import styled from "@emotion/styled";
import React from "react";

interface Iprops {
	bd: string;
	bg: string;
	text: string;
	cl: string;
}

const But = styled.button<{ bgg: string; bdd: string; cl: string }>`
	padding: 12px 24px 12px 24px;
	background-color: ${(props) => props.bgg};
	color: white;
	border: 1px solid ${(props) => props.bdd};
	cursor: pointer;
	transition: all 350ms;
	color: ${(props) => props.cl};
	border-radius: 5px;

	:hover {
		transform: scale(0.97);
	}
`;

const Button: React.FC<Iprops> = ({ bg, bd, text, cl }) => {
	return (
		<But cl={cl} bdd={bd} bgg={bg}>
			{text}
		</But>
	);
};

export default Button;
