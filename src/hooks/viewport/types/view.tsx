import * as React from 'react';
import { ViewSizes } from '.';

export interface ViewProps {
  children?: React.ReactChild;
}
export interface ViewClass<P = ViewProps> extends React.ComponentClass<P> {
  new (props: P): React.Component<P>;
  displayName: string;
  viewSize: ViewSizes;
}
