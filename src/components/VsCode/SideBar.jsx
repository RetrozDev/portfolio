import { SideBarIcons } from "../../svg/VsCode/components/SideBar";
import FoldersRows from "./SideBar/FoldersRow";
import "../../styles/VsCode/components/SideBar.css";
const SideBar = () => {
	return (
		<aside className="sideBar">
			<nav className="toolBar">
				<p>EXPLORER:PORTFOLIO</p>
				<div className="icons">
					<SideBarIcons.NewFileIcon />
					<SideBarIcons.NewFolderIcon />
					<SideBarIcons.RefreshIcon />
					<SideBarIcons.CollapseAllIcon />
				</div>
			</nav>
			<div className="folders">
				<FoldersRows
					isFolder={true}
					marginLeft="16px"
					file="src"
					FileIcon={SideBarIcons.SrcIcon}
				/>
				<FoldersRows
					isFolder={true}
					marginLeft="24px"
					file="data"
					FileIcon={SideBarIcons.DataIcon}
				/>
				<FoldersRows
					marginLeft="56px"
					file="Compétences.json"
					FileIcon={SideBarIcons.JsonIcon}
                    url="Compétences.json"
				/>
				<FoldersRows
					marginLeft="56px"
					file="Projets.json"
					FileIcon={SideBarIcons.JsonIcon}
                    url="Projets.json"
				/>
				<FoldersRows
					marginLeft="24px"
					file="pages"
					FileIcon={SideBarIcons.PagesIcon}
				/>
				<FoldersRows
					marginLeft="56px"
                    url="/vs-code"
					file="Accueil.jsx"
					FileIcon={SideBarIcons.JsxIcon}
				/>
				<FoldersRows
					marginLeft="56px"
					file="APropos.jsx"
                    url="APropos.jsx"
					FileIcon={SideBarIcons.JsxIcon}
				/>
				<FoldersRows
					marginLeft="30px"
					file="social.md"
                    url="social.md"
					FileIcon={SideBarIcons.MdIcon}
				/>
			</div>
		</aside>
	);
};

export default SideBar;
