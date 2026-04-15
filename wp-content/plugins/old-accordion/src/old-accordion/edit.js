/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object} props - Block props.
 * @param {Object} props.attributes - Block attributes.
 * @param {Function} props.setAttributes - Function to update attributes.
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { items = [] } = attributes;

	const addItem = () => {
		const newItems = [
			...items,
			{
				title: __( 'Accordion Item', 'old-accordion' ),
				content: __( 'Content goes here...', 'old-accordion' ),
			},
		];
		setAttributes( { items: newItems } );
	};

	const removeItem = ( index ) => {
		const newItems = items.filter( ( _, i ) => i !== index );
		setAttributes( { items: newItems } );
	};

	const updateItem = ( index, field, value ) => {
		const newItems = items.map( ( item, i ) =>
			i === index ? { ...item, [ field ]: value } : item
		);
		setAttributes( { items: newItems } );
	};

	return (
		<div { ...useBlockProps() }>
			<div className="old-accordion-editor">
				{ items.map( ( item, index ) => (
					<div key={ index } className="accordion-item-editor">
						<RichText
							tagName="h3"
							value={ item.title }
							onChange={ ( value ) =>
								updateItem( index, 'title', value )
							}
							placeholder={ __(
								'Accordion Title',
								'old-accordion'
							) }
							className="accordion-title-editor"
						/>
						<RichText
							tagName="div"
							value={ item.content }
							onChange={ ( value ) =>
								updateItem( index, 'content', value )
							}
							placeholder={ __(
								'Accordion Content',
								'old-accordion'
							) }
							className="accordion-content-editor"
						/>
						<Button
							isDestructive
							onClick={ () => removeItem( index ) }
						>
							{ __( 'Remove Item', 'old-accordion' ) }
						</Button>
					</div>
				) ) }
				<Button isPrimary onClick={ addItem }>
					{ __( 'Add Accordion Item', 'old-accordion' ) }
				</Button>
			</div>
		</div>
	);
}
