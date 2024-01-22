const root=document.querySelector("#root")

//react tree graph this is continus create a element and render root div
const reactElement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  children:'Click to redrect Google'
}

//this code rendering function root element
// const customRender=(reactElement,rendercontainer)=>{
//   let domElement= document.createElement(reactElement.type)
//   domElement.setAttribute('href',reactElement.props.href)
//   domElement.setAttribute('target',reactElement.props.target)
//   domElement.innerHTML=reactElement.children
//   root.appendChild(domElement)
// }

//moduler rendaring function

const customRender=(reactElement,rendercontainer)=>{
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
      if(prop==='children') continue; //object props under children exit to skip to itreation
      domElement.setAttribute(prop,reactElement.props[prop])
    }
    root.appendChild(domElement)
}

customRender(reactElement,root)