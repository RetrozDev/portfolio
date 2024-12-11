import "../styles/VsCode/VsCode.css";
import TopBar from "../components/VsCode/TopBar.jsx";
import { useParams } from "react-router-dom";
import { RightBar } from "../components/VsCode/RightBar.jsx";

const VsCode = () => {
	const { file } = useParams();
	const extension = file ? file.split(".")[1] : null;
	return (
		<div className="VsCode">
			<TopBar />
			<main>
				<RightBar />
			</main>
		</div>
	);
};

export default VsCode;
