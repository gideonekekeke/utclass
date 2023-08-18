import React from "react";
import { Global, css } from "@emotion/react";

const GlobalStyle: React.FC = () => {
	return (
		<div>
			<Global
				styles={css`
					:root {
						--color-primary: #050794;
						--color-secondary: #fbaf1b;
					}
					@font-face {
						font-family: "CustomFont";
						src: url("../fonts/static/Raleway-Black.ttf");
						src: url("../fonts/static/Raleway-BlackItalic.ttf");
						src: url("../fonts/static/Raleway-Bold.ttf");
						src: url("../fonts/static/Raleway-BoldItalic.ttf");
						src: url("../fonts/static/Raleway-ExtraBold.ttf");
						src: url("../fonts/static/Raleway-Light.ttf");
						src: url("../fonts/static/Raleway-SemiBold.ttf");
						src: url("../fonts/static/Raleway-Regular.ttf");
					}

					body {
						font-family: CustomFont;
						background-color: #fbfbf5;
						min-height: 100vh;
						margin: 0;
						width: 100%;
					}
				`}
			/>
		</div>
	);
};

export default GlobalStyle;
