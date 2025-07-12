import{j as D}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-B8f_IbO7.js";const o=["bg-[#F36F45] hover:bg-[#e6653e]","bg-[#8769FF] hover:bg-[#7a5bf2]","bg-[#61D1EA] hover:bg-[#52c4de]","bg-[#FFB74D] hover:bg-[#f6a43f]","bg-[#FF6F61] hover:bg-[#e65c54]","bg-[#4CAF50] hover:bg-[#43a047]","bg-[#9C27B0] hover:bg-[#8e24aa]"],h=({id:f,label:v,className:x="",onClick:k})=>{const F=f%o.length,y=o[F];return D.jsx("span",{onClick:k,className:`
        px-4 py-2
        ${y}
        text-white
        rounded-full
        text-sm
        cursor-pointer
        transition-all duration-200
        hover:scale-105
        ${x}
      `,children:v})};h.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{id:{required:!0,tsType:{name:"number"},description:""},label:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const q={title:"Components/Chip",component:h,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#111"}]}},argTypes:{id:{control:{type:"number",min:0},description:"Usado para variar el color del chip."},label:{control:"text",description:"Texto mostrado dentro del chip."},className:{control:"text",description:"Clases adicionales para modificar estilo."},onClick:{action:"clicked",description:"Función llamada al hacer click."}},args:{id:2,label:"Comedia"}},e={},r={args:{id:5,label:"Acción"}},a={args:{id:3,label:"Drama",className:"uppercase tracking-wider"}},s={args:{id:1,label:"Ver más"}};var t,c,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 5,
    label: 'Acción'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 3,
    label: 'Drama',
    className: 'uppercase tracking-wider'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 1,
    label: 'Ver más'
  }
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const w=["Default","CustomColor","WithCustomClass","Clickable"];export{s as Clickable,r as CustomColor,e as Default,a as WithCustomClass,w as __namedExportsOrder,q as default};
