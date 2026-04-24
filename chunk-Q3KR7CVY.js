import{b as I,d as we,g as Ce,h as Me}from"./chunk-DIQB5OJJ.js";import{$a as j,A as G,Aa as v,Ac as _e,Ba as D,Bc as Ee,Ca as c,Da as N,Ea as ie,Fb as pe,G as O,Jb as T,Ka as S,Kb as u,La as ae,Lb as ce,Ma as oe,P as M,Qa as q,R as h,Ra as o,Sa as a,T as s,Ta as P,Ua as k,Ub as me,Va as z,Wa as re,Z as K,Za as se,aa as W,ab as m,ac as ue,bb as R,bc as he,c as C,cb as de,da as p,db as y,ea as X,eb as _,f as x,ga as Y,h as U,hc as ge,ia as A,ja as J,jb as le,jc as xe,kb as E,kc as w,la as F,ma as $,mb as r,qa as b,qc as fe,sa as ee,tb as g,ua as ne,uc as be,v as Z,w as f,wa as te,wc as ve,zc as ye}from"./chunk-EBCAHBNG.js";var L=new h("CdkAccordion"),De=(()=>{class t{_stateChanges=new x;_openCloseAllActions=new x;id=s(w).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=c({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",u]},exportAs:["cdkAccordion"],features:[g([{provide:L,useExisting:t}]),A]})}return t})(),Se=(()=>{class t{accordion=s(L,{optional:!0,skipSelf:!0});_changeDetectorRef=s(T);_expansionDispatcher=s(I);_openCloseAllSubscription=C.EMPTY;closed=new p;opened=new p;destroyed=new p;expandedChange=new p;id=s(w).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Y(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=c({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",u],disabled:[2,"disabled","disabled",u]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[g([{provide:L,useValue:void 0}])]})}return t})(),Pe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=D({type:t});static \u0275inj=M({})}return t})();var ze=["body"],je=["bodyWrapper"],Re=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Le=["mat-expansion-panel-header","*","mat-action-row"];function Qe(t,H){}var Be=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Ve=["mat-panel-title","mat-panel-description","*"];function Ue(t,H){t&1&&(k(0,"span",1),K(),k(1,"svg",2),re(2,"path",3),z()())}var Q=new h("MAT_ACCORDION"),ke=new h("MAT_EXPANSION_PANEL"),Ze=(()=>{class t{_template=s(ee);_expansionPanel=s(ke,{optional:!0});constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=c({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),Te=new h("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),B=(()=>{class t extends Se{_viewContainerRef=s(te);_animationsDisabled=fe();_document=s(W);_ngZone=s(X);_elementRef=s(F);_renderer=s(ne);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new p;afterCollapse=new p;_inputChanges=new x;accordion=s(Q,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=s(w).getId("mat-expansion-panel-header-");constructor(){super();let e=s(Te,{optional:!0});this._expansionDispatcher=s(I),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(O(null),f(()=>this.expanded&&!this._portal),G(1)).subscribe(()=>{this._portal=new we(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=v({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,l){if(n&1&&R(l,Ze,5),n&2){let d;y(d=_())&&(i._lazyContent=d.first)}},viewQuery:function(n,i){if(n&1&&de(ze,5)(je,5),n&2){let l;y(l=_())&&(i._body=l.first),y(l=_())&&(i._bodyWrapper=l.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,i){n&2&&E("mat-expanded",i.expanded)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",u],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[g([{provide:Q,useValue:void 0},{provide:ke,useExisting:t}]),N,A],ngContentSelectors:Le,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(j(Re),m(0),o(1,"div",2,0)(3,"div",3,1)(5,"div",4),m(6,1),ie(7,Qe,0,0,"ng-template",5),a(),m(8,2),a()()),n&2&&(b(),S("inert",i.expanded?null:""),b(2),q("id",i.id),S("aria-labelledby",i._headerId),b(4),q("cdkPortalOutlet",i._portal))},dependencies:[Ce],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return t})();var V=(()=>{class t{panel=s(B,{host:!0});_element=s(F);_focusMonitor=s(ue);_changeDetectorRef=s(T);_parentChangeSubscription=C.EMPTY;constructor(){s(he).load(be);let e=this.panel,n=s(Te,{optional:!0}),i=s(new pe("tabindex"),{optional:!0}),l=e.accordion?e.accordion._stateChanges.pipe(f(d=>!!(d.hideToggle||d.togglePosition))):U;this.tabIndex=parseInt(i||"")||0,this._parentChangeSubscription=Z(e.opened,e.closed,l,e._inputChanges.pipe(f(d=>!!(d.hideToggle||d.disabled||d.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(f(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:ge(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=v({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,i){n&1&&se("click",function(){return i._toggle()})("keydown",function(d){return i._keydown(d)}),n&2&&(S("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),le("height",i._getHeaderHeight()),E("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ce(e)]},ngContentSelectors:Ve,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,i){n&1&&(j(Be),k(0,"span",0),m(1),m(2,1),m(3,2),z(),ae(4,Ue,3,0,"span",1)),n&2&&(E("mat-content-hide-toggle",!i._showToggle()),b(4),oe(i._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Ie=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=c({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),He=(()=>{class t extends De{_keyManager;_ownHeaders=new $;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(O(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new xe(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=J(t)))(i||t)}})();static \u0275dir=c({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,i,l){if(n&1&&R(l,V,5),n&2){let d;y(d=_())&&(i._headers=d)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){n&2&&E("mat-accordion-multi",i.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",u],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[g([{provide:Q,useExisting:t}]),N]})}return t})(),Oe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=D({type:t});static \u0275inj=M({imports:[Pe,Me,ve]})}return t})();var Fe=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-help"]],decls:97,vars:0,consts:[[1,"max-w-5xl","mx-auto","space-y-12","animate-fade-in","pb-20"],[1,"text-center","space-y-4","py-8"],[1,"text-4xl","font-bold","text-white","tracking-tight"],[1,"text-slate-400","max-w-2xl","mx-auto","text-sm"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-6"],[1,"glass-card","p-6","flex","flex-col","items-center","text-center","gap-4","hover:border-[--primary]/30","transition-all","cursor-pointer","group"],[1,"h-12","w-12","rounded-2xl","bg-[--primary]/10","flex","items-center","justify-center","text-[--primary]","group-hover:scale-110","transition-transform"],[1,"font-bold","text-white","text-sm"],[1,"text-[11px]","text-slate-500"],[1,"glass-card","p-6","flex","flex-col","items-center","text-center","gap-4","hover:border-blue-400/30","transition-all","cursor-pointer","group"],[1,"h-12","w-12","rounded-2xl","bg-blue-400/10","flex","items-center","justify-center","text-blue-400","group-hover:scale-110","transition-transform"],[1,"glass-card","p-6","flex","flex-col","items-center","text-center","gap-4","hover:border-amber-400/30","transition-all","cursor-pointer","group"],[1,"h-12","w-12","rounded-2xl","bg-amber-400/10","flex","items-center","justify-center","text-amber-400","group-hover:scale-110","transition-transform"],[1,"space-y-6"],[1,"text-xl","font-bold","text-white","flex","items-center","gap-3"],[1,"text-[--primary]"],[1,"glass-card","overflow-hidden","divide-y","divide-white/5"],["multi","true",1,"custom-accordion"],[1,"!bg-transparent","!shadow-none"],[1,"!h-16"],[1,"!text-xs","font-bold","text-slate-200"],[1,"pb-6","text-xs","text-slate-400","leading-relaxed"],[1,"glass-card","p-8","bg-gradient-to-br","from-red-500/5","to-transparent","border-red-500/10"],[1,"flex","items-start","gap-6"],[1,"p-4","rounded-2xl","bg-red-400/10","text-red-400"],[1,"!text-3xl"],[1,"space-y-4"],[1,"text-lg","font-bold","text-white"],[1,"space-y-3"],[1,"flex","items-start","gap-3"],[1,"h-1.5","w-1.5","rounded-full","bg-red-400","mt-1.5"],[1,"text-[11px]","text-slate-400"],[1,"text-center","space-y-6","pt-10"],[1,"bg-[--primary]","hover:bg-[--primary-hover]","text-white","px-8","py-3","rounded-xl","text-xs","font-bold","transition-all","shadow-xl","shadow-[--primary]/20"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Centre d'Aide & FAQ"),a(),o(4,"p",3),r(5," Tout ce que vous devez savoir sur FoncierChain : du fonctionnement de la blockchain \xE0 la gestion de vos parcelles. "),a()(),o(6,"div",4)(7,"div",5)(8,"div",6)(9,"mat-icon"),r(10,"school"),a()(),o(11,"h3",7),r(12,"Guide de D\xE9marrage"),a(),o(13,"p",8),r(14,"Apprenez \xE0 utiliser l'interface en 5 minutes."),a()(),o(15,"div",9)(16,"div",10)(17,"mat-icon"),r(18,"token"),a()(),o(19,"h3",7),r(20,"Concepts Blockchain"),a(),o(21,"p",8),r(22,"Pourquoi vos titres sont-ils immuables ?"),a()(),o(23,"div",11)(24,"div",12)(25,"mat-icon"),r(26,"support_agent"),a()(),o(27,"h3",7),r(28,"Support Technique"),a(),o(29,"p",8),r(30,"Besoin d'aide ? Contactez nos agents SIG."),a()()(),o(31,"div",13)(32,"h2",14)(33,"mat-icon",15),r(34,"quiz"),a(),r(35," Questions Fr\xE9quentes "),a(),o(36,"div",16)(37,"mat-accordion",17)(38,"mat-expansion-panel",18)(39,"mat-expansion-panel-header",19)(40,"mat-panel-title",20),r(41," Comment v\xE9rifier l'authenticit\xE9 d'une parcelle ? "),a()(),o(42,"div",21),r(43," Utilisez l'onglet "),o(44,"strong"),r(45,"V\xE9rification"),a(),r(46," et entrez l'ID de la parcelle (ex: BZV-2024-8821). Le syst\xE8me interrogera le ledger blockchain pour vous montrer l'historique complet et le Hash de signature unique. "),a()(),o(47,"mat-expansion-panel",18)(48,"mat-expansion-panel-header",19)(49,"mat-panel-title",20),r(50," Qu'est-ce que l'immuabilit\xE9 blockchain ? "),a()(),o(51,"div",21),r(52," Une fois qu'un titre foncier est enregistr\xE9 sur FoncierChain, il ne peut \xEAtre modifi\xE9 ou supprim\xE9 sans laisser de trace. Chaque transaction est cryptographiquement li\xE9e \xE0 la pr\xE9c\xE9dente, rendant toute fraude impossible sans corrompre l'ensemble du r\xE9seau. "),a()(),o(53,"mat-expansion-panel",18)(54,"mat-expansion-panel-header",19)(55,"mat-panel-title",20),r(56," Que faire en cas de litige ? "),a()(),o(57,"div",21),r(58,' Si une parcelle est marqu\xE9e comme "En Litige", les transactions sont bloqu\xE9es par le smart contract. Veuillez vous rendre au bureau du cadastre avec vos documents originaux pour une r\xE9solution administrative et une mise \xE0 jour du ledger. '),a()(),o(59,"mat-expansion-panel",18)(60,"mat-expansion-panel-header",19)(61,"mat-panel-title",20),r(62," Comment sont calcul\xE9es les coordonn\xE9es SIG ? "),a()(),o(63,"div",21),r(64," Nos agents utilisent des relev\xE9s GPS de pr\xE9cision centim\xE9trique (RTK). Ces donn\xE9es sont ensuite inject\xE9es dans notre syst\xE8me et visualis\xE9es sur la carte interactive pour d\xE9limiter physiquement et num\xE9riquement votre propri\xE9t\xE9. "),a()()()()(),o(65,"div",22)(66,"div",23)(67,"div",24)(68,"mat-icon",25),r(69,"report_problem"),a()(),o(70,"div",26)(71,"h3",27),r(72,"R\xE9solution de Probl\xE8mes"),a(),o(73,"div",28)(74,"div",29),P(75,"div",30),o(76,"p",31)(77,"strong"),r(78,"Erreur de Signature :"),a(),r(79," V\xE9rifiez votre connexion au n\u0153ud principal dans les param\xE8tres."),a()(),o(80,"div",29),P(81,"div",30),o(82,"p",31)(83,"strong"),r(84,"Carte Blanche :"),a(),r(85," Assurez-vous que le service de cartographie n'est pas bloqu\xE9 par un pare-feu."),a()(),o(86,"div",29),P(87,"div",30),o(88,"p",31)(89,"strong"),r(90,"Donn\xE9es non-index\xE9es :"),a(),r(91," Les nouveaux enregistrements peuvent prendre jusqu'\xE0 30 secondes pour appara\xEEtre sur tous les n\u0153uds."),a()()()()()(),o(92,"div",32)(93,"h3",27),r(94,"Toujours besoin d'aide ?"),a(),o(95,"button",33),r(96," Contacter un Agent AfriChain "),a()()())},dependencies:[me,Ee,_e,ye,Oe,He,B,V,Ie],styles:["[_nghost-%COMP%]{display:block}  .custom-accordion .mat-expansion-panel-header-title{font-size:13px!important}  .custom-accordion .mat-expansion-indicator:after{color:var(--primary)!important}  .mat-expansion-panel{font-family:inherit!important}"],changeDetection:0})};export{Fe as Help};
