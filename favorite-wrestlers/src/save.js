import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { wrestlers } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<ul>
				{wrestlers.map((wrestler, index) => (
					<li key={index}>{wrestler}</li>
				))}
			</ul>
		</div>
	);
}
