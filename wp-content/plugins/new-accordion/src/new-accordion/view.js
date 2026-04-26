/**
 * WordPress dependencies
 */
import { store, getContext, withSyncEvent } from '@wordpress/interactivity';

const { state } = store('gems', {
	state: {
		get currentButton() {
			return state.isCurrentOpen ? state.accordionButtonOpened : state.accordionButtonClosed;

		},
		get isCurrentOpen() {
			const context = getContext();
			return state.openAccordionID === context.currentAccordionID;
		}
	},
	actions: {
		toggleAccordion() {
			const context = getContext();
			state.openAccordionID = state.openAccordionID === context.currentAccordionID ? null : context.currentAccordionID;
		},
		/**
		 * Best practices recommends wrapping certain methods in
		 * withSyncEvent() since 6.8.
		 * 
		 * @link https://make.wordpress.org/core/2025/03/24/interactivity-api-best-practices-in-6-8/#:~:text=Wrap%20certain%20action%20callbacks%20in%20withSyncEvent()
		 */
		handleKeyDown: withSyncEvent((event) => {
			const buttons = Array.from(
				document.querySelectorAll('.wp-block-gems-new-accordion .accordion-button')
			);
			const currentButton = event.currentTarget;

			if (!buttons.length) {
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
		}),
	},
	callbacks: {},
});
