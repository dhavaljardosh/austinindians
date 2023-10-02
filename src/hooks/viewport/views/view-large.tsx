import * as React from 'react';

import { ViewProps, ViewSizes } from '../types';

export class ViewLarge extends React.Component<ViewProps> {
  public render() {
    return <>{this.props.children || null}</>;
  }

  public static get viewSize() {
    return ViewSizes.LARGE;
  }

  public static get displayName() {
    return 'viewportView-large';
  }
}
