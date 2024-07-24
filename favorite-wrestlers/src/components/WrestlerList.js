import { Button } from "@wordpress/components";

const WrestlerList = ({ wrestlers, removeWrestler }) => {
	return (
		<ul>
			{wrestlers.map((wrestler, index) => (
				<li key={index}>
					{wrestler}
					<Button isLink isDestructive onClick={() => removeWrestler(index)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="remove"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					</Button>
				</li>
			))}
		</ul>
	);
};

export default WrestlerList;
