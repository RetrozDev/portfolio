import React from "react";
import "../../../styles/VsCode/components/sections/AboutSection.css";

const AboutSection = () => {
	return (
		<div className="AboutSection">
			{/* Section Développeur Web */}
			<section>
				<h1>👨‍💻 Développeur Web Fullstack JavaScript</h1>
				<p>
					Salut ! Moi c'est <span>Ryan</span>, et je suis développeur web
					passionné. Mon truc à moi, c'est <span>JavaScript</span>, et j'adore
					créer des sites et applications web qui déchirent. Je travaille avec
					des outils comme <span>React</span>, <span>Node.js</span>,
					<span>Express</span>, et <span>Mysql</span> pour créer des
					expériences qui sont à la fois rapides et fun à utiliser. Je suis
					toujours en train de chercher de nouvelles façons d'améliorer mes
					compétences et de suivre les dernières tendances du développement.
				</p>
				<hr />
			</section>

			{/* Section Gameur */}
			<section>
				<h1>🎮 Gameur</h1>
				<p>
					Quand je ne suis pas en train de coder, vous me trouverez probablement
					en train de jouer à un <span>jeu vidéo</span>. Que ce soit pour me
					détendre avec une petite partie ou pour relever des défis un peu plus
					sérieux, j'adore me perdre dans des mondes virtuels. C’est aussi
					l'occasion de tester des stratégies, de réfléchir différemment et de
					me mesurer à d'autres joueurs. Le gaming, c’est vraiment une passion
					qui me permet de m’évader !
				</p>
				<hr />
			</section>

			{/* Section Fan de Technologie */}
			<section>
				<h1>⚙️ Fan de Technologie</h1>
				<p>
					La <span>technologie</span>, c’est vraiment ce qui me fait vibrer. Je
					suis tout le temps à l’affût des dernières innovations futuristes,
					comme les <span>exosquelettes</span> qui permettent de repousser les
					limites du corps humain, ou les <span>puces cérébrales</span> qui
					ouvrent la voie à des possibilités incroyables, comme contrôler des
					appareils juste avec la pensée. Chaque nouvelle avancée, pour moi,
					c’est une manière de rêver à l'avenir et de me dire : "Et si… ?"
				</p>
				<hr />
			</section>
		</div>
	);
};

export default AboutSection;
