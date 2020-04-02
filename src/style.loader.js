import { css } from 'lit-html';
const styleRules = Object.values(document.styleSheets).reduce((obj,styleSheet)=>{
   return obj = [...obj,...Object.values(styleSheet.cssRules)]
   },[])
   
   let externalStyles =  styleRules.map(rule=>rule.cssText).join('\n');
   externalStyles = externalStyles.replace(/html {/g,":host {");
   externalStyles = externalStyles.replace(/@import/g,"/@import");
   const globalStyle = css([externalStyles]);

export {globalStyle};