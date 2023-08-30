import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { solidStar, outlineStar } from "./utils/icons";
import produce from "immer";
import { ToggleControl, PanelRow, PanelBody, TabPanel, TextControl, __experimentalNumberControl as NumberControl, SelectControl, RangeControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

import { BColor, BtnGroup, Label, MultiShadowControl, Typography, } from "../../Components";
import { emUnit, pxUnit } from "../../Components/utils/options";

const lineCapOptions = [
  { label: __("Round", "circle-progress"), value: "round" },
  { label: __("butt", "circle-progress"), value: "butt" },
  { label: __("square", "circle-progress"), value: "square" },
];

const circleAlignments = [
  { label: __("left", "circle-progress"), value: "left", icon: "editor-alignleft" },
  {
    label: __("center", "circle-progress"), value: "center", icon: "editor-aligncenter",
  },
  { label: __("right", "circle-progress"), value: "right", icon: "editor-alignright" },
];

const Settings = ({ attributes, setAttributes }) => {
  const { alignment, value, size, startAngle, reverse, thickness, lineCap, fill, emptyFill, animation } = attributes;
  const { duration } = animation;

  // console.log(easing);

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
              <PanelBody className="bPlPanelBody" title={__("Circle Progress", "circle-progress")}>
                <Label className='mb5'>{__('Value (%):', 'circle-progress')}</Label>
                <RangeControl value={parseInt(value * 100)} onChange={val => setAttributes({ value: Number((val / 100).toFixed(2)) })} min={0} max={100} step={1} />

                <PanelRow className="mt20">
                  <Label className=''>{__('Size (px):', 'circle-progress')}</Label>
                  <NumberControl
                    onChange={val => setAttributes({ size: val })}
                    value={size}
                  />
                </PanelRow>

                <Label className="mt20">{__('Start Angle (°):', 'circle-progress')}</Label>
                <RangeControl value={startAngle} onChange={val => setAttributes({ startAngle: val })} min={0} max={360} step={1} />
                <small>{__('Start angel 0 will start from the top', '')}</small>

                <Label>{__('duration:', 'circle-progress')}</Label>
                {/* <NumberControl
                  onChange={val => setAttributes({ animation.duration: val })}
                value={duration}
                /> */}
                <NumberControl className="mb5"
                  onChange={val => setAttributes({ ...attributes, animation: { ...attributes.animation, duration: val } })}
                  value={duration}
                />
                <ToggleControl
                  className='mt20'
                  label="Reverse"
                  checked={reverse}
                  onChange={val => setAttributes({ reverse: val })}
                />

                <Label>{__('Thick Ness:', 'circle-progress')}</Label>
                <RangeControl value={thickness} onChange={val => setAttributes({ thickness: val })} min={1} max={14} />


                <SelectControl
                  className='mt20'
                  label="lineCap"
                  labelPosition="left"
                  value={lineCap}
                  options={lineCapOptions}
                  onChange={(val) => setAttributes({ lineCap: val })}
                />
                {/* <TextControl
                  className="mt20"
                  label={__("Prefix", "circle-progress")}
                  value={prefix}
                  onChange={(val) => setAttributes({ prefix: val })}
                /> */}

                {/* <RangeControl
                  className="mt20"
                  label={__("Rating", "circle-progress")}
                  labelPosition="left"
                  value={rating}
                  onChange={(val) => setAttributes({ rating: val })}
                  min={1}
                  max={ratingScale}
                  step={0.1}
                /> */}

                {/* <BtnGroup
                  className="mt20"
                  label={__("Icon Style", "circle-progress")}
                  value={iconStyle}
                  onChange={(val) => setAttributes({ iconStyle: val })}
                  options={CircleAlignments}
                  isCircle={true}
                /> */}
              </PanelBody>
            )}

            {tab.name === "style" && (
              <PanelBody
                className="bPlPanelBody"
                title={__("Circle", "circle-progress")}
              >
                {/* <UnitControl
                  label={__("Gap", "circle-progress")}
                  labelPosition="left"
                  value={gap}
                  onChange={(val) => setAttributes({ gap: val })}
                  units={[pxUnit(10), emUnit(1)]}
                  isResetValueOnUnitChange={true}
                /> */}

                <BtnGroup
                  className="mt20"
                  label={__("Alignment", "circle-progress")}
                  value={alignment}
                  onChange={(val) => setAttributes({ alignment: val })}
                  options={circleAlignments}
                  isCircle={true}
                />

                <BColor
                  label={__("Empty Fill Color", "circle-progress")}
                  value={emptyFill}
                  onChange={(val) => setAttributes({ emptyFill: val })}
                  defaultColor="#0000"
                />
                <BColor
                  label={__("Fill Color", "circle-progress")}
                  value={fill}
                  onChange={(val) => setAttributes({ fill: val })}
                />

                {/* <Typography
                  label={__("Text Typography", "circle-progress")}
                  value={textTypo}
                  onChange={(val) => setAttributes({ textTypo: val })}
                  defaults={{ fontSize: 16 }}
                  produce={produce}
                /> */}

                {/* <MultiShadowControl
                  label={__("Text Shadow", "circle-progress")}
                  value={textShadow}
                  onChange={(val) => setAttributes({ textShadow: val })}
                  type="text"
                  produce={produce}
                /> */}
              </PanelBody>
            )}
          </>
        )}
      </TabPanel>
    </InspectorControls>
  );
};

export default Settings;
