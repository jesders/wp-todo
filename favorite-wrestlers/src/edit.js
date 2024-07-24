import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import WrestlerList from "./components/WrestlerList";
import WrestlerInput from "./components/WrestlerInput";

export default function Edit({ attributes, setAttributes }) {
	const { wrestlers } = attributes;

	const addWrestler = (wrestler) => {
		setAttributes({ wrestlers: [...wrestlers, wrestler] });
	};

	const removeWrestler = (index) => {
		const newWrestlers = [...wrestlers];
		newWrestlers.splice(index, 1);
		setAttributes({ wrestlers: newWrestlers });
	};

	return (
		<div {...useBlockProps()}>
			<WrestlerInput addWrestler={addWrestler} />
			<WrestlerList wrestlers={wrestlers} removeWrestler={removeWrestler} />
		</div>
	);
}
