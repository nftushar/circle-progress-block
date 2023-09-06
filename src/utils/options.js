import { __ } from "@wordpress/i18n";

export const lineCapOptions = [
    { label: __("Round", "circle-progress"), value: "round" },
    { label: __("butt", "circle-progress"), value: "butt" }, 
];

export const circleAlignments = [
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
export const fillTypes = [
    { label: __('Solid', 'circle-progress'), value: 'solid' },
    { label: __('Gradient', 'circle-progress'), value: 'gradient' }
];