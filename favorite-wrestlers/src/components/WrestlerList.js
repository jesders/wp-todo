import { Button } from "@wordpress/components";

const WrestlerList = ({ wrestlers, removeWrestler }) => {
	return (
		<ul>
			{wrestlers.map((wrestler, index) => (
				<li key={index}>
					{wrestler}
					<Button isLink isDestructive onClick={() => removeWrestler(index)}>
						{"Remove"}
					</Button>
				</li>
			))}
		</ul>
	);
};

export default WrestlerList;
