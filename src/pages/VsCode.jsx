import "../styles/VsCode/VsCode.css";
import TopBar from "../components/VsCode/TopBar.jsx";
import { useParams } from "react-router-dom";
import { RightBar } from "../components/VsCode/RightBar.jsx";
import SideBar from "../components/VsCode/SideBar.jsx";
import { SideBarIcons } from "../svg/VsCode/components/SideBar.jsx";

// Sections
import AboutSection from "../components/VsCode/sections/AboutSection.jsx";
import HomeSection from "../components/VsCode/sections/HomeSection.jsx";
import Page404 from "../components/VsCode/sections/Page404.jsx";
import ProjectsSection from "../components/VsCode/sections/ProjectsSection.jsx";
import SkillsSection from "../components/VsCode/sections/SkillsSection.jsx";
import SocialSection from "../components/VsCode/sections/SocialSection.jsx";

const VsCode = () => {
	const { file } = useParams();
	const extension = file ? file.split(".")[1] : null;
	return (
		<div className="VsCode">
			<TopBar />
			<main>
				<RightBar />
				<SideBar />
				<section>
					<header>
						<div className="fileName">
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
