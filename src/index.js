/**
 * Global styles.
 */
import "./style.scss";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * This module imports hooks from the WordPress Element package that allow React components to
 * manage state and handle side effects. These hooks provide basic building blocks for building
 * powerful, dynamic interfaces in WordPress.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { createRoot } from "@wordpress/element";

/**
 * Components from WordPress Components package.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardDivider,
	__experimentalText as Text,
	__experimentalHeading as Heading,
} from "@wordpress/components";

import { addQueryArgs } from "@wordpress/url";

import SetupSection from "./components/SetupSection";

const InitDashboard = () => {
	// Define the base URLs and arguments
	const baseEditorUrl = `${prowpData.adminUrl}site-editor.php`;
	const baseNewPostUrl = `${prowpData.adminUrl}post-new.php`;
	const baseReadingSettingsUrl = `${prowpData.adminUrl}options-reading.php`;

	const editorHeaderArgs = {
		postId: "prowp//header-default",
		postType: "wp_template_part",
	};

	const editorColorSchemeArgs = {
		canvas: "edit",
	};

	const newPageUrlArgs = {
		post_type: "page",
	};

	// Create the URLs
	const brandingUrl = addQueryArgs(baseEditorUrl, editorHeaderArgs);
	const colorSchemeUrl = addQueryArgs(baseEditorUrl, editorColorSchemeArgs);
	const layoutDesignsUrl = addQueryArgs(baseNewPostUrl, newPageUrlArgs);
	const readingSettingsUrl = addQueryArgs(baseReadingSettingsUrl);

	// Define the section data
	const sectionData = [
		{
			id: "branding",
			title: "Branding",
			description:
				"Define your site title, description, logo, and primary navigation.",
			url: brandingUrl,
		},
		{
			id: "colors",
			title: "Color Scheme",
			description:
				"Establish your global colors to align your site with your brand identity.",
			url: colorSchemeUrl,
		},
		{
			id: "layouts",
			title: "Layout Designs",
			description: "Choose from pre-designed layouts when creating a new page.",
			url: layoutDesignsUrl,
		},
		{
			id: "readingSettings",
			title: "Home & Blog Settings",
			description: "Specify your homepage and blog page selections.",
			url: readingSettingsUrl,
		},
	];

	return (
		<>
			<Card>
				<CardHeader>
					<Heading className="prowp-dashboard__section-title" level={2}>
						Getting Started
					</Heading>
				</CardHeader>
				{sectionData.map((section, index) => (
					<React.Fragment key={index}>
						<CardBody>
							<SetupSection
								id={section.id}
								title={section.title}
								description={section.description}
								url={section.url}
							/>
						</CardBody>
						{index < sectionData.length - 1 && <CardDivider />}
					</React.Fragment>
				))}
				<CardFooter>
					<Text>
						Enjoying ProWP?{" "}
						<a
							href="https://wordpress.org/support/theme/prowp/reviews/?rate=5#new-post"
							target="_blank"
							rel="noreferrer noopener"
						>
							&#9733;&#9733;&#9733;&#9733;&#9733; <strong>rating</strong>
						</a>{" "}
						helps us improve. Share the love &#9829;
					</Text>
				</CardFooter>
			</Card>
		</>
	);
};

document.addEventListener("DOMContentLoaded", () => {
	const appId = "prowp-dashboard-app";
	if (
		"undefined" !== typeof document.getElementById(appId) &&
		null !== document.getElementById(appId)
	) {
		const dashboardApp = document.getElementById(appId);
		const root = createRoot(dashboardApp);
		root.render(<InitDashboard />);
	}
});
