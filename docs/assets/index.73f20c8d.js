import{E as p,a as u}from"./request.b4a64b5c.js";import"./index.94e95786.js";import{d as g,H as k,j as f,c as i,k as v,l as I,F as $,I as s,n as U}from"./vendor.9d9fa5c6.js";var b=(e,a)=>{const n=e.__vccOpts||e;for(const[o,m]of a)n[o]=m;return n};const V=g({components:{MdEditor:p,Modal:k},data(){return{text:`# 123 
\u54C8\u54C8\u54C8\u54C8
# 456

`,text2:`# 123 
\u54C8\u54C8\u54C8\u54C8
# 456

`,text3:`# 123 
\u54C8\u54C8\u54C8\u54C8
# 456

`,visible:!1}},methods:{markedHeading(e,a,n){return`<h${a} id="${n}" ddd>${e}</h${a}>`},markedImage(e,a,n){return`<img src="${e}" alt="${n}">`},onUploadImg:async(e,a)=>{const n=await Promise.all(Array.from(e).map(o=>new Promise((m,l)=>{const t=new FormData;t.append("file",o),u.post("/api/img/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>m(r)).catch(r=>l(r))})));a(n.map(o=>o.data.url))}}});function h(e,a,n,o,m,l){const t=s("md-editor"),r=s("Modal");return U(),f($,null,[i(t,{"editor-id":"md1",modelValue:e.text,"onUpdate:modelValue":a[0]||(a[0]=d=>e.text=d),"marked-image":e.markedImage,"marked-heading":e.markedHeading,onOnUploadImg:e.onUploadImg},null,8,["modelValue","marked-image","marked-heading","onOnUploadImg"]),v("button",{onClick:a[1]||(a[1]=d=>e.visible=!0)},"\u6253\u5F00"),i(r,{visible:e.visible,"onUpdate:visible":a[3]||(a[3]=d=>e.visible=d),title:"Basic Modal",width:"1100px"},{default:I(()=>[i(t,{"editor-id":"md3",modelValue:e.text2,"onUpdate:modelValue":a[2]||(a[2]=d=>e.text2=d),"marked-heading":e.markedHeading,onOnUploadImg:e.onUploadImg},null,8,["modelValue","marked-heading","onOnUploadImg"])]),_:1},8,["visible"])],64)}var O=b(V,[["render",h]]);export{O as default};
