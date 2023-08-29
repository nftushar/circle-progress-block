import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { solidStar, outlineStar } from "./utils/icons";
import produce from "immer";
import {
  PanelBody, TabPanel, TextControl, SelectControl, RangeControl, __experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import {
  BColor, BtnGroup, Label, MultiShadowControl, Typography,
} from "../../Components";
import { emUnit, pxUnit } from "../../Components/utils/options";
import { ToggleControl } from "@wordpress/components";

const easingOptions = [
  { label: __("Circle Progress Easing", "circle"), value: "solid" },
  { label: __("Circle Progress Easing 2", "circle"), value: "outline" },
];



const circleAlignments = [
  { label: __("left", "circle"), value: "left", icon: "editor-alignleft" },
  {
    label: __("center", "circle"), value: "center", icon: "editor-aligncenter",
  },
  { label: __("right", "circle"), value: "right", icon: "editor-alignright" },
];

const Settings = ({ attributes, setAttributes }) => {
  const { alignment, value, size, startAngle, reverse, thickness, lineCap, fill, circleScale, emptyFill, animation, insertMode } = attributes;
  const { duration, easing } = animation;

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
              <PanelBody
                className="bPlPanelBody"
                title={__("Settings", "circle-progress")}
              >
                <Label>{__('duration:', 'shape-divider')}</Label>
                <RangeControl value={duration} onChange={val => setAttributes({ duration: val })} min={100} max={300} />

                <Label>{__('Size:', 'shape-divider')}</Label>
                <RangeControl value={size} onChange={val => setAttributes({ size: val })} min={100} max={300} />
                
                <ToggleControl
                  label="Fixed Background"
                  onChange={val => setAttributes({ size: val })}
                />

                <Label>{__('startAngle:', 'shape-divider')}</Label>
                <RangeControl value={startAngle} onChange={val => setAttributes({ startAngle: val })} min={100} max={300} />

                <SelectControl
                  label="Animation Scale"
                  labelPosition="left"
                  value={easing}
                  options={easingOptions}
                  onChange={(val) => setAttributes({ easing: parseInt(val) })}
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
                  defaultColor="#0000"
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
