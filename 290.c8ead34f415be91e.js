"use strict";(self.webpackChunknmmas_admin_ssr=self.webpackChunknmmas_admin_ssr||[]).push([[290,761],{3290:(F,g,s)=>{s.r(g),s.d(g,{PageModule:()=>U});var a=s(177),u=s(6582),h=s(4404),p=s(1583),f=s(1635),t=s(3953),d=s(9789),m=s(1240),C=s(844),r=s(7313),c=s(9949),M=s(3955);const $=()=>["/page/create"];function I(o,e){1&o&&(t.j41(0,"div",3)(1,"a",4),t.nrm(2,"i",5),t.EFF(3),t.nI1(4,"translate"),t.k0s()()),2&o&&(t.R7$(),t.Y8G("routerLink",t.lJ4(4,$)),t.R7$(2),t.SpI(" ",t.bMT(4,2,"add_page")," "))}class b{constructor(){this.store=(0,t.WQX)(u.il),this.router=(0,t.WQX)(p.Ix),this.tableConfig={columns:[{title:"No.",dataField:"no",type:"no"},{title:"title",dataField:"title",sortable:!0,sort_direction:"desc"},{title:"created_at",dataField:"created_at",type:"date",sortable:!0,sort_direction:"desc"},{title:"status",dataField:"status",type:"switch"}],rowActions:[{label:"Edit",actionToPerform:"edit",icon:"ri-pencil-line",permission:"page.edit"},{label:"Delete",actionToPerform:"delete",icon:"ri-delete-bin-line",permission:"page.destroy"}],data:[],total:0}}ngOnInit(){this.page$.subscribe(e=>{this.tableConfig.data=e?e?.data:[],this.tableConfig.total=e?e?.total:0})}onTableChange(e){this.store.dispatch(new m.TV(e))}onActionClicked(e){"edit"===e.actionToPerform?this.edit(e.data):"status"===e.actionToPerform?this.status(e.data):"delete"===e.actionToPerform?this.delete(e.data):"deleteAll"===e.actionToPerform&&this.deleteAll(e.data)}edit(e){this.router.navigateByUrl(`/page/edit/${e.id}`)}status(e){this.store.dispatch(new m.Nw(e.id,e.status))}delete(e){this.store.dispatch(new m.tW(e.id))}deleteAll(e){this.store.dispatch(new m.OD(e))}static#t=this.\u0275fac=function(l){return new(l||b)};static#e=this.\u0275cmp=t.VBU({type:b,selectors:[["app-page"]],decls:3,vars:5,consts:[[3,"gridClass","title"],["button","",4,"hasPermission"],[3,"tableChanged","rowClicked","action","tableConfig","hasCheckbox"],["button",""],[1,"align-items-center","btn","btn-theme","d-flex",3,"routerLink"],[1,"ri-add-line"]],template:function(l,i){1&l&&(t.j41(0,"app-page-wrapper",0),t.DNE(1,I,5,5,"div",1),t.j41(2,"app-table",2),t.bIt("tableChanged",function(T){return i.onTableChange(T)})("rowClicked",function(T){return i.edit(T)})("action",function(T){return i.onActionClicked(T)}),t.k0s()()),2&l&&(t.Y8G("gridClass","col-sm-12")("title","pages"),t.R7$(),t.Y8G("hasPermission","page.create"),t.R7$(),t.Y8G("tableConfig",i.tableConfig)("hasCheckbox",!0))},dependencies:[p.Wk,C.O,r.k,c.p,M.D9]})}(0,f.Cg)([(0,u.l6)(d.j.page)],b.prototype,"page$",void 0);var n=s(9417),R=s(1413),E=s(7673),j=s(5558),A=s(1397),G=s(6977),D=s(6532),_=s(7506);function Y(o,e){1&o&&(t.j41(0,"div",14),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&o&&(t.R7$(),t.SpI(" ",t.bMT(2,1,"title_is_required")," "))}class v{constructor(){this.store=(0,t.WQX)(u.il),this.route=(0,t.WQX)(p.nX),this.router=(0,t.WQX)(p.Ix),this.formBuilder=(0,t.WQX)(n.ok),this.html="",this.destroy$=new R.B,this.form=this.formBuilder.group({title:new n.MJ("",[n.k0.required]),content:new n.MJ,meta_title:new n.MJ,meta_description:new n.MJ,page_meta_image_id:new n.MJ,status:new n.MJ(1)})}ngOnInit(){this.route.params.pipe((0,j.n)(e=>e.id?this.store.dispatch(new m.oe(e.id)).pipe((0,A.Z)(()=>this.store.select(d.j.selectedPage))):(0,E.of)()),(0,G.Q)(this.destroy$)).subscribe(e=>{this.id=e?.id,this.form.patchValue({title:e?.title,content:e?.content,meta_title:e?.meta_title,meta_description:e?.meta_description,status:e?.status})}),this.editor=new h.KE}selectMetaImage(e){Array.isArray(e)||this.form.controls.page_meta_image_id.setValue(e?e.id:null)}submit(){this.form.markAllAsTouched();let e=new m.mv(this.form.value);"edit"===this.type&&this.id&&(e=new m.lt(this.form.value,this.id)),this.form.valid&&this.store.dispatch(e).subscribe({complete:()=>{this.router.navigateByUrl("/page")}})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(l){return new(l||v)};static#e=this.\u0275cmp=t.VBU({type:v,selectors:[["app-form-page"]],inputs:{type:"type"},decls:23,vars:35,consts:[[1,"theme-form","theme-form-2","mega-form",3,"ngSubmit","formGroup"],[3,"label","for","required"],["type","text","name","title","formControlName","title",1,"form-control",3,"placeholder"],["class","invalid-feedback",4,"ngIf"],[1,"custom-editor"],[3,"editor"],["formControlName","content",3,"editor","ngModel","disabled","placeholder"],["type","text","formControlName","meta_title",1,"form-control",3,"placeholder"],["formControlName","meta_description","rows","3",1,"form-control",3,"placeholder"],[1,"form-check","form-switch","ps-0"],[1,"switch"],["type","checkbox","id","status","formControlName","status"],[1,"switch-state"],[3,"id"],[1,"invalid-feedback"]],template:function(l,i){1&l&&(t.j41(0,"form",0),t.bIt("ngSubmit",function(){return i.submit()}),t.j41(1,"app-form-fields",1),t.nrm(2,"input",2),t.nI1(3,"translate"),t.DNE(4,Y,3,3,"div",3),t.k0s(),t.j41(5,"app-form-fields",1)(6,"div",4),t.nrm(7,"ngx-editor-menu",5)(8,"ngx-editor",6),t.k0s()(),t.j41(9,"app-form-fields",1),t.nrm(10,"input",7),t.nI1(11,"translate"),t.k0s(),t.j41(12,"app-form-fields",1),t.nrm(13,"textarea",8),t.nI1(14,"translate"),t.k0s(),t.j41(15,"app-form-fields",1)(16,"div",9)(17,"label",10),t.nrm(18,"input",11)(19,"span",12),t.k0s()()(),t.j41(20,"app-button",13),t.EFF(21),t.nI1(22,"translate"),t.k0s()()),2&l&&(t.Y8G("formGroup",i.form),t.R7$(),t.Y8G("label","title")("for","title")("required",!0),t.R7$(),t.FS9("placeholder",t.bMT(3,27,"enter_title")),t.R7$(2),t.Y8G("ngIf",i.form.controls.title.touched&&(null==i.form.controls.title.errors?null:i.form.controls.title.errors.required)),t.R7$(),t.Y8G("label","content")("for","content")("required",!1),t.R7$(2),t.Y8G("editor",i.editor),t.R7$(),t.Y8G("editor",i.editor)("ngModel",i.html)("disabled",!1)("placeholder","Type here..."),t.R7$(),t.Y8G("label","meta_title")("for","metatitle")("required",!1),t.R7$(),t.FS9("placeholder",t.bMT(11,29,"enter_meta_title")),t.R7$(2),t.Y8G("label","meta_description")("for","desc")("required",!1),t.R7$(),t.FS9("placeholder",t.bMT(14,31,"enter_meta_description")),t.R7$(2),t.Y8G("label","Status")("for","status")("required",!1),t.R7$(5),t.Y8G("id","page_btn"),t.R7$(),t.SpI(" ",t.bMT(22,33,"create"===i.type?"save_page":"update_page")," "))},dependencies:[a.bT,n.qT,n.me,n.Zm,n.BC,n.cb,n.j4,n.JD,D.z,_.Q,h.Cl,h.Zu,M.D9]})}(0,f.Cg)([(0,u.l6)(d.j.selectedPage)],v.prototype,"page$",void 0);let B=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-create-page"]],decls:2,vars:2,consts:[[3,"title"],[3,"type"]],template:function(i,y){1&i&&(t.j41(0,"app-page-wrapper",0),t.nrm(1,"app-form-page",1),t.k0s()),2&i&&(t.Y8G("title","create_page"),t.R7$(),t.Y8G("type","create"))},dependencies:[r.k,v]})}return o})(),O=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-edit-page"]],decls:2,vars:2,consts:[[3,"title"],[3,"type"]],template:function(i,y){1&i&&(t.j41(0,"app-page-wrapper",0),t.nrm(1,"app-form-page",1),t.k0s()),2&i&&(t.Y8G("title","update_page"),t.R7$(),t.Y8G("type","edit"))},dependencies:[r.k,v]})}return o})();var P=s(1608);const W=[{path:"",component:b,canActivate:[P.L],data:{permission:"page.index"}},{path:"create",component:B,canActivate:[P.L],data:{permission:["page.index","page.create"]}},{path:"edit/:id",component:O,canActivate:[P.L],data:{permission:["page.index","page.edit"]}}];let S=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.$C({type:o});static#s=this.\u0275inj=t.G2t({imports:[p.iI.forChild(W),p.iI]})}return o})();var w=s(3887);let U=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.$C({type:o});static#s=this.\u0275inj=t.G2t({imports:[a.MD,S,w.G,u.rK.forFeature([d.j]),h.VZ]})}return o})()},1608:(F,g,s)=>{s.d(g,{L:()=>p});var a=s(3953),u=s(1583),h=s(6582);let p=(()=>{class f{constructor(){this.store=(0,a.WQX)(h.il),this.router=(0,a.WQX)(u.Ix)}canActivate(d,m){const C=this.store.selectSnapshot(c=>c.account).permissions?.map(c=>c?.name),r=d.data?.permission;return!!(!r||!Array.isArray(r)&&C?.includes(r)||Array.isArray(r)&&r?.length&&r.every(c=>C?.includes(c)))||(this.router.navigate(["/error/403"]),!1)}static#t=this.\u0275fac=function(m){return new(m||f)};static#e=this.\u0275prov=a.jDH({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})()},6532:(F,g,s)=>{s.d(g,{z:()=>t});var a=s(3953),u=s(177),h=s(3955);const p=["*"];function f(d,m){1&d&&(a.j41(0,"span",1),a.EFF(1,"*"),a.k0s())}let t=(()=>{class d{constructor(){this.class="mb-4 row align-items-center g-2",this.labelClass="form-label-title col-sm-2 mb-0",this.gridClass="col-sm-10"}static#t=this.\u0275fac=function(r){return new(r||d)};static#e=this.\u0275cmp=a.VBU({type:d,selectors:[["app-form-fields"]],inputs:{class:"class",label:"label",labelClass:"labelClass",gridClass:"gridClass",for:"for",required:"required"},ngContentSelectors:p,decls:7,vars:11,consts:[["class","theme-color ms-2 required-dot",4,"ngIf"],[1,"theme-color","ms-2","required-dot"]],template:function(r,c){1&r&&(a.NAR(),a.j41(0,"div")(1,"label"),a.EFF(2),a.nI1(3,"translate"),a.DNE(4,f,2,0,"span",0),a.k0s(),a.j41(5,"div"),a.SdG(6),a.k0s()()),2&r&&(a.HbH(c.class),a.R7$(),a.HbH(c.labelClass),a.BMQ("for",c.for),a.R7$(),a.SpI(" ",a.bMT(3,9,c.label),""),a.R7$(2),a.Y8G("ngIf",c.required),a.R7$(),a.HbH(c.gridClass))},dependencies:[u.bT,h.D9]})}return d})()}}]);