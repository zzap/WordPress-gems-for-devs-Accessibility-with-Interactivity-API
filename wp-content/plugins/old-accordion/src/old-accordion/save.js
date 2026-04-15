/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props - Block props.
 * @param {Object} props.attributes - Block attributes.
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
    const { items = [] } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div className="old-accordion">
                {items.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <button className="accordion-header">
                            <RichText.Content
                                tagName="span"
                                value={item.title}
                            />
                            <span className="accordion-button">+</span>
                        </button>
                        <div
                            id={`accordion-content-${index}`}
                            className="accordion-content"
                        >
                            <div className="accordion-content-inner">
                                <RichText.Content
                                    tagName="div"
                                    value={item.content}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
