# m-dialog



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                     | Default                           |
| --------- | --------- | ----------- | ---------------------------------------- | --------------------------------- |
| `actions` | --        |             | `{ cancel?: string; confirm?: string; }` | `{ cancel: '关闭', confirm: '提交' }` |
| `content` | `content` |             | `string`                                 | `undefined`                       |
| `icon`    | `icon`    |             | `string`                                 | `undefined`                       |
| `name`    | `name`    |             | `string`                                 | `'标题'`                            |
| `type`    | `type`    |             | `any`                                    | `undefined`                       |


## Methods

### `destroy() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [m-icon](../m-icon)
- [m-button](../m-button)

### Graph
```mermaid
graph TD;
  m-dialog --> m-icon
  m-dialog --> m-button
  m-button --> m-icon
  style m-dialog fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
