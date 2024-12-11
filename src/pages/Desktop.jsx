import { useNavigate } from "react-router-dom";
import "../styles/Desktop.css";
const Desktop = () => {
	const navigate = useNavigate();
	return (
		<main className="Desktop">
			<div className="vsCodeShortcut" onDoubleClick={() => navigate("/vs-code")}>
				<svg

					viewBox="0 0 66 66"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="vsCodeIcon"
				>
					<title>Vs code Icon</title>
					<path
						d="M55.3025 14.0554L45.4184 9.29639C44.2742 8.74554 42.907 8.9779 42.0091 9.87578L9.6521 39.3778C8.78177 40.1713 8.78278 41.5415 9.65426 42.3338L12.2973 44.7365C13.0097 45.3842 14.0827 45.4319 14.8498 44.85L53.8152 15.29C55.1224 14.2983 57 15.2307 57 16.8715V16.7568C57 15.605 56.3402 14.5551 55.3025 14.0554Z"
						fill="#0065A9"
					/>
					<g filter="url(#filter0_d_18_7)">
						<path
							d="M55.3025 51.6681L45.4184 56.4271C44.2742 56.9781 42.907 56.7456 42.0091 55.8477L9.6521 26.3458C8.78177 25.5522 8.78278 24.182 9.65426 23.3897L12.2973 20.987C13.0097 20.3393 14.0827 20.2916 14.8498 20.8735L53.8152 50.4334C55.1224 51.4251 57 50.4928 57 48.852V48.9667C57 50.1185 56.3402 51.1684 55.3025 51.6681Z"
							fill="#007ACC"
						/>
					</g>
					<g filter="url(#filter1_d_18_7)">
						<path
							d="M45.4187 56.4281C44.2743 56.9786 42.907 56.7457 42.009 55.8478C43.1154 56.9542 45.0072 56.1706 45.0072 54.6059V11.1176C45.0072 9.55293 43.1154 8.76933 42.009 9.87573C42.907 8.97777 44.2743 8.74507 45.4187 9.29544L55.3011 14.0479C56.3396 14.5473 56.9999 15.5976 56.9999 16.7499V48.9738C56.9999 50.126 56.3396 51.1764 55.3011 51.6757L45.4187 56.4281Z"
							fill="#1F9CF0"
						/>
					</g>
					<g opacity="0.25">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M43.017 56.5197C43.7726 56.814 44.6341 56.7951 45.3967 56.4282L55.273 51.6759C56.3109 51.1765 56.9708 50.1262 56.9708 48.9739V16.75C56.9708 15.5977 56.3109 14.5474 55.2731 14.048L45.3967 9.29557C44.3959 8.81399 43.2246 8.93195 42.3462 9.57053C42.2208 9.66175 42.1012 9.76361 41.9891 9.87585L23.0819 27.1252L14.8463 20.8738C14.0797 20.2918 13.0073 20.3395 12.2953 20.9872L9.65386 23.3899C8.78291 24.1822 8.78191 25.5524 9.6517 26.3459L16.7939 32.8619L9.6517 39.3778C8.78191 40.1714 8.78291 41.5416 9.65386 42.3338L12.2953 44.7366C13.0073 45.3843 14.0797 45.432 14.8463 44.85L23.0819 38.5985L41.9891 55.8479C42.2882 56.1472 42.6394 56.3726 43.017 56.5197ZM44.9854 21.972L30.6392 32.8619L44.9854 43.7518V21.972Z"
							fill="url(#paint0_linear_18_7)"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_18_7"
							x="0.66666"
							y="12.1338"
							width="64.6667"
							height="52.9225"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset />
							<feGaussianBlur stdDeviation="4.16667" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="overlay"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_18_7"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_18_7"
								result="shape"
							/>
						</filter>
						<filter
							id="filter1_d_18_7"
							x="33.6757"
							y="0.66666"
							width="31.6576"
							height="64.3903"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset />
							<feGaussianBlur stdDeviation="4.16667" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="overlay"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_18_7"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_18_7"
								result="shape"
							/>
						</filter>
						<linearGradient
							id="paint0_linear_18_7"
							x1="32.9854"
							y1="9.00012"
							x2="32.9854"
							y2="56.7237"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="white" />
							<stop offset="1" stop-color="white" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
				<p>Visual Studio Code</p>
			</div>
		</main>
	);
};

export default Desktop;
