import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import "../../../styles/VsCode/components/sections/SocialSection.css";

const SocialSection = () => {
  const code = `# Mes réseaux sociaux 🌐

Connectez-vous avec moi sur les plateformes suivantes :

- **LinkedIn** : [Ryan Barboza](https://www.linkedin.com/in/ryan-barboza/)
- **GitHub** : [RetrozDev](https://github.com/RetrozDev)

Je suis toujours heureux de discuter, partager des idées et collaborer. N'hésitez pas à m'envoyer un message ! 📩

<!-- Les liens ne sont pas cliquable mais vous pouvez les copier coller dans votre navigateur -->`;

  useEffect(() => {
    const blocks = document.querySelectorAll('pre code');
    for (let i = 0; i < blocks.length; i++) {
      hljs.highlightBlock(blocks[i]);
    }
  }, []);

  // Séparation du code par lignes
  const lines = code.split('\n');

  return (
    <div className="SocialSection">
      <div style={{ display: 'flex' }}>
        {/* Affichage des numéros de ligne */}
        <div>
          {lines.map((line, index) => (
            <div key={line} className='lineCount'>{index + 1}</div>
          ))}
        </div>

        <pre style={{ margin: 0 }}>
          <code className="language-markdown">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default SocialSection;
