import { h, VNode } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

export interface RowProps extends JSXBase.HTMLAttributes {
  size: number;
  start: number;
  rowClass?: string;
  depth?: number;
  extraStyle?: any;
}

export const PADDING_DEPTH = 10;

const RowRenderer = ({ rowClass, size, start, style, depth, extraStyle }: RowProps, cells: VNode[]) => {
  return (
    <div
      class={`row ${rowClass || ''}`}
      style={{
        ...style,
        ...extraStyle,
        height: `${size}px`,
        transform: `translateY(${start}px)`,
        paddingLeft: depth ? `${PADDING_DEPTH * depth}px` : undefined,
      }}
    >
      {cells}
    </div>
  );
};

export default RowRenderer;
