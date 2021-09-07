(self.webpackChunkself_service_bicycles=self.webpackChunkself_service_bicycles||[]).push([[112],{4112:(t,n,o)=>{"use strict";o.r(n),o.d(n,{StationDetailModule:()=>Z});var e=o(1116),i=o(4369),a=o(3058),r=o(5366);let s=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[e.ez]]}),t})();var c=o(8605),p=o(4842),l=o(5424),u=o(4689),g=o(8720),f=o(9996),d=o(8115);let _=(()=>{class t{constructor(t){this.stationsDatastore=t}getOneStation(t){return this.stationsDatastore.getOneStation(t)}isFavoriteStation(t){return this.stationsDatastore.getFavoriteStations().pipe((0,f.U)(n=>n.includes(t)))}}return t.\u0275fac=function(n){return new(n||t)(r.LFG(d.g))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=o(5559);let m=(()=>{class t{constructor(){this.numDocksOutOfService=0}ngOnInit(){}ngOnChanges(t){if(t.station){const n=t.station.currentValue;this.numDocksOutOfService=n.capacity-n.num_bikes_available-n.num_docks_available}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-station-information-sheet"]],inputs:{station:"station"},features:[r.TTD],decls:22,vars:8,consts:[[1,"station-information-wrapper"],[1,"station-name"],[1,"info"],[1,"station-property"],["title","Bikes available",1,"bike-icon","material-icons"],["title","Docks available",1,"dock-icon","material-icons"],["title","Docks out of service",1,"out-of-service-icon","material-icons"],[1,"last-updated-label"]],template:function(t,n){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"h1",1),r._uU(2),r.qZA(),r.TgZ(3,"div",2),r.TgZ(4,"p",3),r.TgZ(5,"i",4),r._uU(6,"pedal_bike "),r.qZA(),r.TgZ(7,"span"),r._uU(8),r.qZA(),r.qZA(),r.TgZ(9,"p",3),r.TgZ(10,"i",5),r._uU(11," bike_scooter "),r.qZA(),r.TgZ(12,"span"),r._uU(13),r.qZA(),r.qZA(),r.TgZ(14,"p",3),r.TgZ(15,"i",6),r._uU(16," error "),r.qZA(),r.TgZ(17,"span"),r._uU(18),r.qZA(),r.qZA(),r.qZA(),r.TgZ(19,"p",7),r._uU(20),r.ALo(21,"date"),r.qZA(),r.qZA()),2&t&&(r.xp6(2),r.Oqu(n.station.name),r.xp6(6),r.hij("",n.station.num_bikes_available," bikes available"),r.xp6(5),r.hij("",n.station.num_docks_available," docks available"),r.xp6(5),r.hij("",n.numDocksOutOfService," out of service"),r.xp6(2),r.hij("Last update: ",r.xi3(21,5,n.station.updatedAt,"medium"),""))},pipes:[e.uU],styles:[".station-information-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.station-information-wrapper[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;border-radius:12px;padding:16px;background-color:#d2d2d2ad;margin-bottom:16px}.station-information-wrapper[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   .station-property[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:center}.station-information-wrapper[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   .station-property[_ngcontent-%COMP%]   .bike-icon[_ngcontent-%COMP%], .station-information-wrapper[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   .station-property[_ngcontent-%COMP%]   .dock-icon[_ngcontent-%COMP%], .station-information-wrapper[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   .station-property[_ngcontent-%COMP%]   .out-of-service-icon[_ngcontent-%COMP%]{margin-right:8px;font-size:18px;line-height:20px}.station-information-wrapper[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   .station-property[_ngcontent-%COMP%]   .bike-icon[_ngcontent-%COMP%]{color:orange}.station-information-wrapper[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   .station-property[_ngcontent-%COMP%]   .dock-icon[_ngcontent-%COMP%]{color:#00bfff}.station-information-wrapper[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   .station-property[_ngcontent-%COMP%]   .out-of-service-icon[_ngcontent-%COMP%]{color:red}.station-information-wrapper[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin:0}.station-information-wrapper[_ngcontent-%COMP%]   .last-updated-label[_ngcontent-%COMP%]{font-style:italic}.station-information-wrapper[_ngcontent-%COMP%]   .station-name[_ngcontent-%COMP%]{font-weight:700}"],changeDetection:0}),t})();var O=o(6939);let C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-loader"]],decls:1,vars:0,template:function(t,n){1&t&&r._uU(0,"...LOADING...\n")},styles:[""],changeDetection:0}),t})();const M=function(t){return[t]};function b(t,n){if(1&t){const t=r.EpF();r.ynx(0),r.TgZ(1,"div",3),r.TgZ(2,"button",4),r.NdJ("click",function(){return r.CHM(t),r.oxw().back()}),r._uU(3,"Back"),r.qZA(),r.TgZ(4,"button",5),r.NdJ("click",function(){const n=r.CHM(t).ngIf;return r.oxw().onToggleFavorite(n.station_id)}),r._uU(5," Add to favorite "),r._UZ(6,"app-favorite-button",6),r.ALo(7,"async"),r.qZA(),r.qZA(),r._UZ(8,"app-station-information-sheet",7),r._UZ(9,"app-maps",8),r.BQk()}if(2&t){const t=n.ngIf,o=r.oxw();let e;r.xp6(6),r.Q6J("isFavorite",null!==(e=r.lcZ(7,3,o.isFavoriteStation$))&&void 0!==e&&e),r.xp6(2),r.Q6J("station",t),r.xp6(1),r.Q6J("stationsToMark",r.VKq(5,M,t))}}function h(t,n){1&t&&r._UZ(0,"app-loader")}const k=[{path:"",component:(()=>{class t{constructor(t,n,o,e){this.router=t,this.route=n,this.stationDetailService=o,this.stationsDatastoreService=e}ngOnInit(){this.station$=this.route.params.pipe((0,u.w)(t=>this.stationDetailService.getOneStation(t.id))),this.isFavoriteStation$=this.station$.pipe((0,u.w)(({station_id:t})=>this.stationDetailService.isFavoriteStation(t)),(0,g.x)())}onToggleFavorite(t){this.stationsDatastoreService.toggleFavoriteStation(t)}back(){this.router.navigate([".."],{relativeTo:this.route})}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(l.F0),r.Y36(l.gz),r.Y36(_),r.Y36(d.g))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-view-station-detail"]],decls:5,vars:4,consts:[[1,"wrapper"],[4,"ngIf","ngIfElse"],["loadingBlock",""],[1,"header"],["mat-raised-button","","type","button",3,"click"],["mat-button","","type","button",1,"favorite-block",3,"click"],["style.font-weight","bold","style.cursor","auto",1,"favorite-button",3,"isFavorite"],[3,"station"],[3,"stationsToMark"]],template:function(t,n){if(1&t&&(r.TgZ(0,"div",0),r.YNc(1,b,10,7,"ng-container",1),r.ALo(2,"async"),r.qZA(),r.YNc(3,h,1,0,"ng-template",null,2,r.W1O)),2&t){const t=r.MAs(4);r.xp6(1),r.Q6J("ngIf",r.lcZ(2,2,n.station$))("ngIfElse",t)}},directives:[e.O5,i.lW,v.t,m,O.E,C],pipes:[e.Ov],styles:[".header[_ngcontent-%COMP%]{padding:16px;display:flex;justify-content:space-between}.favorite-block[_ngcontent-%COMP%]{cursor:pointer;display:flex;justify-content:center;align-items:center;padding:4px 12px;background-color:#d2d2d2ad;border-radius:16px;color:gray;font-style:italic}.favorite-block[_ngcontent-%COMP%]   .favorite-button[_ngcontent-%COMP%]{margin-left:8px}"],changeDetection:0}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[l.Bz.forChild(k)],l.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[e.ez,a.u,p.g,s,c._,i.ot,P]]}),t})()}}]);