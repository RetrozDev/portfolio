import projectsData from "../../../data/project.json";
import "../../../styles/VsCode/components/sections/ProjectsSection.css";

const ProjectsSection = () => {
	return (
		<div className="ProjectsSection">
			{projectsData.project.map((project) => (
				<article key={project.id} className="project-card">
					<h2 className="project-title">{project.name}</h2>
					<p className="project-description">{project.description}</p>
					<div
						className="thumbnail"
						style={{
							backgroundImage: `url(https://shot.screenshotapi.net/screenshot?token=B8BPQD4-M9ZMA8J-NAPN4DN-TTY8DY3&url=${project.url}&output=image&file_type=png&wait_for_event=load)`,
						}}
					/>
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="project-link"
					>
						Voir le projet
					</a>
				</article>
			))}
		</div>
	);
};

export default ProjectsSection;
