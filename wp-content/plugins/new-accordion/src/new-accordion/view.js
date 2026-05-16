/**
 * WordPress dependencies
 */
import { store, getContext, withSyncEvent } from '@wordpress/interactivity';

const { state } = store( 'gems', {
	state: {
		get currentButton() {
			return state.isExpanded ? state.openedButton : state.closedButton;
		},
		get isExpanded() {
			const context = getContext();
			return state.openedAccordionID === context.currentAccordionID;
		}
	},
	actions: {
		toggleAccordion() {
			const context = getContext();
			state.openedAccordionID = state.isExpanded ? null : context.currentAccordionID;
		},
		keyboardSupport: withSyncEvent((event) => {
			const buttons = Array.from(
				document.querySelectorAll('.wp-block-gems-new-accordion .accordion-button')
			);
			const currentButton = event.currentTarget;

			if ( ! buttons.length) {
				return;
			}
			const lastIndex = buttons.length - 1;
			const currentIndex = buttons.indexOf(currentButton);

			const targetIndex = {
				Home: 0,
				End: lastIndex,
				ArrowDown: (currentIndex + 1) % buttons.length,
				ArrowUp: (currentIndex - 1 + buttons.length) % buttons.length,
			}[event.key];

			if (targetIndex === undefined || currentIndex < 0) {
				return;
			}
			event.preventDefault();
			buttons[targetIndex]?.focus();
		})
	},
	callbacks: {},
} );
