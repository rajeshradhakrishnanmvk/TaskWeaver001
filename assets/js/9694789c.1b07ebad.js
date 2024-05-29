"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2318],{941:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var n=t(5893),o=t(1151);const r={id:"code_verification",description:"Code Verification",slug:"code_verification"},c="Code Verification",d={id:"code_verification",title:"Code Verification",description:"Code Verification",source:"@site/docs/verification.md",sourceDirName:".",slug:"/code_verification",permalink:"/TaskWeaver/docs/code_verification",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/verification.md",tags:[],version:"current",frontMatter:{id:"code_verification",description:"Code Verification",slug:"code_verification"},sidebar:"documentSidebar",previous:{title:"Experience",permalink:"/TaskWeaver/docs/experience"},next:{title:"Code Execution",permalink:"/TaskWeaver/docs/code_execution"}},s={},a=[{value:"Why do we need code verification?",id:"why-do-we-need-code-verification",level:2},{value:"How to use code verification?",id:"how-to-use-code-verification",level:2},{value:"How is code verification implemented?",id:"how-is-code-verification-implemented",level:2}];function l(e){const i={br:"br",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"code-verification",children:"Code Verification"}),"\n",(0,n.jsx)(i.h2,{id:"why-do-we-need-code-verification",children:"Why do we need code verification?"}),"\n",(0,n.jsx)(i.p,{children:"Agent developers may want to verify the generated code before running it.\nIn the following example shown in the figure, the generated code is"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:'import os\n\nfile = open("abc.py", "r")\ncode = file.read()\nexec(code)\n'})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Code verification workflow",src:t(8756).Z+"",width:"760",height:"351"})}),"\n",(0,n.jsx)(i.p,{children:"In this case, the generated code read the content of a file and execute it, which is potentially dangerous.\nTo prevent this, we can use code verification to check the generated code before running it.\nIf the code does not pass the verification, the errors will be reported to the CodeGenerator to re-generate the code."}),"\n",(0,n.jsx)(i.h2,{id:"how-to-use-code-verification",children:"How to use code verification?"}),"\n",(0,n.jsxs)(i.p,{children:["To use code verification, you can add the configuration ",(0,n.jsx)(i.code,{children:'"code_interpreter.code_verification_on": true'}),"\nin the project configuration file ",(0,n.jsx)(i.code,{children:"taskweaver_config.json"}),".\nThen, the generated code will be verified before running it."]}),"\n",(0,n.jsx)(i.p,{children:"After enabling code verification, you can also specify the code verification rules in the project configuration file."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Parameter"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Default"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"code_interpreter.allowed_modules"}),(0,n.jsx)(i.td,{children:"The list of allowed modules to import in code generation."}),(0,n.jsx)(i.td,{children:'["pandas", "matplotlib", "numpy", "sklearn", "scipy", "seaborn", "datetime", "typing"], if the list is empty, no modules would be allowed'})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"code_interpreter.blocked_functions"}),(0,n.jsx)(i.td,{children:"The list of functions to block from code generation."}),(0,n.jsx)(i.td,{children:'["__import__","eval", "exec", "execfile", "compile", "open", "input", "raw_input", "reload"]'})]})]})]}),"\n",(0,n.jsxs)(i.p,{children:["We currently support checking the allowed modules and blocked functions.\nIf a module is in the ",(0,n.jsx)(i.code,{children:"allowed_modules"})," list, it can be imported in the generated code.\nIf a function is in the ",(0,n.jsx)(i.code,{children:"blocked_functions"})," list, it cannot be used in the generated code."]}),"\n",(0,n.jsx)(i.h2,{id:"how-is-code-verification-implemented",children:"How is code verification implemented?"}),"\n",(0,n.jsxs)(i.p,{children:["The code verification is implemented in two parts.\nFirst, we add instructions to CodeGenerator's prompt, so it generates code following the required rules.\nFor example, if we don't want the generated code to import the ",(0,n.jsx)(i.code,{children:"os"})," module,\nwe will add an instruction to the prompt to tell CodeGenerator not to import the ",(0,n.jsx)(i.code,{children:"os"})," module."]}),"\n",(0,n.jsxs)(i.p,{children:["Second, we conduct a static analysis on the generated code to check if it follows the required rules.\nThe code is parsed into an AST (Abstract Syntax Tree) and we check if the AST",(0,n.jsx)(i.br,{}),"\n","only imports the allowed modules, and does not use the blocked functions.\nThe implementation of the static analysis can be found in ",(0,n.jsx)(i.code,{children:"taskweaver/code_interpreter/code_verification.py"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8756:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/code_verification-352e772bbe2d5ab3f4db8ec6ff87b129.png"},1151:(e,i,t)=>{t.d(i,{Z:()=>d,a:()=>c});var n=t(7294);const o={},r=n.createContext(o);function c(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);