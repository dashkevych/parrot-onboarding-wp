export default function GuideImage({ nonAnimatedSrc, animatedSrc }) {
	return (
		<picture className="prowp-dashboard__guide-image">
			<source
				srcSet={nonAnimatedSrc}
				media="(prefers-reduced-motion: reduce)"
			/>
			<img src={animatedSrc} width="312" height="240" alt="" />
		</picture>
	);
}
