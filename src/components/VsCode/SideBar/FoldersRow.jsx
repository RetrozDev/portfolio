import { SideBarIcons } from "../../../svg/VsCode/components/SideBar";
import { NavLink } from "react-router-dom";
import "../../../styles/VsCode/components/FoldersRow.css";

const FoldersRows = ({ marginLeft, file, FileIcon, url, onClick, isOpen }) => {
	if (!url) {
		// Pour les dossiers
		return (
			<div
				className={`FoldersRows ${isOpen ? "open" : "closed"}`}
				onClick={onClick}
			>
				<div className="chevronIcon" style={{ marginLeft: marginLeft }}>
					<SideBarIcons.Chevron />
				</div>
				<div className="fileIcon">
					<FileIcon />
				</div>
				{file && <p className="fileName">{file}</p>}
			</div>
		);
	}

	// Pour les fichiers
	return (
		<NavLink
			className={({ isActive }) =>
				isActive ? "FoldersRows active" : "FoldersRows"
			}
			to={url}
            
		>
			<div className="fileIcon" style={{ marginLeft: marginLeft }} >
				<FileIcon />
			</div>
			{file && <p className="fileName">{file}</p>}
		</NavLink>
	);
};

export default FoldersRows;
