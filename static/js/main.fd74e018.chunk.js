(this.webpackJsonpplayer=this.webpackJsonpplayer||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),s=n(8),r=n.n(s),c=(n(22),n(7)),o=n(2),i=n(15),p=n(3),u=n(4),g=n(6),m=n(5),d=Object(o.b)((function(e){return{menu:e.songs.sideMenu,current:e.songs.currentSong}}))((function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:e.menu?"menu open":"menu"},l.a.createElement("div",{className:"album-cover"}),l.a.createElement("div",{className:"menu-song-title"},e.current.title),l.a.createElement("div",{className:"menu-author"},"KANYE WEST"),l.a.createElement("div",{className:"menu-dots"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement("div",{className:"add-to-playlist"},l.a.createElement("a",{href:"/*"},"Add to playlist")),l.a.createElement("div",{className:"show-album"},l.a.createElement("a",{href:"/*"},"Show album")),l.a.createElement("div",{className:"share"},l.a.createElement("a",{href:"/*"},"Share with friends"))))})),v=function(){return{type:"TOGGLE_PLAYLIST"}},h=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={toggler:"menu"},e.toggleMenu=function(){e.props.toggleSideMenu()},e}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement(d,{toggle:this.state.toggler}),l.a.createElement("div",{className:"back"},l.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 16.2 29.3",xmlSpace:"preserve"},l.a.createElement("style",{type:"text/css"}),l.a.createElement("path",{className:"st0",style:{fill:"#6F729C"},d:"M15.7,26.6l-12-12l12-12c0.6-0.6,0.6-1.6,0-2.2s-1.6-0.6-2.2,0l-13,13.1c-0.6,0.6-0.6,1.6,0,2.2l13.1,13.1 c0.6,0.6,1.6,0.6,2.2,0C16.3,28.2,16.3,27.2,15.7,26.6z"}))),l.a.createElement("div",{className:"album"},l.a.createElement("span",null,"ALBUM"),l.a.createElement("span",null,"UNRELEASED")),l.a.createElement("div",{className:"header__menu",onClick:this.toggleMenu},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))}}]),n}(l.a.Component),y=Object(o.b)((function(e){return{menu:e.songs.sideMenu,album:e.songs.currentAlbum}}),{toggleSideMenu:function(){return{type:"TOGGLE_MENU"}}})(h),f=Object(o.b)((function(e){return{playedSong:e.songs.currentSong}}))((function(e){var t=e.playedSong,n=(t.id,t.title);t.time,e.albumsList,e.album,e.sliderPrev;return l.a.createElement("div",{className:"song"},l.a.createElement("div",{className:"song__image"}),l.a.createElement("div",{className:"song__title"},n),l.a.createElement("div",{className:"song__author"},"KANYE WEST"))})),E=function(e){return{type:"PLAY_SONG",payload:e}},w=function(e){return{type:"UPDATE_PROGRES",payload:e}},x=function(e){return{type:"TOGGLE_PREVSONG",payload:e}},O=function(e){return{type:"TOGGLE_NEXTSONG",payload:e}},S=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).playToggle=function(){e.props.play&&e.props.pause()},e.nextSong=function(){e.props.toggleNextSong(!0)},e.previousSong=function(){e.props.togglePrevSong(!0)},e.shuffle=function(){e.props.toggleShuffle()},e.loop=function(){e.props.toggleLoop()},e}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"buttons"},l.a.createElement("div",{className:"shuffle shuffle-active",onClick:this.shuffle},l.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 26 26",xmlSpace:"preserve"},l.a.createElement("style",{type:"text/css"}),l.a.createElement("path",{id:"shuffle_ico",className:"st0",style:{fillRule:"evenodd",clipRule:"evenodd",fill:this.props.shuffle?"#9da3f2":"#6F729C"},d:"M21.2,26c-0.2,0-0.3-0.1-0.3-0.3V23l-0.4,0c-4.1-0.2-7.7-2.9-9-6.9l-1.9-5.7 C8.5,7.3,5.5,5.1,2.1,5.1h-1C0.5,5.1,0,4.7,0,4.1C-0.1,3.5,0.4,3,1,3c0,0,0,0,0.1,0h1c4.3,0,8.1,2.8,9.5,6.9l1.9,5.7 c1,3,3.8,5.2,7,5.4l0.5,0v-2.7c0-0.2,0.1-0.3,0.3-0.3l0,0c0.1,0,0.2,0,0.2,0.1l4.2,3.5l0.2,0.2C26,21.8,26,21.9,26,22 c0,0.1,0,0.2-0.1,0.2l-4.5,3.7C21.4,25.9,21.3,26,21.2,26z M21.2,8.1c-0.2,0-0.3-0.1-0.3-0.3V5.1l-0.5,0c-1.7,0.1-3.4,0.8-4.7,2 c-0.2,0.2-0.4,0.3-0.7,0.3l0,0c-0.3,0-0.6-0.1-0.8-0.4c-0.4-0.4-0.3-1.1,0.1-1.5c0,0,0,0,0,0C16,4,18.2,3.1,20.5,3l0.4,0V0.3 C20.9,0.2,21,0,21.2,0c0.1,0,0.2,0,0.3,0.1l4.5,3.8C26,4,26,4.2,25.9,4.3L21.4,8C21.4,8.1,21.3,8.1,21.2,8.1L21.2,8.1z M1.1,23 C0.5,23,0,22.5,0,21.9c0-0.6,0.5-1.1,1.1-1.1c0,0,0,0,0,0h1c1.8,0,3.5-0.6,4.9-1.7l0.1,0c0.5-0.3,1.1-0.3,1.5,0.2 c0.4,0.4,0.3,1.1-0.1,1.5c0,0,0,0,0,0c-1.8,1.4-4,2.2-6.3,2.2H1.1z"}))),l.a.createElement("div",{className:"previous",onClick:this.previousSong},l.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 30 26",xmlSpace:"preserve"},l.a.createElement("style",{type:"text/css"}),l.a.createElement("path",{id:"previous_ico",className:"st0",style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#6F729C"},d:"M25.1,0C27.8,0,30,2.2,30,4.9v16.2c0,2.7-2.1,4.9-4.8,4.9c-0.9,0-1.8-0.3-2.6-0.7L15,20.5 c-0.5-0.3-0.7-1.1-0.4-1.6c0.2-0.3,0.6-0.5,1-0.5c0.2,0,0.4,0.1,0.6,0.2l7.5,4.7c1.2,0.7,2.8,0.4,3.5-0.8c0.3-0.4,0.4-0.9,0.4-1.4 V4.9c0-1.4-1.1-2.5-2.5-2.6c-0.5,0-1,0.1-1.4,0.4l-12.9,8.1c-1.2,0.8-1.6,2.3-0.8,3.5c0.2,0.3,0.5,0.6,0.8,0.8 c0.5,0.3,0.7,1.1,0.4,1.6c-0.3,0.5-1,0.7-1.6,0.4c0,0,0,0,0,0c-2.3-1.4-3-4.5-1.5-6.8C8.5,9.8,9,9.2,9.6,8.8l12.9-8.1 C23.3,0.3,24.2,0,25.1,0z M1.3,0c0.7,0,1.3,0.6,1.3,1.3l0,0v23.3c0,0.7-0.6,1.3-1.3,1.3S0,25.4,0,24.7V1.3C0,0.6,0.6,0,1.3,0L1.3,0z "}))),l.a.createElement("div",{className:this.props.pauseToggle||!this.props.current.time?"play":"play-active",onClick:this.playToggle}),l.a.createElement("div",{className:"next",onClick:this.nextSong},l.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 30 26",xmlSpace:"preserve"},l.a.createElement("style",{type:"text/css"}),l.a.createElement("path",{id:"next_ico",className:"st0",style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#6F729C"},d:"M4.9,0C2.2,0,0,2.2,0,4.9v16.2C0,23.8,2.1,26,4.8,26c0.9,0,1.8-0.3,2.6-0.7l7.5-4.7 c0.5-0.3,0.7-1.1,0.4-1.6c-0.2-0.3-0.6-0.5-1-0.5c-0.2,0-0.4,0.1-0.6,0.2l-7.5,4.7C5,24,3.5,23.6,2.7,22.5c-0.3-0.4-0.4-0.9-0.4-1.4 V4.9c0-1.4,1.1-2.5,2.5-2.6c0.5,0,1,0.1,1.4,0.4l12.9,8.1c1.2,0.8,1.6,2.3,0.8,3.5c-0.2,0.3-0.5,0.6-0.8,0.8 c-0.5,0.3-0.7,1.1-0.4,1.6c0.3,0.5,1,0.7,1.6,0.4c0,0,0,0,0,0c2.3-1.4,3-4.5,1.5-6.8c-0.4-0.6-0.9-1.2-1.5-1.5L7.4,0.7 C6.7,0.3,5.8,0,4.9,0z M28.7,0C29.4,0,30,0.6,30,1.3v23.3c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3V1.3C27.3,0.6,27.9,0,28.7,0 L28.7,0L28.7,0z"}))),l.a.createElement("div",{className:"loop",onClick:this.loop},l.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 26 26",xmlSpace:"preserve"},l.a.createElement("style",{type:"text/css"}),l.a.createElement("path",{id:"repeat_ico",className:"st0",style:{fillRule:"evenodd",clipRule:"evenodd",fill:this.props.loop?"#9da3f2":"#6F729C"},d:"M1.1,15.6c-0.6,0-1.1-0.5-1.1-1.1v-3C0,6.8,3.8,3,8.5,3h12.3V0.3C20.9,0.1,21,0,21.2,0 c0.1,0,0.1,0,0.2,0.1l4.5,3.8C26,4,26,4.2,25.9,4.3L21.4,8c-0.1,0.1-0.1,0.1-0.2,0.1c-0.2,0-0.3-0.1-0.3-0.3V5.1H8.5 C5,5.1,2.1,8,2.1,11.5v3C2.1,15.1,1.6,15.6,1.1,15.6z M4.8,26c-0.1,0-0.1,0-0.2-0.1l-4.5-3.8C0.1,22.1,0,22,0,21.9 c0-0.1,0-0.2,0.1-0.2L4.6,18c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.1,0.1,0.2v2.7h12.4c3.5,0,6.4-2.9,6.4-6.4v-3 c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1l0,0v3c0,4.7-3.8,8.5-8.5,8.5H5.1v2.7C5.1,25.8,5,26,4.8,26z"}))))}}]),n}(l.a.Component),b=Object(o.b)((function(e){return{songsList:e.songs.songs,current:e.songs.currentSong,shuffle:e.songs.shuffle,loop:e.songs.loop,pauseState:e.songs.pause,play:e.songs.play,progres:e.songs.progres,playlist:e.songs.playlist,clear:e.songs.clear,pauseToggle:e.songs.pause}}),{playSong:E,toggleShuffle:function(){return{type:"SHUFFLE"}},toggleLoop:function(){return{type:"LOOP"}},pause:function(){return{type:"PAUSE"}},togglePrevSong:x,toggleNextSong:O})(S),C=n(12),N=n.n(C),L=n(16),j=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={pagin:0},e.hide=function(){e.props.togglePlaylist()},e.play=function(){var t=Object(L.a)(N.a.mark((function t(n,a){var l,s,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(l=0;l<100;l++)window.clearInterval(l);return e.props.chooseSong(!1),e.props.toggleNextSong(!1),e.props.togglePrevSong(!1),t.next=6,e.props.playSong(a);case 6:s=60/(600*e.props.current.time),r=setInterval((function(){e.props.pause||(e.props.updateProgres(s),console.log(r),e.props.nextSong&&e.props.current.id!==e.props.songsList.length-1&&(clearInterval(r),e.play(n,e.props.current.id+1)),e.props.prevSong&&0!==e.props.current.id&&(clearInterval(r),e.play(n,e.props.current.id-1)),e.props.progres>=60&&(clearInterval(r),w(0),e.props.loop?e.play(n,e.props.current.id):e.props.shuffle?e.play(n,Math.floor(Math.random()*(e.props.songsList.length-1))):e.play(n,e.props.current.id===e.props.songsList.length-1?0:e.props.current.id+1)))}),100);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.paginUp=function(){e.state.pagin>0&&e.setState({pagin:e.state.pagin-1})},e.paginDown=function(){e.state.pagin<e.props.songsList.length-7&&e.setState({pagin:e.state.pagin+1})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.songsList.slice(this.state.pagin,this.state.pagin+7);return l.a.createElement("div",{className:this.props.playlist?"playlist  playlist-open":"playlist"},l.a.createElement("ol",null,t.map((function(t,n){return l.a.createElement("li",{key:n,id:t.id,onClick:function(t){return e.play(t,t.target.id)}},l.a.createElement("span",{id:t.id,onClick:function(t){return e.play(t,t.target.id)}},t.id+1+". ",t.title),l.a.createElement("span",{id:t.id,onClick:function(t){return e.play(t,t.target.id)}},t.time))}))),l.a.createElement("button",{className:"btn-shuffle",onClick:function(t){return e.play(t,Math.floor(Math.random()*(e.props.songsList.length-1)))}},"SHUFFLE PLAY"),l.a.createElement("div",{className:"hide-menu",onClick:this.hide},l.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 29.3 16.2",xmlSpace:"preserve"},l.a.createElement("style",{type:"text/css"}),l.a.createElement("path",{class:"st0",style:{fill:"#755DD5"},d:"M26.6,0.5l-12,12l-12-12C2-0.1,1-0.1,0.4,0.5s-0.6,1.6,0,2.2l13.1,13.1c0.6,0.6,1.6,0.6,2.2,0L28.8,2.7 c0.6-0.6,0.6-1.6,0-2.2C28.2-0.2,27.2-0.2,26.6,0.5z"}))),l.a.createElement("div",{className:"pagin-buttons"},l.a.createElement("div",{className:"pagin-up",onClick:this.paginUp},l.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 29.3 16.2",xmlSpace:"preserve"},l.a.createElement("style",{type:"text/css"}),l.a.createElement("path",{class:"st0",style:{fill:"#755DD5"},d:"M26.6,0.5l-12,12l-12-12C2-0.1,1-0.1,0.4,0.5s-0.6,1.6,0,2.2l13.1,13.1c0.6,0.6,1.6,0.6,2.2,0L28.8,2.7 c0.6-0.6,0.6-1.6,0-2.2C28.2-0.2,27.2-0.2,26.6,0.5z"}))),l.a.createElement("div",{className:"pagin-down",onClick:this.paginDown},l.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 29.3 16.2",xmlSpace:"preserve"},l.a.createElement("style",{type:"text/css"}),l.a.createElement("path",{class:"st0",style:{fill:"#755DD5"},d:"M26.6,0.5l-12,12l-12-12C2-0.1,1-0.1,0.4,0.5s-0.6,1.6,0,2.2l13.1,13.1c0.6,0.6,1.6,0.6,2.2,0L28.8,2.7 c0.6-0.6,0.6-1.6,0-2.2C28.2-0.2,27.2-0.2,26.6,0.5z"})))))}}]),n}(l.a.Component),k=Object(o.b)((function(e){return{songsList:e.songs.songs,current:e.songs.currentSong,progres:e.songs.progres,playlist:e.songs.playlist,shuffle:e.songs.shuffle,loop:e.songs.loop,pause:e.songs.pause,prevSong:e.songs.prevSong,nextSong:e.songs.nextSong}}),{playSong:E,updateProgres:w,togglePlaylist:v,togglePrevSong:x,toggleNextSong:O,chooseSong:function(e){return{type:"CHOOSE_SONG",payload:e}}})(j),_=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).showPlaylist=function(){e.props.togglePlaylist()},e}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement(k,null),l.a.createElement("div",{className:"footer-menu",onClick:this.showPlaylist},l.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 36 26",xmlSpace:"preserve"},l.a.createElement("style",{type:"text/css"}),l.a.createElement("path",{id:"playlist_ico",className:"st0",style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#6F729C"},d:"M11.1,26c-0.9,0-1.7-0.7-1.7-1.7c0-0.9,0.7-1.7,1.7-1.7c0,0,0,0,0,0h23.2 c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.7,1.7-1.7,1.7c0,0,0,0,0,0H11.1z M11.1,14.7c-0.9,0-1.7-0.7-1.7-1.7c0-0.9,0.7-1.7,1.7-1.7 c0,0,0,0,0,0h23.2c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.7,1.7-1.7,1.7c0,0,0,0,0,0H11.1z M11.1,3.4c-0.9,0-1.7-0.7-1.7-1.7 c0-0.9,0.7-1.7,1.7-1.7c0,0,0,0,0,0h23.2C35.2,0,36,0.8,36,1.7c0,0.9-0.7,1.7-1.7,1.7c0,0,0,0,0,0H11.1z M1.7,3.4 C0.8,3.4,0,2.6,0.1,1.7S0.9,0,1.8,0c0.9,0,1.7,0.8,1.7,1.7C3.5,2.7,2.7,3.4,1.7,3.4L1.7,3.4z M1.7,14.7c-0.9,0-1.7-0.8-1.7-1.7 c0-0.9,0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C3.5,13.9,2.7,14.7,1.7,14.7C1.7,14.7,1.7,14.7,1.7,14.7L1.7,14.7z M1.7,26 c-0.9,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C3.5,25.2,2.7,26,1.7,26C1.7,26,1.7,26,1.7,26L1.7,26z"}))),l.a.createElement("div",{className:"footer-text"},l.a.createElement("span",null,"NEXT"),l.a.createElement("span",null,this.props.current.id&&this.props.current.id!==this.props.songsList.length-1&&this.props.songsList[this.props.current.id+1].title)),l.a.createElement("div",{className:"footer-time"},this.props.current.id&&this.props.current.id!==this.props.songsList.length-1&&this.props.songsList[this.props.current.id+1].time))}}]),n}(l.a.Component),M=Object(o.b)((function(e){return{playlist:e.songs.playlist,songsList:e.songs.songs,current:e.songs.currentSong}}),{togglePlaylist:v})(_),P=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"progres"},l.a.createElement("div",{className:"progres-time-left"},this.props.current.time),l.a.createElement("div",{className:"progres-lines"},l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"progres-line",style:{width:"".concat(this.props.progres,"vw")}})))}}]),n}(l.a.Component),T=Object(o.b)((function(e){return{progres:e.songs.progres,current:e.songs.currentSong}}))(P),G=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(y,null),l.a.createElement(f,null),l.a.createElement(b,null),l.a.createElement(T,null),l.a.createElement(M,null))}}]),n}(l.a.Component),A=n(1),R={currentAlbum:{},currentSong:{},play:!1,progres:0,author:"KANYE WEST",album:"Unreleased",songs:[{id:0,title:"Livin in a movie",time:3.27},{id:1,title:"Dark fantasy",time:5.12},{id:2,title:"All of the lights",time:2.54},{id:3,title:"So appaled",time:3.51},{id:4,title:"Devil In A New Dress",time:4.51},{id:5,title:"Runnaway",time:3.46},{id:6,title:"Hell Of A Live",time:3.09},{id:7,title:"Blame Game",time:7.02},{id:8,title:"Lost In The World",time:3.37}],shuffle:!1,loop:!1,sideMenu:!1,playlist:!1,clear:!1,pause:!1,nextSong:!1,prevSong:!1,chooseSong:!1},z=Object(c.c)({songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY_SONG":return Object(A.a)(Object(A.a)({},e),{},{currentSong:e.songs[t.payload],playlist:!1,play:!0,progres:0});case"STOP_SONG":return Object(A.a)(Object(A.a)({},e),{},{currentSong:{}});case"UPDATE_PROGRES":return Object(A.a)(Object(A.a)({},e),{},{progres:e.progres+t.payload});case"TOGGLE_MENU":return Object(A.a)(Object(A.a)({},e),{},{sideMenu:!e.sideMenu});case"TOGGLE_PLAYLIST":return Object(A.a)(Object(A.a)({},e),{},{playlist:!e.playlist});case"SHUFFLE":return Object(A.a)(Object(A.a)({},e),{},{shuffle:!e.shuffle,loop:!1});case"LOOP":return Object(A.a)(Object(A.a)({},e),{},{loop:!e.loop,shuffle:!1});case"START_INTERVAL":return Object(A.a)(Object(A.a)({},e),{},{clear:!1});case"STOP_INTERVAL":return Object(A.a)(Object(A.a)({},e),{},{clear:!0,progres:0});case"PAUSE":return Object(A.a)(Object(A.a)({},e),{},{pause:!e.pause});case"TOGGLE_PREVSONG":return Object(A.a)(Object(A.a)({},e),{},{prevSong:t.payload});case"TOGGLE_NEXTSONG":return Object(A.a)(Object(A.a)({},e),{},{nextSong:t.payload});case"CHOOSE_SONG":return Object(A.a)(Object(A.a)({},e),{},{chooseSong:t.payload});default:return e}}}),D=Object(c.d)(z,Object(c.a)(i.a));r.a.render(l.a.createElement(o.a,{store:D},l.a.createElement(G,null)),document.querySelector("body"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fd74e018.chunk.js.map