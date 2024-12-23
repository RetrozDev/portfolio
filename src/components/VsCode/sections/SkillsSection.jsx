import React, { useState, useEffect } from "react";
import "../../../styles/VsCode/components/sections/SkillsSection.css";

// Import du fichier JSON
import skillsData from "../../../data/skills.json"; // Assure-toi que le chemin est correct

const SkillsSection = () => {
	const tools = skillsData.tools;
	const languages = skillsData.languages;
	const frameworkLibraries = skillsData.frameworkslibraries;

	return (
		<div className="SkillsSection">
			<article className="tools">
				<div className="header">Tools</div>
				{tools.map((tool) => (
					<p key={tool.id}>{tool.name}</p>
				))}
			</article>
			<article className="languages">
				<div className="header">Languages</div>
				{languages.map((language) => (
					<p key={language.id}>{language.name}</p>
				))}
			</article>
			<article className="frameworkLibraries">
			<div className="header">Frameworks & Librairies</div>
				{frameworkLibraries.map((frameworkLibrary) => (
					<p key={frameworkLibrary.id}>{frameworkLibrary.name}</p>
				))}
			</article>
		</div>
	);
};

export default SkillsSection;
