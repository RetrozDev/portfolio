import "../styles/VsCode/VsCode.css";
import TopBar from "../components/VsCode/TopBar.jsx";
import { useParams } from "react-router-dom";

import { SideBarIcons } from "../svg/VsCode/components/SideBar.jsx";

// Sections
import AboutSection from "../components/VsCode/sections/AboutSection.jsx";
import HomeSection from "../components/VsCode/sections/HomeSection.jsx";
import Page404 from "../components/VsCode/sections/Page404.jsx";
import ProjectsSection from "../components/VsCode/sections/ProjectsSection.jsx";
import SkillsSection from "../components/VsCode/sections/SkillsSection.jsx";
import SocialSection from "../components/VsCode/sections/SocialSection.jsx";

// Components
import RightBar from "../components/VsCode/RightBar.jsx";
import SideBar from "../components/VsCode/SideBar.jsx";
import BurgerMenu from "../components/VsCode/BurgerMenu.jsx";
import { useState } from "react";

const VsCode = () => {
	const { file } = useParams();
	const extension = file ? file.split(".")[1] : null;
	const [burgerActive, setBurgerActive] = useState(false);
	return (
		<div className="VsCode">
			<TopBar />
			<main>
				<RightBar />
				<SideBar />
				<section>
					<header>
						<div
							className="BurgerButton"
							onClick={() => {
								setBurgerActive(!burgerActive);
							}}
						>
							{!burgerActive ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="#000000"
								>
									<title>Burger menu</title>
									<path d="M14.5 3H7.71l-.85-.85L6.51 2h-5l-.5.5v11l.5.5h13l.5-.5v-10L14.5 3zm-.51 8.49V13h-12V7h4.49l.35-.15.86-.86H14v1.5l-.01 4zm0-6.49h-6.5l-.35.15-.86.86H2v-3h4.29l.85.85.36.15H14l-.01.99z" />
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="#000000"
								>
									<title>Close button</title>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
									/>
								</svg>
							)}
						</div>
						{burgerActive && <BurgerMenu />}
						<div className="fileTab">
							{extension === "json" ? (
								<SideBarIcons.JsonIcon />
							) : extension === "jsx" ? (
								<SideBarIcons.JsxIcon />
							) : extension === "md" ? (
								<SideBarIcons.MdIcon />
							) : (
								<span>404</span>
							)}

							<p>{file}</p>
						</div>
					</header>
					{file && file === "Compétences.json" ? (
						<SkillsSection />
					) : file === "Projets.json" ? (
						<ProjectsSection />
					) : file === "Accueil.jsx" ? (
						<HomeSection />
					) : file === "APropos.jsx" ? (
						<AboutSection />
					) : file === "social.md" ? (
						<SocialSection />
					) : (
						<Page404 />
					)}
				</section>
			</main>
		</div>
	);
};

export default VsCode;
