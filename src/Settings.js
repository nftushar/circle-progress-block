import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	ToggleControl,
	PanelRow,
	PanelBody,
	TabPanel,
	__experimentalNumberControl as NumberControl,
	SelectControl,
	RangeControl,
	GradientPicker,
} from "@wordpress/components";

import { BColor, BtnGroup, Label } from "../../Components";
import { gradients } from "../../Components/utils/options";

import { lineCapOptions, circleAlignments, fillTypes } from "./utils/options";

const Settings = ({ attributes, setAttributes }) => {

	const { alignment, value, size, startAngle, reverse, thickness, lineCap, fill, emptyFill, animation, elements, } = attributes;

	const { enabled, duration } = animation;
	const { type: fillType, color: fillColor, gradient: fillGradient } = fill;
	const { showPercentage } = elements;
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
							<>
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
									<small>
										{__("Start angel 0 will start from the top", "")}
									</small>

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
								</PanelBody>
								<PanelBody initialOpen="false"
									className="bPlPanelBody"
									title={__("Element", "circle-progress")}
								>
									<ToggleControl
										className="mt20"
										label="Show Percentage"
										checked={showPercentage}
										onChange={(val) =>
											setAttributes({
												elements: { ...elements, showPercentage: val },
											})
										}
									/>
								</PanelBody>
							</>
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
								<PanelRow className="mt20">
									<Label className="mt20">
										{__("Fill Type:", "circle-progress")}
									</Label>
									<BtnGroup
										value={fillType}
										onChange={(val) =>
											setAttributes({ fill: { ...fill, type: val } })
										}
										options={fillTypes}
										size="small"
									/>
								</PanelRow>

								{"gradient" === fillType ? (
									<GradientPicker
										value={fillGradient}
										onChange={(val) =>
											setAttributes({ fill: { ...fill, gradient: val } })
										}
										gradients={gradients}
									/>
								) : (
									<BColor
										label={__("Fill Color:", "circle-progress")}
										value={fillColor}
										onChange={(val) =>
											setAttributes({ fill: { ...fill, color: val } })
										}
										defaultColor="#4527a4"
									/>
								)}

								<BColor label={__("Empty Fill Color", "circle-progress")}
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
