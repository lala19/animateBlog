"use strict";$(function(){$.ajax({url:"http://localhost:9000/getEssay",type:"get",dataType:"JSON"}).then(function(a){console.log(a);var e=a.results.reverse(),t=JSON.parse($.getCookie("userinfo")||"{}");if("{}"==JSON.stringify(t)){$("#Listcon").removeClass("am-u-md-8").addClass("am-u-md-12");for(var n=0;n<e.length;n++){var i=' <article class="am-g blog-entry-article articless" data-info="'+e[n].e_id+'">\n        <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img" style:"height:217px; width:500px; overflow:hidden">\n            <img src="'+e[n].e_img+'" alt="" class="am-u-sm-12" style="max-height:217px; max-width:422px;">\n        </div>\n        <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-text">\n            <span>\n                <a href="javascript:void(0);" class="blog-color">article&nbsp;</a>\n            </span>\n            <span> <a href="userinfo.html" class="gouser">@'+e[n].u_name+"</a> &nbsp;</span>\n            <span>"+e[n].e_time+'</span>\n            <h1>\n                <a href="javascript:void(0);" class="article-title">'+e[n].e_title+"</a>\n            </h1>\n            <p>"+e[n].e_describe+'\n            </p>\n            <p>\n                <a href="javascript:void(0);" class="blog-continue">continue reading</a>\n            </p>\n        </div>\n    </article>';$("#articleList").html($("#articleList").html()+i)}}else{$("#aside").load("./aside.html");for(var s=0;s<3;s++)if(null!=e[s]){i=' <article class="am-g blog-entry-article articless" data-info="'+e[s].e_id+'">\n                    <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img" style:"height:217px; width:422px; overflow:hidden">\n                        <img src="'+e[s].e_img+'" alt="" class="am-u-sm-12" style="max-height:217px; max-width:422px;">\n                    </div>\n                    <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-text">\n                        <span>\n                            <a href="javascript:void(0);" class="blog-color">article&nbsp;</a>\n                        </span>\n                        <span> <a href="javascript:void(0)" class="gouser">@'+e[s].u_name+"</a> &nbsp;</span>\n                        <span>"+e[s].e_time+'</span>\n                        <h1>\n                            <a href="javascript:void(0);" class="article-title">'+e[s].e_title+"</a>\n                        </h1>\n                        <p>"+e[s].e_describe+'\n                        </p>\n                        <p>\n                            <a href="javascript:void(0);" class="blog-continue">continue reading</a>\n                        </p>\n                    </div>\n                </article>';$("#articleList").html($("#articleList").html()+i)}$(".prev").on("click",function(){var a=parseInt($(this).attr("data-info")),t=parseInt(e.length/3);if(0<e.length%t&&t++,2<=a){$("#articleList").html(""),$(".prev").attr("data-info",a-1),$(".next").attr("data-info",a-1);for(var n=3*(a-2);n<3*(a-2)+3;n++)if(null!=e[n]){var i=' <article class="am-g blog-entry-article articless" data-info="'+e[n].e_id+'">\n                            <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img" style:"height:217px; width:422px; overflow:hidden">\n                                <img src="'+e[n].e_img+'" alt="" class="am-u-sm-12" style="max-height:217px; max-width:422px;">\n                            </div>\n                            <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-text">\n                                <span>\n                                    <a href="javascript:void(0);" class="blog-color">article&nbsp;</a>\n                                </span>\n                                <span> <a href="javascript:void(0)" class="gouser">@'+e[n].u_name+"</a> &nbsp;</span>\n                                <span>"+e[n].e_time+'</span>\n                                <h1>\n                                    <a href="javascript:void(0);" class="article-title">'+e[n].e_title+"</a>\n                                </h1>\n                                <p>"+e[n].e_describe+'\n                                </p>\n                                <p>\n                                    <a href="javascript:void(0);" class="blog-continue">continue reading</a>\n                                </p>\n                            </div>\n                        </article>';$("#articleList").html($("#articleList").html()+i)}$(".gouser").on("click",function(){var a=$(this).html().substr(1);window.location.href="userinfo.html?actionname="+encodeURIComponent(a)}),$(".article-title").on("click",function(){var a=$(this).parents(".articless").attr("data-info");window.location.href="article.html?articleid="+a})}}),$(".next").on("click",function(){var a=parseInt($(this).attr("data-info")),t=parseInt(e.length/3);if(0<e.length%t&&t++,a<=t){$("#articleList").html(""),$(".prev").attr("data-info",a+1),$(".next").attr("data-info",a+1);for(var n=3*a;n<3*a+3;n++)if(null!=e[n]){var i=' <article class="am-g blog-entry-article articless" data-info="'+e[n].e_id+'">\n                            <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img" style:"height:217px; width:422px; overflow:hidden">\n                                <img src="'+e[n].e_img+'" alt="" class="am-u-sm-12" style="max-height:217px; max-width:422px;">\n                            </div>\n                            <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-text">\n                                <span>\n                                    <a href="javascript:void(0);" class="blog-color">article&nbsp;</a>\n                                </span>\n                                <span> <a href="javascript:void(0)" class="gouser">@'+e[n].u_name+"</a> &nbsp;</span>\n                                <span>"+e[n].e_time+'</span>\n                                <h1>\n                                    <a href="javascript:void(0);" class="article-title">'+e[n].e_title+"</a>\n                                </h1>\n                                <p>"+e[n].e_describe+'\n                                </p>\n                                <p>\n                                    <a href="javascript:void(0);" class="blog-continue">continue reading</a>\n                                </p>\n                            </div>\n                        </article>';$("#articleList").html($("#articleList").html()+i),console.log(i)}$(".gouser").on("click",function(){var a=$(this).html().substr(1);window.location.href="userinfo.html?actionname="+encodeURIComponent(a)}),$(".article-title").on("click",function(){var a=$(this).parents(".articless").attr("data-info");window.location.href="article.html?articleid="+a})}}),$(".gouser").on("click",function(){var a=$(this).html().substr(1);alert(encodeURIComponent(a)),window.location.href="userinfo.html?actionname="+encodeURIComponent(a)})}$(".article-title").on("click",function(){var a=$(this).parents(".articless").attr("data-info");window.location.href="article.html?articleid="+a})}),$(document).ready(function(){})});