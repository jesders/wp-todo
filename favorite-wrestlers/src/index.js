import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/favorite-wrestlers", {
	title: __("Favorite Wrestlers", "favorite-wrestlers"),
	icon: "groups",
	category: "widgets",
	attributes: {
		wrestlers: {
			type: "array",
			default: [],
		},
	},
	edit: Edit,
	save,
});
