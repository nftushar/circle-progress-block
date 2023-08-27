import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { solidStar, outlineStar } from "./utils/icons";
import produce from "immer";
import {
  PanelBody,
  TabPanel,
  TextControl,
  SelectControl,
  RangeControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import {
  BColor,
  BtnGroup,
  Label,
  MultiShadowControl,
  Typography,
} from "../../Components";
import { emUnit, pxUnit } from "../../Components/utils/options";

const iconOptions = [
  { label: __("Solid", "rating"), value: "solid", icon: solidStar },
  { label: __("Outline", "rating"), value: "outline", icon: outlineStar },
];
const CircleAlignments = [
  { label: __("left", "rating"), value: "left", icon: "editor-alignleft" },
  {
    label: __("center", "rating"),
    value: "center",
    icon: "editor-aligncenter",
  },
  { label: __("right", "rating"), value: "right", icon: "editor-alignright" },
];

const Settings = ({ attributes, setAttributes }) => {
  const {
    align,
    animationDuration,
    animationType,
    emptyFill,
    fill,
    lineCap,
    reverse,
    size,
    startAngle,
    thickness,
    value
  } = attributes;


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
                <Label>{__('Width:', 'shape-divider')}</Label>
                <RangeControl value={animationDuration} onChange={val => setAttributes({ animationDuration: val })} min={100} max={300} />

                <TextControl
                  className="mt20"
                  label={__("Prefix", "circle-progress")}
                  value={prefix}
                  onChange={(val) => setAttributes({ prefix: val })}
                />

                <RangeControl
                  className="mt20"
                  label={__("Rating", "circle-progress")}
                  labelPosition="left"
                  value={rating}
                  onChange={(val) => setAttributes({ rating: val })}
                  min={1}
                  max={ratingScale}
                  step={0.1}
                />

                <BtnGroup
                  className="mt20"
                  label={__("Icon Style", "circle-progress")}
                  value={iconStyle}
                  onChange={(val) => setAttributes({ iconStyle: val })}
                  options={iconOptions}
                  isCircle={true}
                />
              </PanelBody>
            )}

            {tab.name === "style" && (
              <PanelBody
                className="bPlPanelBody"
                title={__("Title", "circle-progress")}
              >
                <UnitControl
                  label={__("Gap", "circle-progress")}
                  labelPosition="left"
                  value={gap}
                  onChange={(val) => setAttributes({ gap: val })}
                  units={[pxUnit(10), emUnit(1)]}
                  isResetValueOnUnitChange={true}
                />

                <BtnGroup
                  className="mt20"
                  label={__("Alignment", "circle-progress")}
                  value={alignment}
                  onChange={(val) => setAttributes({ alignment: val })}
                  options={CircleAlignments}
                  isCircle={true}
                />

                <BColor
                  label={__("Text Color", "circle-progress")}
                  value={textColor}
                  onChange={(val) => setAttributes({ textColor: val })}
                  defaultColor="#0000"
                />

                <Typography
                  label={__("Text Typography", "circle-progress")}
                  value={textTypo}
                  onChange={(val) => setAttributes({ textTypo: val })}
                  defaults={{ fontSize: 16 }}
                  produce={produce}
                />

                <MultiShadowControl
                  label={__("Text Shadow", "circle-progress")}
                  value={textShadow}
                  onChange={(val) => setAttributes({ textShadow: val })}
                  type="text"
                  produce={produce}
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
