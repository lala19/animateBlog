"use strict";$(function(){var a=JSON.parse($.getCookie("userinfo")||"{}");console.log(a.u_name),"{}"!=JSON.stringify(a)&&$.ajax({url:"http://localhost:9000/getEssayByUser",type:"get",dataType:"JSON",data:{u_name:a.u_name}}).then(function(a){var e=a.results;console.log(e);var t=[];for(var n in e){var i=e[n].e_time,s=i.split("/"),l={};l.e_title=e[n].e_title,l.e_id=e[n].e_id,l.u_name=e[n].u_name,l.e_time=e[n].e_time,l.year=s[0],l.month=s[1],l.time=i,t.push(l)}var r={};for(var o in t){var m=t[o].year,d=t[o].month;null==r[m]&&(r[m]={}),null==r[m][d]&&(r[m][d]=[]),r[m][d].push(t[o])}if("{}"==JSON.stringify(r)){$(".con").html("你还没有发表文章╭~~~╮\n                (o@.@o) ")}else{for(var h in r){$("<div></div>");var u=$("<div></div>");for(var c in $(u).addClass("timeline-year"),$(u).html("<h1>"+h+"</h1><hr>"),r[h]){var p=$("<ul></ul>");$(p).html("<h3>"+c+"月</h3><hr>");for(var f=0;f<r[h][c].length;f++){var v='\n                        <li>\n                        <span class="am-u-sm-8 am-u-md-6 timeline-span">\n                            <a href="article.html?articleid='+r[h][c][f].e_id+'">'+r[h][c][f].e_title+'</a>\n                        </span>\n                        <span class="am-u-sm-4 am-u-md-2 am-hide-sm-only">'+r[h][c][f].e_time+'</span>\n                        <span class="am-u-sm-4 am-u-md-2 am-hide-sm-only">'+r[h][c][f].u_name+'</span>\n                        <span class="am-u-sm-4 am-u-md-2">\n                            <a href="javascript:void(0)" class="editor" data-info="'+r[h][c][f].e_id+'">编辑</a>\n                            <a href="javascript:void(0)" class="delete">删除</a>\n                        </span>\n                    </li>\n                        ';$(p).html($(p).html()+v+"<br/>")}$(u).append($(p))}$(".con").prepend($(u))}$(".editor").on("click",function(){sessionStorage.setItem("editorid",$(this).attr("data-info")),window.location.href="udueditor.html"}),$(".delete").on("click",function(){if(confirm("确定删除吗")){var a=$(this).siblings("a").attr("data-info");$.ajax({url:"http://localhost:9000/delEssay",type:"post",dataType:"JSON",data:{e_id:a}}).then(function(a){1==a.status&&(alert(a.msg),window.location.href="timeline.html")})}})}})});