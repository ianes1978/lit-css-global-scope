# lit-css-global-scope
It simple import global styleSheet from document Object. it is usefull to import a glogal style in a webcomponent builded with **lit-element**

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
```
import { LitElement, html, css } from 'lit-element';
import {globalStyle} from 'lit-css-global-scope'




class cssComponent extends LitElement {
  static get styles() {
    return [
      globalStyle
      ,
      css`
      .btn-secondary{
        background-color: violet
      }
   
      `
    ];
  }
  static get properties() {
    return {
      myString: { type: String },
      myArray: { type: Array },
      myBool: { type: Boolean }
    };
  }
  constructor() {
    super();
    this.myString = 'Hello World';
    this.myArray = ['an', 'array', 'of', 'test', 'data'];
    this.myBool = true;

  }
  render() {
    return html`
    <h3>Webcomponent with external style (Bootstrap)</h3>
      <div class="card" >
        <div class="card-body">
  
        <ul>
        ${this.myArray.map(i => html`<li>${i}</li>`)}
      </ul>
      ${this.myBool ?
        html`<p>Render some HTML if myBool is true</p>` :
        html`<p>Render some other HTML if myBool is false</p>`}
  </div>
</div>

     
    `;
  }
}

customElements.define('css-component', cssComponent);```
