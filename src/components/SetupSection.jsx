/**
 * Components from WordPress Components package.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import {
	Flex,
	FlexItem,
	__experimentalText as Text,
	__experimentalHeading as Heading,
	ButtonGroup,
	Button,
} from "@wordpress/components";

import ButtonGuide from "./ButtonGuide";

// Define the SetupSection component
const SetupSection = ({ id, title, description, url }) => (
	<Flex direction="row" gap="4">
		<FlexItem>
			<Flex direction="column" gap="2">
				<Heading className="prowp-dashboard__section-subtitle" level={2}>
					{title}
				</Heading>
				<Text className="prowp-dashboard__section-description">
					{description}
				</Text>
			</Flex>
		</FlexItem>
		<FlexItem>
			<ButtonGroup>
				<ButtonGuide guide={id} />
				<Button variant="primary" href={url}>
					Customize
				</Button>
			</ButtonGroup>
		</FlexItem>
	</Flex>
);

// Export the SetupSection component
export default SetupSection;
