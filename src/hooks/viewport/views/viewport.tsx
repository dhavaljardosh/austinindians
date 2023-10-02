import * as React from 'react';
import { ViewProps, ViewClass, ViewSizes } from '../types';
import { useViewport } from '../viewport-provider';
import { useMaxViewport } from './max-viewport';

export interface ViewportChild<P = ViewProps> extends React.ReactElement<P> {
  readonly type: React.ComponentClass<P> & ViewClass;
}

export type ViewportChildren = ViewportChild | Array<ViewportChild>;

interface ViewportProps {
  children: ViewportChildren;
}

/**
 * Parent container for the other Viewport components:
 * `<ViewSmall>`, `<ViewMedium>`, `<ViewLarge>`,`<ViewExtraLarge>`
 */
const Viewport: React.FC<ViewportProps> = ({ children }) => {
  const { viewSizes, validViewSize } = useViewport();
  const maxSize = useMaxViewport();

  const appliedViewSize: number = maxSize && viewSizes[maxSize] < validViewSize ? viewSizes[maxSize] : validViewSize;

  function validChild(): ViewportChild | null {
    let validChild: ViewportChild | null = null;

    React.Children.forEach(children, (child: ViewportChild<ViewProps>) => {
      const childViewSize = child.type && viewSizes[child.type.viewSize];
      if (typeof childViewSize === 'number' && childViewSize <= appliedViewSize) {
        if (!validChild) {
          validChild = child;
        } else if (childViewSize > viewSizes[validChild.type.viewSize]) {
          validChild = child;
        }
      }
    });

    return validChild;
  }

  return <>{validChild()}</>;
};

export default Viewport;
