import * as React from 'react';

import { ViewProps, ViewSizes } from '../types';

export class ViewExtraLarge extends React.Component<ViewProps> {
  public render() {
    return <>{this.props.children || null}</>;
  }

  public static get viewSize() {
    return ViewSizes.EXTRA_LARGE;
  }

  public static get displayName() {
    return 'viewportView-extra_large';
  }
}
