import * as React from "react";

import {
  DeviceInformation,
  defaultViewSizes,
  ViewSizes,
  ViewSizeDefinitions,
} from "./types";
import { useMediaQueries } from "./use-media-queries";
import {
  convertToUseBaseFontSizePx,
  getViewSizeFromDeviceInformation,
} from "./view-size-utils";

export interface IViewportContext {
  /**
   * Determines the valid Viewport component to render.
   */
  validViewSize: number;
  /**
   * Function for setting a new ValidViewSize in the context.
   */
  setValidViewSize: (number: number) => void;
  /**
   * Either client defined pixel definitions for each View Size or
   * the default values.
   */
  viewSizes: ViewSizeDefinitions;
  /**
   * Used to account for the base font size when determining breakpoints.
   */
  baseFontSizePx?: number;
}

/**
 * The defaults will be used if the `<ViewportProvider>` is not used by the client.
 */
const defaults: IViewportContext = {
  viewSizes: defaultViewSizes,
  validViewSize: defaultViewSizes.SMALL,
  setValidViewSize: (size: number) => 0,
};

export const ViewportContext: React.Context<IViewportContext> =
  React.createContext<IViewportContext>(defaults);

export interface ViewportProviderProps {
  /**
   * Client defined ViewSizeDefinitions. Will fall back to defaults if not provided.
   */
  viewSizes?: ViewSizeDefinitions;

  /**
   * Account for the base font size when determining breakpoints.
   */
  baseFontSizePx?: number;

  /**
   * Device information from the context object.
   */
  deviceInformation?: DeviceInformation;
}

/**
 * This component is meant to be a top-level component to provide ViewportContext
 * to its consumers
 * @returns A `<ViewportContext.Provider>`
 */
const ViewportProvider: React.FC<any> = (props) => {
  const { viewSizes, baseFontSizePx, deviceInformation, children } = props;

  let validatedViewSizes: ViewSizeDefinitions = viewSizes || defaultViewSizes;

  if (baseFontSizePx) {
    validatedViewSizes = convertToUseBaseFontSizePx(
      validatedViewSizes,
      baseFontSizePx
    );
  }

  // set initial view size from DeviceInformation
  let deviceViewSize;
  if (deviceInformation) {
    deviceViewSize = getViewSizeFromDeviceInformation(
      validatedViewSizes,
      deviceInformation,
      baseFontSizePx
    );
  }
  const [viewSize, setViewSize] = React.useState<number>(
    deviceViewSize || defaults.validViewSize
  );

  const validViewSize = useMediaQueries({
    viewSizes: validatedViewSizes,
    deviceInformation,
    baseFontSizePx,
  });

  React.useEffect(() => {
    setViewSize(validViewSize);
  }, [validViewSize]);

  const viewportContext: IViewportContext = {
    baseFontSizePx,
    validViewSize: viewSize,
    setValidViewSize: setViewSize,
    viewSizes: validatedViewSizes,
  };

  return (
    <ViewportContext.Provider value={viewportContext}>
      {children}
    </ViewportContext.Provider>
  );
};

/**
 * This hook use called by the `<Viewport>` and `<MaxViewport>` components to retrieve the `ViewportContext`.
 */
export const useViewport = (): IViewportContext =>
  React.useContext<IViewportContext>(ViewportContext);

export default ViewportProvider;
