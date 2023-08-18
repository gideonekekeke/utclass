import React from "react";
import styled from "@emotion/styled";
import pic from "../../assets/hero1.png";
import ButtonIcon from "../Reuse/ButtonIcon";
const First = styled.div``;
const Second = styled.div`
	width: 100%;
	@media screen and (min-width: 768px) {
		width: 500px;
	}
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	gap: 50px;
	flex-wrap: wrap;
    margin-top: 30px;
	/* align-items: center; */
`;
const Build = styled.h1`
	font-size: 50px;
	font-weight: bolder;
	color: var(--color-primary);
	margin-bottom: 15px;
	line-height: 50px;

	@media screen and (min-width: 768px) {
		font-size: 70px;
		line-height: 70px;
	}
`;
const Para = styled.p`
	@media screen and (min-width: 768px) {
		width: 500px;
		font-size: 18px;
	}
`;

const HeroImage = styled.img`
	width: 100%;
`;

const ButHold = styled.div`
	display: flex;
	gap: 40px;
	margin-top: 30px;
`;

const Hero: React.FC = () => {
	return (
		<Container>
			<First>
				<Build>
					Building Top Tech
					<br /> Talents for the <br />
					World
				</Build>
				<Para>
					Our Bootcamps are designed to help you learn from the best industry
					leaders from more than 19 countries
				</Para>
				<ButHold>
					<ButtonIcon bg='#fbaf1b' bd='' text='Individual' cl='white' />
					<ButtonIcon
						bg='transparent'
						bd='rgb(251, 175, 27)'
						text='bussiness'
						cl='#050794'
					/>
				</ButHold>
			</First>
			<Second>
				<HeroImage src={pic} />
			</Second>
		</Container>
	);
};

export default Hero;
