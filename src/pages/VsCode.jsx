import "../styles/VsCode/VsCode.css";
import TopBar from "../components/VsCode/TopBar.jsx";
import { useParams } from "react-router-dom";
import { RightBar } from "../components/VsCode/RightBar.jsx";
import SideBar from "../components/VsCode/SideBar.jsx";
const VsCode = () => {
	const { file } = useParams();
	return (
		<div className="VsCode">
			<TopBar />
			<main>
				<RightBar />
				<SideBar />
			</main>
		</div>
	);
};

export default VsCode;
