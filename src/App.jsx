import { Outlet } from "react-router-dom";
import fog from "./assets/fog.mp4"

function App() {
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});
	return (
		<div className="App">
      <video autoPlay loop muted className="fog">
        <source src={fog} type="video/mp4" />
      </video>
      <div className="cursor" />			
      <Outlet />
		</div>
	);
}

export default App;
