/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store('gems', {
	state: {
		get currentButton() {
			const context = getContext();
			return context.isCurrentOpen ? state.accordionButtonOpened : state.accordionButtonClosed;

		}
	},
	actions: {
		toggleAccordion() {
			const context = getContext();
			context.isCurrentOpen = !context.isCurrentOpen;
		}
	},
	callbacks: {},
});
