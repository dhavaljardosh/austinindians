import * as React from "react";
import { ViewSizes } from "../types";
import { useViewport } from "../viewport-provider";

export const MaxViewportContext = React.createContext<ViewSizes | undefined>(
  undefined
);

export interface MaxViewportProps {
  maxSize: ViewSizes;
}

/**
 * Used to limit the maximum view size for child components.
 */
export const MaxViewport: React.FC<any> = (props) => {
  const { maxSize } = props;
  const { viewSizes }: any = useViewport();
  // check to see if the maxSize was set higher up in the tree
  const parentMaxSize: any = useMaxViewport();
  const appliedMaxSize =
    parentMaxSize && viewSizes[parentMaxSize] < viewSizes[maxSize]
      ? parentMaxSize
      : maxSize;

  return (
    <MaxViewportContext.Provider value={appliedMaxSize}>
      {props.children}
    </MaxViewportContext.Provider>
  );
};

MaxViewport.displayName = "MaxViewport";

export const useMaxViewport = (): ViewSizes | undefined =>
  React.useContext(MaxViewportContext);
