import"./chunk-KOBKAUWM.js";import{a as D,b as xe,c as ve,d as ke,e as Ce,f as we}from"./chunk-DSDFL25R.js";import"./chunk-V4UBU5D2.js";import{d as _e,f as ye,h as L}from"./chunk-R3IBKFIT.js";import{b as se,d as c,e as ce,f as de,h as me,i as pe,j as ue,k as he,o as ge,p as fe,q as be}from"./chunk-ODGEEVS2.js";import{c as Y}from"./chunk-ILD7MHHQ.js";import{a as le}from"./chunk-XZOCOEIK.js";import{$a as E,Aa as v,Ac as ae,Bc as re,Cc as oe,Fa as G,Ja as T,Ka as h,La as g,Lb as K,Mb as U,O as y,Pa as f,Q as A,Qa as r,Ra as t,S as d,Sa as s,W as C,Wa as O,Wb as Q,X as w,Xa as W,Ya as _,Za as p,_a as F,bb as V,ca as q,cb as P,db as N,f as H,fa as x,fc as $,gc as X,jb as S,ka as j,lb as a,lc as J,nb as I,nc as Z,pa as m,rc as ee,uc as te,vc as ie,xc as k,yc as ne,za as b}from"./chunk-T4G24DHU.js";var Se=(()=>{class i{_animationsDisabled=ee();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=b({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(l,n){l&2&&S("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(l,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var Ne=["text"],Le=[[["mat-icon"]],"*"],Be=["mat-icon","*"];function ze(i,o){if(i&1&&s(0,"mat-pseudo-checkbox",1),i&2){let e=p();f("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function He(i,o){if(i&1&&s(0,"mat-pseudo-checkbox",3),i&2){let e=p();f("disabled",e.disabled)}}function qe(i,o){if(i&1&&(r(0,"span",4),a(1),t()),i&2){let e=p();m(),I("(",e.group.label,")")}}var je=new A("MAT_OPTION_PARENT_COMPONENT"),Ge=new A("MatOptgroup");var B=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}},Me=(()=>{class i{_element=d(j);_changeDetectorRef=d(K);_parent=d(je,{optional:!0});group=d(Ge,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(Z).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=x(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new q;_text;_stateChanges=new H;constructor(){let e=d($);e.load(ie),e.load(X),this._signalDisableRipple=!!this._parent&&G(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,l){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(l)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!J(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new B(this,e))}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=b({type:i,selectors:[["mat-option"]],viewQuery:function(l,n){if(l&1&&V(Ne,7),l&2){let u;P(u=N())&&(n._text=u.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(l,n){l&1&&_("click",function(){return n._selectViaInteraction()})("keydown",function(R){return n._handleKeydown(R)}),l&2&&(W("id",n.id),T("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),S("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",U]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Be,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(l,n){l&1&&(F(Le),h(0,ze,1,2,"mat-pseudo-checkbox",1),E(1),r(2,"span",2,0),E(4,1),t(),h(5,He,1,1,"mat-pseudo-checkbox",3),h(6,qe,2,1,"span",4),s(7,"div",5)),l&2&&(g(n.multiple?0:-1),m(5),g(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),m(),g(n.group&&n.group._inert?6:-1),m(),f("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[Se,te],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();var Oe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=v({type:i});static \u0275inj=y({imports:[k]})}return i})();var z=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=v({type:i});static \u0275inj=y({imports:[ne,Oe,Me,k]})}return i})();var Ee=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=v({type:i});static \u0275inj=y({imports:[ke,z,k,ve,D,z]})}return i})();function We(i,o){if(i&1){let e=O();r(0,"div",1)(1,"div",3)(2,"mat-icon",4),a(3,"lock"),t()(),r(4,"div",5)(5,"h2",6),a(6,"Acc\xE8s Restreint"),t(),r(7,"p",7),a(8,"Seuls les agents asserment\xE9s peuvent enregistrer des parcelles sur la blockchain."),t()(),r(9,"button",8),_("click",function(){C(e);let n=p();return w(n.login())}),r(10,"mat-icon"),a(11,"login"),t(),a(12," Se connecter avec Google "),t(),r(13,"button",9),_("click",function(){C(e);let n=p();return w(n.demoLogin())}),a(14," Utiliser l'acc\xE8s D\xE9mo Agent "),t()()}}function Ke(i,o){i&1&&(r(0,"mat-icon",63),a(1,"sync"),t(),a(2," D\xE9marrage Etape 1... "))}function Ue(i,o){i&1&&(r(0,"mat-icon",64),a(1,"add_task"),t(),a(2," INITIER LE DRAFT (ETAPE 1) "))}function Qe(i,o){if(i&1){let e=O();r(0,"div",2)(1,"div",10)(2,"div",11)(3,"div",12),a(4,"Op\xE9ration de Cadastre (Brazzaville)"),t(),r(5,"h2",13),a(6,"Nouvel Enregistrement"),t(),r(7,"p",14),a(8,"Insertion d'une nouvelle parcelle dans le ledger Hyperledger Fabric."),t()(),r(9,"div",15)(10,"button",16),_("click",function(){C(e);let n=p();return w(n.onSubmit())}),h(11,Ke,3,0)(12,Ue,3,0),t()()(),r(13,"div",17)(14,"div",18)(15,"div",19)(16,"form",20)(17,"div",21)(18,"h3",22)(19,"span",23),a(20,"1"),t(),a(21," Identification de la Parcelle "),t(),r(22,"div",24)(23,"div",5)(24,"label",25),a(25,"ID Unique (ex: bz-456)"),t(),s(26,"input",26),t(),r(27,"div",5)(28,"label",27),a(29,"R\xE9f. Cadastrale Nationale"),t(),s(30,"input",28),t(),r(31,"div",5)(32,"label",29),a(33,"Ville"),t(),s(34,"input",30),t(),r(35,"div",5)(36,"label",31),a(37,"Quartier / Arrondissement"),t(),s(38,"input",32),t(),r(39,"div",5)(40,"label",33),a(41,"Surface (m\xB2)"),t(),r(42,"div",34),s(43,"input",35),r(44,"span",36),a(45,"M\xB2"),t()()(),r(46,"div",5)(47,"label",37),a(48,"Valeur Estim\xE9e (XAF)"),t(),s(49,"input",38),t()()(),r(50,"div",39)(51,"h3",22)(52,"span",23),a(53,"2"),t(),a(54," Signatures Asserment\xE9es (Blockchain) "),t(),r(55,"div",40)(56,"div",5)(57,"label",41),a(58,"Agent Foncier (V1)"),t(),s(59,"input",42),t(),r(60,"div",5)(61,"label",43),a(62,"G\xE9om\xE8tre Agr\xE9\xE9 (V2)"),t(),s(63,"input",44),t(),r(64,"div",5)(65,"label",45),a(66,"Repr\xE9sentant Local (V3)"),t(),s(67,"input",46),t()()(),r(68,"div",39)(69,"h3",22)(70,"span",23),a(71,"3"),t(),a(72," Titulaire du Droit Foncier "),t(),r(73,"div",47)(74,"div",5)(75,"label",48),a(76,"Identit\xE9 Souveraine (ID)"),t(),s(77,"input",49),t()()()()()(),r(78,"div",21)(79,"div",50)(80,"h3",51),a(81,"Empreinte Num\xE9rique"),t(),r(82,"div",21)(83,"div",5)(84,"div",52),a(85,"Document Hash (SHA-256)"),t(),r(86,"div",53),a(87),t()(),r(88,"div",54)(89,"div",55),a(90,"Architecture Blockchain"),t(),r(91,"div",56),a(92,"Hyperledger Fabric + MySQL"),t()()()(),r(93,"div",57)(94,"h3",58),a(95,"Contraintes Critiques"),t(),r(96,"div",59)(97,"div",60)(98,"mat-icon",61),a(99,"check_circle"),t(),r(100,"p",62),a(101,"Trois signatures obligatoires pour le minting."),t()(),r(102,"div",60)(103,"mat-icon",61),a(104,"check_circle"),t(),r(105,"p",62),a(106,"P\xE9riode de latence consensus : 2-3 secondes."),t()()()()()()()}if(i&2){let e=p();m(10),f("disabled",e.parcelForm.invalid||e.loading()),m(),g(e.loading()?11:12),m(5),f("formGroup",e.parcelForm),m(71),I(" ",e.generatedHash()||"G\xE9n\xE9ration automatique..."," ")}}var Ie=class i{fb=d(ge);snackBar=d(Ce);router=d(Y);fancierChain=d(le);user=x(null);loading=x(!1);generatedHash=x("");parcelForm;constructor(){this.parcelForm=this.fb.group({parcelId:["",[c.required]],cadastralId:["",[c.required]],city:["Brazzaville",[c.required]],neighborhood:["",[c.required]],surface:[null,[c.required,c.min(1)]],price:[null,[c.required,c.min(0)]],currentOwner:["",[c.required]],signatureV1:["",[c.required]],signatureV2:["",[c.required]],signatureV3:["",[c.required]]}),this.parcelForm.valueChanges.subscribe(o=>{this.updateHash(o)})}ngOnInit(){L.onAuthStateChanged(o=>this.user.set(o))}async login(){this.loading.set(!0);try{let o=new _e;o.setCustomParameters({prompt:"select_account"}),await ye(L,o)}catch(o){console.error("Login error:",o),this.snackBar.open("Erreur de connexion.","Fermer",{duration:5e3})}finally{this.loading.set(!1)}}demoLogin(){let o={uid:"demo-agent-id",email:"demo@foncierchain.local",displayName:"Agent D\xE9mo Brazzaville",photoURL:null};this.user.set(o),this.snackBar.open("Connect\xE9 en tant qu'agent d\xE9mo","Fermer",{duration:3e3})}async updateHash(o){let e=o.parcelId,l=o.cadastralId,n=o.currentOwner,u=o.surface;if(!e||!l){this.generatedHash.set("");return}let R=`${e}-${l}-${n}-${u}`,De=new TextEncoder().encode(R),Re=await crypto.subtle.digest("SHA-256",De),Ae=Array.from(new Uint8Array(Re));this.generatedHash.set(Ae.map(Te=>Te.toString(16).padStart(2,"0")).join(""))}async onSubmit(){if(this.parcelForm.invalid)return;this.loading.set(!0);let o=this.parcelForm.getRawValue(),e=o.parcelId.trim(),l={id:e,owner:o.currentOwner,city:o.city,neighborhood:o.neighborhood,address:`${o.neighborhood}, ${o.city}`,cadastralId:o.cadastralId,area:o.surface,price:o.price,signatureV2:o.signatureV2,documentHash:this.generatedHash()};this.fancierChain.initiateDraft(l).subscribe({next:n=>{this.snackBar.open(`\xC9tape 1 compl\xE9t\xE9e : DRAFT ${n.assetId} initi\xE9. Tx: ${n.txId}`,"Fermer",{duration:5e3}),this.router.navigate(["/portal"],{queryParams:{id:e}})},error:n=>{console.error("Submit error:",n);let u=n.error?.error||"\xC9chec de l'op\xE9ration via l'API.";this.snackBar.open(u,"Fermer",{duration:1e4}),this.loading.set(!1)}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-register-parcel"]],decls:3,vars:1,consts:[[1,"animate-fade-in","max-w-6xl","mx-auto","py-8"],[1,"glass-card","max-w-md","mx-auto","p-12","text-center","space-y-8","shadow-2xl"],[1,"space-y-8"],[1,"h-16","w-16","rounded-3xl","bg-[--primary]/10","flex","items-center","justify-center","text-[--primary]","mx-auto"],[1,"!text-3xl"],[1,"space-y-2"],[1,"text-2xl","font-bold","text-white"],[1,"text-xs","text-slate-500"],[1,"w-full","bg-[--primary]","hover:bg-[--primary-hover]","text-white","py-4","rounded-xl","font-bold","flex","items-center","justify-center","gap-3","transition-all","shadow-xl","shadow-[--primary]/20",3,"click"],[1,"w-full","bg-white/5","hover:bg-white/10","text-white","py-3","rounded-xl","text-xs","font-bold","transition-all","border","border-white/10",3,"click"],[1,"flex","flex-col","md:flex-row","justify-between","items-start","md:items-end","gap-4"],[1,"space-y-1"],[1,"text-[10px]","font-bold","text-[--primary]","uppercase","tracking-widest"],[1,"text-3xl","font-bold","text-white","tracking-tight"],[1,"text-sm","text-slate-500"],[1,"flex","gap-3","w-full","md:w-auto"],[1,"flex-1","md:flex-none","bg-[--primary]","hover:bg-[--primary-hover]","text-white","px-8","py-3","rounded-xl","text-xs","font-bold","flex","items-center","justify-center","gap-2","shadow-2xl","shadow-[--primary]/20","transition-all","hover:scale-[1.02]","active:scale-[0.98]",3,"click","disabled"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-8"],[1,"lg:col-span-2","space-y-8"],[1,"glass-card","p-8","md:p-10","border","border-white/5","bg-gradient-to-br","from-white/[0.03]","to-transparent"],[1,"space-y-10",3,"formGroup"],[1,"space-y-6"],[1,"text-xs","font-bold","text-white","uppercase","tracking-widest","flex","items-center","gap-3"],[1,"h-6","w-6","rounded-lg","bg-[--primary]/10","flex","items-center","justify-center","text-[--primary]","text-[10px]"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6"],["for","reg-parcelId",1,"text-[10px]","font-bold","text-slate-500","uppercase","tracking-widest","ml-1"],["id","reg-parcelId","formControlName","parcelId","placeholder","ex: bz-456",1,"w-full","bg-black/40","border","border-white/10","rounded-xl","px-4","py-3","text-white","text-xs","outline-none","focus:border-[--primary]","transition-all","placeholder:text-slate-700"],["for","reg-cadastralId",1,"text-[10px]","font-bold","text-slate-500","uppercase","tracking-widest","ml-1"],["id","reg-cadastralId","formControlName","cadastralId","placeholder","ex: REF-CONGO-1234",1,"w-full","bg-black/40","border","border-white/10","rounded-xl","px-4","py-3","text-white","text-xs","outline-none","focus:border-[--primary]","transition-all"],["for","reg-city",1,"text-[10px]","font-bold","text-slate-500","uppercase","tracking-widest","ml-1"],["id","reg-city","formControlName","city",1,"w-full","bg-black/40","border","border-white/10","rounded-xl","px-4","py-3","text-white","text-xs","outline-none","focus:border-[--primary]","transition-all"],["for","reg-neighborhood",1,"text-[10px]","font-bold","text-slate-500","uppercase","tracking-widest","ml-1"],["id","reg-neighborhood","formControlName","neighborhood","placeholder","ex: Poto-Poto",1,"w-full","bg-black/40","border","border-white/10","rounded-xl","px-4","py-3","text-white","text-xs","outline-none","focus:border-[--primary]","transition-all"],["for","reg-surface",1,"text-[10px]","font-bold","text-slate-500","uppercase","tracking-widest","ml-1"],[1,"relative"],["id","reg-surface","type","number","formControlName","surface",1,"w-full","bg-black/40","border","border-white/10","rounded-xl","px-4","py-3","text-white","text-xs","outline-none","focus:border-[--primary]","transition-all"],[1,"absolute","right-4","top-1/2","-translate-y-1/2","text-slate-600","text-[9px]","font-bold"],["for","reg-price",1,"text-[10px]","font-bold","text-slate-500","uppercase","tracking-widest","ml-1"],["id","reg-price","type","number","formControlName","price",1,"w-full","bg-black/40","border","border-white/10","rounded-xl","px-4","py-3","text-white","text-xs","outline-none","focus:border-[--primary]","transition-all"],[1,"space-y-6","pt-4","border-t","border-white/5"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-6","pt-2"],["for","reg-sig1",1,"text-[9px]","font-bold","text-slate-500","uppercase","tracking-widest","ml-1"],["id","reg-sig1","formControlName","signatureV1","placeholder","Signature ID",1,"w-full","bg-black/40","border","border-white/10","rounded-xl","px-4","py-3","text-white","text-xs","outline-none","focus:border-[--primary]","transition-all"],["for","reg-sig2",1,"text-[9px]","font-bold","text-slate-500","uppercase","tracking-widest","ml-1"],["id","reg-sig2","formControlName","signatureV2","placeholder","Signature ID",1,"w-full","bg-black/40","border","border-white/10","rounded-xl","px-4","py-3","text-white","text-xs","outline-none","focus:border-[--primary]","transition-all"],["for","reg-sig3",1,"text-[9px]","font-bold","text-slate-500","uppercase","tracking-widest","ml-1"],["id","reg-sig3","formControlName","signatureV3","placeholder","Signature ID",1,"w-full","bg-black/40","border","border-white/10","rounded-xl","px-4","py-3","text-white","text-xs","outline-none","focus:border-[--primary]","transition-all"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6","pt-2"],["for","reg-currentOwner",1,"text-[10px]","font-bold","text-slate-500","uppercase","tracking-widest","ml-1"],["id","reg-currentOwner","formControlName","currentOwner","placeholder","Sovereign_Identity_ID",1,"w-full","bg-black/40","border","border-white/10","rounded-xl","px-4","py-3","text-white","text-xs","outline-none","focus:border-[--primary]","transition-all"],[1,"glass-card","p-6","border-l-4","border-l-[--primary]"],[1,"text-xs","font-bold","text-white","uppercase","tracking-widest","mb-6"],[1,"text-[9px]","text-slate-500","uppercase","font-bold","tracking-tighter"],[1,"p-4","bg-black/40","border","border-white/5","rounded-xl","font-mono","text-[9px]","break-all","text-slate-400"],[1,"p-4","rounded-xl","bg-[--primary]/5","border","border-[--primary]/10","text-center"],[1,"text-[9px]","text-[--primary]","uppercase","font-bold","mb-1"],[1,"text-[11px]","text-white","font-bold"],[1,"glass-card","p-8"],[1,"text-[10px]","font-bold","text-white","uppercase","tracking-widest","mb-4"],[1,"space-y-4"],[1,"flex","items-start","gap-3"],[1,"!text-sm","text-[--primary]"],[1,"text-[10px]","text-slate-400","leading-tight"],[1,"animate-spin","!text-sm"],[1,"!text-sm"]],template:function(e,l){e&1&&(r(0,"div",0),h(1,We,15,0,"div",1)(2,Qe,107,4,"div",2),t()),e&2&&(m(),g(l.user()?2:1))},dependencies:[Q,fe,me,se,pe,ce,de,be,he,ue,ae,oe,re,xe,D,Ee,we],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};export{Ie as RegisterParcel};
