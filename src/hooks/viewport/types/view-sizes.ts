export interface ViewSizeDefinitions {
  SMALL: number;
  MEDIUM: number;
  LARGE: number;
  EXTRA_LARGE: number;
}

const ViewSizeValuesPx: ViewSizeDefinitions = {
  SMALL: 0,
  MEDIUM: 576,
  LARGE: 992,
  EXTRA_LARGE: 1200
};

export const defaultViewSizes: ViewSizeDefinitions = {
  SMALL: ViewSizeValuesPx.SMALL,
  MEDIUM: ViewSizeValuesPx.MEDIUM,
  LARGE: ViewSizeValuesPx.LARGE,
  EXTRA_LARGE: ViewSizeValuesPx.EXTRA_LARGE
};

export enum ViewSizes {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  EXTRA_LARGE = 'EXTRA_LARGE'
}
