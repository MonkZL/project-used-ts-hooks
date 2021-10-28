import {Dimensions} from "react-native";

const {width, height, scale, fontScale} = Dimensions.get('window');

//本机屏幕属性
export const WINDOW_WIDTH = width;
export const WINDOW_HEIGHT = height;
export const WINDOW_SCALE = scale;
export const WINDOW_FONT_SCALE = fontScale;

//设计图属性
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 732;

/**
 * 根据设计图做屏幕适配
 * @param pt 设计图上的尺寸
 * @constructor
 */
export function Size(pt: number): number {
    return pt * WINDOW_WIDTH / DESIGN_WIDTH
}
