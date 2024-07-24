import { TextControl, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";

const WrestlerInput = ({ addWrestler }) => {
	const [newWrestler, setNewWrestler] = useState("");

	const handleAddWrestler = () => {
		if (newWrestler.trim() !== "") {
			addWrestler(newWrestler);
			setNewWrestler("");
		}
	};

	return (
		<div className="wrestler-input">
			<TextControl
				label={"Add Wrestler"}
				value={newWrestler}
				onChange={setNewWrestler}
			/>
			<Button isPrimary onClick={handleAddWrestler}>
				{"Add Wrestler"}
			</Button>
		</div>
	);
};

export default WrestlerInput;
