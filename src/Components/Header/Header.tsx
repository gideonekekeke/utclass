import React from "react";
import styled from "@emotion/styled";
import { AiOutlineDown } from "react-icons/ai";
import log from "../../assets/logo.svg";
import Button from "../Reuse/Button";
import { BiMenuAltRight } from "react-icons/bi";
const Container = styled.header`
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.div`
	margin-left: 50px;
`;
const Navigations = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const Nav = styled.nav`
	display: flex;
	align-items: center;
	cursor: pointer;
	margin-right: 40px;

	:hover {
		color: rgba(0, 0, 0, 0.3);
	}
`;
const ButtHold = styled.div`
	gap: 20px;
	display: flex;
	margin-right: 40px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const Icon = styled.div`
	margin-top: 5px;
	margin-left: 3px;
`;

const Menu = styled.div`
	font-size: 40px;
	margin-right: 40px;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const Img = styled.img``;

const Header: React.FC = () => {
	return (
		<Container>
			<Logo>
				<Img src={log} />
			</Logo>
			<Navigations>
				<Nav>
					Schools
					<Icon>
						<AiOutlineDown />
					</Icon>
				</Nav>
				<Nav>
					Schools
					<Icon>
						<AiOutlineDown />
					</Icon>
				</Nav>
				<Nav>
					Schools
					<Icon>
						<AiOutlineDown />
					</Icon>
				</Nav>
			</Navigations>
			<ButtHold>
				<Button cl='white' bd='' bg='#fbaf1b' text='Get started' />
				<Button cl='#050794' bd='#050794' bg='transparent' text='Explore' />
			</ButtHold>
			<Menu>
				<BiMenuAltRight />
			</Menu>
		</Container>
	);
};

export default Header;
