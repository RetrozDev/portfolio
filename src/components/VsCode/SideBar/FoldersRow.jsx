import { SideBarIcons } from "../../../svg/VsCode/components/SideBar";
import { useNavigate } from "react-router-dom";
import "../../../styles/VsCode/components/FoldersRow.css";

const FoldersRows = ({  marginLeft, file, FileIcon, url }) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		if (url) {
			navigate(url);
		}
	};

	return (
		<button type="button" className="FoldersRows" onClick={handleNavigate}>
			{!url && (
				<div className="chevronIcon" style={{ marginLeft: marginLeft }}>
					<SideBarIcons.Chevron />
				</div>
			)}
			<div className="fileIcon" style={url ? { marginLeft: marginLeft } : {}}>
				<FileIcon />
			</div>
			{file && <p className="fileName">{file}</p>}
		</button>
	);
};

export default FoldersRows;
