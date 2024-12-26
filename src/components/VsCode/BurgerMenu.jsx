import { useState } from "react";
import "../../styles/VsCode/BurgerMenu.css";
import FoldersRows from "./SideBar/FoldersRow";
import { SideBarIcons } from "../../svg/VsCode/components/SideBar";

const BurgerMenu = () => {
	const [foldersState, setFoldersState] = useState({
		src: true,
		data: true,
		pages: true,
	});

	const toggleFolder = (folderName) => {
		setFoldersState((prevState) => ({
			...prevState,
			[folderName]: !prevState[folderName],
		}));
	};
	return (
		<div className="BurgerMenu">
			<div className="folders">
				{/* Dossier src */}
				<FoldersRows
					isFolder={true}
					marginLeft="16px"
					file="src"
					FileIcon={SideBarIcons.SrcIcon}
					onClick={() => toggleFolder("src")}
					isOpen={foldersState.src}
				/>
				{foldersState.src && (
					<>
						{/* Sous-dossier data dans src */}
						<FoldersRows
							isFolder={true}
							marginLeft="24px"
							file="data"
							FileIcon={SideBarIcons.DataIcon}
							onClick={() => toggleFolder("data")}
							isOpen={foldersState.data}
						/>
						{foldersState.data && (
							<>
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
							</>
						)}

						{/* Sous-dossier pages dans src */}
						<FoldersRows
							isFolder={true}
							marginLeft="24px"
							file="pages"
							FileIcon={SideBarIcons.PagesIcon}
							onClick={() => toggleFolder("pages")}
							isOpen={foldersState.pages}
						/>
						{foldersState.pages && (
							<>
								<FoldersRows
									marginLeft="56px"
									file="Accueil.jsx"
									FileIcon={SideBarIcons.JsxIcon}
									url="Accueil.jsx"
								/>
								<FoldersRows
									marginLeft="56px"
									file="APropos.jsx"
									FileIcon={SideBarIcons.JsxIcon}
									url="APropos.jsx"
								/>
							</>
						)}

						{/* Fichiers dans src */}
						<FoldersRows
							marginLeft="24px"
							file="social.md"
							FileIcon={SideBarIcons.MdIcon}
							url="social.md"
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default BurgerMenu;
