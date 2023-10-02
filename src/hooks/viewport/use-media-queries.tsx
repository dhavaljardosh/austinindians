import * as React from 'react';
import { ViewSizeDefinitions } from './types';
import { DeviceInformation } from './types';

export interface UseMediaQueriesProps {
  viewSizes: ViewSizeDefinitions;
  baseFontSizePx?: number;
  deviceInformation?: DeviceInformation;
}

/**
 * Hook used to enable media query listeners at specified ViewSizes.
 * @returns The valid view size to determine the appropriate `View` component to render.
 */
export function useMediaQueries(props: UseMediaQueriesProps): number {
  const { viewSizes, baseFontSizePx } = props;

  let mediaQueryLists: [number, MediaQueryList][];

  if (typeof window !== 'undefined') {
    mediaQueryLists = Object.entries(viewSizes).map(([_, value]) => [
      value,
      window.matchMedia(`(min-width: ${baseFontSizePx ? value * baseFontSizePx : value}px)`) // If using baseFontSizePx, need to multiply by baseFontSizePx to get actual min-width
    ]);
  }

  const getValidViewSize = (): number => {
    let validViewSize: number = viewSizes.SMALL;

    if (typeof window !== 'undefined' && mediaQueryLists.length > 0) {
      const defaultValidMediaQuery: [number, MediaQueryList] = mediaQueryLists[0];
      const validMediaQueryList: [number, MediaQueryList] = mediaQueryLists
        .filter(mql => mql[1].matches)
        .reduce(([validSize, validMql], [currentSize, currentMql]) => {
          if (validSize > currentSize) {
            return [validSize, validMql];
          }
          return [currentSize, currentMql];
        }, defaultValidMediaQuery);

      validViewSize = validMediaQueryList[0];
    }

    return validViewSize;
  };

  const [viewSize, setViewSize] = React.useState<number>(getValidViewSize);

  React.useEffect(() => {
    const handler = () => setViewSize(getValidViewSize);
    if (mediaQueryLists && mediaQueryLists.length > 0) {
      mediaQueryLists.forEach(mql => mql[1].addListener(handler));
    }
    // remove listeners on cleanup
    return () => {
      if (mediaQueryLists && mediaQueryLists.length > 0) {
        mediaQueryLists.forEach(mql => mql[1].removeListener(handler));
      }
    };
  }, []);

  return viewSize;
}
