import { DeviceInformation, ViewSizeDefinitions } from './types';

const MM_TO_INCHES = 25.4;
const COMMON_DENSITY = 160;

export const handleBaseFontSizePx = (value: number, baseFontSizePx?: number): number => {
  return baseFontSizePx ? value / baseFontSizePx : value;
};

export const convertToUseBaseFontSizePx = (
  viewSizes: ViewSizeDefinitions,
  baseFontSizePx: number
): ViewSizeDefinitions =>
  Object.entries(viewSizes).reduce((acc: any, [key, value]) => {
    acc[key] = value / baseFontSizePx;
    return acc;
  }, {}) as unknown as ViewSizeDefinitions;

const getTrueWidth = (widthInPixels: number, widthInMillimeters: number): number => {
  return Math.round((widthInPixels / (widthInPixels / (widthInMillimeters / MM_TO_INCHES))) * COMMON_DENSITY);
};

export const getViewSizeFromDeviceInformation = (
  viewSizes: ViewSizeDefinitions,
  deviceInformation: DeviceInformation,
  baseFontSizePx?: number
): number => {
  if (typeof deviceInformation.resolutionWidth === 'number' && deviceInformation.resolutionWidth > 0) {
    const { resolutionWidth: widthInPixels, physicalScreenWidth: widthInMillimeters } = deviceInformation;
    let deviceViewSize: number = widthInPixels;

    if (widthInMillimeters) {
      deviceViewSize = getTrueWidth(widthInPixels, widthInMillimeters);
    }

    return handleBaseFontSizePx(deviceViewSize, baseFontSizePx);
  } else if (deviceInformation.tablet === true) {
    return viewSizes.MEDIUM;
  } else if (deviceInformation.mobile === true) {
    return viewSizes.SMALL;
  } else {
    return viewSizes.LARGE;
  }
};
