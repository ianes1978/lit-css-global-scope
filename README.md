# lit-css-global-scope
It simple import global styleSheet from document Object. it is usefull to import a glogal style in a webcomponent builded with **lit-element**.
Permit to retains the benefits of shadowdom and global css.
You can use it with boostrap or other css framework

# Use it
### Project setup
```
npm i lit-css-global-scope
```
### Import globalStyle in your webcomponent

**import module:**
```
import {globalStyle} from 'lit-css-global-scope'
```
**use it:**
```
...
class cssComponent extends LitElement {
  static get styles() {
    return [
      globalStyle
    ];
  }
...
```

**Example:**
a complete webcomponent starter with webpack bundler and naturally *lit-css-global-scope*
https://github.com/ianes1978/lit-element-webpack-starter
