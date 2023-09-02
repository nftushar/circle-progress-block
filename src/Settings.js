import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { solidStar, outlineStar } from "./utils/icons";
import produce from "immer";
import {
	ToggleControl,
	PanelRow,
	PanelBody,
	TabPanel,
	TextControl,
	__experimentalNumberControl as NumberControl,
	SelectControl,
	RangeControl,
} from "@wordpress/components";

import { BColor, BtnGroup, Label, CustomController, ColorsControl } from "../../Components";
import { GradientPicker } from "@wordpress/components";
import { gradients } from "../../Components/utils/options";

// console.log(CustomController);

const lineCapOptions = [
	{ label: __("Round", "circle-progress"), value: "round" },
	{ label: __("butt", "circle-progress"), value: "butt" },
	{ label: __("square", "circle-progress"), value: "square" },
];

const circleAlignments = [
	{
		label: __("left", "circle-progress"),
		value: "left",
		icon: "editor-alignleft",
	},
	{
		label: __("center", "circle-progress"),
		value: "center",
		icon: "editor-aligncenter",
	},
	{
		label: __("right", "circle-progress"),
		value: "right",
		icon: "editor-alignright",
	},
];
const fillTypes = [
	{ label: __('Solid', 'circle-progress'), value: 'solid' },
	{ label: __('Gradient', 'circle-progress'), value: 'gradient' }
]

const Settings = ({ attributes, setAttributes }) => {
	const {
		alignment,
		value,
		size,
		startAngle,
		reverse,
		thickness,
		lineCap,
		fill,
		emptyFill,
		animation,
		elements,
	} = attributes;

	const { enabled, duration } = animation;
	const { type: fillType, color: fillColor, gradient: fillGradient } = fill;
	const { percentage } = elements;

	console.log();

	return (
		<InspectorControls>
			<TabPanel
				className="bPlTabPanel"
				tabs={[
					{ name: "general", title: __("General") },
					{ name: "style", title: __("Style") },
				]}
			>
				{(tab) => (
					<>
						{tab.name === "general" && (
							<PanelBody
								className="bPlPanelBody"
								title={__("Circle Progress", "circle-progress")}
							>
								{/* PanelBody Start */}

								<Label className="mb5">
									{__("Value (%):", "circle-progress")}
								</Label>
								<RangeControl
									value={parseInt(value * 100)}
									onChange={(val) =>
										setAttributes({ value: Number((val / 100).toFixed(2)) })
									}
									min={0}
									max={100}
									step={1}
								/>

								<PanelRow className="mt20">
									<Label className="">
										{__("Size (px):", "circle-progress")}
									</Label>
									<NumberControl
										onChange={(val) => setAttributes({ size: val })}
										value={size}
									/>
								</PanelRow>
								<Label>{__("Thickness:", "circle-progress")}</Label>
								<RangeControl
									value={thickness}
									onChange={(val) => setAttributes({ thickness: val })}
									min={1}
									max={100}
								/>
								<SelectControl
									className="mt20"
									label="lineCap"
									labelPosition="left"
									value={lineCap}
									options={lineCapOptions}
									onChange={(val) => setAttributes({ lineCap: val })}
								/>
								<Label className="mt20">
									{__("Start Angle (°):", "circle-progress")}
								</Label>
								<RangeControl
									value={startAngle}
									onChange={(val) => setAttributes({ startAngle: val })}
									min={0}
									max={360}
									step={1}
								/>
								<small>{__("Start angel 0 will start from the top", "")}</small>

								<ToggleControl
									className="mt20"
									label="Reverse"
									checked={reverse}
									onChange={(val) => setAttributes({ reverse: val })}
								/>

								<ToggleControl
									className="mt20"
									label="Enable Animation"
									checked={enabled}
									onChange={(val) =>
										setAttributes({
											...attributes,
											animation: { ...attributes.animation, enabled: val },
										})
									}
								/>
								{enabled ? (
									<>
										<Label>{__("Duration:", "circle-progress")}</Label>
										<NumberControl
											className="mb5"
											onChange={(val) =>
												setAttributes({
													animation: { ...animation, duration: val },
												})
											}
											value={duration}
										/>
									</>
								) : null}

								<ToggleControl
									className="mt20"
									label="Percentage"
									checked={percentage}
									onChange={(val) =>
										setAttributes({
											elements: { ...elements, percentage: val },
										})
									}
								/>
								<Label>{__("Color Control:", "circle-progress")}</Label>
								<ColorsControl
									value={fill}
									onChange={(val) => setAttributes({ fill: val })}
									defaults={{ color: "#333", bg: "#0000" }}
								/>
							</PanelBody>
						)}

						{tab.name === "style" && (
							<PanelBody
								className="bPlPanelBody"
								title={__("Circle", "circle-progress")}
							>
								<BtnGroup
									className="mt20"
									label={__("Alignment", "circle-progress")}
									value={alignment}
									onChange={(val) => setAttributes({ alignment: val })}
									options={circleAlignments}
									isCircle={true}
								/>


								<PanelRow className='mt20'>
									<Label className=''>{__('Fill:', 'circle-progress')}</Label>
									<BtnGroup value={fillType} onChange={val => setAttributes({ fill: { ...fill, type: val } })} options={fillTypes} size='small' />
								</PanelRow>

								{'gradient' === fillType ? <GradientPicker value={fillGradient} onChange={val => setAttributes({ fill: { ...fill, gradient: val } })} gradients={gradients} /> : <BColor label={__('Fill Color:', 'circle-progress')} value={fillColor} onChange={val => setAttributes({ fill: { ...fill, color: val } })} defaultColor='#4527a4' />}


								<BColor
									label={__("Empty Fill Color", "circle-progress")}
									value={emptyFill}
									onChange={(val) => setAttributes({ emptyFill: val })}
									defaultColor="#0000"
								/>
							</PanelBody>
						)}
					</>
				)}
			</TabPanel>
		</InspectorControls>
	);
};

export default Settings;
