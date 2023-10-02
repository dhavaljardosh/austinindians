import * as React from 'react';

import { ViewProps, ViewSizes } from '../types';

export class ViewSmall extends React.Component<ViewProps> {
  public render() {
    return <>{this.props.children || null}</>;
  }

  public static get viewSize() {
    return ViewSizes.SMALL;
  }

  public static get displayName() {
    return 'viewportView-small';
  }
}
