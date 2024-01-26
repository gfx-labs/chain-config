import ejs from "ejs"
import {MAINNET_CHAINS, IChainInfo} from "."
import { mkdirSync, writeFileSync } from "fs"
import init, { format } from '@wasm-fmt/gofmt';
import * as morph from "ts-morph"

const formatFunc = format

const project = new morph.Project({
})

project.addSourceFilesAtPaths("src/**/*.ts")

const index = project.getSourceFile("src/spec/index.ts")

const IChainInfo = index?.getInterface("IChainInfo")
const UniswapMetadata = index?.getInterface("UniswapMetadata")
const TokenMetadata = index?.getInterface("TokenMetadata")
const OkuMetadata = index?.getInterface("OkuMetadata")
const OkuPricingMetadata = index?.getInterface("OkuPricingMetadata")
const ChainContract = index?.getInterface("chainContract")


const rootDir = `${__dirname}/dist/networks`
mkdirSync(rootDir, {recursive: true})

const networkString = ejs.fileLoader(`${__dirname}/templates/network.ejs`)
const networksString = ejs.fileLoader(`${__dirname}/templates/networks.ejs`)

function capitalize(s:string){
  return s[0].toUpperCase() + s.slice(1);
}

const snakeToCamel = (str:string) =>
  capitalize(str.replace(/([-_][a-z])/g, group =>
    group
    .toUpperCase()
    .replace('-', '')
    .replace('_', '')
  ));

const clean = (x:string)=>{
  return x.replace("-","_")
}

const toAddr = (x:string)=>{
  return `common.HexToAddress("${x}")`
}

const getPropType = (x:morph.PropertySignature):string=>{
  const type = x.getType()
  const nodeType = x.getTypeNode()?.getText()
  if(nodeType == "ReadonlyArray<Address>") {
    return "[]common.Address"
  }
  if(type.isArray()) {
    return `[]${getTypeType(type.getArrayElementType()!)}`
  }
  if(nodeType === "Address") {
    return "common.Address"
  }
  if(nodeType === "Address") {
    return "common.Address"
  }
  if(nodeType === "float64") {
    return "float64"
  }
  if(type.isObject() && nodeType) {
    return snakeToCamel(nodeType)
  }
  if(x.getName() == "contracts") {
    return "map[string]ChainContract"
  }
  if (type.isNumber()) {
    return "int64"
  }
  if(type.isTemplateLiteral()) {
    return "string"
  }
  if(type.isString()){
    return "string"
  }
  return ""
}

const getTypeType = (type:morph.Type):string=>{
  if(type.isArray() && type.getArrayElementType()) {
    return `${getTypeType(type.getArrayElementType()!)}[]`
  }
  const typeText = type.getText(undefined, morph.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope)
  if(typeText && typeText[0] != "{") {
    return typeText
  }
  if (type.isNumber()) {
    return "int64"
  }
  if(type.isTemplateLiteral()) {
    return "string"
  }
  if(type.isString()){
    return "string"
  }
  return "any"
}

const displayProp = (x:morph.PropertySignature)=>{
  return `${snakeToCamel(x.getName())} ${getPropType(x)}`
}

const formatValue = (x:any, hint: string) =>{
  if(hint === "a" || hint === "addr" || hint === "address"){
    return toAddr(`${x}`)
  } else if(hint === "s" || hint === "str" || hint==="string") {
    return `"${x}"`
  } else if(hint === "n" || hint === "num") {
    return `${x}`
  } else if (x === undefined) {
    return `undefined`
  }else {
    return `${x}`
  }
}

const isString = (x:any) => {
  return typeof x === "string"
}


const helpers = {
  formatValue,
  isString,
  clean,
  snakeToCamel,
  displayProp,
  toAddr,
}


const output = ejs.render(networksString.toString(), {
  h:helpers,
  helpers,
  IChainInfo,
  UniswapMetadata,
  TokenMetadata,
  ChainContract,
  OkuMetadata,
  OkuPricingMetadata
})


const main = async()=> {
  await init();
  writeFileSync(`${rootDir}/network.go`, formatFunc(output))
  for(const chain of MAINNET_CHAINS) {
    const chainName  = clean(chain.internalName)
    const output = ejs.render(networkString.toString(), {h:helpers, chainName, helpers, chain, entries: Object.entries(chain)})
    writeFileSync(`${rootDir}/${chainName}.go`, formatFunc(output))
  }
}

main().catch(console.error)
