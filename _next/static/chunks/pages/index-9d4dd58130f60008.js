(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(56857)}])},56857:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pages}});var a=n(85893),i=n(37247),r=n.n(i),s=n(67294),o=n(36612),l=n.n(o),d=n(96484),p=n(92321),c=n(88168),u=n(92526),m=n(49089);let firstFew=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return e.substring(0,t)},lastFew=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return e.slice(-t)},abbreviateAddressAsString=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;try{return"".concat(firstFew(e,t+1),"...").concat(lastFew(e,t))}catch(e){return null}};function trackEvent(e,t,n,a){m.ZP.event({action:e,category:null!=t?t:"event",label:null!=n?n:"event",value:null!=a?a:0})}var y=n(69417),h=n(85333),f=n(33454),v=n(96420),x=n(21519),g=n(82729),w=n(11496),T=n(98456);function _templateObject(){let e=(0,g._)(["\n  svg {\n    color: ",";\n  }\n"]);return _templateObject=function(){return e},e}let b=(0,w.ZP)("div")(e=>{let{theme:t,fontSize:n="16px"}=e;return{fontSize:n,fontWeight:400,textAlign:"center",color:t.palette.secondary.main}}),j=(0,w.ZP)("div")(e=>{let{theme:t,fontSize:n="16px"}=e;return{fontSize:n,fontWeight:400,textAlign:"center",color:t.palette.subtle.main}}),S=(0,w.ZP)("div")(e=>{let{theme:t,fontSize:n="16px"}=e;return{fontSize:n,fontWeight:400,textAlign:"center",color:t.palette.warning.main}}),_=(0,w.ZP)(e=>{let{...t}=e;return(0,a.jsx)(T.Z,{size:"1rem",...t})})(_templateObject(),e=>{let{theme:t}=e;return t.palette.secondary.main});var F=[{inputs:[{internalType:"string",name:"_uri",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC1155InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC1155InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"idsLength",type:"uint256"},{internalType:"uint256",name:"valuesLength",type:"uint256"}],name:"ERC1155InvalidArrayLength",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC1155InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC1155InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC1155InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"ERC1155MissingApprovalForAll",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"getAllNFTs",outputs:[{internalType:"uint256[8]",name:"counts",type:"uint256[8]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"pure",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],helpers_usePersistState=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=(0,s.useCallback)(()=>{try{let n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(n){return console.warn("Error reading localStorage key “".concat(t,"”:"),n),e}},[e,t]),[i,r]=(0,s.useState)(a()),o=(0,s.useCallback)(e=>{try{let a=e instanceof Function?e(i):e;window.localStorage.setItem(t,JSON.stringify(a)),r(a),n&&window.dispatchEvent(new Event("local-storage"))}catch(e){console.warn("Error setting localStorage key “".concat(t,"”:"),e)}},[t,i,n]);(0,s.useEffect)(()=>{window.localStorage.getItem(t)||localStorage.setItem(t,JSON.stringify(e))},[t,e]);let l=(0,s.useCallback)(e=>{(null==e||!e.key||e.key===t)&&n&&r(a())},[t,a,n]);return(0,s.useEffect)(()=>(window.addEventListener("storage",l),()=>{window.removeEventListener("storage",l)}),[l]),(0,s.useEffect)(()=>(window.addEventListener("local-storage",l),()=>{window.removeEventListener("local-storage",l)}),[l]),[i,o]},k=n(9008),E=n.n(k),C=n(18446),A=n.n(C),N=n(94428),M=n(78481),I=n(10777),Z=n(49321),O=n(37003);let getBaseAPIQueryOptions=e=>({staleTime:e?0:1/0,refetchInterval:null!=e?e:0,refetchIntervalInBackground:!1,retry:5,retryOnMount:!0,retryDelay:e=>(1+2**e)*1e3});var hooks_useNFTBalance=e=>{let{address:t,contractAddress:n,abi:a,chainId:i,refresh:r=!0}=e,fetchNFTBalance=async()=>{if(!i||!t||!(0,Z.U)(t))return null;try{let e=await (0,O.L)(N.wagmiConfig,{address:n,abi:a,functionName:"getAllNFTs",args:[t]});return(null==e?void 0:e.reduce((e,t)=>e+BigInt(t),0n))||0n}catch(e){return console.error("Error fetching NFT balance:",e),null}},s=(0,I.a)({queryKey:["useNFTBalance",i,t,n,a,r],queryFn:fetchNFTBalance,enabled:!!i&&!!t&&(0,Z.U)(t),...getBaseAPIQueryOptions(r?1e5:null)});return s};let B=[{chain:"Sonic",label:"Sonic Test",speed:[],average:-1},{chain:"Fantom",label:"Fantom Opera",speed:[],average:-1},{chain:"Avalanche",label:"Avalanche",speed:[],average:-1}];var pages=()=>{var e,t,n;let[i,o]=(0,s.useState)(void 0),[m,g]=(0,s.useState)(250),[w,T]=(0,s.useState)([]),[k,C]=(0,s.useState)(0),[I,Z]=(0,s.useState)(0),[O,P]=(0,s.useState)(!1),[D,R]=(0,s.useState)(!1),[L,z]=(0,s.useState)(B),[H,U]=helpers_usePersistState(B,"txSpeedHistory"),{address:V,chain:W}=(0,p.m)(),{error:J,chains:X,switchChainAsync:q}=(0,c.o)({config:N.wagmiConfig}),G=(null===(e=process.env)||void 0===e?void 0:"97235759ff6e7ec7545379f2a2046295")||"";(0,s.useEffect)(()=>{console.info("WC","".concat(null==G?void 0:G.slice(0,4),"..."))},[G]);let{open:K}=(0,d.k_)(),handleSwitchChain=async e=>{try{let t=await q({chainId:e});console.info("Switched chain",t)}catch(e){console.error(e)}},Q=(0,s.useCallback)((e,t)=>{let n=H.map(n=>{var a;return(null==n?void 0:null===(a=n.chain)||void 0===a?void 0:a.toLowerCase())===(null==e?void 0:e.toLowerCase())&&(n.speed.push({speed:t,timestamp:Date.now()}),n.average=n.speed.reduce((e,t)=>e+t.speed,0)/n.speed.length),n});U(n)},[H,U]),Y=(0,s.useMemo)(()=>{switch(null==W?void 0:W.id){case 250:case 43114:return"0x493F7909E5CA979646Abb86A81a11701420B784F";case 64165:return"0x2B6639D06A6Aa36B122491d1Cd839253a2324803"}},[null==W?void 0:W.id]),{writeContractAsync:$}=(0,u.S)(),{data:ee,refetch:et}=hooks_useNFTBalance({address:V,contractAddress:Y,abi:F,chainId:null!==(t=null==W?void 0:W.id)&&void 0!==t?t:250}),en=(0,s.useMemo)(()=>i&&O,[i,O]),onMint=async()=>{P(!0);try{let e=await $({address:Y,abi:F,functionName:"mint",args:[]});console.info("START",Date.now()),C(Date.now());let t=Date.now(),n=await (0,M.e)(N.wagmiConfig,{hash:e,onReplaced:e=>console.info("Tx replaced:",e)});if("success"===n.status){let e=Date.now()-t;console.info("Time taken ".concat(e,"ms")),Q((null==W?void 0:W.name)||"unknown",e),et(),trackEvent("".concat(null==W?void 0:W.name," tx"),void 0,void 0,e<1e3?100*Math.round(e/100):500*Math.round(e/500))}else console.error("Tx failed",n);P(!1),Z(0),C(0)}catch(e){P(!1),Z(0),C(0),console.error(e),trackEvent("Mint Error","Contract")}};return(0,s.useEffect)(()=>{if(O){let e=setInterval(()=>{Z(k>0?(Date.now()-k)/1e3:0)},100);return()=>clearInterval(e)}},[O,k]),(0,s.useEffect)(()=>{m&&(null==X?void 0:X.length)&&R(!!X.find(e=>e.id===m))},[X,m]),(0,s.useEffect)(()=>{V?o(V):o(void 0)},[V]),(0,s.useEffect)(()=>{H?z(H):z(B)},[H]),(0,s.useEffect)(()=>{if(X&&!A()(X,w)){let e=[...X];T(e)}},[X,w]),(0,s.useEffect)(()=>{(null==W?void 0:W.id)&&(null==W?void 0:W.id)!==m&&g(W.id)},[null==W?void 0:W.id,m]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(E(),{children:[(0,a.jsx)("title",{children:"Fantom Sonic"}),(0,a.jsx)("meta",{name:"description",content:"Test the speed of Fantom FVM"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("meta",{name:"keywords",content:"fantom, sonic, fvm, testnet, transactions, speed, tps, crypto"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Fantom Sonic - Test the speed of Fantom FVM"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://sonic.paintswap.io/og.png"}),(0,a.jsx)("meta",{name:"twitter:domain",content:"sonic.paintswap.io"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@paintoshi"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@paintoshi"}),(0,a.jsx)("meta",{name:"twitter:description",content:"Fantom Sonic - Test the speed of Fantom FVM"}),(0,a.jsx)("meta",{property:"og:title",content:"Fantom Sonic - Test the speed of Fantom FVM"}),(0,a.jsx)("meta",{property:"og:description",content:"The upcoming Fantom network"}),(0,a.jsx)("meta",{property:"og:image",content:"https://sonic.paintswap.io/og.png"}),(0,a.jsx)("meta",{property:"og:url",content:"https://sonic.paintswap.io"})]}),(0,a.jsx)("main",{className:"".concat(l().main," ").concat(r().className),children:(0,a.jsx)("div",{className:l().center,children:(0,a.jsxs)("div",{className:l().mainPanel,children:[(0,a.jsx)("h1",{className:l().title,children:"Fantom Sonic"}),(0,a.jsxs)("p",{className:l().titleSub,children:["Compare Sonic with other networks",(0,a.jsx)("br",{})]}),i&&(0,a.jsx)(y.Z,{variant:"contained",color:"primary",onClick:()=>K(),children:abbreviateAddressAsString(null!=V?V:"N/A")}),!i&&(0,a.jsx)(y.Z,{variant:"contained",color:"primary",onClick:()=>K(),children:"Connect"}),i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{mt:"16px",mb:"4px",children:(0,a.jsx)(j,{children:"Choose Network"})}),(0,a.jsx)(f.Z,{color:"primary",value:m,exclusive:!0,onChange:(e,t)=>{g(t)},"aria-label":"Network",children:w.map(e=>(0,a.jsx)(v.Z,{disabled:e.id===(null==W?void 0:W.id)||!i||O,onClick:()=>handleSwitchChain(e.id),value:e.id,size:"small",sx:{paddingBottom:"5px"},children:e.name},e.id))}),(null==W?void 0:W.id)===64165&&(0,a.jsx)(h.Z,{mt:"8px",children:(0,a.jsx)(b,{fontSize:"14px",children:(0,a.jsx)("a",{href:"https://testnet.soniclabs.com/account",target:"_blank",children:"Get Free Sonic $S"})})})]}),(0,a.jsxs)(h.Z,{mt:"8px",children:[(0,a.jsx)(S,{fontSize:"14px",children:J&&J.message}),!D&&!!i&&(0,a.jsx)(S,{fontSize:"14px",children:"Unsupported Network Detected"})]}),(0,a.jsx)(h.Z,{width:"100%",mt:"16px",mb:"16px",children:(0,a.jsx)(x.Z,{})}),(0,a.jsx)(y.Z,{variant:"contained",color:"primary",disabled:!i||O||!D,onClick:onMint,startIcon:en?(0,a.jsx)(_,{}):null,sx:{textTransform:"unset"},children:en?"Minting (".concat(I.toFixed(1)," sec)"):"Mint NFT"}),(0,a.jsx)(h.Z,{mt:"8px",children:(0,a.jsxs)(b,{fontSize:"14px",children:["Owned: ",null!==(n=null==ee?void 0:ee.toString())&&void 0!==n?n:0," NFTs"]})}),(0,a.jsx)(h.Z,{width:"100%",mt:"16px",mb:"16px",children:(0,a.jsx)(x.Z,{})}),(0,a.jsx)(h.Z,{width:"100%",display:"flex",justifyContent:"space-around",flexDirection:"row",mt:"8px",children:L.map(e=>(0,a.jsxs)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",minWidth:"80px",children:[(0,a.jsx)(b,{children:e.label}),(0,a.jsx)(b,{fontSize:"12px",children:e.average>0?"Avg: ".concat(Number((e.average||0)/1e3).toFixed(1)," s"):"Avg: -"}),e.speed.slice().reverse().map(e=>(0,a.jsxs)(j,{children:[Number((e.speed||0)/1e3).toFixed(1)," s"]},e.timestamp))]},e.chain))}),(0,a.jsx)(h.Z,{alignItems:"center",mt:"16px",children:(0,a.jsx)(y.Z,{variant:"text",size:"small",onClick:()=>U(B),style:{lineHeight:1.2},children:"Clear Speed History"})}),(0,a.jsx)(h.Z,{width:"100%",mt:"16px",mb:"16px",children:(0,a.jsx)(x.Z,{})}),(0,a.jsx)(h.Z,{mb:"0",children:(0,a.jsx)("a",{href:"https://github.com/PaintSwap/fantom-sonic-frontend",target:"_blank",children:"Github Source"})}),(0,a.jsx)(h.Z,{mt:"8px",children:(0,a.jsx)("a",{href:"https://testnet.soniclabs.com",target:"_blank",children:"Fantom Sonic Open Dashboard"})})]})})})]})}},36612:function(e){e.exports={main:"Home_main__VkIEL",center:"Home_center__O_TIN",title:"Home_title__hYX6j",titleSub:"Home_titleSub__nszZn",sub:"Home_sub__3Mk3_",mainPanel:"Home_mainPanel__6Ksuj"}}},function(e){e.O(0,[20,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);