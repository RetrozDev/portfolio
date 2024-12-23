import { RightBarIcons } from "../../svg/VsCode/components/RightBar";
import "../../styles/VsCode/components/RightBar.css";

export const RightBar = () => {
	return (
		<nav className="RightBar">
			<div className="TopGroup">
				<RightBarIcons.TabIcon />
				<RightBarIcons.SearchIcon />
				<RightBarIcons.SourceIcon />
				<RightBarIcons.DebugIcon />
				<RightBarIcons.ExtensionsIcon className="Extensions"/>
				<RightBarIcons.LiveShareIcon />
				<RightBarIcons.GitlensIcon />
				<RightBarIcons.PostmanIcon />
			</div>
			<div className="BottomGroup">
				<RightBarIcons.AccountIcon />
				<RightBarIcons.SettingsIcon />
			</div>
		</nav>
	);
};
