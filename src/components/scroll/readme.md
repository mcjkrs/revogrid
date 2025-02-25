# revogr-viewport-scroll

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type     | Default |
| --------------- | ---------------- | ----------- | -------- | ------- |
| `contentHeight` | `content-height` |             | `number` | `0`     |
| `contentWidth`  | `content-width`  |             | `number` | `0`     |


## Events

| Event            | Description | Type                                                                             |
| ---------------- | ----------- | -------------------------------------------------------------------------------- |
| `resizeViewport` |             | `CustomEvent<{ dimension: DimensionType; size: number; }>`                       |
| `scrollViewport` |             | `CustomEvent<{ dimension: DimensionType; coordinate: number; delta?: number; }>` |


## Methods

### `changeScroll(e: RevoGrid.ViewPortScrollEvent) => Promise<RevoGrid.ViewPortScrollEvent>`



#### Returns

Type: `Promise<ViewPortScrollEvent>`



### `setScroll(e: RevoGrid.ViewPortScrollEvent) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [revogr-viewport](../viewport)

### Graph
```mermaid
graph TD;
  revogr-viewport --> revogr-viewport-scroll
  style revogr-viewport-scroll fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
