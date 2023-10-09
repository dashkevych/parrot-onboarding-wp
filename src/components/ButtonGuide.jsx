/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * WordPress core element library functions for building user interfaces.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { useState } from "@wordpress/element";

/**
 * Components from WordPress Components package.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { Flex, Guide, Button } from "@wordpress/components";

import { Icon, info } from "@wordpress/icons";

import GuideImage from "./GuideImage";

export default function ButtonGuide(props) {
	const { guide } = props;
	const [isOpen, setIsOpen] = useState(false);

	if (!isOpen) {
		return (
			<Button variant="secondary" onClick={() => setIsOpen(true)}>
				Learn More
			</Button>
		);
	}

	if (guide === "branding") {
		return (
			<>
				<Button variant="secondary" onClick={() => setIsOpen(true)}>
					Learn More
				</Button>
				<Guide
					className="prowp-dashboard__guide-modal"
					onFinish={() => setIsOpen(false)}
					pages={[
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<h1 className="prowp-dashbord__guide-head prowp-dashbord__guide-heading">
										{__("Branding Options")}
									</h1>
									<p className="prowp-dashbord__guide-text">
										{__(
											"You can customize your site as much as you like with different colors, typography, and layouts. Or if you prefer, just leave it up to your theme to handle!",
										)}
									</p>
								</>
							),
						},
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Site Logo")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/site-logo-block/"
											label="Click to learn more about Site Logo block"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"Upload or change your logo via the Site Logo block in the WordPress editor.",
										)}
									</p>
								</>
							),
						},
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Site Title")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/site-title-block/"
											label="Click to learn more about Site Title block"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"Update your site's title using the Site Title block in the WordPress editor.",
										)}
									</p>
								</>
							),
						},
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Navigation")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/navigation-block/"
											label="Click to learn more about Navigation block"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"Create and organize your site's menu with the Navigation block in the WordPress editor.",
										)}
									</p>
								</>
							),
						},
					]}
				/>
			</>
		);
	}

	if (guide === "colors") {
		return (
			<>
				<Button variant="secondary" onClick={() => setIsOpen(true)}>
					Learn More
				</Button>
				<Guide
					className="prowp-dashboard__guide-modal"
					onFinish={() => setIsOpen(false)}
					pages={[
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Color Options")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/site-editor/#how-to-use-the-site-editor-2"
											label="Click to learn more about Color options"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"ProWP comes with pre-defined color scheme. Use Styles settings in editor Canvas to customize default Colors.",
										)}
									</p>
								</>
							),
						},
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Canvas")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/site-editor/#how-to-use-the-site-editor"
											label="Click to learn more about editor canvas"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"The editor canvas, accessed via Appearance > Editor, is to design and preview a block-based site.",
										)}
									</p>
								</>
							),
						},
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Styles")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/site-editor/#how-to-use-the-site-editor"
											label="Click to learn more about Site Title block"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"Access the Styles tab from the topbar in the editor canvas. If toggled out, click to make it visible.",
										)}
									</p>
								</>
							),
						},
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Colors")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/site-editor/#how-to-use-the-site-editor"
											label="Click to learn more about Navigation block"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"Find Colors in the Styles sidebar, alongside global options like Typography and Layout.",
										)}
									</p>
								</>
							),
						},
					]}
				/>
			</>
		);
	}

	if (guide === "layouts") {
		return (
			<>
				<Button variant="secondary" onClick={() => setIsOpen(true)}>
					Learn More
				</Button>
				<Guide
					className="prowp-dashboard__guide-modal"
					onFinish={() => setIsOpen(false)}
					pages={[
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<h1 className="prowp-dashbord__guide-head prowp-dashbord__guide-heading">
										{__("Layout Options")}
									</h1>

									<p className="prowp-dashbord__guide-text">
										{__(
											"ProWP offers page creation patterns for easy page building, along with many other pre-made patterns.",
										)}
									</p>
								</>
							),
						},
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Page")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/create-pages/"
											label="Click to learn more about pages"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"Pages in WordPress are used for various content. Create them by going to Pages > Add New in the dashboard.",
										)}
									</p>
								</>
							),
						},
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Patterns")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/block-pattern/"
											label="Click to learn more about patterns"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"Block Patterns are predefined block layouts, available from the patterns tab of the block inserter.",
										)}
									</p>
								</>
							),
						},
					]}
				/>
			</>
		);
	}

	if (guide === "readingSettings") {
		return (
			<>
				<Button variant="secondary" onClick={() => setIsOpen(true)}>
					Learn More
				</Button>
				<Guide
					className="prowp-dashboard__guide-modal"
					onFinish={() => setIsOpen(false)}
					pages={[
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<h1 className="prowp-dashbord__guide-head prowp-dashbord__guide-heading">
										{__("Reading Settings")}
									</h1>

									<p className="prowp-dashbord__guide-text">
										{__(
											"ProWP offers page creation patterns for easy page building, along with many other pre-made patterns.",
										)}
									</p>
								</>
							),
						},
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Latest Posts")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/settings-reading-screen/"
											label="Click to learn more about reading settings"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"Pages in WordPress are used for various content. Create them by going to Pages > Add New in the dashboard.",
										)}
									</p>
								</>
							),
						},
						{
							image: (
								<GuideImage
									nonAnimatedSrc="https://s.w.org/images/block-editor/set-the-design.svg?1"
									animatedSrc="https://s.w.org/images/block-editor/set-the-design.gif?1"
								/>
							),
							content: (
								<>
									<Flex className="prowp-dashbord__guide-head">
										<h1 className="prowp-dashbord__guide-heading">
											{__("Static page")}
										</h1>
										<Button
											icon={<Icon icon={info} />}
											className="prowp-dashbord__guide-help-link"
											href="https://wordpress.org/documentation/article/settings-reading-screen/"
											label="Click to learn more about reading settings"
											target="_blank"
											rel="noreferrer noopener"
										/>
									</Flex>

									<p className="prowp-dashbord__guide-text">
										{__(
											"Pages in WordPress are used for various content. Create them by going to Pages > Add New in the dashboard.",
										)}
									</p>
								</>
							),
						},
					]}
				/>
			</>
		);
	}
}
