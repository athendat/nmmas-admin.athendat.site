"use strict";(self.webpackChunknmmas_admin_ssr=self.webpackChunknmmas_admin_ssr||[]).push([[761],{1608:(m,o,t)=>{t.d(o,{L:()=>_});var s=t(3953),i=t(1583),c=t(6582);let _=(()=>{class n{constructor(){this.store=(0,s.WQX)(c.il),this.router=(0,s.WQX)(i.Ix)}canActivate(a,u){const l=this.store.selectSnapshot(e=>e.account).permissions?.map(e=>e?.name),r=a.data?.permission;return!!(!r||!Array.isArray(r)&&l?.includes(r)||Array.isArray(r)&&r?.length&&r.every(e=>l?.includes(e)))||(this.router.navigate(["/error/403"]),!1)}static#s=this.\u0275fac=function(u){return new(u||n)};static#e=this.\u0275prov=s.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},6532:(m,o,t)=>{t.d(o,{z:()=>d});var s=t(3953),i=t(177),c=t(3955);const _=["*"];function n(a,u){1&a&&(s.j41(0,"span",1),s.EFF(1,"*"),s.k0s())}let d=(()=>{class a{constructor(){this.class="mb-4 row align-items-center g-2",this.labelClass="form-label-title col-sm-2 mb-0",this.gridClass="col-sm-10"}static#s=this.\u0275fac=function(r){return new(r||a)};static#e=this.\u0275cmp=s.VBU({type:a,selectors:[["app-form-fields"]],inputs:{class:"class",label:"label",labelClass:"labelClass",gridClass:"gridClass",for:"for",required:"required"},ngContentSelectors:_,decls:7,vars:11,consts:[["class","theme-color ms-2 required-dot",4,"ngIf"],[1,"theme-color","ms-2","required-dot"]],template:function(r,e){1&r&&(s.NAR(),s.j41(0,"div")(1,"label"),s.EFF(2),s.nI1(3,"translate"),s.DNE(4,n,2,0,"span",0),s.k0s(),s.j41(5,"div"),s.SdG(6),s.k0s()()),2&r&&(s.HbH(e.class),s.R7$(),s.HbH(e.labelClass),s.BMQ("for",e.for),s.R7$(),s.SpI(" ",s.bMT(3,9,e.label),""),s.R7$(2),s.Y8G("ngIf",e.required),s.R7$(),s.HbH(e.gridClass))},dependencies:[i.bT,c.D9]})}return a})()}}]);