import{E as r,a as n}from"./request.3334c732.js";import{v as c}from"./package.bb649019.js";import{d,q as i,u as l,o as m,w as u,c as t}from"./vendor.349f4da7.js";var w=d({name:"PageAbout",props:{theme:String},setup(){const a=i(),e=l(),s=()=>{n.get(`/about-${e.state.lang}.md`).then(({data:o})=>{a.value=o.replace(/\$\{EDITOR_VERSION\}/g,c)}).catch(o=>{console.error(o),a.value="\u6587\u6863\u8BFB\u53D6\u5931\u8D25\uFF01"})};return m(s),u(()=>e.state.lang,s),()=>t("div",{class:"container"},[t("div",{class:"doc"},[t("div",{class:"content",style:{width:"100%"}},[t(r,{theme:e.state.theme,modelValue:a.value,previewTheme:e.state.previewTheme,previewOnly:!0,showCodeRowNumber:!0},null)])])])}});export{w as default};
