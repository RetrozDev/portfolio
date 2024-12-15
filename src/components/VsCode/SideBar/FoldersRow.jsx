import { SideBarIcons } from "../../../svg/VsCode/components/SideBar";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../styles/VsCode/components/FoldersRow.css";

const FoldersRows = ({ marginLeft, file, FileIcon, url }) => {
	const navigate = useNavigate();
  
	return (
	  <NavLink 
		className={({ isActive }) => {
		  // Si 'url' est null, ne pas appliquer la classe 'active'
		  if (!url) return 'FoldersRows'; 
		  return isActive ? 'FoldersRows active' : 'FoldersRows'; // Appliquer 'active' si le lien est actif
		}} 
		to={url || '#'} // Utilisation de '#' pour les liens sans URL
	  >
		{!url && (
		  <div className="chevronIcon" style={{ marginLeft: marginLeft }}>
			<SideBarIcons.Chevron />
		  </div>
		)}
		<div className="fileIcon" style={url ? { marginLeft: marginLeft } : {}}>
		  <FileIcon />
		</div>
		{file && <p className="fileName">{file}</p>}
	  </NavLink>
	);
  };
  
  export default FoldersRows;
  
