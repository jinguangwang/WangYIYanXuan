! function (e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var i = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}({
    0: function (e, t, n) {
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            i = n(1),
            r = n(10),
            o = n(9),
            s = n(724),
            c = n(4),
            l = n(439),
            u = n(67);
        u._$getScript();
        var p = i.extend({
            init: function (e) {
                this.supr(e), r._$isWakeUpApp() && c._$isInAndroid() && o._$openApp("yanxuan://homepage", function () {}), ReactDOM.render(React.createElement(s, a({}, window.jsonData, {
                    noticeList: window.noticeList
                })), document.getElementById("j-bd"));
                var t = {
                    link: window.yanxuan_href.split("#")[0],
                    title: "网易严选",
                    desc: "严选好物，用心生活"
                };
                u._$configShareData(t), new l({
                    data: {
                        share: {
                            title: t.title,
                            imgUrl: "https://yanxuan.nosdn.127.net/81fb8f2d95036ef5378883027f34da6e.png",
                            url: t.link,
                            desc: t.desc
                        }
                    }
                })
            }
        });
        new p
    },
    1: function (e, t, n) {
        var a = n(2),
            i = n(4),
            r = n(7),
            o = n(8),
            s = n(10),
            c = (n(9), n(11)),
            l = n(19),
            u = n(20),
            p = n(6),
            d = a.extend({
                init: function (e) {
                    this.supr(e), i._$isNew() ? this.sendPageView() : r.ajax({
                        url: "/xhr/welcome/confirm.json",
                        data: {
                            url: location.pathname + location.search
                        },
                        success: function () {
                            this.sendPageView()
                        }.bind(this)
                    }), this.__agent = new o, s._$setAppChannelType(), c.isInHuanBei() && this.initHuanBei(), i._$isInApp() || document.addEventListener("visibilitychange", function () {
                        "hidden" == document.visibilityState && YXStat.q.push(["add_event", {
                            event_name: "exit_leave_page",
                            page_name: "default",
                            event_action: "exit"
                        }])
                    }), this.fixIOS12Bug()
                },
                initHuanBei: function () {
                    window.androidWebBridge ? (window.androidInjectSuccess = this.bindHuanbeiEvent.bind(this), window.androidWebBridge.injectJS()) : this.bindHuanbeiEvent(), window.$logout = function (e) {
                        e = e || "", window.yanxuan_href = location.protocol + "//" + location.host + "/u/logout?callback=" + encodeURIComponent(e)
                    }
                },
                bindHuanbeiEvent: function () {
                    this.refreshCart(), u.off("refreshCart"), u.on("refreshCart", this.refreshCart)
                },
                refreshCart: function () {
                    l.getMiniCartNum().done(function (e) {
                        c.updateCart(e.data)
                    })
                },
                sendPageView: function () {
                    var e = window.CURRENTPAGE || "default",
                        t = {
                            event_name: "view_" + e,
                            page_name: e
                        };
                    "featurelist" === e && (t.parameters = {
                        categorySeriesId: window.detail && window.detail.id
                    }), "index" === e && (t.parameters = {
                        userType: window.jsonData.freshmanFlag ? "1" : "0"
                    }), "tokenresult" === e && (t.parameters = {
                        couponId: p.getUrlParams().token
                    }), "series" === e && (t.parameters = {
                        id: p.getUrlParams().id
                    }), ["searchresult", "HTMLDetail", "exclusive", "salelist", "cartitempool", "popular", "supermcinviteindex", "preferentiRank", "caterank", "orderdetail", "login", "catelv1channel", "plusmember", "plusopen", "plusmemberbenefit", "plusmemberpaysuc"].indexOf(e) === -1 && ("payselect" === e && (t.parameters = {
                        orderId: p.getUrlParams().orderId
                    }), YXStat.q.push(["track_view", t]))
                },
                fixIOS12Bug: function () {
                    var e;
                    navigator.userAgent.indexOf("iPhone OS 12") > -1 && (document.addEventListener("focusin", function (t) {
                        var n = t.target;
                        ["INPUT", "TEXTAREA"].indexOf(n.nodeName) > -1 && n.className.indexOf("nofocus") === -1 && (e = document.body && document.body.scrollTop)
                    }), document.addEventListener("focusout", function (t) {
                        var n = t.target;
                        ["INPUT", "TEXTAREA"].indexOf(n.nodeName) > -1 && n.className.indexOf("nofocus") === -1 && document.body && (document.body.scrollTop = e)
                    }))
                }
            });
        e.exports = d
    },
    2: function (e, t, n) {
        var a = n(3),
            i = (n(4), [].slice),
            r = a({
                init: function (e) {
                    this.data = {}, e = e || {}, e.events && this.$on(e.events), this.data = e.data || {}, this.config && this.config(this.data)
                },
                config: function (e) {},
                $on: function (e, t) {
                    if ("object" == typeof e)
                        for (var n in e) this.$on(n, e[n]);
                    else {
                        var a = this,
                            i = a._handles || (a._handles = {}),
                            r = i[e] || (i[e] = []);
                        r.push(t)
                    }
                    return this
                },
                $off: function (e, t) {
                    var n = this;
                    if (n._handles) {
                        e || (this._handles = {});
                        var a, i = n._handles;
                        if (a = i[e]) {
                            if (!t) return i[e] = [], n;
                            for (var r = 0, o = a.length; r < o; r++)
                                if (t === a[r]) return a.splice(r, 1), n
                        }
                        return n
                    }
                },
                $emit: function (e) {
                    var t, n, a, r = this,
                        o = r._handles;
                    if (e) {
                        var n = i.call(arguments, 1),
                            a = e;
                        if (!o) return r;
                        if (t = o[a.slice(1)])
                            for (var s = 0, c = t.length; s < c; s++) t[s].apply(r, n);
                        if (!(t = o[a])) return r;
                        for (var l = 0, c = t.length; l < c; l++) t[l].apply(r, n);
                        return r
                    }
                }
            });
        e.exports = r
    },
    3: function (e, t, n) {
        var a, i;
        ! function (r, o, s) {
            a = s, i = "function" == typeof a ? a.call(t, n, t, e) : a, !(void 0 !== i && (e.exports = i))
        }("klass", this, function () {
            function e(e) {
                return i.call(t(e) ? e : function () {}, e, 1)
            }

            function t(e) {
                return typeof e === r
            }

            function n(e, t, n) {
                return function () {
                    var a = this.supr;
                    this.supr = n[s][e];
                    var i = {}.fabricatedUndefined,
                        r = i;
                    try {
                        r = t.apply(this, arguments)
                    } finally {
                        this.supr = a
                    }
                    return r
                }
            }

            function a(e, a, i) {
                for (var r in a) a.hasOwnProperty(r) && (e[r] = t(a[r]) && t(i[s][r]) && o.test(a[r]) ? n(r, a[r], i) : a[r])
            }

            function i(e, n) {
                function i() {}

                function r() {
                    this.init ? this.init.apply(this, arguments) : (n || l && o.apply(this, arguments), u.apply(this, arguments))
                }
                i[s] = this[s];
                var o = this,
                    c = new i,
                    l = t(e),
                    u = l ? e : this,
                    p = l ? {} : e;
                return r.methods = function (e) {
                    return a(c, e, o), r[s] = c, this
                }, r.methods.call(r, p).prototype.constructor = r, r.extend = arguments.callee, r[s].implement = r.statics = function (e, t) {
                    return e = "string" == typeof e ? function () {
                        var n = {};
                        return n[e] = t, n
                    }() : e, a(this, e, o), this
                }, r
            }
            var r = "function",
                o = /xyz/.test(function () {
                    xyz
                }) ? /\bsupr\b/ : /.*/,
                s = "prototype";
            return e
        })
    },
    4: function (e, t, n) {
        var a = n(5),
            i = n(6),
            r = {
                __cookieCache: {},
                _$setCookie: function (e, t, n, a, i) {
                    var r = e + "=" + escape(t),
                        a = a || "/";
                    if (n && n != -1) {
                        var o = new Date;
                        o.setTime(o.getTime() + 864e5 * n), r += ";expires=" + o.toGMTString()
                    }
                    a && (r += ";path=" + a), i && (r += ";domain=" + i), document.cookie = r + ";", this._$clearCookieCache()
                },
                _$clearCookieCache: function () {
                    this.__cookieCache = {}
                },
                _$getCookie: function (e) {
                    var t = "",
                        n = this.__cookieCache;
                    n.lastTime = (new Date).getTime(), t = n.cookie = document.cookie;
                    var a = new RegExp(e + "=([^;]+)"),
                        i = a.exec(t);
                    return i ? unescape(i[1]) : null
                },
                _$escapeHTML: function (e) {
                    return e ? ("number" == typeof e && (e = e.toString()), e.replace(/[\u0000]/g, "").replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")) : ""
                },
                _$forIn: function (e, t, n) {
                    if (!e || !a._$isFunction(t)) return null;
                    if (a._$isNumber(e.length)) {
                        for (var i = 0, o = e.length; i < o; i++)
                            if (t.call(n, e[i], i, e)) return i
                    } else if (a._$isObject(e)) return r._$loop(e, t, n);
                    return null
                },
                _$loop: function (e, t, n) {
                    if (e && t) {
                        var a;
                        for (var i in e)
                            if (e.hasOwnProperty(i) && (a = t.call(n, e[i], i, e))) return i
                    }
                },
                _$extend: function (e, t, n) {
                    for (var a in t)(void 0 == e[a] || n) && (e[a] = t[a]);
                    return e
                },
                _$typeOf: function (e) {
                    return null == e ? String(e) : {}.toString.call(e).slice(8, -1).toLowerCase()
                },
                _$merge: function (e, t) {
                    var n, a = r._$typeOf(e),
                        i = r._$typeOf(t);
                    if (a !== i) return t;
                    switch (i) {
                        case "object":
                            for (var o in t) t.hasOwnProperty(o) && (e[o] = r._$merge(e[o], t[o]));
                            break;
                        case "array":
                            for (var o = 0, n = t.length; o < n; o++) e[o] = r._$merge(e[o], t[o]);
                            e.length = t.length;
                            break;
                        default:
                            return t
                    }
                    return e
                },
                _$isLogin: function () {
                    var e = window.$global;
                    return e && 0 != e.userid || !!this._$getCookie("S_INFO") || !!this._$getCookie("S_OINFO")
                },
                _$isWebviewLogin: function () {
                    return !!this._$getCookie("NTES_SESS") || !!this._$getCookie("NTES_OSESS")
                },
                _$getFullUrsName: function () {
                    var e = "",
                        t = "",
                        n = "";
                    if (this._$getCookie("S_INFO")) e = "P_INFO";
                    else {
                        if (!this._$getCookie("S_OINFO")) return "";
                        e = "P_OINFO"
                    }
                    try {
                        t = decodeURIComponent(this._$getCookie(e)).replace(/(^\"*)|(\"*$)/g, "") || ""
                    } catch (a) {
                        t = this._$getCookie(e).replace(/(^\"*)|(\"*$)/g, "") || ""
                    }
                    return n = t.indexOf("|"), n > 0 && (t = t.substring(0, n) + ""), t
                },
                _$isNew: function () {
                    return !!this._$getCookie("yx_aui")
                },
                _$getNew: function () {
                    return this._$getCookie("yx_aui")
                },
                _$smoothTo: function (e, t, n) {
                    function a() {
                        u += .05, u > 1 && (u = 1), window.scrollTo(c.x * u + r.x, r.y + u * c.y), u < 1 ? s = setTimeout(a, l) : i()
                    }

                    function i() {
                        clearTimeout(s), document.onmousewheel = null
                    }
                    if ("string" == typeof e && (e = $(e)), e) {
                        n = n || 0;
                        var r = {
                                x: Math.max(document.body.scrollLeft, document.documentElement.scrollLeft),
                                y: Math.max(document.body.scrollTop, document.documentElement.scrollTop)
                            },
                            o = e.offset();
                        o.top += n;
                        var s, c = {
                                x: o.left - r.x,
                                y: o.top - r.y
                            },
                            t = t || 500,
                            l = t / 60,
                            u = .01;
                        return document.onmousewheel = i, s = setTimeout(a, l), this
                    }
                },
                _$getArrayItems: function (e, t) {
                    var n = [];
                    for (var a in e) n.push(e[a]);
                    for (var i = [], r = 0; r < t && n.length > 0; r++) {
                        var o = Math.floor(Math.random() * n.length);
                        i[r] = n[o], n.splice(o, 1)
                    }
                    return i
                },
                _$string2object: function (e, t) {
                    var n = {};
                    return this._$forIn((e || "").split(t), function (e) {
                        var t = e.split("=");
                        if (t && t.length) {
                            var a = t.shift();
                            if (a) try {
                                n[decodeURIComponent(a)] = decodeURIComponent(t.join("="))
                            } catch (i) {
                                n[a] = t.join("=")
                            }
                        }
                    }), n
                },
                _$getUrlParams: function () {
                    return this._$string2object(window.location.search.replace("?", ""), "&")
                },
                _$getUrlParam: function (e) {
                    return this._$getUrlParams()[e] || ""
                },
                _$offset: function () {
                    var e = function (e) {
                        return e == document.body || e == document.documentElement
                    };
                    return function (t, n) {
                        if (!t) return null;
                        n = n || null;
                        for (var a, i, r, o = t, s = {
                                x: 0,
                                y: 0
                            }; o && o != n;) a = e(o) || o == t, i = a ? 0 : o.scrollLeft, r = parseInt($(o).css("borderLeftWidth").slice(0, -2)) || 0, s.x += o.offsetLeft + r - i, i = a ? 0 : o.scrollTop, r = parseInt($(o).css("borderTopWidth").slice(0, -2)) || 0, s.y += o.offsetTop + r - i, o = o.offsetParent;
                        return s
                    }
                }(),
                _$getUid: function () {
                    var e = window.$global;
                    return "0" != e.userid ? e.userid : ""
                },
                _$getDownloadLink: function () {
                    var e = this._$getCookie("yx_from") || "",
                        t = this._$getUrlParam("channel"),
                        n = "/downloadapp";
                    return "" != e && (n += "?_stat_from=" + e), "" != t && (n += n.indexOf("?") > 0 ? "&channel=" + t : "?channel=" + t), n
                },
                _$getDownloadLinkWithQuery: function (e) {
                    var t = this._$getDownloadLink();
                    return t += t.indexOf("?") > 0 ? "&" + e : "?" + e
                },
                _$createRequest: function (e, t, n) {
                    var a = document.createElement("iframe");
                    a.src = e, document.body.appendChild(a), t ? $(a).ready(function () {
                        var e = $(a.contentDocument || a.contentWindow.document).find("title").text();
                        e.indexOf("404") > -1 ? n && n() : t()
                    }) : setTimeout(function () {
                        document.body.removeChild(a)
                    }, 2e3)
                },
                _$isInAndroid: function () {
                    return navigator.userAgent.toLowerCase().match(/android/gi)
                },
                _$isInIOS: function () {
                    return navigator.userAgent.toLowerCase().match(/iphone|ipad/gi)
                },
                _$isInApp: function () {
                    return navigator.userAgent.toLowerCase().match(/yanxuan/gi)
                },
                _$isInUc: function () {
                    return navigator.userAgent.toLowerCase().match(/ucbrowser/gi)
                },
                _$isInIpad: function () {
                    return navigator.userAgent.toLowerCase().match(/ipad/gi)
                },
                _$getIOSVersion: function () {
                    var e = navigator.userAgent.toLowerCase().match(/(\d+(_\d+)*) like mac os x/),
                        t = "00.00.00";
                    return e && e[1] && (t = e[1].split("_").map(function (e) {
                        return 1 === e.length && (e = "0" + e), e
                    }).join("."), 5 === t.length && (t += ".00")), t
                },
                _$sendStatisticsUrl: function (e) {
                    var t = i.appendURL("/a.js", e);
                    i.getScript(t)
                },
                _$toArray: function (e) {
                    return Array.prototype.slice.apply(e)
                },
                _$formatReadCount: function (e) {
                    return e >= 1e6 ? Number(e / 1e6).toFixed(1) + "m" : e >= 1e3 ? Number(e / 1e3).toFixed(1) + "k" : e
                },
                _$getStrLength: function (e) {
                    for (var t, n = 0, a = 0; a < e.length; a++) t = e.charCodeAt(a), t >= 0 && t <= 128 ? n++ : n += 2;
                    return n
                },
                _$getABTestConfig: function () {
                    var e, t = navigator.userAgent.match(/\(abTest;(.*)\)/);
                    if (t && 2 === t.length) try {
                        e = JSON.parse(t[1])
                    } catch (n) {
                        console.log(n)
                    }
                    return e
                },
                openH5InApp: function (e) {
                    window.yanxuan_href = "yanxuan://subject?subjecturl={0}".format(encodeURIComponent(e))
                },
                _$getCPSJs: function (e) {
                    var t = "//yanxuan.nosdn.127.net/hxm/yanxuan-cpsjs/common/js/cps.min.js?v=" + window.commonLibTimestamp;
                    "online" != window.$global.environment && (t = "//yanxuan.nosdn.127.net/hxm/yanxuan-cpsjs/common/js/cps.test.js?v=" + (new Date).getTime()), i.getScript(t, "utf-8", e)
                },
                _$topPosition: function (e) {
                    return e ? e.offsetTop + this._$topPosition(e.offsetParent) : 0
                },
                _$stopBgScrolling: function () {
                    var e = document.body.scrollTop || document.documentElement.scrollTop;
                    document.body.style.cssText += "position:fixed;top:-" + e + "px;width:100%;"
                },
                _$cancelStopBgScrolling: function () {
                    var e = document.body;
                    e.style.position = "";
                    var t = e.style.top;
                    document.body.scrollTop = document.documentElement.scrollTop = -parseInt(t), e.style.top = "", e.style.width = ""
                }
            };
        e.exports = r
    },
    5: function (e, t) {
        var n = {},
            a = function (e, t) {
                try {
                    return t = t.toLowerCase(), null === e ? "null" == t : void 0 === e ? "undefined" == t : {}.toString.call(e).toLowerCase() == "[object " + t + "]"
                } catch (n) {
                    return !1
                }
            };
        n._$isFunction = function (e) {
            return a(e, "function")
        }, n._$isString = function (e) {
            return a(e, "string")
        }, n._$isNumber = function (e) {
            return a(e, "number")
        }, n._$isBoolean = function (e) {
            return a(e, "boolean")
        }, n._$isDate = function (e) {
            return a(e, "date")
        }, n._$isArray = function (e) {
            return a(e, "array")
        }, n._$isObject = function (e) {
            return a(e, "object")
        }, e.exports = n
    },
    6: function (e, t) {
        var n = {
            cropURL: function (e, t) {
                for (var n = e, a = 0; a < t.length; a++) {
                    var i = new RegExp("[&]?" + t[a] + "=[^&]+", "g");
                    n = n.replace(i, "").replace("?&", "?")
                }
                return n
            },
            getUrlParams: function (e) {
                var t = {};
                if (e || (e = window.yanxuan_href), e.indexOf("?") == -1) return t;
                for (var n = e.indexOf("?"), a = e.substring(n + 1), i = a.split("&"), r = 0; r < i.length; r++) {
                    var n = i[r].indexOf("=");
                    if (n != -1) try {
                        t[i[r].substring(0, n)] = decodeURIComponent(i[r].substring(n + 1))
                    } catch (o) {
                        t[i[r].substring(0, n)] = i[r].substring(n + 1)
                    }
                }
                return t
            },
            getUrlParam: function (e, t) {
                return e ? this.getUrlParams(t)[e] : ""
            },
            appendURL: function (e, t) {
                var n = e || "";
                if (!t) return n;
                var a = n.split("?"),
                    i = a[0] + "?" + Object.keys(t).map(function (e) {
                        return e + "=" + t[e]
                    }).join("&");
                return 2 == a.length && (i = i + "&" + a[1]), i.replace(/&+/gm, "&")
            },
            urlHttpsile: function (e, t) {
                var n = e || "",
                    a = $URL.proxyURL;
                return t && (a = $URL.mimgProxyURL), 0 == n.indexOf("http://") ? a + n.replace("http://", "") : n
            },
            jsonp: function (e, t, n) {
                var a = $.extend({
                        charset: "utf-8"
                    }, n),
                    i = "_tmp_jsonp_callback" + +new Date;
                a.funcName && (i = a.funcName), window[i] = function () {
                    t && t.apply(window, arguments);
                    try {
                        delete window[i]
                    } catch (e) {}
                };
                var r = {};
                r[a.callbackName || "callback"] = i;
                var o = this.appendURL(e, r);
                this.getScript(o, a.charset, function () {
                    try {
                        window[i](), delete window[i]
                    } catch (e) {}
                })
            },
            getScript: function (e, t, n, a) {
                var i = function () {
                    n && n.apply(window, arguments)
                };
                this._getScript(e, t, i, a)
            },
            _getScript: function (e, t, n, a) {
                setTimeout(function () {
                    var i = /loaded|complete|undefined/,
                        r = document.createElement("script");
                    r.setAttribute("charset", t || "utf-8"), r.setAttribute("type", "text/javascript"), r.setAttribute("src", e), r.async = "async";
                    var o = function (e) {
                        i.test(r.readyState) && (r.onload = r.onerror = r.onreadystatechange = null, r.parentNode.removeChild(r), r = void 0, e ? "function" == typeof n && setTimeout(n, 0) : "function" == typeof a ? setTimeout(a, 0) : "function" == typeof n && setTimeout(n, 0))
                    };
                    r.onload = function () {
                        o(!0)
                    }, r.onerror = function () {
                        o(!1)
                    }, r.onreadystatechange = function () {
                        o(!0)
                    };
                    var s = document.getElementsByTagName("head")[0];
                    s.appendChild(r)
                }, 0)
            },
            getPicUrl: function (e, t, n) {
                var n = n || 90,
                    a = {
                        quality: n
                    };
                return t && (a.thumbnail = t), this.appendURL(e, a) + "&imageView"
            },
            getItemDetailUrl: function (e) {
                return this.appendURL("/item/detail", {
                    id: e
                })
            },
            getPathName: function (e) {
                var t = document.createElement("a"),
                    n = "";
                return t.setAttribute("href", e), n = t.pathname
            },
            getSearch: function (e) {
                var t = document.createElement("a"),
                    n = "";
                return t.setAttribute("href", e), n = t.search
            },
            getHostName: function (e) {
                var t = document.createElement("a"),
                    n = "";
                return t.setAttribute("href", e), n = t.hostname
            }
        };
        e.exports = n
    },
    7: function (e, t, n) {
        var a = n(6),
            i = n(4),
            r = {
                xhrQueue: {},
                ajax: function (e) {
                    var t = this,
                        n = e.url;
                    if (!n) return !1;
                    e.requestTime = new Date, window.IS_ACTIVITY_IFRAME && (n = "/act/forward" + n), e.param && (n = a.appendURL(n, e.param)), i._$getCookie("yx_csrf") ? n = a.appendURL(n, {
                        csrf_token: i._$getCookie("yx_csrf")
                    }) : /\/xhr\/saleCenter\/index\.json/.test(n) && i._$isInApp() && window.YXStat && window.YXStat.q.push(["add_event", {
                        event_name: "show_saleCenter_csrf",
                        page_name: "sale",
                        event_action: "show",
                        parameters: {
                            os: i._$isInIOS() ? "Ios" : "android"
                        }
                    }]);
                    var r, o, s = e.data || {};
                    r = e.dataType ? e.dataType : "json", "undefined" != typeof e.contentType && (o = e.contentType), "undefined" == typeof o || o === $.ajaxSettings.contentType ? s = $.param(s, !0) : "application/json" === o && (s = JSON.stringify(s));
                    var c = n + s,
                        l = t.xhrQueue[c];
                    if (l) {
                        var u = l[l.length - 1];
                        if (t.xhrQueue[c].push(e), e.requestTime - u.requestTime < 3e4) return
                    } else t.xhrQueue[c] = [e];
                    var p = function (e, n, a) {
                            var i = t.xhrQueue[c];
                            delete t.xhrQueue[c], i && ($.each(i, function (t, i) {
                                i.error && i.error(e, n, a)
                            }), $.each(i, function (t, i) {
                                i.exception && i.exception.dispatch(e, n, a)
                            }))
                        },
                        d = function (e) {
                            var n = t.xhrQueue[c];
                            delete t.xhrQueue[c], $.each(n, function (t, n) {
                                n.success && n.success(e)
                            })
                        },
                        m = {
                            url: n,
                            type: e.type || "POST",
                            dataType: r,
                            contentType: o,
                            data: s,
                            async: 0 != e.async,
                            success: function (e) {
                                /^(html|text)$/i.test(r) ? d(e) : e ? e.status && e.statusText ? p(e.status, e.status || "", e) : "S_OK" == e.code || "200" == e.code || "201" == e.code ? d(e) : "403" == e.code || 403 == e.code ? window.yanxuan_href = "/u/login?callback=" + encodeURIComponent(window.yanxuan_href) : e.code ? p(e.code, e.errorCode || "", e) : d(e) : p("502", "error", "no reponse text")
                            }.bind(this),
                            error: function (e, t, n) {
                                p("NET_ERROR", "", t)
                            }.bind(this),
                            xhrFields: e.xhrFields || {}
                        };
                    "undefined" != typeof e.processData && (m.processData = e.processData), "undefined" != typeof e.cache && (m.cache = e.cache), $.ajax(m)
                }
            };
        e.exports = r, $.ajaxSettings.contentType = "application/x-www-form-urlencoded; charset=UTF-8"
    },
    8: function (e, t, n) {
        var a = n(2),
            i = n(9),
            r = n(10),
            o = navigator.userAgent,
            s = (!!o.match(/(iPhone|iPod|iPad)/i), !!o.match(/Android/i), navigator.standalone, !!o.match(/Safari/i), !!o.match(/yanxuan/i)),
            c = a.extend({
                isInAndroidYXWebview: !1,
                init: function (e) {
                    this.supr(e), $(document).click($.proxy(function (e) {
                        var t = e.target;
                        do {
                            var n = t.getAttribute("data-applink"),
                                a = t.getAttribute("data-weblink");
                            if (n && "" != n && a && "" != a) {
                                this.go(n, a);
                                break
                            }
                            t = t.parentNode
                        } while (t && t !== $(document).get(0))
                    }, this))
                },
                go: function (e, t) {
                    (r._$isWakeUpApp() || s) && i._$openApp(e, function (e) {
                        e && console.log("app awake success")
                    }), s || (window.yanxuan_href = t)
                }
            });
        e.exports = c
    },
    9: function (e, t, n) {
        var a = n(4),
            i = {
                __checkOpen: function (e) {
                    function t(t) {
                        e(t > 3e3 || document.hidden || document.webkitHidden ? 1 : 0)
                    }
                    var n, a = +new Date,
                        i = 0;
                    n = setInterval(function () {
                        i++;
                        var e = +new Date - a;
                        (i >= 100 || e > 3e3) && (clearInterval(n), t(e))
                    }, 20)
                },
                _$openApp: function (e, t) {
                    var n = document.createElement("iframe");
                    n.src = e, n.style.display = "none", t && this.__checkOpen(function (e) {
                        t && t(e)
                    }), document.body.appendChild(n), setTimeout(function () {
                        document.body.removeChild(n)
                    }, 2e3)
                },
                _$getVersion: function () {
                    var e = navigator.userAgent.toLowerCase().match(/yanxuan\/(\d+\.\d+\.\d+)/);
                    return e ? e[e.length - 1] : "0.0.0"
                },
                _$downloadApp: function () {
                    a._$isInAndroid() && (window.yanxuan_href = "//u.163.com/yxandroid"), a._$isInIOS() && (window.yanxuan_href = "//u.163.com/yxios")
                },
                _$handleWakeApp: function (e) {
                    var t = e || window.yanxuan_href;
                    a._$isInAndroid() ? this._$openApp(LinkConvertor.getSchemeUrl(t), function (e) {
                        e || (window.yanxuan_href = a._$getDownloadLink())
                    }) : window.yanxuan_href = LinkConvertor.getUniversalLinkWithPrefix(t)
                }
            };
        e.exports = i
    },
    10: function (e, t, n) {
        var a = n(4),
            i = n(9),
            r = "11111111",
            o = "11111111111",
            s = {
                1: {
                    showAppBar: !1,
                    showAppLayer: !1,
                    wakeUpApp: !1
                },
                2: {
                    showAppBar: !1,
                    showAppLayer: !1,
                    wakeUpApp: !0
                },
                3: {
                    showAppBar: !1,
                    showAppLayer: !0,
                    wakeUpApp: !1
                },
                4: {
                    showAppBar: !1,
                    showAppLayer: !0,
                    wakeUpApp: !0
                },
                5: {
                    showAppBar: !0,
                    showAppLayer: !1,
                    wakeUpApp: !1
                },
                6: {
                    showAppBar: !0,
                    showAppLayer: !1,
                    wakeUpApp: !0
                },
                7: {
                    showAppBar: !0,
                    showAppLayer: !0,
                    wakeUpApp: !1
                },
                8: {
                    showAppBar: !0,
                    showAppLayer: !0,
                    wakeUpApp: !0
                }
            },
            c = ["micromessenger", "yixin", "weibo", "mailmaster", "duobao"],
            l = ["yixin", "epay163", "yanxuan"],
            u = navigator.userAgent,
            p = !!u.match(/yanxuan/i),
            d = {
                _$isShowAppBar: function () {
                    var e = this._$getAppChannelType(),
                        t = s[e].showAppBar;
                    this.__checkConformToUa(l) && (t = !1);
                    var n = a._$getCookie("yx_appbar_show");
                    return "show" === n ? t = !0 : "hide" === n && (t = !1), t
                },
                _$isShowAppLayer: function () {
                    var e = this._$getAppChannelType(),
                        t = !0;
                    this.__checkConformToUa(c) && (t = !1);
                    var t = s[e].showAppLayer;
                    if (localStorage && localStorage.getItem) {
                        var n = localStorage.getItem("yx_applayer_time"),
                            a = new Date;
                        if (window.browserAnonymousMode) return !1;
                        if (n && !isNaN(n)) {
                            var i = new Date(parseInt(n));
                            i.getFullYear() == a.getFullYear() && i.getMonth() == a.getMonth() && i.getDate() == a.getDate() && (t = !1)
                        }
                    }
                    return t
                },
                _$isWakeUpApp: function () {
                    var e = this._$getAppChannelType();
                    return s[e].wakeUpApp
                },
                _$openAppLink: function (e, t) {
                    var n = this.__generateAppUrl(e, t);
                    p || i._$openApp(n, function (e) {
                        e && console.log("app awake success")
                    })
                },
                __checkConformToUa: function (e) {
                    for (var t = 0, n = e.length, a = !1; t < n; t++) {
                        var i = new RegExp(e[t], "i");
                        if (i.test(u)) {
                            a = !0;
                            break
                        }
                    }
                    return a
                },
                __generateAppUrl: function (e, t) {
                    var n = "";
                    switch (e) {
                        case "index":
                            n = "yanxuan://homepage";
                            break;
                        case "detail":
                            n = "yanxuan://commoditydetails?commodityid=" + t;
                            break;
                        case "topic":
                            n = "yanxuan://subject?subjecturl=" + encodeURIComponent("https://m.you.163.com/topic/" + t);
                            break;
                        case "coupon":
                            n = "yanxuan://coupons";
                            break;
                        case "points":
                            n = "yanxuan://subject?subjecturl=" + encodeURIComponent("https://m.you.163.com/points/index")
                    }
                    var i = a._$getCookie("from");
                    return "" != n && i && (n += n.indexOf("?") > 0 ? "&from=" + i : "?from=" + i), n
                },
                _$setAppChannelType: function () {
                    var e, t, n, i, s, c, l = a._$getCookie("yx_channel_type"),
                        u = a._$getUrlParam("channel_type") || l,
                        p = ".you.163.com";
                    u && "0" !== u && (l !== u && a._$setCookie("yx_channel_type", u, void 0, "", p), t = u.split("-"), 2 === t.length ? (n = t[1], u = t[0], a._$setCookie("yx_appchannel_groupId", n, void 0, "", p)) : a._$setCookie("yx_appchannel_groupId", "", -2, "", p), e = u.split("_"), s = e[0], i = e[1] || r, c = e[2] || o, a._$setCookie("yx_appchannel_type", s, void 0, "", p), a._$setCookie("yx_appchannel_type1", i, void 0, "", p), a._$setCookie("yx_appchannel_type2", c, void 0, "", p))
                },
                _$getAppChannelType: function () {
                    var e = 8;
                    return e = a._$getCookie("yx_appchannel_type") || 8
                },
                _$getAppChannelType1: function () {
                    var e = r;
                    return e = a._$getCookie("yx_appchannel_type1") || e
                },
                _$getAppChannelType2: function () {
                    var e = o;
                    return e = a._$getCookie("yx_appchannel_type2") || e
                },
                _$getAppChannelGroupId: function () {
                    var e = a._$getCookie("yx_appchannel_groupId") || "";
                    return e
                },
                _$isChannelGroup: function (e) {
                    return this._$getAppChannelGroupId() == e
                },
                _$setAppLayerTime: function () {
                    localStorage && localStorage.setItem && localStorage.setItem("yx_applayer_time", (new Date).getTime())
                },
                _$isShowHd: function () {
                    return this._$isShow(0)
                },
                _$isShowFt: function () {
                    return this._$isShow(1)
                },
                _$isShowLogout: function () {
                    return this._$isShow(2)
                },
                _$isShowEpay: function () {
                    return this._$isShow(3)
                },
                _$isShowTabBar: function () {
                    return this._$isShow(4)
                },
                _$isShowWeiXinLogin: function () {
                    return this._$isShow(5)
                },
                _$isShowQQLogin: function () {
                    return this._$isShow(6)
                },
                _$isShowNewUserGiftAlertInDetail: function () {
                    return this._$isShow(7)
                },
                _$isShowWeiboLogin: function () {
                    return this._$isShow(8)
                },
                _$isShow: function (e) {
                    var t = this._$getAppChannelType1(),
                        n = void 0 === t[e] ? 1 : t[e];
                    return 1 == n
                },
                _$isShowUcenterMenu: function (e) {
                    var t = this._$getAppChannelType2(),
                        n = void 0 === t[e] ? 1 : t[e];
                    return 1 == n
                }
            };
        e.exports = d
    },
    11: function (e, t, n) {
        var a = n(12),
            i = n(4),
            r = n(13),
            o = n(16),
            s = n(18),
            c = {
                isInHuanBei: function () {
                    return !(!window.$native && !window.androidWebBridge)
                },
                toPay: function (e, t) {
                    function n(e) {
                        return o.payOrder({
                            orderId: e.data.orderId,
                            userId: e.data.userId,
                            yx_aui: i._$getCookie("yx_aui"),
                            yx_from: i._$getCookie("yx_from"),
                            payMethod: a.HUANBEI,
                            orderStepId: t
                        }, e.data.domain)
                    }

                    function c(e) {
                        var t = $.Deferred(),
                            n = e.data;
                        return window.$native.openModule("payOrder", {
                            orderId: n.goodsOrderId
                        }), t.resolve()
                    }

                    function l(e, t, n) {
                        throw r(e, t, n), new Error
                    }
                    var u = $.Deferred();
                    try {
                        s.choosePay({
                            orderId: e,
                            payMethod: a.HUANBEI
                        }).then(function (e) {
                            return n(e)
                        }, l).then(function (e) {
                            return c(e)
                        }, l).then(function () {
                            u.resolve()
                        }, function () {
                            u.reject()
                        })
                    } catch (p) {
                        return u.reject()
                    }
                    return u.promise()
                },
                updateCart: function (e) {
                    window.$native.openModule("updateYanxuanShoppingCart", {
                        count: e
                    })
                },
                setPanGestureEnabled: function (e) {
                    window.$native.setPanGestureEnabled(e)
                }
            };
        e.exports = c
    },
    12: function (e, t) {
        e.exports = {
            EPAY: 1,
            WXPAY: 2,
            ALIPAY: 3,
            YXPAY: 4,
            HUANBEI: 8,
            GUANAITONG: 9,
            YIZHIFU: 11,
            XIAMENBANK: 15
        }
    },
    13: function (e, t, n) {
        var a = n(14),
            i = n(15);
        e.exports = function (e, t) {
            return "NET_ERROR" === e ? void a.notify("网络不给力") : void a.notify(t || i.DFT_ERROR_MSG)
        }
    },
    14: function (e, t, n) {
        var a = n(2),
            i = n(4),
            r = a.extend({
                template: '<div class="m-notify hide"><div class="text j-text"></div></div>',
                iconMap: {
                    success: "u-ok",
                    fail: "u-fail",
                    error: "u-fail",
                    warning: "u-warning"
                },
                config: function (e) {
                    i._$extend(e, {
                        messages: "",
                        isHide: !0,
                        type: "",
                        clazz: "hide",
                        duration: 2e3
                    })
                },
                init: function (e) {
                    this.supr(e), this.__body = $(this.template), this.__textCon = this.__body.find(".j-text").first(), $(document.body).append(this.__body)
                },
                notify: function (e, t, n, a) {
                    e && "object" == typeof e && (t = e.type, n = e.duration, e = e.message), this.data.duration = n || this.data.duration, this.data.message = e, this.data.type = t || "success", this.__body.css("display", "block"), a ? this.__textCon.html(this.data.message) : this.__textCon.text(this.data.message);
                    var i = this.clear.bind(this, e);
                    return setTimeout(function () {
                        this.__body.removeClass("hide").addClass("show")
                    }.bind(this), 0), this.__timer && clearInterval(this.__timer), this.data.duration != -1 && (this.__timer = setTimeout(i, this.data.duration)), i
                },
                clear: function (e) {
                    this.__body.removeClass("show").addClass("hide"), setTimeout(function () {
                        this.__body.css("display", "none")
                    }.bind(this), 500)
                }
            }),
            o = new r;
        o.Notify = r, e.exports = o
    },
    15: function (e, t) {
        e.exports = {
            PAY_METHODS: {
                1: "网易支付",
                2: "微信",
                3: "支付宝",
                99: "其他"
            },
            DFT_ERROR_MSG: "系统繁忙，请稍后再试",
            DEF_USER_AVATAR: "//yanxuan.nosdn.127.net/dc741fe90df58c3605c9d3c309dba9e0.png",
            TEL: "400-0368-163",
            WEB_HOST: "you.163.com",
            REG_URL: "//reg.163.com/reg/regClient.jsp?product=yanxuan&from=pagelogin&url=" + window.location.protocol + "//" + window.location.host,
            USELESS_TOPIC_ID: 10000003,
            KEFU_FE_GROUP_ID: 690549,
            KEFU_FE_GROUP_ID_TEST: 17289,
            KEFU_BE_GROUP_ID: 690550,
            KEFU_BE_GROUP_ID_TEST: 19707,
            KEFU_VIP_GROUP_ID: 1265163,
            KEFU_VIP_GROUP_ID_TEST: 1245505,
            KEFU_GROUP_ID: 1129078,
            KEFU_GROUP_ID_TEST: 1252516,
            CHANNEL_GROUP_MAP: {
                HUA_WEI_LIFE: 1,
                NETEASE_MP: 2
            },
            EXPOSE_SPACE_KEY: {
                COMMON_RANK: "RANK_ITEM_EXPOSURE",
                DATA_RANK: {
                    ITEM: "RANK_ITEM_EXPOSURE",
                    GUIDE: "RANK_GUIDE_EXPOSURE"
                }
            },
            SIMPLE_USER_TYPE: {
                mail: 29,
                qq: 11,
                weibo: 12,
                weixin: 16,
                phone: 27
            }
        }
    },
    16: function (e, t, n) {
        var a = n(17);
        e.exports = a("/xhr/wap", [{
            name: "payOrder",
            ajaxConfig: {
                type: "GET",
                xhrFields: {
                    withCredentials: !0
                }
            },
            processParams: function (e) {
                var t = {};
                return Object.keys(e).map(function (n) {
                    e.hasOwnProperty(n) && e[n] && (t[n] = e[n])
                }), t
            }
        }])
    },
    17: function (e, t, n) {
        var a = n(7),
            i = function (e) {
                var t = {
                    name: "",
                    ajaxConfig: {}
                };
                return e = $.extend(!0, {}, t, e),
                    function (t, n) {
                        var i = $.Deferred(),
                            r = {};
                        return n = n || "", n && n.indexOf("http://") < 0 && n.indexOf("https://") < 0 && (n = "//" + n), e.processParams && (t = e.processParams(t)), r = {
                            url: "{0}{1}/{2}.json".format(n, e.path, e.name),
                            data: t || {},
                            success: function (t) {
                                e.successHandle ? e.successHandle(t, i) : i.resolve(t)
                            },
                            error: function (e, t, n) {
                                i.reject(e, t, n)
                            },
                            type: "POST"
                        }, a.ajax($.extend(!0, {}, r, e.ajaxConfig)), i.promise()
                    }
            },
            r = function (e, t) {
                var n = {};
                return t.map(function (t) {
                    "string" == typeof t && (t = {
                        name: t
                    }), t.path || (t.path = e), n[t.alias || t.name] = i(t)
                }), n
            };
        e.exports = r
    },
    18: function (e, t, n) {
        var a = n(17);
        e.exports = a("/xhr/order", [{
            name: "getList",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "payCheck",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "getCardSecret",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "cancel",
            alias: "cancelOrder",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "cancelPayed",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "getCancelStep",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "confirmDelivery",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "getDelivery",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "getDeliveryWithSub",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "delete",
            alias: "del",
            ajaxConfig: {
                type: "GET"
            }
        }, "submit", {
            name: "submit",
            alias: "concurrentSubmit",
            path: "/xhr/order/concurrent"
        }, "init", {
            name: "init",
            alias: "concurrentInit",
            path: "/xhr/order/concurrent"
        }, {
            name: "payComplete",
            ajaxConfig: {
                type: "GET"
            }
        }, "reload", {
            name: "getDetail",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "choosePay",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "beforeInit",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "beforeInit",
            alias: "concurrentBeforeInit",
            ajaxConfig: {
                type: "GET"
            },
            path: "/xhr/order/concurrent"
        }, {
            name: "invoiceSave",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "getInvoicePic",
            ajaxConfig: {
                type: "GET"
            }
        }, "sendInvoiceEmail", "checkAddress", "getInvoice", {
            name: "fillupInvoice",
            ajaxConfig: {
                contentType: "application/json"
            }
        }, "deliveryComplaint", {
            name: "getPickCode",
            path: "/xhr/order/delivery"
        }, {
            name: "update",
            alias: "bookTimeUpdate",
            path: "/xhr/order/bookTime",
            ajaxConfig: {
                type: "POST",
                contentType: "application/json"
            }
        }, {
            name: "check",
            path: "/xhr/order/bookTime"
        }, "checkBeforeInit", {
            name: "getHourRange",
            path: "/xhr/order/bookTime"
        }, {
            name: "delivery",
            alias: "offlineDelivery",
            ajaxConfig: {
                type: "GET"
            },
            path: "/xhr/offline/invoice"
        }, {
            name: "checkContinuePay",
            ajaxConfig: {
                type: "GET"
            }
        }])
    },
    19: function (e, t, n) {
        var a = n(17);
        e.exports = a("/xhr/cart", ["choosePromotion", "getCarts", "getItemPool", "selectAll", {
            name: "add",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "delete"
        }, {
            name: "updateCheck",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "updateByNum",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "updateSkuSpec",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "updateSuitCount",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "getMiniCartNum",
            ajaxConfig: {
                type: "GET"
            }
        }, {
            name: "getMiniCartNum",
            alias: "getMiniCartNumInSeckill",
            ajaxConfig: {
                type: "GET"
            },
            path: "/xhr/seckill/cart"
        }, {
            name: "selectGift",
            ajaxConfig: {
                contentType: "application/json"
            }
        }, {
            name: "selectAddBuy",
            ajaxConfig: {
                contentType: "application/json"
            }
        }, "clearInvalidItem", "addSuit", "getItemPoolBar", "getMakeUpCartInfo", {
            name: "selectGift",
            alias: "selectGiftInMakeUp",
            ajaxConfig: {
                contentType: "application/json"
            },
            path: "/xhr/cart/makeUp"
        }, {
            name: "selectAddBuy",
            alias: "selectAddBuyInMakeUp",
            ajaxConfig: {
                contentType: "application/json"
            },
            path: "/xhr/cart/makeUp"
        }, {
            name: "addSpecialSku",
            ajaxConfig: {
                type: "GET"
            }
        }, "batchAddCustomShareItem", "isFirstVisit", "batchUpdateCheck"])
    },
    20: function (e, t, n) {
        var a = n(21);
        e.exports = function () {
            var e;
            return e = new a
        }()
    },
    21: function (e, t, n) {
        e.exports = n(22)(17)
    },
    22: function (e, t) {
        e.exports = dll
    },
    26: function (e, t, n) {
        var a = n(27),
            i = n(20),
            r = n(10),
            o = n(4),
            s = n(37),
            c = function (e, t) {
                t = $.extend(!0, {
                    disregardChannelType: !1
                }, t);
                var n = React.createClass({
                    displayName: "Hd",
                    getDefaultProps: function () {
                        return {
                            disregardChannelType: !1
                        }
                    },
                    getInitialState: function () {
                        return {
                            height: 0
                        }
                    },
                    componentWillMount: function () {
                        document.body.classList.add("hasHd")
                    },
                    componentDidMount: function () {
                        i.on("downloadBannerShowOrHide", this.syncHeight), this.syncHeight()
                    },
                    componentDidUpdate: function () {
                        this.syncHeight()
                    },
                    componentWillUnmount: function () {
                        document.body.classList.remove("hasHd")
                    },
                    render: function () {
                        var t = s._$isInMailMaster();
                        return React.createElement("div", {
                            style: {
                                height: this.state.height
                            },
                            className: "hdWraper"
                        }, React.createElement("div", {
                            ref: "hd",
                            className: "m-hd"
                        }, !t && React.createElement(a, null), e && React.createElement(e, this.props)))
                    },
                    syncHeight: function () {
                        var e = $(this.refs.hd).height() || 0;
                        this.state.height !== e && this.setState({
                            height: e
                        }), i.emit("hdHeightchange", e)
                    }
                });
                return function (e) {
                    return o._$isInApp() || !r._$isShowHd() && !t.disregardChannelType && !e.disregardChannelType ? React.createElement("div", null) : React.createElement(n, e)
                }
            };
        e.exports = c
    },
    27: function (e, t, n) {
        var a = n(4),
            i = n(9),
            r = n(28),
            o = n(10),
            s = n(20),
            c = n(29).throttle,
            l = n(30),
            u = n(31);
        n(36);
        var p = React.createClass({
            displayName: "DownloadBanner",
            getInitialState: function () {
                return {
                    isOpen: o._$isShowAppBar(),
                    banners: null
                }
            },
            componentDidMount: function () {
                this.changeClassesToBody(), this.getDownLoadInfo(), o._$isShowAppBar() && this.bindScroll(this.handleScroll), s.on("downloadBannerShow", this.show)
            },
            componentWillUnmount: function () {
                o._$isShowAppBar() && this.unbindScroll(this.handleScroll)
            },
            handleClose: function () {
                YXStat.q.push(["track_click", {
                    event_name: "click_topdownload_close",
                    page_name: "default",
                    topage: "",
                    event_action: "click"
                }]), this.hide(), o._$isShowAppBar() && this.unbindScroll(this.handleScroll), a._$setCookie("yx_appbar_show", "hide")
            },
            handleScroll: c(function () {
                if (!(document.documentElement.clientHeight / window.innerHeight < 1.2)) {
                    var e = $(document).scrollTop();
                    e > 10 ? this.hide() : this.show()
                }
            }),
            handleBannerClick: function (e) {
                e = +e;
                var t = this.state.banners[e];
                YXStat.q.push(["track_click", {
                    event_name: "click_topdownload_open",
                    page_name: "default",
                    topage: t && !!t.linkUrl && t.targetUrl,
                    event_action: "click"
                }]), t && t.linkUrl && "openApp" !== t.targetUrl ? this.sendStatAndJump(e, t.linkUrl) : this.openApp(e + 1)
            },
            renderDefaultBanner: function () {
                return React.createElement("div", {
                    className: "m-defaultBanner",
                    onClick: this.handleBannerClick.bind(null, 0)
                }, React.createElement("div", {
                    className: "brand"
                }, React.createElement("i", {
                    className: "logo u-icon u-icon-openAppLogo"
                }), React.createElement("div", {
                    className: "cnt"
                }, React.createElement("p", {
                    className: "txt1"
                }, "前往APP查看更多商品"), React.createElement("p", {
                    className: "txt2"
                }, "网易自营 品质生活"))), React.createElement("a", {
                    className: "w-button btn",
                    href: "javascript:void(0);"
                }, "打开APP"))
            },
            render: function () {
                var e = this.state.banners,
                    t = e && e.length;
                return React.createElement("div", {
                    className: r("m-downloadBanner", {
                        hide: !this.state.isOpen
                    })
                }, React.createElement("div", {
                    className: "g-row"
                }, React.createElement("div", {
                    className: "iconWrap",
                    onClick: this.handleClose
                }, React.createElement("i", {
                    className: "u-icon u-icon-miniOpenAppClose close"
                })), t > 1 && React.createElement(u, {
                    className: "m-downloadBar-slide",
                    containerClassName: "m-downloadBar-slide-container",
                    direction: "vertical",
                    list: e,
                    clickImg: this.handleBannerClick,
                    hasPagination: !1,
                    autoplay: 4e3,
                    noSwiping: !0,
                    isInApp: !0
                }), 1 === t && React.createElement("div", {
                    className: "imgWrap",
                    onClick: this.handleBannerClick.bind(null, 0)
                }, React.createElement("img", {
                    src: e[0].picUrl + "?imageView&thumbnail=750x0&quality=75"
                })), 0 === t && this.renderDefaultBanner()))
            },
            sendStatAndJump: function (e, t) {
                var n = window.CURRENTPAGE || "default";
                YXStat.q.push(["track_click", {
                    event_name: "click_topfloater",
                    page_name: n,
                    topage: t || "",
                    event_action: "click",
                    parameters: {
                        sequen: e || 1
                    }
                }]), t && YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = t
                })
            },
            openApp: function (e) {
                var t = "";
                a._$isInAndroid() ? i._$openApp(LinkConvertor.getSchemeUrl(window.yanxuan_href), function (n) {
                    n || (t = a._$getDownloadLinkWithQuery("ochannel=aos_pd_11"), this.sendStatAndJump(e, t))
                }.bind(this)) : (t = LinkConvertor.getUniversalLinkWithPrefix(window.yanxuan_href), a._$setCookie("yx_appdownload_channel", "aos_pd_11", .00625), this.sendStatAndJump(e, t))
            },
            hide: function () {
                this.state.isOpen && this.setState({
                    isOpen: !1
                }, function () {
                    s.emit("downloadBannerShowOrHide"), this.changeClassesToBody()
                }.bind(this))
            },
            show: function () {
                this.state.isOpen || this.setState({
                    isOpen: !0
                }, function () {
                    s.emit("downloadBannerShowOrHide"), this.changeClassesToBody()
                }.bind(this))
            },
            changeClassesToBody: function () {
                this.state.isOpen ? (YXStat.q.push(["add_event", {
                    event_name: "show_topdownload",
                    page_name: "default",
                    event_action: "show"
                }]), $("body").removeClass("isOpenAppClosed"), $("body").addClass("isOpenAppOpened")) : ($("body").addClass("isOpenAppClosed"), $("body").removeClass("isOpenAppOpened"))
            },
            bindScroll: function (e) {
                window.addEventListener("touchmove", e), window.addEventListener("scroll", e)
            },
            unbindScroll: function (e) {
                window.removeEventListener("touchmove", e), window.removeEventListener("scroll", e)
            },
            getDownLoadInfo: function () {
                l.getAppDownloadInfo().then(function (e) {
                    var t = e.data.map(function (e) {
                        return e.targetUrl = e.linkUrl || "openApp", e
                    }) || [];
                    this.setState({
                        banners: t
                    })
                }.bind(this), function () {
                    this.setState({
                        banners: []
                    })
                }.bind(this))
            }
        });
        e.exports = p
    },
    28: function (e, t, n) {
        e.exports = n(22)(6)
    },
    29: function (e, t, n) {
        e.exports = n(22)(13)
    },
    30: function (e, t, n) {
        var a = n(17),
            i = a("/xhr/common", [{
                name: "checklogin",
                ajaxConfig: {
                    type: "GET"
                }
            }, {
                name: "checklogin",
                alias: "checkloginInSeckill",
                ajaxConfig: {
                    type: "GET"
                },
                path: "/xhr/seckill"
            }, "getAppDeviceInfo", {
                name: "getAppDownloadInfo",
                path: "/xhr/guide"
            }]);
        e.exports = i
    },
    31: function (e, t, n) {
        n(32);
        var a = n(33),
            i = n(28),
            r = n(5),
            o = n(34),
            s = React.createClass({
                displayName: "Slide",
                getDefaultProps: function () {
                    return {
                        paginationType: "bullets",
                        isPaginationUp: !1,
                        isInApp: !1,
                        hasPagination: !0,
                        noSwiping: !1,
                        autoplayDisableOnInteraction: !0,
                        autoplay: 5e3,
                        thumbnail: "750x0",
                        addScrollEventInAndroid: !1,
                        containerClassName: "common-swiper-container",
                        direction: "horizontal",
                        onSlideChangeStart: function () {},
                        promoLogoUrl: ""
                    }
                },
                componentDidMount: function () {
                    var e = this.refs.slideCon;
                    if ("itemDetail" == this.props.type) {
                        var t = $(e).width();
                        $(e).height(t)
                    }
                    this.initSwiper(), window.addEventListener("resize", function () {
                        setTimeout(this.swiper.onResize, 400)
                    }.bind(this), !1), $(this.refs.slide).find(".swiper-slide img").one("error", this.handleImgError), this.props.isInApp && $(this.refs.slide).find(".swiper-slide").on("click", this.handleImgClick), !this.props.noSwiping && this.props.addScrollEventInAndroid && o(this.refs.slide)
                },
                componentDidUpdate: function (e) {
                    this.props.paginationType === e.paginationType && this.props.isPaginationUp === e.isPaginationUp || (this.swiper.destroy(), this.initSwiper())
                },
                handleImgError: function (e) {
                    $(e.target).closest(".swiper-slide").addClass("error")
                },
                handleImgClick: function (e) {
                    e.currentTarget.id && e.currentTarget.id.length > 0 && this.props.clickImg(e.currentTarget.id)
                },
                render: function () {
                    var e = this.props.className || "",
                        t = this,
                        n = i({
                            "swiper-pagination": !0,
                            "common-swiper-pagination": !0,
                            "detail-pagination-up": t.props.isPaginationUp
                        });
                    return React.createElement("div", {
                        ref: "slide",
                        className: "m-slide " + e
                    }, React.createElement("div", {
                        className: "slide-con",
                        ref: "slideCon"
                    }, React.createElement("div", {
                        className: "swiper-container " + this.props.containerClassName
                    }, React.createElement("div", {
                        className: "swiper-wrapper",
                        dangerouslySetInnerHTML: {
                            __html: this.getSlidesHtml()
                        }
                    }), React.createElement("div", {
                        className: n
                    }))))
                },
                initSwiper: function () {
                    this.swiper = new a("." + this.props.containerClassName, {
                        pagination: this.props.hasPagination ? ".common-swiper-pagination" : null,
                        paginationType: this.props.paginationType,
                        paginationClickable: !0,
                        loop: !0,
                        autoplay: this.props.autoplay,
                        noSwiping: this.props.noSwiping,
                        autoplayDisableOnInteraction: this.props.autoplayDisableOnInteraction,
                        onSlideChangeStart: this.props.onSlideChangeStart,
                        onSlideChangeEnd: this.props.onSlideChangeEnd,
                        direction: this.props.direction
                    })
                },
                getPicUrl: function (e, t, n) {
                    var a;
                    return n = n || 95, a = "imageView&quality=" + n, t && (a += "&thumbnail=" + t), e += e.indexOf("watermark") >= 0 ? "|" + a : e.indexOf("?") >= 0 ? "&" + a : "?" + a
                },
                getSlideHtml: function (e, t) {
                    var n = this.getPicUrl(e.picUrl || e, this.props.thumbnail, "75");
                    if (r._$isObject(e)) return e.targetUrl && e.targetUrl.length > 0 ? this.props.isInApp ? this.props.noSwiping ? '<div class="swiper-slide swiper-no-swiping" id="' + t + '" >' + '<img src="{0}" />'.format(n) + "</div>" : '<div class="swiper-slide" id="' + t + '" >' + '<img src="{0}" />'.format(n) + "</div>" : '<a class="swiper-slide" style="display:block;" href="' + e.targetUrl + '" title="' + e.name + '">' + '<img src="{0}" />'.format(n) + "</a>" : this.props.noSwiping ? '<div class="swiper-slide swiper-no-swiping">' + '<img src="{0}" />'.format(n) + "</div>" : '<div class="swiper-slide">' + '<img src="{0}" />'.format(n) + "</div>";
                    var a = this.props.promLogo,
                        i = "",
                        o = "";
                    if (0 == t && a && a.logoUrl) {
                        var s = 2 * a.width / 225 + "rem",
                            c = 2 * a.height / 225 + "rem",
                            l = "-" + a.width / 225 + "rem";
                        i = '<img class="promoLogo" style="width:' + s + ";height:" + c + ";margin-left:" + l + '"  src="' + a.logoUrl + '" />'
                    }
                    if (0 == t && this.props.presentUrl) {
                        var u = this.props.isPaginationUp ? "2.4266666667rem" : "1.4666666667rem";
                        o = '<div class="presentImgWrap" style="bottom:' + u + '"><img class="presentImg" src="' + this.props.presentUrl + '"/></div>'
                    }
                    return '<div class="swiper-slide">' + i + o + '<img src="{0}" />'.format(n) + "</div>"
                },
                getSlidesHtml: function () {
                    return r._$isArray(this.props.list) ? this.props.list.map(function (e, t) {
                        return this.getSlideHtml(e, t)
                    }.bind(this)).join("") : this.getSlideHtml(this.props.list)
                }
            });
        e.exports = s
    },
    32: function (e, t) {},
    33: function (e, t, n) {
        e.exports = n(22)(11)
    },
    34: function (e, t, n) {
        function a(e) {
            if (e && i._$isInApp() && i._$isInAndroid && !(r._$getVersion < "3.6.5")) {
                var t, n, a = 16,
                    s = !1;
                o._$initTouchSlop(function (e) {
                    a = e
                }), $(e).on("touchstart touchmove touchend touchcancel", function (e) {
                    var i = e.originalEvent.targetTouches[0];
                    switch (e.type) {
                        case "touchstart":
                            t = i.clientX, n = i.clientY, s = !1, o._$noticeCaptureEvent({
                                request: !0
                            });
                            break;
                        case "touchmove":
                            if (!s) {
                                var r = Math.abs(i.clientX - t),
                                    c = Math.abs(i.clientY - n);
                                r >= a && (s = !0, o._$noticeCaptureEvent({
                                    request: !0
                                })), c > a && (s = !0, o._$noticeCaptureEvent({
                                    request: !1
                                }))
                            }
                            break;
                        case "touchend":
                            o._$noticeCaptureEvent({
                                request: !1
                            })
                    }
                })
            }
        }
        var i = n(4),
            r = n(9),
            o = n(35);
        e.exports = a
    },
    35: function (e, t, n) {
        function a(e, t) {
            var n = "jsbridge" + e;
            c(e, t.params), t && t.callback && p.on(n, function (e) {
                t.callback(e), p.off(n)
            })
        }

        function i(e, t) {
            window[e] = function (n, a) {
                window[e] = null, t(n, a)
            }
        }

        function r(e, t) {
            window[e] = function (e, n) {
                t(e, n)
            }
        }

        function o() {
            return window.NEJsbridge && window.NEJsbridge.appInfo && window.NEJsbridge.appInfo.supportFunc && window.NEJsbridge.appInfo.supportFunc.parameterObj
        }

        function s() {
            return window.NEJsbridge && window.NEJsbridge.appInfo && window.NEJsbridge.appInfo.supportFunc && window.NEJsbridge.appInfo.supportFunc.documentStart
        }

        function c(e, t) {
            t = t || {}, o() ? NEJsbridge.call(e, t) : NEJsbridge.call(e, JSON.stringify(t))
        }

        function l(e, t, n) {
            t = t || {}, o() ? NEJsbridge.invoke(e, t, n) : NEJsbridge.invoke(e, JSON.stringify(t), n)
        }
        var u = n(15),
            p = n(20);
        window.onJsCallback = function (e, t, n) {
            p.emit("jsbridge" + t, n)
        };
        var d = {
            _$ready: function (e) {
                function t() {
                    document.removeEventListener("NEJsbridgeReady", t), e()
                }
                return s() ? void e() : void(window.NEJsbridge ? e() : document.addEventListener("NEJsbridgeReady", t))
            },
            _$showLogin: function (e) {
                var t = {
                    callback: function () {}
                };
                e = e || {}, extend(e, t), c("showLogin"), i("onLoginResult", e.callback)
            },
            _$showShareToSNS: function (e) {
                var t = {
                    callback: function () {},
                    shareType: "share_type_action_url"
                };
                e = e || {}, extend(e, t);
                var n = {
                    shareType: e.shareType
                };
                "share_type_local_image" === n.shareType && (n.shareImageModel = e.shareImageModel || {
                    imageUrl: ""
                }), c("setShareToSNSCallback", n), i("onShareClick", e.callback)
            },
            _$setRefreshShoppingcartBadge: function () {
                c("setRefreshShoppingcartBadge")
            },
            _$hideShareToSNSBtn: function () {
                c("setHideShareToSNSCallbackButton")
            },
            _$setShareParams: function (e) {
                e = e || {}, e.topicId || (e.topicId = u.USELESS_TOPIC_ID), e.imageUrl || (e.imageUrl = "https://yanxuan.nosdn.127.net/3c71c931c47a0be5dc82776124f22dae.png"), c("setShareParams", e)
            },
            _$setShareOnlyImageParams: function (e) {
                e = e || {}, e.imageUrls = e.imageUrls || [], c("setShareOnlyImageParams", e)
            },
            _$setOtherParams: function (e) {
                e = e || {}, e.topicId || (e.topicId = u.USELESS_TOPIC_ID), c("setOtherParams", e)
            },
            _$getValidPayMethods: function (e) {
                var t = {};
                e = e || {}, extend(e, t), c("getValidPayMethod", e), i("onGetValidPayMethod", function (t) {
                    "string" == typeof t && (t = JSON.parse(t)), e.callback(t)
                })
            },
            _$pay: function (e) {
                var t = {};
                e = e || {}, extend(e, t), c("startPay", e.params), i("onPayResult", e.callback)
            },
            _$payCompleted: function (e) {
                e = $.extend(!0, {
                    params: {},
                    onPayCompletedResult: function () {}
                }, e), c("payCompleted", e.params), i("onPayCompletedResult", e.callback)
            },
            _$setTitle: function (e) {
                this._$setOtherParams({
                    subjectTitle: e
                })
            },
            _$setUserInfo: function (e) {
                c("setUserInfo"), i("onSetUserInfoResult", e.callback || function () {})
            },
            _$setRightBtnParams: function (e) {
                var t = $.extend(!0, {}, e);
                c("setRightBtnParams", t)
            },
            _$playVideo: function (e) {
                var t = {
                    title: "",
                    startTime: 0,
                    isFullScreen: !0
                };
                c("playVideoX", $.extend(!0, t, e))
            },
            _$getCoupon: function (e) {
                var t = {};
                e = e || {}, extend(e, t), c("activateCoupon", {
                    couponCode: e.couponCode
                }), i("onActivateCouponResult", e.callback)
            },
            _$onShareClick: function (e) {
                i("onShareClick", e)
            },
            _$onShareResult: function (e) {
                i("onShareResult", e)
            },
            _$nejScrollToRecommendation: function (e) {
                r("nejScrollToRecommendation", e)
            },
            _$exitWebView: function (e) {
                c("exitWebView", e)
            },
            _$picker: function (e) {
                c("startPicker", e.params), i("onPickerResult", function (t) {
                    e.callback(t.result)
                })
            },
            _$setRightText: function (e) {
                c("setRightText", e.params), window.onRightClick = e.callback
            },
            _$imagePick: function (e) {
                c("imagePick", e.params), i("onImagePickResult", function (t) {
                    t.imageData && t.imageData.length && (t.imageData = t.imageData.map(function (e) {
                        return "data:image/png;base64, " + e
                    })), e.callback(t)
                })
            },
            _$previewImages: function (e) {
                c("previewImages", e.params)
            },
            _$getData: function (e) {
                a("getData", e)
            },
            _$setPopWindowShow: function (e) {
                c("setPopWindowShow", e)
            },
            _$pullRefresh: function (e) {
                c("setRefreshViewShow"), i("setRefreshViewShow", e.callback)
            },
            _$stopPullRefresh: function () {
                c("setRefreshFinished")
            },
            _$setShareToSNSCallbackDirect: function (e) {
                c("setShareToSNSCallbackDirect", e)
            },
            _$setRefreshViewShow: function (e) {
                c("setRefreshViewShow"), window.onRefreshTriggered = e.callback
            },
            _$setRefreshFinished: function () {
                c("setRefreshFinished")
            },
            _$openQuhua: function (e) {
                c("openQuhua", e)
            },
            _$noticeOpenSucceedInSupermem: function () {
                c("onPremiumMemberEnrollSucceed")
            },
            _$onWebViewDidAppear: function (e) {
                i("onWebViewDidAppear", e)
            },
            _$noticeUpdateCookie: function () {
                c("updateCookie")
            },
            _$setItemOfLocalStorage: function (e) {
                c("LocalStorage.setItem", e)
            },
            _$getItemOfLocalStorage: function (e, t) {
                l("LocalStorage.getItem", e, t)
            },
            _$removeItemOfLocalStorage: function (e) {
                c("LocalStorage.removeItem", e)
            },
            _$clearOfLocalStorage: function () {
                c("LocalStorage.clear")
            },
            _$keySetOfLocalStorage: function (e) {
                l("LocalStorage.keySet", {}, e)
            },
            _$getNetworkType: function (e) {
                l("getNetworkType", {}, e)
            },
            _$noticeCaptureEvent: function (e) {
                c("nejCaptureEvent", e)
            },
            _$initTouchSlop: function (e) {
                i("onNEJInitTouchSlop", e)
            },
            _$getPushStatus: function (e) {
                l("nejGetPushStatus", {}, e)
            },
            _$openPushSetting: function () {
                c("nejOpenPushSetting")
            },
            _$getCacheFonts: function (e, t) {
                l("nejGetCacheFonts", {
                    urls: e
                }, t)
            },
            _$nejOrderInit: function (e) {
                c("nejOrderInit", e)
            },
            _$nejActivateCouponResult: function (e) {
                c("nejActivateCouponResult", e)
            },
            _$nejSendSms: function (e) {
                c("nejSendSms", e)
            },
            _$nejSaveImage: function (e, t, n) {
                t ? l("nejSaveImage", {
                    base64: e
                }, n) : l("nejSaveImage", {
                    url: e
                }, n)
            },
            _$nejSetCrmTrigger: function (e) {
                c("nejSetCrmTrigger", {
                    trigger: e
                })
            },
            _$nejDidScrollToArea: function (e) {
                c("nejDidScrollToArea", {
                    area: e
                })
            },
            _$setCustomNav: function (e) {
                c("setCustomNav", e)
            },
            _$nejShareAppInstall: function (e, t) {
                l("nejShareAppInstall", {
                    appName: e
                }, t)
            },
            _$nejPostNotification: function (e, t) {
                c("nejPostNotification", {
                    postName: e,
                    object: t
                })
            },
            _$nejObtainedFreshmanCoupons: function () {
                c("nejObtainedFreshmanCoupons")
            }
        };
        e.exports = d
    },
    36: function (e, t) {},
    37: function (e, t, n) {
        var a = n(10),
            i = n(15),
            r = {
                _$isInNeteaseMp: function () {
                    return a._$isChannelGroup(i.CHANNEL_GROUP_MAP.NETEASE_MP)
                },
                _$isInMailMaster: function () {
                    return navigator.userAgent.toLowerCase().match(/mailmaster/gi) && !r._$isInNeteaseMp()
                }
            };
        e.exports = r
    },
    41: function (e, t, n) {
        var a = n(15),
            i = n(4),
            r = n(6),
            o = n(28),
            s = n(15),
            c = n(10);
        n(42), e.exports = function () {
            var e = "https://" + a.WEB_HOST,
                t = {},
                n = !1;
            return t._m_forcepc_ = !0, i._$isNew() && (t._m_anonid_ = i._$getNew()), e = r.appendURL(e, t), c._$isShowFt() ? (n = c._$isChannelGroup(s.CHANNEL_GROUP_MAP.HUA_WEI_LIFE), React.createElement("div", {
                className: "m-ftWrap"
            }, React.createElement("div", {
                className: "m-ft g-row"
            }, React.createElement("div", {
                className: o("bd", {
                    "f-hide": n
                })
            }, React.createElement("a", {
                href: i._$getDownloadLinkWithQuery("appAwakeUrl=http%3a%2f%2fm.you.163.com"),
                className: "goApp w-button w-button-ghost w-button-s"
            }, "下载APP"), React.createElement("a", {
                href: e,
                className: "goWeb w-button w-button-ghost w-button-s"
            }, "电脑版")), React.createElement("p", {
                className: "copyright"
            }, "网易公司版权所有 © 1997-", (new Date).getFullYear(), React.createElement("br", null), "食品经营许可证：JY13301080111719")))) : React.createElement("div", null)
        }
    },
    42: function (e, t) {},
    43: function (e, t, n) {
        var a = n(44),
            i = React.createClass({
                displayName: "GoToTop",
                componentDidMount: function () {
                    window.addEventListener("scroll", this.handleScroll)
                },
                goToTop: function () {
                    $("body, html").animate({
                        scrollTop: 0
                    }, 500)
                },
                componentWillUnmount: function () {
                    window.removeEventListener("scroll", this.handleScroll)
                },
                handleScroll: a(function () {
                    var e = window.innerHeight,
                        t = $(document),
                        n = $(this.refs.goToTop),
                        a = t.scrollTop();
                    a > e ? n.is(":hidden") && n.stop(!0, !0).fadeIn(200) : n.is(":visible") && n.stop(!0, !0).fadeOut(200)
                }, 50),
                render: function () {
                    return React.createElement("i", {
                        ref: "goToTop",
                        className: "m-goToTop",
                        onClick: this.goToTop
                    })
                }
            });
        e.exports = i
    },
    44: function (e, t, n) {
        function a(e, t, n) {
            var a, r, o, s, c = 0;
            n || (n = {});
            var l = function () {
                    c = n.leading === !1 ? 0 : i(), a = null, s = e.apply(r, o), a || (r = o = null)
                },
                u = function () {
                    var u = i();
                    c || n.leading !== !1 || (c = u);
                    var p = t - (u - c);
                    return r = this, o = arguments, p <= 0 || p > t ? (a && (clearTimeout(a), a = null), c = u, s = e.apply(r, o), a || (r = o = null)) : a || n.trailing === !1 || (a = setTimeout(l, p)), s
                };
            return u.cancel = function () {
                clearTimeout(a), c = 0, a = r = o = null
            }, u
        }
        var i = n(45);
        e.exports = a
    },
    45: function (e, t) {
        function n() {
            return (new Date).getTime()
        }
        e.exports = n
    },
    54: function (e, t, n) {
        e.exports = n(22)(20)
    },
    57: function (e, t, n) {
        var a = n(20),
            i = n(29);
        e.exports = function (e) {
            var t = function (t) {
                function n() {
                    ReactDOM.unmountComponentAtNode(c), c.parentNode && c.parentNode.removeChild(c)
                }
                var r = {},
                    o = (new Date).getTime(),
                    s = o + ".layer.updateOptions",
                    c = document.createElement("div");
                c.id = o;
                var l = React.createClass({
                    displayName: "Layer",
                    getInitialState: function () {
                        return {
                            isOpen: !0,
                            options: t
                        }
                    },
                    componentDidMount: function () {
                        t && t.needStopSroll && this.stopScroll(), a.on(s, this.handleUpdateOptions)
                    },
                    componentWillUnmount: function () {
                        a.emit(o + ".componentWillUnmount"), a.off(s, this.handleUpdateOptions)
                    },
                    handleUpdateOptions: function (e) {
                        this.setState({
                            options: i.extend(t, e)
                        })
                    },
                    handleClose: function () {
                        setTimeout(function () {
                            this.setState({
                                isOpen: !1
                            }), this.releaseScroll()
                        }.bind(this))
                    },
                    handleCloseWithOutAnimation: function () {
                        setTimeout(function () {
                            this.state.isOpen || (n(), this.releaseScroll())
                        }.bind(this))
                    },
                    handleAnimateEnd: function () {
                        setTimeout(function () {
                            this.state.isOpen || (n(), this.releaseScroll())
                        }.bind(this))
                    },
                    render: function () {
                        return React.createElement(e, {
                            isOpen: this.state.isOpen,
                            onClose: this.handleClose,
                            onAnimateEnd: this.handleAnimateEnd,
                            onCloseWithOutAnimation: this.handleCloseWithOutAnimation,
                            options: this.state.options
                        })
                    },
                    stopScroll: function () {
                        c.addEventListener("touchmove", this.preventHandler)
                    },
                    releaseScroll: function () {
                        t && t.needStopSroll && c.removeEventListener("touchmove", this.preventHandler)
                    },
                    preventHandler: function (e) {
                        e & e.preventDefault()
                    }
                });
                return document.body.appendChild(c), ReactDOM.render(React.createElement(l, null), c), r.updateOptions = function (e) {
                    a.emit(s, e)
                }, r.on = function (e, t) {
                    a.on(o + "." + e, t)
                }, r.off = function (e, t) {
                    a.off(o + "." + e, t)
                }, r.id = o, r.close = n, r
            };
            return t
        }
    },
    67: function (e, t, n) {
        var a = n(68),
            i = {
                _$getScript: function (e) {
                    a._$isInTS() && a._$getSctipt(e)
                },
                _$configShareData: function (e) {
                    if (a._$isInTS()) return void a._$configShareData(e)
                },
                _$getDealerType: function () {
                    return a._$isInTS() ? 1 : 0
                },
                _$jsCacheTime: function () {
                    var e = new Date;
                    return e.getTime() - 6e4 * e.getMinutes() - 1e3 * e.getSeconds() - e.getMilliseconds()
                },
                _$isInTuishou: function () {
                    return /Dealer\/(iOS|Android)/i.test(navigator.userAgent)
                }
            };
        e.exports = i
    },
    68: function (e, t, n) {
        var a = n(4),
            i = n(6),
            r = window.$global.environment,
            o = {
                _$isInTS: function () {
                    return !a._$isInApp() && !!("1" === a._$getUrlParam("ts_dealer") || sessionStorage && sessionStorage.getItem && "1" === sessionStorage.getItem("ts_dealer") || a._$getCookie("ts_dealer"))
                },
                _$jsCacheTimeInTS: function () {
                    var e = new Date;
                    return e.getTime() - 6e4 * e.getMinutes() - 1e3 * e.getSeconds() - e.getMilliseconds()
                },
                _$getSctipt: function (e) {
                    "online" === r ? (i.getScript("//ts.163.com/static/3rd/js/third_embed_auth.js?t=" + this._$jsCacheTimeInTS()), e && i.getScript("//ts.163.com/static/3rd/js/yanxuan_embed_product.js?t=" + this._$jsCacheTimeInTS())) : (i.getScript("//test.ts.163.com/static/3rd/js/third_embed_auth.js?t=" + this._$jsCacheTimeInTS()), e && i.getScript("//test.ts.163.com/static/3rd/js/yanxuan_embed_product.js?t=" + this._$jsCacheTimeInTS()))
                },
                _$configShareData: function (e) {
                    var t = {},
                        n = e.link;
                    n.indexOf("ts_share=") < 0 && (t.ts_share = "1"), n.indexOf("channel_type") < 0 && (t.channel_type = "1"), n.indexOf("ts_dealer") < 0 && (t.ts_dealer = "1"), n.indexOf("ts_sharerId") < 0 && (t.ts_sharerId = this._$getShareId()), Object.keys(t).length > 0 && (n = i.appendURL(n, t)), e.link = n
                },
                _$getShareId: function () {
                    return sessionStorage && sessionStorage.getItem && sessionStorage.getItem("ts_sharerId") || a._$getCookie("ts_sharerId")
                }
            };
        e.exports = o
    },
    114: function (e, t, n) {
        e.exports = n(22)(12)
    },
    115: function (e, t, n) {
        e.exports = n(22)(8)
    },
    138: function (e, t) {
        e.exports = function (e) {
            var t = React.createClass({
                displayName: "WithPlaceHolder",
                getInitialState: function () {
                    return {
                        height: 0
                    }
                },
                componentDidMount: function () {
                    this.setState({
                        height: this.refs.placeholder.nextElementSibling.offsetHeight
                    })
                },
                render: function () {
                    return React.createElement("div", null, React.createElement("div", {
                        ref: "placeholder",
                        style: {
                            height: this.state.height
                        }
                    }), React.createElement(e, this.props))
                }
            });
            return t
        }
    },
    147: function (e, t) {
        var n = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            a = React.createClass({
                displayName: "Icon",
                getDefaultProps: function () {
                    return {
                        className: ""
                    }
                },
                render: function () {
                    return React.createElement("i", n({}, this.props, {
                        className: "u-icon u-icon-{0} {1}".format(this.props.name, this.props.className)
                    }), !!this.props.chirldren && this.props.chirldren)
                }
            });
        e.exports = a
    },
    152: function (e, t, n) {
        function a(e) {
            var t = $.Deferred();
            if (window.CPS.isCPS()) window.CPS.checkLogin(function (e) {
                e ? t.resolve() : t.reject()
            });
            else {
                var n = e && e.isInSeckill ? r.checkloginInSeckill : r.checklogin;
                n().then(function (e) {
                    e.data ? t.resolve() : t.reject()
                }, o)
            }
            return t.promise()
        }

        function i(e, t) {
            return window.CPS.isCPS() ? void window.CPS.login({
                callback: e,
                callbackUrl: window.yanxuan_href,
                error: t
            }) : void(window.yanxuan_href = "/u/login?callback=" + encodeURIComponent(window.yanxuan_href))
        }
        var r = n(30),
            o = n(13),
            s = n(4);
        s._$getCPSJs(), e.exports = function (e) {
            var t = $.Deferred();
            return window.CPS ? a(e).then(t.resolve, function () {
                i(t.resolve, t.reject)
            }) : s._$getCPSJs(function () {
                a(e).then(t.resolve, function () {
                    i(t.resolve, t.reject)
                })
            }), t.promise()
        }
    },
    248: function (e, t, n) {
        function a(e, t) {
            var n = o.getPathName(e),
                a = "",
                s = r._$getCookie("yx_from") || "";
            s && (a = "from=" + s), t && (a = a ? "&" + t : t);
            var c = {
                scheme: i("yanxuan://homepage", a),
                universal: i("//app.you.163.com" + r._$getDownloadLink(), a)
            };
            if ("/item/detail" == n) {
                var l = o.getUrlParams(e).id;
                c = {
                    scheme: i("yanxuan://commoditydetails?commodityid=" + l, a),
                    universal: i("//app.you.163.com/appawake/downloadapp/item/detail?id=" + l, a)
                }
            }
            return c
        }

        function i(e, t) {
            return t ? e += e.indexOf("?") > 0 ? "&" + t : "?" + t : e
        }
        var r = n(4),
            o = n(6);
        e.exports = a
    },
    255: function (e, t, n) {
        n(256);
        var a = n(114),
            i = n(115),
            r = n(28),
            o = n(257),
            s = n(258),
            c = React.createClass({
                displayName: "Tabs",
                getDefaultProps: function () {
                    return {
                        scrollCount: 5,
                        defaultActiveIndex: 0,
                        customTab: null
                    }
                },
                getInitialState: function () {
                    return {
                        activeIndex: this.props.activeIndex || this.props.defaultActiveIndex
                    }
                },
                componentDidMount: function () {
                    this.needScroll() && (this.scrollToActiveTab({
                        animated: !1
                    }), this.header.addEventListener("touchmove", function (e) {
                        e.preventDefault()
                    }))
                },
                componentWillReceiveProps: function (e) {
                    var t = e.activeIndex,
                        n = this.state.activeIndex;
                    void 0 !== t && t !== n && this.setState({
                        activeIndex: t
                    }, function () {
                        this.needScroll() && this.scrollToActiveTab()
                    }.bind(this))
                },
                renderTabList: function () {
                    var e = this.state.activeIndex;
                    return this.getTabList().map(function (t, n) {
                        var a = e === n;
                        return React.cloneElement(t, {
                            active: a,
                            key: n,
                            onClick: function () {
                                var e = this.props.activeIndex;
                                void 0 !== e || a || this.setState({
                                    activeIndex: n
                                }, function () {
                                    this.needScroll() && this.scrollToActiveTab()
                                }.bind(this)), t.props.onClick && t.props.onClick.apply(this, arguments)
                            }.bind(this)
                        })
                    }.bind(this))
                },
                renderPanels: function () {
                    var e = this.getPanelList(),
                        t = this.state.activeIndex;
                    return React.createElement("ul", {
                        className: "panelList"
                    }, e.map(function (e, n) {
                        return React.createElement("li", {
                            className: "item",
                            key: e.key
                        }, React.cloneElement(e, {
                            active: t === n
                        }))
                    }))
                },
                render: function () {
                    var e = this.needScroll(),
                        t = !!this.getPanelList().length;
                    return React.createElement("div", {
                        className: r("m-tabs " + (this.props.size || "") + " " + (this.props.className || ""), {
                            scroll: e,
                            withPanels: t,
                            noScroll: !e
                        })
                    }, React.createElement("header", {
                        ref: function (e) {
                            this.header = e
                        }.bind(this)
                    }, e ? React.createElement(i, {
                        ref: "scroller",
                        className: "inner",
                        iScroll: a,
                        options: {
                            scrollX: !0,
                            preventDefault: !1
                        }
                    }, React.createElement("div", {
                        className: "list"
                    }, this.renderTabList())) : this.renderTabList()), t && this.renderPanels())
                },
                getTabCount: function () {
                    return this.getTabList().length
                },
                getListByType: function (e) {
                    return React.Children.toArray(this.props.children).filter(function (t) {
                        return t.type === e
                    })
                },
                getTabList: function () {
                    var e = this.props.customTab || o;
                    return this.getListByType(e)
                },
                getPanelList: function () {
                    return this.getListByType(s)
                },
                scrollToActiveTab: function (e) {
                    e = $.extend(!0, {
                        animated: !0
                    }, e), setTimeout(function () {
                        var t = this.refs.scroller.getIScroll(),
                            n = ReactDOM.findDOMNode(this.refs.scroller).querySelector(".active");
                        t && n && t.scrollToElement(n, e.animated ? 600 : 0, lib.flexible.rem2px(-.4))
                    }.bind(this), 0)
                },
                needScroll: function () {
                    return !!this.props.needScroll || this.getTabCount() > this.props.scrollCount
                }
            });
        c.Tab = o, c.Panel = s, e.exports = c
    },
    256: function (e, t) {},
    257: function (e, t, n) {
        var a = n(28),
            i = function (e) {
                return React.createElement("div", {
                    className: a("tab", {
                        active: e.active
                    }),
                    onClick: e.onClick
                }, e.isCustomTab ? e.children : React.createElement("span", {
                    className: "txt"
                }, e.children))
            };
        e.exports = i
    },
    258: function (e, t, n) {
        var a = n(28);
        e.exports = function (e) {
            return React.createElement("div", {
                className: a("panel", {
                    active: e.active
                })
            }, e.children)
        }
    },
    270: function (e, t, n) {
        var a = n(271),
            i = n(4),
            r = n(273),
            o = n(275),
            s = React.createClass({
                displayName: "GoodInGrid",
                getInitialState: function () {
                    return {
                        tagSupport: !!this.props.item.itemTagList && !!this.props.item.itemTagList.length
                    }
                },
                handleClick: function () {
                    this.props.onBeforeClickGood && this.props.onBeforeClickGood(this.props.item, this.props.pos);
                    var e = this.props.statConfig || null;
                    if (e) {
                        if (e.extraItemInfoKeys) {
                            for (var t in e.extraItemInfoKeys) {
                                var n = e.extraItemInfoKeys[t];
                                e.parameters = e.parameters || {}, e.parameters[t] = this.props.item[n] || this.props[n]
                            }
                            delete e.extraItemInfoKeys
                        }
                        e.topage = this.props.item.jumpUrl || (i._$isInApp() ? "yanxuan://commoditydetails?commodityid=" + this.props.item.id : "/item/detail?id=" + this.props.item.id), YXStat.q.push(["add_event", e])
                    }
                    if (this.props.onClick) return void this.props.onClick(this.props.item, this.props.pos);
                    if (this.props.item.jumpUrl) return void(window.yanxuan_href = this.props.item.jumpUrl);
                    var a = i._$isInApp() ? "yanxuan://commoditydetails?commodityid=" + this.props.item.id : "/item/detail?id=" + this.props.item.id;
                    window.yanxuan_href = a
                },
                handleReLoad: function () {
                    var e = this.props.onReLoad;
                    e && "function" == typeof e && e(this.props.item, this.props.pos)
                },
                renderProductDesc: function () {
                    var e = this.props.item,
                        t = e.simpleDesc || null,
                        n = "desc",
                        a = e.listPromBanner || null;
                    if (a && a.valid && a.promoTitle) {
                        var i = a.promoTitle || "",
                            r = a.promoSubTitle || "",
                            o = a.content || "";
                        return r.indexOf("起") > -1 && (r = r.replace("起", '<span class="qi">起</span>')), React.createElement("div", {
                            className: "promBanner promBanner-" + a.styleType + a.timeType,
                            style: {
                                backgroundImage: "url(" + (a.bannerContentUrl || "//yanxuan.nosdn.127.net/76ce4cf546eeb272cf81ae86e30169e4.png") + ")"
                            }
                        }, React.createElement("div", {
                            className: "promTitle",
                            style: {
                                backgroundImage: "url(" + (a.bannerTitleUrl || "//yanxuan.nosdn.127.net/ff98dd0681a51d15f2cc89d3f17061c2.png") + ")"
                            }
                        }, React.createElement("div", {
                            className: "activity_title"
                        }, a.iconUrl && React.createElement("img", {
                            className: "icon",
                            src: a.iconUrl
                        }), React.createElement("span", {
                            style: {
                                verticalAlign: "middle"
                            }
                        }, i)), React.createElement("div", {
                            className: "activity_subTitle"
                        }, React.createElement("span", {
                            dangerouslySetInnerHTML: {
                                __html: r
                            }
                        }))), React.createElement("div", {
                            className: "promContent"
                        }, o))
                    }
                    return t ? (null != a && 0 == a.valid && (n += " activity"), React.createElement("div", {
                        className: n
                    }, " ", t)) : null
                },
                render: function () {
                    var e = this.props.item,
                        t = null,
                        n = e.listPicUrl ? e.listPicUrl : e.primaryPicUrl ? e.primaryPicUrl : e.picUrl2,
                        i = this.getPriceArea(e),
                        s = this.renderProductDesc();
                    if (!this.props.noSpec)
                        if (e.productPlace && e.productPlace.length > 0) {
                            var c, l = [];
                            for (c = 0; c < e.productPlace.length; c++) l.push(e.productPlace[c]);
                            t = React.createElement("div", {
                                className: "specification"
                            }, l.map(function (e, t) {
                                return React.createElement("div", {
                                    key: t
                                }, e)
                            }))
                        } else e.colorNum > 1 && (t = React.createElement("div", {
                            className: "specification"
                        }, React.createElement("div", null, e.colorNum), React.createElement("div", null, "色"), React.createElement("div", null, "可"), React.createElement("div", null, "选")));
                    if (e.promLogo) {
                        var u = 2 * e.promLogo.width / 225 + "rem",
                            p = 2 * e.promLogo.height / 225 + "rem";
                        t = React.createElement("img", {
                            className: "promoLogo",
                            style: {
                                width: u,
                                height: p
                            },
                            src: e.promLogo.logoUrl
                        })
                    }
                    return React.createElement("a", {
                        className: "good",
                        href: "javascript:;",
                        onClick: this.handleClick
                    }, React.createElement("div", {
                        className: "hd"
                    }, React.createElement("div", {
                        className: "wraper"
                    }, this.props.noLazyload ? React.createElement("img", {
                        src: n + "?imageView&quality=65&thumbnail=330x330"
                    }) : React.createElement(a, {
                        src: n + "?imageView&quality=65&thumbnail=330x330",
                        onReLoad: this.handleReLoad
                    }), e.presentPirUrl && React.createElement(r, {
                        presentPirUrl: e.presentPirUrl,
                        pos: "pos"
                    })), s, e.presentUrl ? React.createElement("div", {
                        className: "presentImgWrap"
                    }, React.createElement("img", {
                        className: "presentImg",
                        src: e.presentUrl
                    })) : null, e.promDesc ? React.createElement("div", {
                        className: "promDesc"
                    }, e.promDesc) : null), React.createElement("div", {
                        className: "name"
                    }, !!e.featuredSeries && e.featuredSeries.showFeatureSeriesNameFlag && e.name.indexOf(e.featuredSeries.name) == -1 && React.createElement("span", null, e.featuredSeries.name, " "), e.name, this.props.dynamicStyle && React.createElement("span", {
                        className: "dynamicPrice"
                    }, " ", i)), React.createElement("div", {
                        className: "newItemDesc"
                    }, e.simpleDesc), React.createElement("div", {
                        className: "price"
                    }, i), React.createElement(o, {
                        tagList: e.tagCnts,
                        showNewStyle: !0
                    }), this.props.joinCartButton === !0 ? React.createElement("div", {
                        className: "joinCart"
                    }, React.createElement("div", {
                        className: 0 == e.sellVolume ? "joinbutton disabled" : "joinbutton",
                        onClick: this.props.joinCart.bind(null, e)
                    }, 0 == e.sellVolume && this.props.showSoldoutBtn ? "已售罄" : "加入购物车")) : "", t)
                },
                getPriceArea: function (e) {
                    var t = null != e.couponPrice && e.couponPrice < e.retailPrice && location.pathname.indexOf("/lead/share") > -1,
                        n = null;
                    n = this.props.showCounterPrice ? t ? e.counterPrice && e.counterPrice !== e.couponPrice ? e.counterPrice : null : e.counterPrice && e.counterPrice !== e.retailPrice ? e.counterPrice : null : null;
                    var a = React.createElement("span", {
                        className: "priceInner"
                    }, t ? React.createElement("span", null, React.createElement("span", {
                        style: {
                            fontSize: "0.32rem"
                        }
                    }, "用券最低"), " ¥", e.couponPrice.toPrice({
                        isFixed: !1
                    })) : React.createElement("span", null, "¥", e.retailPrice.toPrice({
                        isFixed: !1
                    })), null !== n && React.createElement("span", {
                        className: "counterPrice"
                    }, "¥", n.toPrice({
                        isFixed: !1
                    })));
                    return a
                },
                getContent: function (e) {
                    return React.createElement("span", {
                        style: {
                            fontWeight: e.bold ? "bold" : "normal"
                        }
                    }, e.value)
                },
                adapteFontSize: function (e, t, n, a) {
                    a || (a = 1);
                    var i = [28, 22, 20, 18, 16, 14],
                        r = 12,
                        o = e - t > 0 ? Math.ceil((e - t) / a) : 0;
                    return (i[n + o] || r) / 75 + "rem"
                }
            });
        e.exports = s
    },
    271: function (e, t, n) {
        n(272);
        var a = n(28),
            i = React.createClass({
                displayName: "Lazyload",
                getDefaultProps: function () {
                    return {
                        className: ""
                    }
                },
                getInitialState: function () {
                    return {
                        error: !1,
                        loaded: !1
                    }
                },
                componentDidMount: function () {
                    this.reloadLazy()
                },
                componentWillReceiveProps: function (e) {
                    this.props.src != e.src && this.reloadLazy()
                },
                reloadLazy: function () {
                    $(this.refs.img).lazyload({
                        effect: "fadeIn",
                        threshold: 200,
                        error: this.handleError,
                        load: this.handleReload
                    })
                },
                handleReload: function (e) {
                    this.setState({
                        loaded: !0
                    }), this.props.onReLoad && this.props.onReLoad(e)
                },
                handleError: function (e) {
                    this.setState({
                        error: !0
                    })
                },
                handleLoad: function (e) {
                    1 !== e.target.width && this.props.onLoad && this.props.onLoad(e)
                },
                render: function () {
                    return React.createElement("div", {
                        className: a("m-lazyload " + this.props.className, {
                            error: this.state.error,
                            "m-lazyload-loaded": this.state.loaded
                        })
                    }, React.createElement("img", {
                        ref: "img",
                        "data-original": this.props.src,
                        "data-src": this.props.src,
                        className: "swiper-lazy",
                        onLoad: this.handleLoad
                    }))
                }
            });
        e.exports = i
    },
    272: function (e, t, n) {
        e.exports = n(22)(18)
    },
    273: function (e, t, n) {
        function a(e) {
            return React.createElement("div", {
                className: "m-sticker " + e.pos
            }, React.createElement("div", {
                className: "img-swraper"
            }, React.createElement("img", {
                src: e.presentPirUrl,
                style: {
                    width: "1.0666666667rem",
                    height: "1.0666666667rem"
                }
            })))
        }
        n(274), e.exports = a
    },
    274: function (e, t) {},
    275: function (e, t, n) {
        function a(e) {
            var t = e.tagList;
            return t && t.length ? React.createElement("div", {
                className: "tagWraper " + (e.showNewStyle ? "new" : "old")
            }, t.map(function (t, n) {
                return React.createElement(r, i({}, t, {
                    key: n,
                    showNewStyle: !!e.showNewStyle
                }))
            })) : React.createElement("span", null)
        }
        var i = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            r = n(276);
        n(278), e.exports = a
    },
    276: function (e, t, n) {
        function a(e) {
            var t = {
                    0: "anniversary",
                    1: "newItem",
                    2: "gradientPrice",
                    3: "gradientPrice",
                    4: "manufacturer",
                    5: "coupon",
                    6: "gradients"
                },
                n = "";
            return n = e.showNewStyle ? e.className ? e.className + " tag-status-new " : " tag-status-new " : e.className ? e.className + " tag-status " : " tag-status ", React.createElement("span", {
                className: i(n + t[e.type], {
                    superMem: 2 === e.type && 100002 === e.subType
                })
            }, e.name)
        }
        n(277);
        var i = n(28);
        e.exports = a
    },
    277: function (e, t) {},
    278: function (e, t) {},
    296: function (e, t, n) {
        var a = n(12),
            i = n(4),
            r = n(13),
            o = n(16),
            s = n(18),
            c = (n(14), {
                _$isInYixin: function (e) {
                    return !!(e || navigator.userAgent).toLowerCase().match(/yixin/i)
                },
                _$toPay: function (e) {
                    function t(e) {
                        return o.payOrder({
                            orderId: e.data.orderId,
                            userId: e.data.userId,
                            yx_aui: i._$getCookie("yx_aui"),
                            yx_from: i._$getCookie("yx_from"),
                            payMethod: a.YXPAY
                        }, e.data.domain)
                    }

                    function n(t) {
                        function n(t) {
                            200 == t.code && (window.yanxuan_href = "/order/complete?orderId=" + e, a.resolve()), 1 == t.code && (window.yanxuan_href = "/order/fail?orderId=" + e, a.reject())
                        }
                        var a = $.Deferred(),
                            i = t.data;
                        return YixinJSBridge.invoke("getBrandYCPayRequest", {
                            appId: i.appId,
                            timeStamp: i.timeStamp,
                            nonceStr: i.nonceStr,
                            "package": i["package"],
                            signType: i.signType,
                            paySign: i.paySign
                        }, n), a.promise()
                    }

                    function c(e, t, n) {
                        throw r(e, t, n), new Error
                    }
                    var l = $.Deferred();
                    try {
                        s.choosePay({
                            orderId: e,
                            payMethod: a.YXPAY
                        }).then(function (e) {
                            return t(e)
                        }, c).then(function (e) {
                            return n(e)
                        }, c).then(function () {
                            l.resolve()
                        }, function () {
                            l.reject()
                        })
                    } catch (u) {
                        return l.reject()
                    }
                    return l.promise()
                }
            });
        e.exports = c
    },
    309: function (e, t) {
        var n = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            a = 1e3,
            i = 60 * a,
            r = 60 * i,
            o = 24 * r,
            s = function (e, t) {
                return React.createClass({
                    getDefaultProps: function () {
                        return {
                            units: 1e3
                        }
                    },
                    getInitialState: function () {
                        return {
                            leftTime: this.props.leftTime || this.props.timeleft || 0,
                            startTime: this.props.startTime || +new Date
                        }
                    },
                    componentDidMount: function () {
                        0 === this.props.leftTime && 1 != t || this.timedown()
                    },
                    componentWillReceiveProps: function (e) {
                        (e.leftTime !== this.props.leftTime || e.timeleft !== this.props.timeleft || e.forceRefresh && this.props.forceRefresh !== e.forceRefresh) && this.setState({
                            leftTime: e.leftTime || e.timeleft || 0,
                            startTime: e.startTime || +new Date
                        }, function () {
                            this.stop(), this.timedown()
                        })
                    },
                    componentWillUnmount: function () {
                        this.stop()
                    },
                    render: function () {
                        return React.createElement(e, n({}, this.props, {
                            days: this.getDays(),
                            hours: this.getHours(),
                            mins: this.getMins(),
                            secs: this.getSecs()
                        }))
                    },
                    timedown: function () {
                        var e = this.state.leftTime,
                            t = this.props.halfwayCallBackConfig,
                            n = t && t.triggerTime,
                            a = 0,
                            i = 0,
                            r = 0;
                        return this.timer && (i = this.state.startTime + this.props.units, r = (new Date).getTime(), a = r - i, a < 0 && (a = 0), e = e - this.props.units - a, e >= 0 && this.setState({
                            leftTime: e,
                            startTime: r
                        }, function () {
                            n && this.state.leftTime <= t.triggerTime && (n = !1, t.callback && t.callback())
                        })), e > 0 ? (this.timer = setTimeout(this.timedown, this.props.units), void(this.props.timeDownCallback && this.props.timeDownCallback(e))) : (this.stop(), void(this.props.callback && this.props.callback()))
                    },
                    stop: function () {
                        this.timer && (clearTimeout(this.timer), this.timer = null)
                    },
                    getDays: function () {
                        return Math.floor(this.state.leftTime / o)
                    },
                    getHours: function () {
                        return 3 === this.props.maxLen ? Math.floor(this.state.leftTime / r) : Math.floor(this.state.leftTime % o / r)
                    },
                    getMins: function () {
                        return 2 === this.state.maxLen ? Math.floor(this.state.leftTime / i) : Math.floor(this.state.leftTime % r / i)
                    },
                    getSecs: function () {
                        return 1 === this.state.maxLen ? Math.floor(this.state.leftTime / a) : Math.floor(this.state.leftTime % i / a)
                    }
                })
            };
        e.exports = s
    },
    310: function (e, t) {
        function n(e, t) {
            for (var n = "", a = 0; a < t; a++) n += e;
            return n
        }

        function a(e, t, a) {
            return e = e.toString(), a = a || "0", "undefined" == typeof t ? e : (a = 0 === a ? "0" : a ? a.toString() : " ", n(a, t - e.length) + e)
        }
        e.exports = a
    },
    332: function (e, t, n) {
        function a() {
            var e = !1;
            if (localStorage && localStorage.getItem) {
                var t = localStorage.getItem("yx_tabBar_time"),
                    n = (new Date).getTime();
                if (window.browserAnonymousMode) return !1;
                if (t && !isNaN(t)) {
                    var a = parseInt(t);
                    n - a > 2592e5 && (e = !0)
                } else e = !0
            }
            return e
        }

        function i() {
            var e = !1,
                t = "yx_tabBar_ucenter_click_flag";
            return e = localStorage && localStorage.getItem ? !!localStorage.getItem(t) : !!o._$getCookie(t)
        }

        function r() {
            var e = "yx_tabBar_ucenter_click_flag";
            localStorage && localStorage.setItem ? localStorage.setItem(e, "true") : o._$setCookie(e, "true", 36500)
        }
        n(333);
        var o = n(4),
            s = n(147),
            c = n(28),
            l = n(6),
            u = n(19),
            p = n(334),
            d = n(20),
            m = n(335),
            h = n(10),
            f = React.createClass({
                displayName: "TabBar",
                getInitialState: function () {
                    return {
                        cartCount: 0,
                        iconUrlsForTopic: [],
                        isSendRequestForTopic: !1,
                        isShowRedIcon: a()
                    }
                },
                componentDidMount: function () {
                    document.body.classList.add("hasTabBar"), this.refreshCart(), d.on("refreshCart", this.refreshCart), p.getFindIcon().then(function (e) {
                        if (!e.data) return void this.setState({
                            isSendRequestForTopic: !0
                        });
                        var t = [];
                        e.data.normalUrl && t.push(e.data.normalUrl), e.data.activatedUrl && t.push(e.data.activatedUrl), this.setState({
                            iconUrlsForTopic: t,
                            isSendRequestForTopic: !0
                        })
                    }.bind(this), function () {
                        this.setState({
                            isSendRequestForTopic: !0
                        })
                    }.bind(this))
                },
                componentWillUnmount: function () {
                    document.body.classList.remove("hasTabBar"), d.off("refreshCart", this.refreshCart)
                },
                handleClickItem: function (e) {
                    "topic" == e.icon && localStorage && localStorage.setItem && localStorage.setItem("yx_tabBar_time", (new Date).getTime()), "ucenter" === e.icon && r(), window.yanxuan_href = e.targetUrl
                },
                render: function () {
                    var e = [{
                            txt: "首页",
                            icon: "index",
                            targetUrl: "/"
                        }, {
                            txt: "分类",
                            icon: "cate",
                            targetUrl: "/item/cateList"
                        }, {
                            txt: "识物",
                            icon: "topic",
                            targetUrl: "/topic/index"
                        }, {
                            txt: "购物车",
                            icon: "cart",
                            targetUrl: "/cart"
                        }, {
                            txt: "个人",
                            icon: "ucenter",
                            targetUrl: "/ucenter"
                        }],
                        t = !i(),
                        n = this.state.iconUrlsForTopic,
                        a = this.state.isSendRequestForTopic,
                        r = this.state.isShowRedIcon;
                    return React.createElement("div", {
                        className: "tabBar-wrap"
                    }, React.createElement("nav", {
                        className: "m-tabBar"
                    }, e.map(function (e, i) {
                        var o = window.location.pathname === l.getPathName(e.targetUrl);
                        return React.createElement("a", {
                            key: i,
                            className: c("item", {
                                active: o
                            }),
                            onClick: this.handleClickItem.bind(this, e),
                            href: "javascript:void(0);"
                        }, "topic" != e.icon && React.createElement(s, {
                            name: "tabBar-" + e.icon
                        }), "topic" == e.icon && 2 != n.length && React.createElement(s, {
                            name: "tabBar-" + e.icon,
                            className: c({
                                vhide: !a
                            })
                        }), "topic" == e.icon && 2 == n.length && React.createElement("img", {
                            className: "topicIcon",
                            src: o ? n[1] : n[0]
                        }), React.createElement("span", {
                            className: "txt"
                        }, e.txt), "topic" == e.icon && r && React.createElement("i", {
                            className: "redIcon"
                        }), "ucenter" == e.icon && t && React.createElement("i", {
                            className: "redIcon"
                        }), "购物车" === e.txt && !!this.state.cartCount && React.createElement(m, {
                            className: "badge",
                            text: this.state.cartCount > 99 ? "99+" : this.state.cartCount
                        }))
                    }.bind(this))))
                },
                refreshCart: function () {
                    u.getMiniCartNum().done(function (e) {
                        document.body.classList.value.indexOf("hasTabBar") >= 0 && this.setState({
                            cartCount: e.data
                        })
                    }.bind(this))
                }
            });
        e.exports = function (e) {
            return h._$isShowTabBar() ? React.createElement(f, e) : React.createElement("div", null)
        }
    },
    333: function (e, t) {},
    334: function (e, t, n) {
        var a = n(17),
            i = a("/xhr/topic", ["getListByAll", "getListByParam", {
                name: "comment",
                alias: "getComments",
                ajaxConfig: {
                    type: "GET"
                }
            }, {
                name: "addComment",
                alias: "addComment"
            }, {
                name: "complete",
                alias: "shareComplete",
                path: "/xhr/topic/share",
                ajaxConfig: {
                    type: "GET"
                }
            }, {
                name: "lottery",
                alias: "shareLottery",
                path: "/xhr/topic/share"
            }, {
                name: "completeByItem",
                alias: "shareCompleteByItem",
                path: "/xhr/topic/share",
                ajaxConfig: {
                    type: "GET"
                }
            }, {
                name: "lotteryByItem",
                alias: "shareLotteryByItem",
                path: "/xhr/topic/share"
            }, "commentSupport", "collect", "deleteCollect", "getHotList", "getFindIcon"]);
        e.exports = i
    },
    335: function (e, t, n) {
        var a = n(28);
        n(336), e.exports = function (e) {
            var t;
            return e = $.extend(!0, {
                className: "",
                style: {}
            }, e), t = e.text + "", React.createElement("span", {
                className: a("m-badge " + e.className, {
                    "m-badge-1": t.length >= 2,
                    "m-badge-2": t.length >= 3
                }),
                style: e.style
            }, e.text)
        }
    },
    336: function (e, t) {},
    439: function (e, t, n) {
        var a = n(2),
            i = n(4),
            r = n(440),
            o = n(442),
            s = n(443),
            c = n(445),
            l = n(296),
            u = n(67),
            p = n(35),
            d = n(6),
            m = a.extend({
                config: function (e) {
                    i._$extend(e, {
                        share: {
                            url: window.yanxuan_href
                        },
                        callback: function () {}
                    })
                },
                init: function (e) {
                    this.supr(e);
                    var t = this.data,
                        n = $.extend({
                            wxmoments: "",
                            wxfriend: "",
                            qq: "",
                            qzone: "",
                            weibo: "",
                            yxmoments: "",
                            yxfriend: "",
                            app: ""
                        }, t.stat);
                    window.shareData = {
                        imgUrl: t.share.imgUrl,
                        timeLineLink: t.share.url,
                        sendFriendLink: t.share.url,
                        weiboLink: t.share.url,
                        tTitle: t.share.title,
                        tContent: t.share.desc,
                        fTitle: t.share.title,
                        fContent: t.share.desc,
                        wContent: t.share.desc
                    }, c._$isInWeixin() && new r({
                        data: {
                            imgUrl: t.share.imgUrl || "https://yanxuan.nosdn.127.net/3c71c931c47a0be5dc82776124f22dae.png",
                            title: t.share.title,
                            timelineLink: d.appendURL(t.share.url, {
                                _stat_from: n.wxmoments
                            }),
                            appMessageLink: d.appendURL(t.share.url, {
                                _stat_from: n.wxfriend
                            }),
                            shareQQLink: d.appendURL(t.share.url, {
                                _stat_from: n.qq
                            }),
                            weiboLink: d.appendURL(t.share.url, {
                                _stat_from: n.weibo
                            }),
                            shareQZoneLink: d.appendURL(t.share.url, {
                                _stat_from: n.qzone
                            }),
                            desc: t.share.desc,
                            success: t.callback,
                            cancel: t.callback,
                            fail: t.callback
                        }
                    }), u._$isInTuishou() && new s({
                        data: {
                            imgUrl: t.share.imgUrl || "https://yanxuan.nosdn.127.net/3c71c931c47a0be5dc82776124f22dae.png",
                            title: t.share.title,
                            timelineLink: d.appendURL(t.share.url, {
                                _stat_from: n.wxmoments
                            }),
                            appMessageLink: d.appendURL(t.share.url, {
                                _stat_from: n.wxfriend
                            }),
                            shareQQLink: d.appendURL(t.share.url, {
                                _stat_from: n.qq
                            }),
                            shareQZoneLink: d.appendURL(t.share.url, {
                                _stat_from: n.qzone
                            }),
                            desc: t.share.desc,
                            success: t.callback,
                            cancel: t.callback,
                            fail: t.callback
                        }
                    }), l._$isInYixin() && new o({
                        data: {
                            imgUrl: t.share.imgUrl || "https://yanxuan.nosdn.127.net/3c71c931c47a0be5dc82776124f22dae.png",
                            title: t.share.title,
                            timelineLink: d.appendURL(t.share.url, {
                                _stat_from: n.yxmoments
                            }),
                            appMessageLink: d.appendURL(t.share.url, {
                                _stat_from: n.yxfriend
                            }),
                            weiboLink: d.appendURL(t.share.url, {
                                _stat_from: n.weibo
                            }),
                            desc: t.share.desc,
                            callback: t.callback
                        }
                    }), i._$isInApp() && p._$ready(function () {
                        p._$setShareParams({
                            title: t.share.title,
                            imageUrl: t.share.imgUrl,
                            content: t.share.desc,
                            shareUrl: d.appendURL(t.share.url, {
                                _stat_from: n.app
                            })
                        }), t.hideShareToSNSBtn && p._$hideShareToSNSBtn()
                    })
                }
            });
        e.exports = m
    },
    440: function (e, t, n) {
        var a = n(2),
            i = n(4),
            r = n(441),
            o = a.extend({
                config: function (e) {
                    i._$extend(e, {
                        imgUrl: "",
                        title: "",
                        link: "",
                        desc: "",
                        success: function () {},
                        cancel: function () {},
                        fail: function () {}
                    })
                },
                init: function (e) {
                    this.supr(e);
                    var t = this,
                        n = r.getWeiXinSign({
                            url: window.yanxuan_href.split("#")[0]
                        });
                    n.done(function (n) {
                        var a = n.data;
                        window.wx && (window.wx.config({
                            debug: !1,
                            appId: a.appid,
                            timestamp: a.timestamp,
                            nonceStr: a.nonceStr,
                            signature: a.signature,
                            jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone", "onMenuShareWeibo", "hideMenuItems", "chooseImage"]
                        }), window.wx.error(function (t) {
                            e.debug && alert(t.errMsg)
                        }), window.wx.ready(function () {
                            t.bindWxFunction()
                        }))
                    }), n.fail(function () {
                        t.bindWxFunction()
                    })
                },
                bindWxFunction: function () {
                    var e = this.data;
                    window.wx.onMenuShareTimeline({
                        title: "" + e.title + "\n" + e.desc,
                        link: e.timelineLink || e.link,
                        imgUrl: e.imgUrl,
                        success: e.success,
                        cancel: e.cancel,
                        fail: e.fail
                    }), window.wx.onMenuShareAppMessage({
                        title: e.title,
                        desc: e.desc,
                        link: e.appMessageLink || e.link,
                        imgUrl: e.imgUrl,
                        success: e.success,
                        cancel: e.cancel,
                        fail: e.fail
                    }), window.wx.onMenuShareQQ({
                        title: e.title,
                        desc: e.desc,
                        link: e.shareQQLink || e.link,
                        imgUrl: e.imgUrl,
                        success: e.success,
                        cancel: e.cancel,
                        fail: e.fail
                    }), window.wx.onMenuShareQZone({
                        title: e.title,
                        desc: e.desc,
                        link: e.shareQZoneLink || e.link,
                        imgUrl: e.imgUrl,
                        success: e.success,
                        cancel: e.cancel,
                        fail: e.fail
                    }), window.wx.onMenuShareWeibo({
                        title: e.title,
                        desc: e.desc,
                        link: e.weiboLink || e.link,
                        imgUrl: e.imgUrl,
                        success: e.success,
                        cancel: e.cancel,
                        fail: e.fail
                    })
                }
            });
        e.exports = o
    },
    441: function (e, t, n) {
        var a = n(17);
        e.exports = a("/xhr/weixin", [{
            name: "getSign",
            alias: "getWeiXinSign"
        }])
    },
    442: function (e, t, n) {
        var a = n(2),
            i = n(4),
            r = a.extend({
                config: function (e) {
                    i._$extend(e, {
                        imgUrl: "",
                        title: "",
                        link: "",
                        desc: "",
                        callback: function () {}
                    })
                },
                init: function (e) {
                    this.supr(e);
                    var t = this.data;
                    document.addEventListener("YixinJSBridgeReady", function () {
                        YixinJSBridge.on("menu:share:appmessage", function (e) {
                            YixinJSBridge.invoke("sendAppMessage", {
                                img_url: t.imgUrl,
                                link: t.appMessageLink,
                                desc: t.desc,
                                title: t.title
                            }, t.callback)
                        }), YixinJSBridge.on("menu:share:timeline", function (e) {
                            YixinJSBridge.invoke("shareTimeline", {
                                img_url: t.imgUrl,
                                link: t.timelineLink,
                                desc: t.desc,
                                title: t.title
                            }, t.callback)
                        }), YixinJSBridge.on("menu:share:weibo", function () {
                            YixinJSBridge.invoke("shareWeibo", {
                                content: t.title,
                                url: t.weiboLink
                            }, t.callback)
                        }, t.callback)
                    })
                }
            });
        e.exports = r
    },
    443: function (e, t, n) {
        var a = n(2),
            i = n(4);
        n(444);
        var r = a.extend({
            config: function (e) {
                i._$extend(e, {
                    imgUrl: "",
                    title: "",
                    link: "",
                    desc: "",
                    success: function () {},
                    cancel: function () {},
                    fail: function () {}
                })
            },
            init: function (e) {
                this.supr(e);
                var t = this;
                window.dealerApp.ready(function () {
                    t.bindWxFunction()
                })
            },
            bindWxFunction: function () {
                var e = this.data;
                window.dealerApp.onMenuShareTimeline({
                    title: "" + e.title + "\n" + e.desc,
                    link: e.timelineLink || e.link,
                    imgUrl: e.imgUrl,
                    success: e.success,
                    cancel: e.cancel,
                    fail: e.fail
                }), window.dealerApp.onMenuShareAppMessage({
                    title: e.title,
                    desc: e.desc,
                    link: e.appMessageLink || e.link,
                    imgUrl: e.imgUrl,
                    success: e.success,
                    cancel: e.cancel,
                    fail: e.fail
                }), window.dealerApp.onMenuShareQQ({
                    title: e.title,
                    desc: e.desc,
                    link: e.shareQQLink || e.link,
                    imgUrl: e.imgUrl,
                    success: e.success,
                    cancel: e.cancel,
                    fail: e.fail
                }), window.dealerApp.onMenuShareQZone({
                    title: e.title,
                    desc: e.desc,
                    link: e.shareQZoneLink || e.link,
                    imgUrl: e.imgUrl,
                    success: e.success,
                    cancel: e.cancel,
                    fail: e.fail
                })
            }
        });
        e.exports = r
    },
    444: function (e, t) {
        ! function () {
            var e = function () {};
            e.prototype.ready = function (e) {
                e()
            }, e.prototype.onMenuShareTimeline = function (e) {
                this.tuishou.invoke("onMenuShareTimeline", e)
            }, e.prototype.onMenuShareAppMessage = function (e) {
                this.tuishou.invoke("onMenuShareAppMessage", e)
            }, e.prototype.onMenuShareQQ = function (e) {
                this.tuishou.invoke("onMenuShareQQ", e)
            }, e.prototype.onMenuShareQZone = function (e) {
                this.tuishou.invoke("onMenuShareQZone", e)
            }, e.prototype.previewImage = function (e) {
                this.tuishou.invoke("previewImage", e)
            };
            var t = function () {};
            if (t.prototype.invoke = function (e, t, n) {
                    t || (t = {});
                    var a = t.success;
                    delete t.success;
                    var i = t.cancel;
                    delete t.cancel, n ? window.tsAppHostJSBridge.invoke(e, t, n) : a && i ? window.tsAppHostJSBridge.blockInvoke(e, t, a, i) : a ? window.tsAppHostJSBridge.invoke(e, t, a) : i ? window.tsAppHostJSBridge.invoke(e, t, i) : window.tsAppHostJSBridge.invoke(e, t)
                }, !window.dealerApp) {
                var e = new e;
                e.tuishou = new t, window.dealerApp = e
            }
            window.dealerApp.tuishou || (window.dealerApp.tuishou = new t), window.wx || (window.wx = window.dealerApp)
        }(),
        function () {
            var e = "1.0",
                t = "js://invoke?",
                n = "appHostEvent_",
                a = "js://proxyInvoke?",
                i = function () {
                    return navigator.userAgent.match(/Android/)
                }(),
                r = function () {
                    this.serialNo = 0, this.callbacks = {}, this.successCallbacks = {}, this.cancelCallbacks = {}
                };
            r.prototype.version = e, r.prototype.blockInvoke = function (e, t, n, a) {
                ++this.serialNo;
                var r = this.serialNo;
                n && (this.successCallbacks[r] = n), a && (this.cancelCallbacks[r] = a), i ? this.invokeOnAndroid(e, t, this.serialNo) : this.invokeOnIos(e, t, this.serialNo)
            }, r.prototype.invoke = function (e, t, n) {
                ++this.serialNo;
                var a = this.serialNo;
                n && (this.callbacks[a] = n), i ? this.invokeOnAndroid(e, t, this.serialNo) : this.invokeOnIos(e, t, this.serialNo)
            }, r.prototype.invokeOnAndroid = function (n, a, i) {
                var r = {
                        name: n,
                        params: a,
                        version: e,
                        serial: i
                    },
                    o = encodeURIComponent(JSON.stringify(r));
                o && window.prompt(t + o)
            }, r.prototype.invokeOnIos = function (n, a, i) {
                var r = t + "version=" + e + "&name=" + encodeURIComponent(n) + "&param=" + encodeURIComponent(JSON.stringify(a)) + "&serial=" + i;
                window.console.log(r);
                var o = window.webkit.messageHandlers[n];
                "object" == typeof o && o.postMessage({
                    version: e,
                    serial: i,
                    param: JSON.parse(JSON.stringify(a))
                })
            }, r.prototype.proxyInvoke = function (e, t, n, a) {
                ++this.serialNo;
                var r = this.serialNo;
                a && (this.callbacks[r] = a), i ? this.proxyInvokeOnAndroid(e, t, n, this.serialNo) : this.proxyInvokeOnIos(e, t, n, this.serialNo)
            }, r.prototype.proxyInvokeOnAndroid = function (t, n, i, r) {
                var o = {
                        product: t,
                        name: n,
                        params: i,
                        version: e,
                        serial: r
                    },
                    s = encodeURIComponent(JSON.stringify(o));
                s && window.prompt(a + s)
            }, r.prototype.proxyInvokeOnIos = function (t, n, i, r) {
                var o = a + "version=" + e + "&product=" + encodeURIComponent(t) + "&name=" + encodeURIComponent(n) + "&param=" + encodeURIComponent(JSON.stringify(i)) + "&serial=" + r;
                window.console.log(o);
                var s = window.webkit.messageHandlers[n];
                "object" == typeof s && s.postMessage({
                    version: e,
                    product: t,
                    serial: r,
                    param: JSON.parse(JSON.stringify(i))
                })
            }, r.prototype.onInvokeResult = function (e, t) {
                var n = this.callbacks[e];
                return n ? (delete this.callbacks[e], void n(t)) : void window.console.log("non-existed serail: " + e)
            }, r.prototype.onSuccessResult = function (e, t) {
                var n = this.successCallbacks[e];
                return n ? (delete this.callbacks[e], void n(t)) : void window.console.log("non-existed serail: " + e)
            }, r.prototype.onCancelResult = function (e, t) {
                var n = this.cancelCallbacks[e];
                return n ? (delete this.callbacks[e], void n(t)) : void window.console.log("non-existed serail: " + e)
            }, r.prototype.onProxyInvokeResult = function (e, t) {
                var n = this.callbacks[e];
                return n ? (delete this.callbacks[e], void n(t)) : void window.console.log("non-existed serail: " + e)
            }, r.prototype.onNativeCall = function (e) {
                if (e) {
                    var t = e.name,
                        n = e.params;
                    if ("onInvokeResult" === t) {
                        var a = n.serial;
                        delete n.serial, this.onInvokeResult(a, n)
                    } else if ("onProxyInvokeResult" === t) {
                        var a = n.serial;
                        delete n.serial, this.onProxyInvokeResult(a, n)
                    } else if ("onSuccessResult" === t) {
                        var a = n.serial;
                        delete n.serial, this.onSuccessResult(a, n)
                    } else if ("onCancelResult" === t) {
                        var a = n.serial;
                        delete n.serial, this.onCancelResult(a, n)
                    } else "trigger" == t && r.event.trigger(n.type, n.detail)
                }
            };
            var o = function () {};
            if (o.prototype.on = function (e, t) {
                    document.addEventListener(n + e, t, !1)
                }, o.prototype.trigger = function (e, t) {
                    var a = document.createEvent("Event");
                    a.initEvent(n + e, !0, !0), a.detail = t, document.dispatchEvent(a)
                }, r.prototype.launchActivity = function (e) {
                    this.invoke("launchActivity", {
                        url: e
                    })
                }, r.prototype.log = function (e) {
                    this.invoke("log", {
                        msg: e
                    })
                }, !window.tsAppHostJSBridge) {
                var r = new r;
                r.event = new o, window.tsAppHostJSBridge = r, window.console && window.console.log || (window.console.log = window.tsAppHostJSBridge.log), window.tsAppHostJSBridgeOnLoad && window.tsAppHostJSBridgeOnLoad()
            }
        }()
    },
    445: function (e, t, n) {
        var a = n(12),
            i = n(4),
            r = n(13),
            o = n(16),
            s = n(18),
            c = {
                _$isInWeixin: function () {
                    var e = navigator.userAgent.toLowerCase();
                    return "micromessenger" == e.match(/MicroMessenger/i)
                },
                _$isWeixinAccountLogin: function () {
                    return !!i._$getCookie("S_OINFO") && i._$getCookie("S_OINFO").indexOf("@wx.163.com") > -1
                },
                _$toPay: function (e) {
                    function t(e) {
                        return o.payOrder({
                            orderId: e.data.orderId,
                            userId: e.data.userId,
                            yx_aui: i._$getCookie("yx_aui"),
                            yx_from: i._$getCookie("yx_from"),
                            payMethod: a.WXPAY
                        }, e.data.domain)
                    }

                    function n(t) {
                        function n(t) {
                            "get_brand_wcpay_request:ok" == t.err_msg && (window.yanxuan_href = "/order/complete?orderId=" + e, a.resolve()), "get_brand_wcpay_request:cancel" == t.err_msg && (window.yanxuan_href = "/order/fail?orderId=" + e, a.reject())
                        }
                        var a = $.Deferred(),
                            i = t.data;
                        return WeixinJSBridge.invoke("getBrandWCPayRequest", {
                            appId: i.appId,
                            timeStamp: i.timeStamp,
                            nonceStr: i.nonceStr,
                            "package": i["package"],
                            signType: i.signType,
                            paySign: i.paySign
                        }, n), a.promise()
                    }

                    function c(e, t, n) {
                        throw r(e, t, n), new Error
                    }
                    var l = $.Deferred();
                    try {
                        s.choosePay({
                            orderId: e,
                            payMethod: a.WXPAY
                        }).then(function (e) {
                            return t(e)
                        }, c).then(function (e) {
                            return n(e)
                        }, c).then(function () {
                            l.resolve()
                        }, function () {
                            l.reject()
                        })
                    } catch (u) {
                        return l.reject()
                    }
                    return l.promise()
                }
            };
        e.exports = c
    },
    637: function (e, t, n) {
        var a = n(17);
        e.exports = a("/xhr/gift/newUserGift", ["pickCoupon", "show", {
            name: "newUserItemShare",
            alias: "getNewUserItemShare",
            path: "/xhr/thirdModule"
        }])
    },
    724: function (e, t, n) {
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            i = n(31),
            r = n(332),
            o = n(43),
            s = n(725),
            c = n(41),
            l = n(727),
            u = n(729),
            p = n(731),
            d = n(733),
            m = n(10),
            h = n(11).isInHuanBei(),
            f = n(4),
            g = n(37),
            v = n(735),
            w = n(738),
            _ = n(742),
            y = n(749),
            x = n(751),
            S = n(753),
            k = n(757),
            E = n(759),
            R = n(761),
            b = n(765),
            C = n(770),
            N = n(774),
            I = n(778),
            T = n(780),
            U = n(782),
            L = n(637),
            $ = [],
            P = React.createClass({
                displayName: "Container",
                getInitialState: function () {
                    return {
                        showEntrance: !1,
                        rcmd: []
                    }
                },
                componentDidMount: function () {
                    var e = m._$isShowAppLayer();
                    L.show({
                        type: 0
                    }).done(function (t) {
                        if (t.data.showGiftWin) {
                            if (2 == t.data.winType && p({
                                    newUserGift: t.data.newUserGift,
                                    newUser: t.data.newUser,
                                    onClickClose: function () {
                                        !f._$isInApp() && t.data.showEntrance && this.setState({
                                            showEntrance: !0
                                        })
                                    }.bind(this)
                                }), e && 1 == t.data.winType) {
                                var n = t.data.newUser ? "//yanxuan.nosdn.127.net/e9edf70c3ae59129782214c04bd92d13.png" : "//yanxuan.nosdn.127.net/0d5a236cef84d3c537af1fe23d2a66b4.png";
                                d({
                                    picSrc: n,
                                    newUser: t.data.newUser
                                })
                            }
                        } else t.data.showEntrance && this.setState({
                            showEntrance: !0
                        })
                    }.bind(this)), this.pushBannerShowYxstat(0), this.getShowStatAndPublish(this.props.popularItemList, "show_index_popular_item", "id"), this.getShowStatAndPublish(this.props.newItemList, "show_index_newitem", "id")
                },
                handleSlideClick: function (e) {
                    var t = this.props.focusList[e];
                    YXStat.q.push(["track_click", {
                        event_name: "click_index_banner",
                        page_name: "index",
                        topage: t.targetUrl,
                        parameters: {
                            sequen: parseInt(e) + 1,
                            schemeUrl: encodeURIComponent(t.targetUrl),
                            userType: this.props.freshmanFlag ? "1" : "0",
                            extra: t.extra || ""
                        }
                    }]), YXStat.tool.warpPageJump(function () {
                        window.yanxuan_href = t.targetUrl
                    })
                },
                handleSlideChangeStart: function (e) {
                    this.pushBannerShowYxstat(Number(e.realIndex))
                },
                render: function () {
                    var e = m._$isShowHd(),
                        t = m._$isShowTabBar(),
                        p = g._$isInMailMaster(),
                        d = n(e ? 785 : 789),
                        f = this.props;
                    return React.createElement("div", {
                        className: "g-row m-index"
                    }, !h && React.createElement(d, null), React.createElement("div", {
                        className: "slideWarp"
                    }, React.createElement(i, {
                        className: "m-indexSlide",
                        list: f.focusList,
                        isInApp: !0,
                        clickImg: this.handleSlideClick,
                        onSlideChangeStart: this.handleSlideChangeStart
                    })), React.createElement(s, {
                        list: f.policyDescList,
                        freshmanFlag: f.freshmanFlag
                    }), (!e || !t) && !p && !h && React.createElement(l, null), f.freshmanFlag && React.createElement("div", null, f.kingKongModule && React.createElement(T, {
                        kingKongModule: f.kingKongModule,
                        isFreshman: f.freshmanFlag
                    }), f.bigPromotionModule && React.createElement(U, {
                        bigPromotionModule: f.bigPromotionModule,
                        isFreshman: f.freshmanFlag
                    }), React.createElement(I, {
                        indexActivityModule: f.indexActivityModule
                    }), f.tagList && f.tagList.length >= 4 && React.createElement(k, {
                        tagList: f.tagList
                    }), f.categoryHotSellModule && React.createElement(x, a({}, f.categoryHotSellModule, {
                        isFreshman: f.freshmanFlag
                    })), f.popularItemList && f.popularItemList.length >= 4 && React.createElement(y, {
                        itemList: f.popularItemList,
                        isFreshman: f.freshmanFlag
                    }), f.flashSaleModule && f.flashSaleModule.itemList.length >= 3 && React.createElement(C, a({}, f.flashSaleModule, {
                        isFreshman: f.freshmanFlag
                    })), f.newItemList && f.newItemList.length >= 6 && React.createElement(_, {
                        newItemList: f.newItemList,
                        isFreshman: f.freshmanFlag
                    }), f.sceneLightShoppingGuideModule && f.sceneLightShoppingGuideModule.length > 1 && React.createElement(w, {
                        sceneLightShoppingGuideModule: f.sceneLightShoppingGuideModule,
                        isFreshman: f.freshmanFlag
                    }), f.categoryModule && React.createElement(b, {
                        categoryModule: f.categoryModule,
                        isFreshman: f.freshmanFlag
                    })), !f.freshmanFlag && React.createElement("div", null, React.createElement("div", null, f.kingKongModule && React.createElement(T, {
                        kingKongModule: f.kingKongModule,
                        isFreshman: f.freshmanFlag
                    }), f.bigPromotionModule && React.createElement(U, {
                        bigPromotionModule: f.bigPromotionModule,
                        isFreshman: f.freshmanFlag
                    }), f.bossRecommendModule && React.createElement(v, a({}, f.bossRecommendModule, {
                        isFreshman: f.freshmanFlag,
                        pushStat: this.bossPushStat.bind(this, f.bossRecommendModule, f.freshmanFlag)
                    })), f.sceneLightShoppingGuideModule && f.sceneLightShoppingGuideModule.length > 1 && React.createElement(w, {
                        sceneLightShoppingGuideModule: f.sceneLightShoppingGuideModule,
                        isFreshman: f.freshmanFlag
                    })), f.personalTailorModule && React.createElement(N, {
                        personalTailorModule: f.personalTailorModule,
                        isFreshman: f.freshmanFlag
                    }), f.flashSaleModule && f.flashSaleModule.itemList.length >= 3 && React.createElement(C, a({}, f.flashSaleModule, {
                        isFreshman: f.freshmanFlag
                    })), f.newItemList && f.newItemList.length >= 6 && React.createElement(_, {
                        newItemList: f.newItemList,
                        isFreshman: f.freshmanFlag
                    }), f.popularItemList && f.popularItemList.length >= 4 && React.createElement(y, {
                        itemList: f.popularItemList,
                        isFreshman: f.freshmanFlag
                    }), f.categoryHotSellModule && React.createElement(x, a({}, f.categoryHotSellModule, {
                        isFreshman: f.freshmanFlag
                    })), f.indexActivityModule && f.indexActivityModule.length > 1 && React.createElement(S, {
                        indexActivityModule: f.indexActivityModule,
                        isFreshman: f.freshmanFlag
                    }), f.tagList && f.tagList.length >= 4 && React.createElement(k, {
                        tagList: f.tagList
                    }), f.topicList && f.topicList.length > 0 && React.createElement(E, {
                        topicList: f.topicList
                    }), f.zhongChouModule && React.createElement(R, a({}, f.zhongChouModule, {
                        isFreshman: f.freshmanFlag
                    })), f.categoryModule && React.createElement(b, {
                        categoryModule: f.categoryModule,
                        isFreshman: f.freshmanFlag
                    })), this.state.showEntrance && React.createElement(u, null), React.createElement(o, null), !p && React.createElement(r, null), React.createElement(c, null))
                },
                getStatData: function (e, t, n) {
                    var a = {
                        event_name: e,
                        event_action: "click",
                        page_name: "index",
                        topage: t
                    };
                    return n && (a.parameters = {}, a.parameters.userType = this.props.freshmanFlag ? "1" : "0"), JSON.stringify(a)
                },
                getShowStatAndPublish: function (e, t, n) {
                    for (var a, i = e || [], r = [], o = [], s = 0; s < i.length; s++) a = {
                        sequen: s + 1,
                        userType: this.props.freshmanFlag ? "1" : "0",
                        itemId: i[s].id,
                        extra: i[s].extra || ""
                    }, "id" == n && (a.itemId = i[s].id), "url" == n && (a.schemeUrl = encodeURIComponent(i[s].targetUrl)), r.push(a);
                    for (var c = Math.ceil(r.length / 4), l = 0; l < c; l++) o = r.slice(4 * l, 4 * (l + 1)), YXStat.q.push(["add_event", {
                        event_name: t,
                        event_action: "show",
                        page_name: "index",
                        parameters: {
                            items: o
                        }
                    }])
                },
                pushBannerShowYxstat: function (e) {
                    var t = this.props.focusList[e];
                    $.indexOf(t.targetUrl) > -1 || ($.push(t.targetUrl), YXStat.q.push(["add_event", {
                        event_name: "show_index_banner",
                        event_action: "show",
                        page_name: "index",
                        parameters: {
                            sequen: e + 1,
                            userType: this.props.freshmanFlag ? "1" : "0",
                            extra: t.extra || ""
                        }
                    }]))
                },
                bossPushStat: function (e, t) {
                    YXStat.q.push(["add_event", {
                        event_name: "show_index_belowbanner",
                        page_name: "index",
                        event_action: "show",
                        parameters: {
                            extra: e.extra || "",
                            userType: t ? 1 : 0
                        }
                    }])
                }
            });
        e.exports = P
    },
    725: function (e, t, n) {
        var a = n(726)("policyDescList"),
            i = function (e) {
                return React.createElement("div", {
                    className: "m-indexServicePolicy",
                    style: a
                }, React.createElement("ul", {
                    className: "g-grow"
                }, e.list.map(function (e, t) {
                    var n = {};
                    return e.schemeUrl && (n.href = e.schemeUrl), React.createElement("li", {
                        className: "item",
                        key: t
                    }, React.createElement("a", n, React.createElement("i", {
                        className: "u-icon u-icon-servicePolicy-index",
                        style: {
                            backgroundImage: "url(" + (e.icon || "//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-index-bf1239c157.png") + ")"
                        }
                    }), React.createElement("span", {
                        className: "text",
                        style: a
                    }, e.desc)))
                }.bind(this))))
            };
        e.exports = i
    },
    726: function (e, t) {
        e.exports = function () {
            var e = window.jsonData && window.jsonData.moduleColorCfg || {};
            return function (t) {
                var n, a = e[t] || {};
                return n = {}, a.bckColor && (n.backgroundColor = a.bckColor), a.fontColor && (n.color = a.fontColor), n
            }
        }()
    },
    727: function (e, t, n) {
        n(728);
        var a = n(147),
            i = n(19),
            r = n(20),
            o = n(335),
            s = n(29).throttle,
            c = n(28),
            l = React.createClass({
                displayName: "NavForSpecificChannels",
                getInitialState: function () {
                    return {
                        cartCount: 0,
                        showMore: -1
                    }
                },
                componentWillMount: function () {
                    this.refreshCart(), r.on("refreshCart", this.refreshCart), window.addEventListener("scroll", this.handleScroll)
                },
                componentWillUnmount: function () {
                    r.off("refreshCart", this.refreshCart), window.removeEventListener("scroll", this.handleScroll)
                },
                handleScroll: s(function (e) {
                    this.setState({
                        showMore: !1
                    })
                }, 50),
                handleShowMoreClick: function () {
                    this.setState({
                        showMore: !0
                    })
                },
                handleBackClick: function () {
                    this.setState({
                        showMore: !1
                    })
                },
                render: function () {
                    var e = this.state,
                        t = e.cartCount,
                        n = [{
                            txt: "搜索",
                            icon: "search",
                            targetUrl: "/search"
                        }, {
                            txt: "分类",
                            icon: "cate",
                            targetUrl: "/item/cateList"
                        }, {
                            txt: "识物",
                            icon: "topic",
                            targetUrl: "/topic/list"
                        }, {
                            txt: "个人",
                            icon: "ucenter",
                            targetUrl: "/ucenter"
                        }];
                    return React.createElement("nav", {
                        className: "m-navForSpecificChannels"
                    }, React.createElement("a", {
                        className: "item cart",
                        href: "/cart"
                    }, React.createElement(a, {
                        name: "cartForSpecificChannels"
                    }), React.createElement(o, {
                        className: "badge",
                        text: t > 99 ? "99+" : t
                    })), React.createElement("div", null, n.map(function (e, t) {
                        return React.createElement("a", {
                            className: "item " + e.icon,
                            key: t,
                            href: e.targetUrl
                        }, React.createElement(a, {
                            name: e.icon + "ForSpecificChannels",
                            className: c({
                                moveIn: this.state.showMore === !0,
                                moveOut: this.state.showMore === !1,
                                transparent: this.state.showMore === -1
                            })
                        }))
                    }.bind(this))), this.state.showMore === !0 ? React.createElement("div", {
                        className: "showMore"
                    }, React.createElement("div", {
                        className: "item",
                        onClick: this.handleBackClick
                    }, React.createElement(a, {
                        name: "goBackForSpecificChannels"
                    }))) : React.createElement("div", {
                        className: "item",
                        onClick: this.handleShowMoreClick
                    }, React.createElement(a, {
                        name: "functionForSpecificChannels"
                    })))
                },
                refreshCart: function () {
                    i.getMiniCartNum().done(function (e) {
                        this.setState({
                            cartCount: e.data
                        })
                    }.bind(this))
                }
            });
        e.exports = l
    },
    728: function (e, t) {},
    729: function (e, t, n) {
        n(730), e.exports = function () {
            return React.createElement("a", {
                className: "m-wapNewUserEntrance",
                href: "/gift/newWapUserGift"
            }, React.createElement("i", {
                className: "u-icon u-icon-wapNewUserEntry"
            }))
        }
    },
    730: function (e, t) {},
    731: function (e, t, n) {
        var a = n(57),
            i = n(54),
            r = i.Motion,
            o = i.spring;
        n(732);
        var s = {
                fade: function (e) {
                    return {
                        opacity: e
                    }
                },
                slideDownOut: function () {
                    var e = 100 * e.toFixed(2),
                        t = "-{0}%".format(e);
                    return {
                        bottom: t
                    }
                }
            },
            c = React.createClass({
                displayName: "newWapUserGiftModal",
                componentDidMount: function () {
                    YXStat.q.push(["add_event", {
                        page_name: window.CURRENTPAGE || "",
                        event_name: "show_newpop",
                        event_action: "show"
                    }])
                },
                handleMoreClick: function () {
                    YXStat.q.push(["track_click", {
                        page_name: window.CURRENTPAGE || "",
                        event_name: "click_newpop",
                        topage: "/gift/newWapUserGift"
                    }]), YXStat.tool.warpPageJump(function () {
                        window.yanxuan_href = "/gift/newWapUserGift"
                    }.bind(this))
                },
                render: function () {
                    var e = s.fade,
                        t = s.fade,
                        n = this.props.options;
                    return React.createElement(r, {
                        defaultStyle: {
                            x: 0
                        },
                        style: {
                            x: o(this.props.isOpen ? 1 : 0)
                        },
                        onRest: function () {
                            this.props.onAnimateEnd(this.props.isOpen)
                        }.bind(this)
                    }, function (a) {
                        var i = a.x;
                        return React.createElement("div", {
                            className: "m-newWapUserGiftModal"
                        }, React.createElement("div", {
                            className: "mask",
                            style: e(i)
                        }), React.createElement("i", {
                            className: "u-icon u-icon-modalClose close",
                            style: e(i),
                            onClick: function () {
                                YXStat.q.push(["track_click", {
                                    page_name: window.CURRENTPAGE || "",
                                    event_name: "click_index_newusergift_close",
                                    parameters: {
                                        userType: n.newUser ? 1 : void 0 !== n.newUser ? 2 : 0
                                    }
                                }]), n.onClickClose && n.onClickClose(), this.props.onClose()
                            }.bind(this)
                        }), React.createElement("div", {
                            className: "wrap",
                            style: t(i)
                        }, React.createElement("div", {
                            className: "modal",
                            style: {
                                backgroundImage: "url(" + n.newUserGift.showPic + "?imageView&quality=85&thumbnail=630x804)"
                            }
                        }, React.createElement("div", {
                            className: "btnHotZeroWrap"
                        }, React.createElement("a", {
                            className: "linkBtnNew",
                            href: "javascript:void(0);",
                            onClick: this.handleMoreClick
                        })))))
                    }.bind(this))
                }
            });
        e.exports = a(c)
    },
    732: function (e, t) {},
    733: function (e, t, n) {
        var a = n(248),
            i = n(9),
            r = n(4),
            o = n(57);
        n(734);
        var s = React.createClass({
            displayName: "UserTypeModal",
            componentDidMount: function () {
                YXStat.q.push(["add_event", {
                    event_name: "show_index_downloaddialog",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        type: this.props.options.newUser ? 1 : 2
                    }
                }])
            },
            handleWakeApp: function () {
                YXStat.q.push(["track_click", {
                    event_name: "click_index_downloaddialog",
                    page_name: "index",
                    topage: "",
                    event_action: "click",
                    parameters: {
                        type: this.props.options.newUser ? 1 : 2
                    }
                }]);
                var e = a(location.pathname + location.search);
                r._$isInAndroid() ? i._$openApp(e.scheme, function (e) {
                    e || (window.yanxuan_href = r._$getDownloadLinkWithQuery("ochannel=aos_pd_12"))
                }) : window.yanxuan_href = e.universal + (e.universal.indexOf("?") > 0 ? "&" : "?") + "ochannel=aos_pd_12"
            },
            render: function () {
                return React.createElement("div", {
                    className: "m-userTypeModal"
                }, React.createElement("div", {
                    className: "mask"
                }), React.createElement("i", {
                    className: "u-icon u-icon-modalClose close",
                    onClick: function () {
                        YXStat.q.push(["track_click", {
                            event_name: "click_index_downloaddialog_close",
                            page_name: "index",
                            topage: "",
                            event_action: "click",
                            parameters: {
                                type: this.props.options.newUser ? 1 : 2
                            }
                        }]), this.props.onClose(), this.props.onCloseWithOutAnimation()
                    }.bind(this)
                }), React.createElement("div", {
                    className: "wrap"
                }, React.createElement("div", {
                    className: "modal",
                    style: {
                        height: this.props.options.newUser ? "9rem" : "8rem",
                        backgroundImage: "url(" + this.props.options.picSrc + "?imageView&quality=85)",
                        backgroundSize: "100% 100%"
                    },
                    onClick: this.handleWakeApp
                })))
            }
        });
        e.exports = o(s)
    },
    734: function (e, t) {},
    735: function (e, t, n) {
        var a = n(736),
            i = n(726)("bossRecommendModule");
        n(737);
        var r = function (e) {
            function t() {
                var t = e.targetUrl;
                YXStat.q.push(["track_click", {
                    event_name: "click_index_belowbanner",
                    page_name: "index",
                    topage: t,
                    event_action: "click",
                    parameters: {
                        extra: e.extra || "",
                        userType: e.isFreshman ? 1 : 0
                    }
                }]), YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = t
                })
            }
            return React.createElement("a", {
                href: "javascript:void(0)",
                className: "m-bossRecommendModule",
                style: i,
                onClick: t
            }, React.createElement("img", {
                src: e.picUrl,
                className: "img"
            }))
        };
        e.exports = a(r)
    },
    736: function (e, t, n) {
        var a = n(29).throttle,
            i = function (e) {
                var t = React.createClass({
                    displayName: "WrapComponent",
                    componentDidMount: function () {
                        window.addEventListener("scroll", this.handleScroll)
                    },
                    componentWillUnmount: function () {
                        window.removeEventListener("scroll", this.handleScroll)
                    },
                    handleScroll: a(function () {
                        if (!this.isLoad) {
                            var e = window.innerHeight,
                                t = ReactDOM.findDOMNode(this.refs.wraper),
                                n = t.getBoundingClientRect();
                            n.top > 0 && n.top < e && (this.props.pushStat && this.props.pushStat(), this.isLoad = !0, window.removeEventListener("scroll", this.handleScroll));
                        }
                    }, 50),
                    render: function () {
                        return React.createElement("div", {
                            ref: "wraper"
                        }, React.createElement(e, this.props))
                    },
                    isLoad: !1
                });
                return t
            };
        e.exports = i
    },
    737: function (e, t) {},
    738: function (e, t, n) {
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            i = n(736),
            r = n(739),
            o = i(r),
            s = n(726)("sceneLightShoppingGuideModule");
        n(28);
        n(741), e.exports = function (e) {
            function t(e) {
                return e.sceneLightShoppingGuideModule.length < 4 ? e.sceneLightShoppingGuideModule.slice(0, 2) : e.sceneLightShoppingGuideModule.slice(0, 4)
            }

            function n(t, n) {
                YXStat.q.push(["add_event", {
                    event_name: "show_index_lightsale",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        extra: t.extra || "",
                        sequen: n + 1,
                        userType: e.isFreshman ? 1 : 0
                    }
                }])
            }
            var i = t(e);
            return React.createElement("div", {
                className: "m-sceneLightShoppingGuideModule",
                style: s
            }, i.map(function (t, i) {
                return React.createElement(o, a({}, t.styleBanner || t.styleItem, {
                    key: i,
                    index: i,
                    isFreshman: e.isFreshman,
                    pushStat: n.bind(null, t, i)
                }))
            }))
        }
    },
    739: function (e, t, n) {
        n(740), e.exports = function (e) {
            function t() {
                var t = e.targetUrl;
                YXStat.q.push(["track_click", {
                    event_name: "click_index_lightsale",
                    page_name: "index",
                    topage: t,
                    event_action: "click",
                    parameters: {
                        extra: e.extra || "",
                        sequen: e.index + 1,
                        userType: e.isFreshman ? 1 : 0
                    }
                }]), YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = t
                })
            }
            return React.createElement("a", {
                href: "javascript:void(0)",
                className: "m-styleBanner",
                style: {
                    backgroundImage: "url({0}?imageView&thumbnail=343x264&quality=75)".format(e.picUrl || e.backgroundUrl),
                    backgroundSize: "100% 100%"
                },
                onClick: t
            }, React.createElement("div", {
                className: "title",
                style: {
                    color: "#" + e.titleColor || "#333"
                }
            }, e.title), React.createElement("div", {
                className: "desc",
                style: {
                    color: "#" + e.descColor || "#7F7F7F"
                }
            }, e.desc), e.picUrlList && e.picUrlList.length > 0 && React.createElement("div", {
                className: "picList"
            }, e.picUrlList.map(function (e) {
                return React.createElement("img", {
                    src: e + "?imageView&thumbnail=150x150&quality=75",
                    className: "pic"
                })
            })))
        }
    },
    740: function (e, t) {},
    741: function (e, t) {},
    742: function (e, t, n) {
        var a = n(743),
            i = n(746);
        n(748), e.exports = function (e) {
            function t(e) {
                var t = e.newItemList.slice(0, 6);
                return t.forEach(function (e) {
                    e.name = e.name.length > 13 ? e.name.substring(0, 13) + "..." : e.name
                }), t
            }

            function n(t, n) {
                YXStat.q.push(["add_event", {
                    event_name: "show_index_newitem",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        extra: t.extra,
                        itemId: t.id,
                        userType: e.isFreshman ? 1 : 0,
                        sequen: n + 1
                    }
                }])
            }

            function r(t, n) {
                YXStat.q.push(["track_click", {
                    event_name: "click_index_newitem_item",
                    page_name: "index",
                    topage: "/item/detail?id=" + t.id,
                    event_action: "click",
                    parameters: {
                        extra: t.extra,
                        itemId: t.id,
                        userType: e.isFreshman ? 1 : 0,
                        sequen: n + 1
                    }
                }])
            }
            var o = t(e);
            return React.createElement("div", {
                className: "m-newItemModule m-indexFloor"
            }, React.createElement(a, {
                title: "新品首发",
                hasMore: !0,
                link: "/item/newItem"
            }), React.createElement(i, {
                itemList: o,
                noNewItemFlag: !0,
                onBeforeClickGood: r,
                onReLoad: n
            }))
        }
    },
    743: function (e, t, n) {
        var a = n(744);
        n(745), e.exports = function (e) {
            return React.createElement("div", {
                className: "moduleTitle"
            }, React.createElement("div", {
                className: "left"
            }, e.title, e.remainTime > 0 && React.createElement(a, {
                timeleft: e.remainTime,
                type: "colon",
                units: 1e3,
                minLen: 3,
                maxLen: 3
            })), e.hasMore && React.createElement("a", {
                className: "right",
                href: e.link,
                "data-yxstat": e.yxstat || null
            }, "更多", React.createElement("i", {
                className: "icon u-icon u-icon-index-titleArrow"
            })))
        }
    },
    744: function (e, t, n) {
        var a = n(310),
            i = n(309),
            r = 1e3,
            o = 60 * r,
            s = 60 * o,
            c = 24 * s,
            l = React.createClass({
                displayName: "CountDown",
                getDefaultProps: function () {
                    return {
                        minLen: 1,
                        maxLen: 4,
                        className: "",
                        isSaleCenter: !1
                    }
                },
                getInitialState: function () {
                    return {
                        minLen: this.props.len || this.props.minLen,
                        maxLen: this.props.len || this.props.maxLen,
                        noNeedshowSecs: this.props.isSaleCenter && this.props.days > 0
                    }
                },
                componentWillReceiveProps: function (e) {
                    e.isSaleCenter && 0 === e.days && this.props.days > 0 && this.setState({
                        noNeedshowSecs: !1
                    })
                },
                renderColonType: function () {
                    return React.createElement("div", {
                        className: "m-countdown " + this.props.className
                    }, this.needShowDays() && React.createElement("span", {
                        className: "days"
                    }, a(this.props.days, 2)), this.needShowHours() && this.needShowDays() && React.createElement("span", {
                        className: "colon"
                    }, ":"), this.needShowHours() && React.createElement("span", {
                        className: "hours"
                    }, a(this.props.hours, 2)), this.needShowMins() && this.needShowHours() && React.createElement("span", {
                        className: "colon"
                    }, ":"), this.needShowMins() && React.createElement("span", {
                        className: "mins"
                    }, a(this.props.mins, 2)), this.needshowSecs() && this.needShowMins() && React.createElement("span", {
                        className: "colon"
                    }, ":"), this.needshowSecs() && React.createElement("span", {
                        className: "secs"
                    }, a(this.props.secs, 2)))
                },
                renderSplitColonType: function () {
                    var e = a(this.props.days, 2),
                        t = a(this.props.hours, 2),
                        n = a(this.props.mins, 2),
                        i = a(this.props.secs, 2);
                    return React.createElement("div", {
                        className: "m-countdown " + this.props.className,
                        style: this.props.style || null
                    }, this.needShowDays() && React.createElement("span", {
                        className: "days"
                    }, e.charAt(0), e.charAt(1)), this.needShowHours() && this.needShowDays() && React.createElement("span", {
                        className: "colon"
                    }, ":"), this.needShowHours() && React.createElement("span", {
                        className: "hours"
                    }, t.charAt(0), t.charAt(1)), this.needShowMins() && this.needShowHours() && React.createElement("span", {
                        className: "colon"
                    }, ":"), this.needShowMins() && React.createElement("span", {
                        className: "mins"
                    }, n.charAt(0), n.charAt(1)), this.needshowSecs() && this.needShowMins() && React.createElement("span", {
                        className: "colon"
                    }, ":"), this.needshowSecs() && React.createElement("span", {
                        className: "secs"
                    }, i.charAt(0), i.charAt(1)))
                },
                renderNormalType: function () {
                    return React.createElement("span", {
                        className: "m-normal-countdown"
                    }, this.needShowDays() && React.createElement("span", {
                        className: "days"
                    }, React.createElement("span", {
                        className: "timeNum"
                    }, a(this.props.days, 2)), "天"), this.needShowHours() && React.createElement("span", {
                        className: "hours"
                    }, React.createElement("span", {
                        className: "timeNum"
                    }, a(this.props.hours, 2)), "时"), this.needShowMins() && React.createElement("span", {
                        className: "mins"
                    }, React.createElement("span", {
                        className: "timeNum"
                    }, a(this.props.mins, 2)), "分"), this.needshowSecs() && React.createElement("span", {
                        className: "secs"
                    }, React.createElement("span", {
                        className: "timeNum"
                    }, a(this.props.secs, 2)), "秒"))
                },
                render: function () {
                    return this.props.isSaleCenter ? this.props.days > 0 ? this.renderNormalType() : this.renderColonType() : "colon" === this.props.type ? this.props.split ? this.renderSplitColonType() : this.renderColonType() : this.renderNormalType()
                },
                needShowDays: function () {
                    return 4 === this.state.maxLen && (this.props.days || this.props.units === c || this.state.minLen >= 4)
                },
                needShowHours: function () {
                    return this.state.maxLen >= 3 && this.props.units < c && (this.props.hours || this.props.units === s) || this.state.minLen >= 3 || this.needShowDays()
                },
                needShowMins: function () {
                    return this.state.maxLen >= 2 && this.props.units < s && (this.props.mins || this.props.units === o) || this.state.minLen >= 2 || this.needShowHours()
                },
                needshowSecs: function () {
                    return !this.state.noNeedshowSecs && (this.props.units < o && (this.props.secs || this.props.units === r || this.needShowMins()))
                }
            });
        e.exports = i(l)
    },
    745: function (e, t) {},
    746: function (e, t, n) {
        var a = n(270);
        n(747), e.exports = function (e) {
            function t(e) {
                var t = "/item/detail?id=" + e.id;
                window.yanxuan_href = t
            }

            function n(t, n) {
                e.onBeforeClickGood && "function" == typeof e.onBeforeClickGood && e.onBeforeClickGood(t, n)
            }

            function i(t, n) {
                e.onReLoad && "function" == typeof e.onReLoad && e.onReLoad(t, n)
            }

            function r(t) {
                var n = t.itemTagList.map(function (t) {
                    return 1 === t.type && e.noNewItemFlag ? null : t
                });
                return n = n.filter(function (e) {
                    return e
                })
            }

            function o(e) {
                return e.map(function (e) {
                    var t = [],
                        n = !!e.itemTagList && !!e.itemTagList.length;
                    return n && (t = r(e)), e.tagCnts = t, e
                }), e
            }
            var s = o(e.itemList);
            return React.createElement("div", {
                className: "m-indexItem m-goodGrid"
            }, React.createElement("ul", {
                className: "list"
            }, s.map(function (e, r) {
                return e.listPicUrl = e.showPicUrl || e.listPicUrl, React.createElement("li", {
                    className: "item",
                    key: r
                }, React.createElement(a, {
                    pos: r,
                    item: e,
                    dynamicStyle: !0,
                    noStatus: !0,
                    noUnitPrice: !0,
                    preSell: !0,
                    noSpec: !1,
                    onClick: t,
                    onBeforeClickGood: n.bind(null, e, r),
                    onReLoad: i.bind(null, e, r)
                }))
            })))
        }
    },
    747: function (e, t) {},
    748: function (e, t) {},
    749: function (e, t, n) {
        var a = n(743),
            i = n(746),
            r = n(271),
            o = n(275);
        n(750), e.exports = function (e) {
            function t(e) {
                var t = e.itemList.slice(1, 4);
                return t.forEach(function (e) {
                    e.name = e.name.length > 13 ? e.name.substring(0, 13) + "..." : e.name
                }), t
            }

            function n(t, n) {
                YXStat.q.push(["add_event", {
                    event_name: "show_index_popular_item",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        extra: t.extra,
                        itemId: t.id,
                        userType: e.isFreshman ? 1 : 0,
                        sequen: "first" == n ? 1 : n + 2
                    }
                }])
            }

            function s(t, n) {
                var a = "/item/detail?id={0}".format(t.id);
                YXStat.q.push(["track_click", {
                    event_name: "click_index_popular_item",
                    page_name: "index",
                    topage: a,
                    event_action: "click",
                    parameters: {
                        extra: t.extra,
                        itemId: t.id,
                        userType: e.isFreshman ? 1 : 0,
                        sequen: "first" == n ? 1 : n + 2
                    }
                }]), "first" == n && YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = a
                })
            }
            var c = t(e),
                l = e.itemList[0];
            return React.createElement("div", {
                className: "m-popularItemModule m-indexFloor"
            }, React.createElement(a, {
                title: "人气推荐",
                hasMore: !0,
                link: "/item/recommend"
            }), React.createElement("a", {
                className: "spItem",
                onClick: s.bind(null, l, "first")
            }, React.createElement("div", {
                className: "wraper"
            }, React.createElement(r, {
                src: (l.showPicUrl || l.listPicUrl) + "?imageView&quality=65&thumbnail=280x280",
                onReLoad: n.bind(null, l, "first")
            })), React.createElement("div", null, l.itemTagList && l.itemTagList.length > 0 && React.createElement(o, {
                showNewStyle: !0,
                tagList: l.itemTagList
            }), React.createElement("div", {
                className: "name"
            }, l.name), React.createElement("div", {
                className: "desc"
            }, l.simpleDesc), React.createElement("div", {
                className: "price"
            }, "¥", l.retailPrice))), React.createElement(i, {
                itemList: c,
                onBeforeClickGood: s,
                onReLoad: n
            }))
        }
    },
    750: function (e, t) {},
    751: function (e, t, n) {
        var a = n(743),
            i = n(271),
            r = n(28);
        n(752), e.exports = function (e) {
            function t(t, n) {
                YXStat.q.push(["track_click", {
                    event_name: "click_index_caterank",
                    page_name: "index",
                    topage: t.targetUrl,
                    event_action: "click",
                    parameters: {
                        sequen: n + 1,
                        url: t.showPicUrl,
                        extra: t.extra || "",
                        userType: e.isFreshman ? 1 : 0,
                        name: t.categoryName
                    }
                }]), YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = t.targetUrl
                })
            }

            function n(t, n) {
                YXStat.q.push(["add_event", {
                    event_name: "show_index_caterank",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        sequen: n + 1,
                        url: t.showPicUrl,
                        extra: t.extra || "",
                        userType: e.isFreshman ? 1 : 0,
                        name: t.categoryName
                    }
                }])
            }
            var o = e.categoryList.slice(0, 2),
                s = e.categoryList.slice(2, 10),
                c = o.length;
            return React.createElement("div", {
                className: "m-categoryHotSellModule m-indexFloor"
            }, React.createElement(a, {
                title: e.title
            }), React.createElement("div", {
                className: "content"
            }, React.createElement("div", {
                className: "line1"
            }, o.map(function (e, a) {
                return React.createElement("a", {
                    className: r("item-big", {
                        "item-1": 0 === a,
                        "item-2": 1 === a
                    }),
                    href: "javascript:void(0)",
                    key: a,
                    onClick: t.bind(null, e, a)
                }, React.createElement("div", null, React.createElement("div", {
                    className: "name"
                }, React.createElement("span", {
                    className: "txt"
                }, e.categoryName))), React.createElement("div", {
                    className: "imgWrap"
                }, React.createElement(i, {
                    src: e.showPicUrl + "?imageView&quality=65&thumbnail=200x200",
                    onReLoad: n.bind(null, e, a)
                })))
            })), React.createElement("div", {
                className: "line2"
            }, s.map(function (e, a) {
                return React.createElement("a", {
                    className: "item",
                    href: "javascript:void(0)",
                    key: a,
                    onClick: t.bind(null, e, c + a)
                }, React.createElement("div", {
                    className: "name"
                }, e.categoryName), React.createElement("div", {
                    className: "imgWrap"
                }, React.createElement(i, {
                    src: e.showPicUrl + "?imageView&quality=65&thumbnail=200x200",
                    onReLoad: n.bind(null, e, c + a)
                })))
            }))))
        }
    },
    752: function (e, t) {},
    753: function (e, t, n) {
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            i = n(754);
        n(756), e.exports = function (e) {
            function t(e) {
                return e.indexActivityModule.length < 4 ? e.indexActivityModule.slice(0, 2) : e.indexActivityModule.slice(0, 4)
            }

            function n(e) {
                var t = e.targetUrl;
                YXStat.q.push(["track_click", {
                    event_name: "click_index_entrance_module",
                    page_name: "index",
                    topage: t,
                    event_action: "click",
                    parameters: {
                        name: e.title,
                        userType: e.isFreshman ? 1 : 0,
                        sequen: e.index + 1,
                        extra: e.extra || ""
                    }
                }]), YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = t
                })
            }

            function r(e) {
                YXStat.q.push(["add_event", {
                    event_name: "click_index_entrance_module",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        name: e.title,
                        userType: e.isFreshman ? 1 : 0,
                        sequen: e.index + 1,
                        extra: e.extra || ""
                    }
                }])
            }
            var o = t(e);
            return React.createElement("div", {
                className: "m-indexActivityModule"
            }, o.map(function (e, t) {
                return React.createElement(i, a({}, e, {
                    index: t,
                    key: t,
                    onClick: n,
                    onReLoad: r
                }))
            }))
        }
    },
    754: function (e, t, n) {
        var a = n(271);
        n(755), e.exports = function (e) {
            var t = e.showPicUrl || e.picUrl;
            return React.createElement("a", {
                className: "m-activityItem",
                href: "javascript:void(0)",
                onClick: e.onClick.bind(null, e, null, null),
                style: {
                    backgroundImage: "url({0}?imageView&thumbnail=343x220&quality=75)".format(e.backgroundUrl),
                    backgroundSize: "100% 100%"
                }
            }, t && React.createElement("div", {
                className: "picWrap"
            }, React.createElement(a, {
                className: "pic",
                src: t + "?imageView&thumbnail=200x200&quality=75",
                onReLoad: e.onReLoad.bind(null, e, null)
            }), e.activityPrice && e.originPrice && React.createElement("div", {
                className: "discount"
            }, React.createElement("div", {
                className: "line1"
            }, e.activityPrice), React.createElement("div", {
                className: "line2"
            }, e.originPrice))), React.createElement("div", {
                className: "cnt"
            }, React.createElement("div", {
                className: "title"
            }, e.title), React.createElement("div", {
                className: "subTitle"
            }, e.subTitle), e.benefitSpot && React.createElement("div", {
                className: "benefitSpot"
            }, e.benefitSpot), e.tag && React.createElement("div", {
                className: "tag"
            }, e.tag)))
        }
    },
    755: function (e, t) {},
    756: function (e, t) {},
    757: function (e, t, n) {
        var a = n(743);
        n(758);
        var i = React.createClass({
            displayName: "ManufacturersSupplying",
            componentDidMount: function () {
                var e = this.props.tagList.slice(0, 4).map(function (e, t) {
                    return {
                        tagId: e.id,
                        sequen: t,
                        extra: JSON.stringify(e.extra)
                    }
                });
                YXStat.q.push(["add_event", {
                    event_name: "show_index_manu_item",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        items: JSON.stringify(e)
                    }
                }])
            },
            render: function () {
                return React.createElement("div", {
                    className: "m-indexManufacturersSupplying"
                }, React.createElement(a, {
                    title: "品牌制造商直供",
                    hasMore: !0,
                    link: "/manufacturer/list"
                }), React.createElement("ul", {
                    className: "list"
                }, this.props.tagList.slice(0, 4).map(function (e, t) {
                    var n = "/item/manufacturer?tagId=" + e.id + "&page=1&size=100",
                        a = {
                            event_name: "click_index_manu_item",
                            page_name: "index",
                            event_action: "click",
                            topage: n,
                            parameters: {
                                sequen: t + 1,
                                tagId: e.id,
                                extra: JSON.stringify(e.extra)
                            }
                        };
                    return React.createElement("a", {
                        className: "item",
                        href: n,
                        "data-yxstat": JSON.stringify(a),
                        key: t,
                        style: {
                            backgroundImage: "url({0}?imageView&thumbnail=343y260&enlarge=1)".format(e.picUrl),
                            backgroundSize: "100% 100%"
                        }
                    }, React.createElement("div", {
                        className: "cnt"
                    }, React.createElement("h4", {
                        className: "title"
                    }, e.name), React.createElement("div", null, React.createElement("span", {
                        className: "price"
                    }, e.floorPrice, "元起"), e.newOnShelf && React.createElement("i", {
                        className: "newIcon"
                    }, "上新"))))
                }.bind(this))))
            }
        });
        e.exports = i
    },
    758: function (e, t) {},
    759: function (e, t, n) {
        var a = n(6),
            i = n(743);
        n(760);
        var r = React.createClass({
            displayName: "Topics",
            componentDidMount: function () {
                this.props.topicList.length > 1 && new Swiper(this.refs.topics, {
                    slidesPerView: "auto",
                    spaceBetween: 30 / 72 * lib.flexible.rem,
                    autoHeight: !0
                }), $(this.refs.slide).find(".swiper-slide img").one("error", this.handleImgError)
            },
            handleImgError: function (e) {
                $(e.target).closest(".imgWrap").addClass("error")
            },
            render: function () {
                var e = this.props.topicList.length;
                return React.createElement("div", {
                    className: "m-indexTopics m-indexFloor"
                }, React.createElement(i, {
                    title: "专题精选",
                    hasMore: !0,
                    link: "/topic/index?c=1110"
                }), React.createElement("div", {
                    ref: "slide",
                    className: 1 == e ? "m-indexTopics" : "m-indexTopics-slide"
                }, React.createElement("div", {
                    className: "inner swiper-container",
                    ref: "topics"
                }, React.createElement("ul", {
                    className: "list " + (1 == e ? "" : "swiper-wrapper")
                }, this.props.topicList.map(function (t, n) {
                    var i = {
                        event_name: "click_index_topic",
                        page_name: "index",
                        event_action: "click",
                        topage: t.linkUrl,
                        parameters: {
                            sequen: n + 1,
                            topicId: t.id,
                            url: t.linkUrl
                        }
                    };
                    return t.title = t.title.replace("，", ", "), React.createElement("li", {
                        className: "item " + (1 == e ? "" : "swiper-slide"),
                        key: t.topicId
                    }, React.createElement("a", {
                        className: "imgWrap",
                        "data-yxstat": JSON.stringify(i),
                        href: a.appendURL(t.linkUrl, {
                            _stat_referer: "index",
                            _stat_area: "topic_" + n
                        })
                    }, React.createElement("img", {
                        className: "img",
                        src: t.scenePicUrl + "?imageView&thumbnail=575y322&enlarge=1&quality=75"
                    })), React.createElement("div", {
                        className: "line1"
                    }, React.createElement("h4", {
                        className: "title"
                    }, t.title), t.priceInfo > 0 ? React.createElement("span", {
                        className: "price"
                    }, t.priceInfo, "元起") : null), React.createElement("div", {
                        className: "desc"
                    }, t.subtitle))
                })))))
            }
        });
        e.exports = r
    },
    760: function (e, t) {},
    761: function (e, t, n) {
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            i = n(743),
            r = n(762);
        n(764), e.exports = function (e) {
            return React.createElement("div", {
                className: "m-zhongchouModule m-indexFloor"
            }, React.createElement(i, {
                title: e.title,
                hasMore: !0,
                link: e.titleTargetUrl
            }), React.createElement("div", {
                className: "cnt"
            }, e.zhongChouList.map(function (e, t) {
                return React.createElement(r, a({}, e, {
                    key: t,
                    index: t
                }))
            })))
        }
    },
    762: function (e, t, n) {
        var a = n(271);
        n(763), e.exports = function (e) {
            function t() {
                var t = e.targetUrl;
                YXStat.q.push(["track_click", {
                    event_name: "click_index_crowdfunding_item",
                    page_name: "index",
                    topage: t,
                    event_action: "click",
                    parameters: {
                        sequen: e.index + 1,
                        userType: e.isFreshman ? 1 : 0,
                        projectId: e.projectId
                    }
                }]), YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = t
                })
            }

            function n() {
                YXStat.q.push(["add_event", {
                    event_name: "show_index_crowdfunding_item",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        sequen: e.index + 1,
                        userType: e.isFreshman ? 1 : 0,
                        projectId: e.projectId
                    }
                }])
            }
            return React.createElement("a", {
                className: "m-zhongchouItem",
                href: "javascript:void(0)",
                onClick: t
            }, React.createElement("div", {
                className: "imgWrap"
            }, React.createElement(a, {
                className: "img",
                src: e.picUrl + "?imageView&thumbnail=210x210&quality=75",
                onReLoad: n
            })), React.createElement("div", {
                className: "content"
            }, React.createElement("div", {
                className: "name"
            }, e.name), React.createElement("div", {
                className: "price"
            }, "¥", e.retailPrice, React.createElement("span", {
                className: "postfix"
            }, "起")), React.createElement("div", {
                className: "progressWrap"
            }, React.createElement("div", {
                className: "progress"
            }, React.createElement("div", {
                className: "bg",
                style: {
                    width: (e.progress > 100 ? "100" : e.progress) + "%"
                }
            })), React.createElement("div", {
                className: "progressTxt"
            }, (e.progress >= 999 ? "≥999" : e.progress) + "%")), React.createElement("div", {
                className: "supportNum"
            }, e.supportNum)))
        }
    },
    763: function (e, t) {},
    764: function (e, t) {},
    765: function (e, t, n) {
        var a = n(736),
            i = n(766),
            r = a(i);
        n(769), e.exports = function (e) {
            function t(t, n) {
                YXStat.q.push(["add_event", {
                    event_name: "show_index_cateactivity_banner",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        userType: e.isFreshman ? 1 : 0,
                        extra: t.extra || "",
                        moduleSequen: n + 1
                    }
                }])
            }
            return React.createElement("div", {
                className: "m-categoryModule"
            }, e.categoryModule.map(function (n, a) {
                return React.createElement(r, {
                    key: a,
                    categoryItem: n,
                    isFreshman: e.isFreshman,
                    moduleIndex: a,
                    pushStat: t.bind(null, n, a)
                })
            }))
        }
    },
    766: function (e, t, n) {
        var a = n(736),
            i = n(767),
            r = a(i);
        e.exports = function (e) {
            function t(t, n) {
                var a = t.titleSchemeUrl;
                YXStat.q.push(["track_click", {
                    event_name: "click_index_cateactivity_banner",
                    page_name: "index",
                    topage: a,
                    event_action: "click",
                    parameters: {
                        userType: e.isFreshman ? 1 : 0,
                        extra: t.extra || "",
                        moduleSequen: n + 1
                    }
                }]), YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = a
                })
            }

            function n(t) {
                t = t || 1;
                var n = a.itemList.slice(4 * (t - 1), 4 + 4 * (t - 1));
                n.forEach(function (n, a) {
                    YXStat.q.push(["add_event", {
                        event_name: "show_index_cateactivity_item",
                        page_name: "index",
                        event_action: "show",
                        parameters: {
                            userType: e.isFreshman ? 1 : 0,
                            sequen: a + 4 * (t - 1) + 1,
                            extra: n.extra || "",
                            moduleSequen: e.moduleIndex + 1,
                            itemId: n.id
                        }
                    }])
                })
            }
            var a = e.categoryItem;
            return React.createElement("div", {
                className: "categoryItem m-indexFloor"
            }, React.createElement("a", {
                className: "bannder",
                href: "javascript:void(0)",
                style: {
                    backgroundImage: "url({0}?imageView&thumbnail=750x0&quality=75)".format(a.titlePicUrl),
                    backgroundSize: "100% 100%"
                },
                onClick: t.bind(null, a, e.moduleIndex)
            }), a.itemList && a.itemList.length > 0 && React.createElement(r, {
                itemList: a.itemList,
                link: a.titleSchemeUrl,
                moduleIndex: e.moduleIndex,
                isFreshman: e.isFreshman,
                pushStat: n
            }))
        }
    },
    767: function (e, t, n) {
        var a = n(270);
        n(768);
        var i = React.createClass({
            displayName: "IndexSlideItemGrid",
            getDefaultProps: function () {
                return {
                    noStatus: !0,
                    noNewItemFlag: !0,
                    noManufacturer: !1,
                    className: "",
                    link: ""
                }
            },
            componentDidMount: function () {
                var e = new Swiper(this.refs.newItem, {
                    slidesPerView: "auto",
                    watchSlidesVisibility: !0,
                    lazyLoading: !0,
                    lazyLoadingInPrevNext: !0
                });
                e.on && "function" == typeof e.on && e.on("onTransitionStart", function () {
                    this.isLastSlide || (this.props.pushStat && this.props.pushStat(2), this.isLastSlide = !0)
                }.bind(this))
            },
            handleClick: function (e, t) {
                var n = "/item/detail?id=" + e.id;
                YXStat.q.push(["track_click", {
                    event_name: "click_index_cateactivity_item",
                    page_name: "index",
                    topage: n,
                    event_action: "click",
                    parameters: {
                        userType: this.props.isFreshman ? 1 : 0,
                        sequen: t + 1,
                        extra: e.extra || "",
                        moduleSequen: this.props.moduleIndex + 1,
                        itemId: e.id
                    }
                }]), YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = n
                })
            },
            render: function () {
                var e = this.props.itemList;
                return e = this.getTagCnt(e), React.createElement("div", {
                    ref: "slide",
                    className: "m-goodGrid m-indexSlideItemGrid"
                }, e.length >= 3 ? React.createElement("div", {
                    className: "inner swiper-container",
                    ref: "newItem"
                }, React.createElement("ul", {
                    className: "list swiper-wrapper"
                }, e.map(function (e, t) {
                    return e.listPicUrl = e.showPicUrl || e.listPicUrl, React.createElement("li", {
                        className: "item swiper-slide",
                        key: e.id
                    }, React.createElement(a, {
                        pos: t,
                        item: e,
                        noStatus: !0,
                        noUnitPrice: !0,
                        preSell: !0,
                        noSpec: !1,
                        showCounterPrice: !0,
                        onClick: this.handleClick
                    }))
                }.bind(this)), React.createElement("li", {
                    className: "item swiper-slide more"
                }, React.createElement("a", {
                    style: {
                        display: "block",
                        width: "100%",
                        height: "100%"
                    },
                    href: this.props.link
                }, React.createElement("span", {
                    className: "text"
                }, "查看更多"), React.createElement("i", {
                    className: "icon u-icon u-icon-index-moduleArr"
                }))))) : React.createElement("div", {
                    className: "noSlideList"
                }, React.createElement("ul", {
                    className: "list"
                }, e.map(function (e, t) {
                    return e.listPicUrl = e.showPicUrl || e.listPicUrl, React.createElement("li", {
                        className: "item",
                        key: e.id
                    }, React.createElement(a, {
                        pos: t,
                        item: e,
                        noStatus: !0,
                        preSell: !0,
                        noUnitPrice: !0,
                        noSpec: !1,
                        onClick: this.handleClick
                    }))
                }.bind(this)))))
            },
            getItemTag: function (e, t) {
                if (t) {
                    var n = e.itemTagList.map(function (e) {
                        return 1 === e.type && this.props.noNewItemFlag ? null : e
                    }.bind(this));
                    return n = e.itemTagList.filter(function (e) {
                        return e
                    })
                }
                return []
            },
            getTagCnt: function (e) {
                return e.map(function (e) {
                    var t = [],
                        n = !!e.itemTagList && !!e.itemTagList.length;
                    return this.props.noStatus && !n || (t = !this.props.noStatus && this.getStatusTag(e) ? this.getStatusTag(e) : this.getItemTag(e, n)), e.tagCnts = t, e
                }.bind(this)), e
            },
            isLastSlide: !1
        });
        e.exports = i
    },
    768: function (e, t) {},
    769: function (e, t) {},
    770: function (e, t, n) {
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            i = n(743),
            r = n(771);
        n(773), e.exports = function (e) {
            function t(e) {
                return e.itemList.length < 6 ? e.itemList.slice(0, 3) : e.itemList.slice(0, 6)
            }
            var n = t(e),
                o = "/flashSale/index",
                s = {
                    event_name: "click_index_time_more",
                    page_name: "index",
                    event_action: "click",
                    topage: o
                };
            return React.createElement("div", {
                className: "m-flashSaleModule m-indexFloor"
            }, React.createElement(i, {
                title: "限时购",
                hasMore: !0,
                link: o,
                remainTime: e.remainTime,
                yxstat: JSON.stringify(s)
            }), React.createElement("div", {
                className: "cnt"
            }, n.map(function (t, n) {
                return React.createElement(r, a({
                    flashSaleScreenId: e.flashSaleScreenId
                }, t, {
                    key: n
                }))
            })))
        }
    },
    771: function (e, t, n) {
        n(772), e.exports = function (e) {
            function t() {
                var t = "/flashSale/index";
                YXStat.q.push(["track_click", {
                    event_name: "click_index_time",
                    page_name: "index",
                    topage: t,
                    event_action: "click",
                    parameters: {
                        userType: e.isFreshman ? 1 : 0,
                        id: e.flashSaleScreenId,
                        itemId: e.itemId
                    }
                }]), YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = t
                })
            }
            return React.createElement("a", {
                className: "m-indexFlashSaleItem",
                href: "javascript:void(0)",
                onClick: t
            }, React.createElement("div", {
                className: "imgWrap"
            }, React.createElement("img", {
                src: (e.showPicUrl || e.picUrl) + "?imageView&thumbnail=216x216&quality=75",
                className: "img"
            })), React.createElement("div", {
                className: "price"
            }, React.createElement("span", {
                className: "actualPrice"
            }, "¥", e.activityPrice), React.createElement("span", {
                className: "retailPrice"
            }, "¥", e.originPrice)))
        }
    },
    772: function (e, t) {},
    773: function (e, t) {},
    774: function (e, t, n) {
        var a = n(743),
            i = n(775),
            r = n(270),
            o = n(29);
        n(777), e.exports = React.createClass({
            displayName: "exports",
            componentDidMount: function () {
                this.addStat()
            },
            componentWillUnmount: function () {
                window.removeEventListener("scroll", this.handleScroll)
            },
            handleBeforeClickGood: function (e, t, n) {
                YXStat.q.push(["track_click", {
                    event_name: "click_index_private_item",
                    page_name: "index",
                    topage: "/item/detail?id=" + e.id,
                    event_action: "click",
                    parameters: {
                        itemId: e.id,
                        sequen: 3 * t + n + 1,
                        userType: this.props.isFreshman ? 1 : 0,
                        extra: e.recallStrategy || e.extra || ""
                    }
                }])
            },
            handleScroll: function () {
                var e = ReactDOM.findDOMNode(this.refs.carousel),
                    t = e.getBoundingClientRect(),
                    n = window.innerHeight;
                t.top > 0 && t.top < n && !this.statMap[0] && (this.statMap[0] = !0, (this.list[0] || []).forEach(function (e, t) {
                    this.pushStat(e, 0, t)
                }.bind(this)))
            },
            render: function () {
                function e(e) {
                    var t = e.personalTailorModule;
                    return t.forEach(function (e) {
                        e.name = e.name.length > 12 ? e.name.substring(0, 12) + "..." : e.name
                    }), o.chunk(t, 3)
                }
                var t = this.props,
                    n = e(t);
                return this.list = n, React.createElement("div", {
                    className: "m-personalTailorModule m-indexFloor"
                }, React.createElement(a, {
                    title: "私人订制"
                }), React.createElement(i, {
                    ref: "carousel",
                    options: {
                        autoplay: 4e3
                    }
                }, n.map(function (e, t) {
                    return React.createElement("div", null, e.map(function (e, n) {
                        return e.listPicUrl = e.showPicUrl || e.listPicUrl, React.createElement("li", {
                            className: "item"
                        }, React.createElement(r, {
                            key: n,
                            item: e,
                            noUnitPrice: !0,
                            dynamicStyle: !0,
                            noStatus: !0,
                            preSell: !0,
                            noSpec: !1,
                            noLazyload: !0,
                            onBeforeClickGood: this.handleBeforeClickGood.bind(this, e, t, n)
                        }))
                    }.bind(this)))
                }.bind(this))))
            },
            addStat: function () {
                var e = this.refs.carousel && this.refs.carousel.swiper,
                    t = this.statMap,
                    n = this.list;
                this.addScrollHandle(), e.on("onSlideChangeEnd", function () {
                    var a = e.activeIndex - 1;
                    !t[a] && a < n.length && ((n[a] || []).forEach(function (e, t) {
                        this.pushStat(e, a, t)
                    }.bind(this)), t[a] = !0)
                }.bind(this))
            },
            pushStat: function (e, t, n) {
                YXStat.q.push(["add_event", {
                    event_name: "show_index_private_items",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        itemId: e.id,
                        sequen: 3 * t + n + 1,
                        userType: this.props.isFreshman ? 1 : 0,
                        extra: e.extra || ""
                    }
                }])
            },
            addScrollHandle: function () {
                window.addEventListener("scroll", this.handleScroll)
            },
            statMap: {}
        })
    },
    775: function (e, t, n) {
        n(776);
        var a = n(33),
            i = React.createClass({
                displayName: "Carousel",
                getInitialState: function () {
                    return {
                        slideCount: React.Children.toArray(this.props.children).length
                    }
                },
                componentDidMount: function () {
                    this.state.slideCount > 1 && this.initSwiper()
                },
                componentWillReceiveProps: function (e) {
                    var t = React.Children.toArray(e.children).length;
                    this.state.slideCount !== t && this.setState({
                        slideCount: t
                    })
                },
                shouldComponentUpdate: function () {
                    return !this.props.forceNoUpdate
                },
                componentWillUpdate: function () {
                    this.state.slideCount > 1 && this.destroySwiper()
                },
                componentDidUpdate: function () {
                    this.state.slideCount > 1 && this.initSwiper()
                },
                componentWillUnmount: function () {
                    this.swiper && this.swiper.destroy(!0, !0)
                },
                render: function () {
                    var e = this.props.children;
                    return React.createElement("div", {
                        className: "m-carousel " + (this.props.className || "")
                    }, React.createElement("div", {
                        ref: "swiper",
                        className: "swiper-container"
                    }, React.createElement("div", {
                        className: "swiper-wrapper"
                    }, React.Children.map(e, function (e) {
                        return React.cloneElement(e, {
                            className: "swiper-slide"
                        })
                    })), React.createElement("div", {
                        className: "swiper-pagination"
                    })))
                },
                initSwiper: function () {
                    var e = $.extend(!0, {
                        loop: !0,
                        pagination: ".swiper-pagination",
                        autoplayDisableOnInteraction: !0,
                        autoplay: !1,
                        paginationClickable: !0
                    }, this.props.options);
                    this.swiper = new a(this.refs.swiper, e), window.addEventListener("resize", function () {
                        setTimeout(this.swiper.onResize, 400)
                    }.bind(this), !1), e && e.loop && this.props.needTriggerEventOnCopySlider && this.triggerEventOnCopySlider()
                },
                destroySwiper: function () {
                    this.swiper && (this.swiper.destroy(!0, !0), this.swiper = null)
                },
                triggerEventOnCopySlider: function () {
                    var e = document.getElementsByClassName(this.props.needTriggerEventOnCopySlider),
                        t = $(e).find(".swiper-slide");
                    if (!e || !t.length) return !1;
                    var n = t[0],
                        a = t[t.length - 1];
                    n.addEventListener("click", function (e) {
                        var t = e.target,
                            n = t.dataset.reactid,
                            a = $('[data-reactid="' + n + '"]');
                        $(a[1]).trigger("click")
                    }), a.addEventListener("click", function (e) {
                        var t = e.target,
                            n = t.dataset.reactid,
                            a = $('[data-reactid="' + n + '"]');
                        $(a[0]).trigger("click")
                    })
                }
            });
        e.exports = i
    },
    776: function (e, t) {},
    777: function (e, t) {},
    778: function (e, t, n) {
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            i = n(271),
            r = n(754);
        n(779), e.exports = function (e) {
            function t(e, t, n) {
                n = n || e.targetUrl, t = t || e.index, YXStat.q.push(["track_click", {
                    event_name: "click_index_newusergift_exclusive",
                    page_name: "index",
                    topage: n,
                    event_action: "click",
                    parameters: {
                        sequen: t,
                        extra: e.extra || ""
                    }
                }]), YXStat.tool.warpPageJump(function () {
                    window.yanxuan_href = n
                })
            }

            function n(e, t) {
                t = t || e.index, YXStat.q.push(["add_event", {
                    event_name: "show_index_newusergift_exclusive",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        sequen: t,
                        extra: e.extra || ""
                    }
                }])
            }
            return React.createElement("div", {
                className: "m-freshmanModule m-indexFloor"
            }, React.createElement("div", {
                className: "moduleTitle"
            }, React.createElement("span", {
                className: "txt"
            }, "新人专享礼")), React.createElement("div", {
                className: "content"
            }, React.createElement("a", {
                className: "left",
                href: "javascript:void(0)",
                onClick: t.bind(null, e, 1, "/gift/newWapUserGift")
            }, React.createElement("div", {
                className: "name"
            }, "新人专享礼包"), React.createElement("div", {
                className: "imgWrap"
            }, React.createElement(i, {
                className: "img",
                src: "//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png",
                onReLoad: n.bind(null, e, 1)
            }), React.createElement("div", {
                className: "animate"
            }))), React.createElement("div", {
                className: "right"
            }, React.createElement("div", {
                className: "module1"
            }, React.createElement(r, a({}, e.indexActivityModule[0], {
                index: 2,
                onClick: t,
                onReLoad: n
            }))), React.createElement("div", {
                className: "module2"
            }, React.createElement(r, a({}, e.indexActivityModule[1], {
                index: 3,
                onClick: t,
                onReLoad: n
            }))))))
        }
    },
    779: function (e, t) {},
    780: function (e, t, n) {
        var a = n(775),
            i = (n(271), n(28)),
            r = n(29);
        n(781), e.exports = React.createClass({
            displayName: "exports",
            render: function () {
                this.props.kingKongModule.kingKongList.map(function (e, t) {
                    e.sequen = t
                });
                var e = r.chunk(this.props.kingKongModule.kingKongList, 10),
                    t = this.props.kingKongModule.norColor && "#" + this.props.kingKongModule.norColor.substring(2),
                    n = this.props.kingKongModule.selectedColor && "#" + this.props.kingKongModule.selectedColor.substring(2);
                return React.createElement("div", {
                    className: "m-kingKongModule",
                    style: {
                        background: "#fff url({0})".format(this.props.kingKongModule.background),
                        backgroundSize: "100% 100%"
                    }
                }, React.createElement(a, {
                    className: "kingkongCarousel",
                    options: {
                        pagination: ".swiper-pagination",
                        paginationType: "custom",
                        paginationCustomRender: function (e, a, i) {
                            for (var r = "", o = 0; o < i; o++) r += o == a - 1 ? '<div class="swiper-pagination-bullet swiper-pagination-bullet-active" style="background: {0}"></div>'.format(n) : '<div class="swiper-pagination-bullet" style="background: {0}"></div>'.format(t);
                            return r
                        }
                    }
                }, e.map(function (e, t) {
                    return React.createElement("div", {
                        key: t
                    }, e.map(function (e, t) {
                        var n = {
                            name: e.text,
                            picUrl: e.picUrl,
                            sequen: e.sequen + 1,
                            schemeUrl: e.schemeUrl,
                            userType: this.props.isFreshman ? 1 : 0
                        };
                        YXStat.q.push(["add_event", {
                            event_name: "show_index_kingkong",
                            page_name: "index",
                            event_action: "show",
                            parameters: n
                        }]);
                        var a = {
                            event_name: "click_index_kingkong",
                            event_action: "click",
                            page_name: "index",
                            parameters: n,
                            topage: e.schemeUrl
                        };
                        return React.createElement("a", {
                            className: i("kingkong-item", {
                                "mb-9": t / 5 < 1
                            }),
                            key: t,
                            href: e.schemeUrl,
                            "data-yxstat": JSON.stringify(a)
                        }, React.createElement("div", {
                            className: "icon"
                        }, React.createElement("img", {
                            className: "img",
                            src: e.picUrl
                        })), React.createElement("div", {
                            className: "txt",
                            style: {
                                color: "#" + e.textColor
                            }
                        }, e.text))
                    }.bind(this)))
                }.bind(this))))
            }
        })
    },
    781: function (e, t) {},
    782: function (e, t, n) {
        var a = n(783),
            i = n(744);
        n(784);
        var r = React.createClass({
            displayName: "IndexBigPromotionModule",
            componentDidMount: function () {
                var e = this.props,
                    t = e.bigPromotionModule.floorList;
                t.map(function (t, n) {
                    t.cells.map(function (a, i) {
                        YXStat.q.push(["add_event", {
                            event_name: "show_index_bigpromotionfloor",
                            page_name: "index",
                            event_action: "show",
                            parameters: {
                                userType: e.isFreshman ? 1 : 0,
                                type: t.floorType,
                                sequen: i + 1,
                                moduleSequen: n + 1,
                                label: a.title,
                                url: a.schemeUrl,
                                items: a.itemList,
                                extra: a.extra,
                                result: a.popupUrl && a.popupUrl.indexOf("/pointExchangePromAct/popWindow") > -1 ? 1 : a.schemeUrl ? 2 : ""
                            }
                        }])
                    })
                })
            },
            handleClick: function (e, t, n, a, i) {
                var r = "",
                    o = e.popupUrl && e.popupUrl.indexOf("/pointExchangePromAct/popWindow") > -1;
                return r = i === !0 ? this.refs.specialGood.getSchemeUrl() || e.schemeUrl : e.schemeUrl, YXStat.q.push(["track_click", {
                    event_name: "click_index_bigpromotionfloor",
                    page_name: "index",
                    topage: r,
                    event_action: "click",
                    parameters: {
                        userType: this.props.isFreshman ? 1 : 0,
                        type: t.floorType,
                        sequen: n + 1,
                        moduleSequen: a + 1,
                        label: e.title,
                        url: e.picUrl,
                        items: e.itemList,
                        extra: e.extra,
                        result: o ? 1 : r ? 2 : ""
                    }
                }]), o ? void(window.YXComponent && window.YXComponent.allowance && window.YXComponent.allowance.open()) : void(window.yanxuan_href = r || "javascript:;")
            },
            render: function () {
                var e = this.props,
                    t = e.bigPromotionModule.floorList,
                    n = 0,
                    a = !1;
                return t.map(function (e) {
                    e.cells.map(function (e) {
                        n += 1, e.sequen = n
                    })
                }), React.createElement("div", {
                    className: "m-indexBigPromotionModule",
                    style: {
                        backgroundColor: e.bigPromotionModule.backgroundColor ? "#" + e.bigPromotionModule.backgroundColor : "initial",
                        backgroundImage: e.bigPromotionModule.backgroundUrl ? "url(" + e.bigPromotionModule.backgroundUrl + "?imageView&quality=75)" : "none",
                        backgroundSize: "100% 100%"
                    }
                }, t.map(function (e, t) {
                    var n = e.columnNum,
                        i = e.style,
                        r = e.layout,
                        o = n + "" + i + r,
                        s = 2 * e.height / 225 + "rem",
                        c = !1;
                    "224" == o ? s = "2.64rem" : "314" != o && "414" != o || (s = 188 / 75 + "rem");
                    var l = 1 == e.columnNum && (1 == e.style || 2 == e.style);
                    return l || a || (c = a = !0), React.createElement("div", {
                        key: t,
                        className: "floor" + (l ? " floorTop" : c ? " floorFirst" : ""),
                        style: {
                            height: s
                        }
                    }, this.getNomalLineItems(e, t))
                }.bind(this)))
            },
            callback: function () {
                window.location.reload()
            },
            getNomalLineItems: function (e, t) {
                var n = null,
                    r = null,
                    o = null,
                    s = "",
                    c = null,
                    l = e.columnNum,
                    u = e.style,
                    p = e.layout,
                    d = l + "" + u + p,
                    m = !1,
                    h = !1,
                    f = !1,
                    g = !1,
                    v = !1;
                return ["144", "145", "214", "215", "224", "225", "314", "315", "414", "415"].includes(d) && (m = !0), ["112", "113", "114", "121", "122", "123", "118", "119", "1110", "1111", "1112", "1113"].includes(d) && (h = !0), ["132", "142", "143", "144", "145", "212", "213", "214", "215", "222", "223", "224", "225", "312", "313", "314", "315", "412", "413", "414", "415"].includes(d) && (f = !0), ["143", "145", "213", "215", "223", "225", "313", "315", "413", "415"].includes(d) && (g = !0), ["115", "116", "117", "118", "119", "1110", "1111", "1112", "1113"].includes(d) && (v = !0), e.cells.map(function (l, u) {
                    return m === !0 && (n = l.itemList && l.itemList.map(function (e, t) {
                        return React.createElement("img", {
                            className: "promGood promGood-" + d + " promGood-" + d + "-" + t,
                            src: e.picUrl + "?imageView&thumbnail=160x160&quality=75"
                        })
                    })), h === !0 && (n = React.createElement(a, {
                        cell: l,
                        clsName: d,
                        ref: "specialGood",
                        isFreshman: this.props.isFreshman
                    })), g === !0 && (o = l.subTitle && React.createElement("div", {
                        style: l.subTitleColor ? {
                            color: l.subTitleColor
                        } : null,
                        className: "subTitle subTitle-" + d
                    }, l.subTitle) || null), f === !0 && (r = l.title && React.createElement("div", {
                        style: l.titleColor ? {
                            color: l.titleColor
                        } : null,
                        className: "title title-" + d
                    }, React.createElement("div", {
                        className: "titleContent"
                    }, l.title), o) || null), v === !0 && 0 !== l.leftTime && (c = React.createElement(i, {
                        style: {
                            backgroundImage: "url(" + l.countDownPicUrl + ")"
                        },
                        callback: this.countDowncb,
                        split: !0,
                        className: "m-bigPromCountDown m-bigPromCountDown-" + d,
                        timeleft: l.leftTime,
                        type: "colon",
                        units: 1e3,
                        minLen: 3,
                        maxLen: 3
                    })), s = /\.gif$/.test(l.picUrl) ? l.picUrl + "?imageView&quality=75" : l.picUrl + "?imageView&thumbnail=" + Math.ceil(750 / e.columnNum) + "x0&quality=75", React.createElement("a", {
                        className: "promItem promItem-" + e.columnNum,
                        onClick: this.handleClick.bind(null, l, e, u, t, h),
                        key: l.sequen,
                        style: l.picUrl ? {
                            background: "url(" + s + ")",
                            backgroundSize: "100% 100%"
                        } : null
                    }, r, n, c)
                }.bind(this))
            },
            countDowncb: function () {
                window.location.reload()
            }
        });
        e.exports = r
    },
    783: function (e, t) {
        var n = React.createClass({
            displayName: "MainGood",
            getInitialState: function () {
                var e = this.props.cell.itemList;
                return {
                    item: e[0] || {},
                    index: 0
                }
            },
            componentDidMount: function () {
                var e = this.props.cell.itemList,
                    t = e.length,
                    n = e[0] || {},
                    a = !1;
                YXStat.q.push(["add_event", {
                    event_name: "show_index_bigpromotionfloor_main",
                    page_name: "index",
                    event_action: "show",
                    parameters: {
                        userType: this.props.isFreshman ? 1 : 0,
                        sequen: 1,
                        itemId: n.id,
                        extra: this.props.cell.extra,
                        result: this.props.cell.popupUrl && this.props.cell.popupUrl.indexOf("/pointExchangePromAct/popWindow") > -1 ? 1 : this.props.cell.schemeUrl || n.schemeUrl ? 2 : ""
                    }
                }]), setInterval(function () {
                    var n = (this.state.index + 1) % t,
                        i = e[n] || {};
                    this.setState({
                        item: i,
                        index: n
                    }, function () {
                        0 !== n || a || (a = !0), a || YXStat.q.push(["add_event", {
                            event_name: "show_index_bigpromotionfloor_main",
                            page_name: "index",
                            event_action: "show",
                            parameters: {
                                userType: this.props.isFreshman ? 1 : 0,
                                sequen: n + 1,
                                itemId: i.id,
                                extra: this.props.cell.extra,
                                result: this.props.cell.popupUrl && this.props.cell.popupUrl.indexOf("/pointExchangePromAct/popWindow") > -1 ? 1 : this.props.cell.schemeUrl || i.schemeUrl ? 2 : ""
                            }
                        }])
                    }.bind(this))
                }.bind(this), 3e3)
            },
            handleClick: function () {
                var e = this.props.cell.popupUrl && this.props.cell.popupUrl.indexOf("/pointExchangePromAct/popWindow") > -1;
                YXStat.q.push(["track_click", {
                    event_name: "click_index_bigpromotionfloor_main",
                    page_name: "index",
                    topage: this.state.item.schemeUrl,
                    event_action: "click",
                    parameters: {
                        userType: this.props.isFreshman ? 1 : 0,
                        sequen: this.state.index + 1,
                        itemId: this.state.item.id,
                        extra: this.props.cell.extra,
                        result: e ? 1 : this.state.item.schemeUrl || this.props.cell.schemeUrl ? 2 : ""
                    }
                }])
            },
            render: function () {
                if (this.state.item.picUrl) {
                    var e = this.state.item.retailPrice,
                        t = this.state.item.counterPrice;
                    return React.createElement("div", {
                        className: "promGood promGood-" + (this.props.clsName || ""),
                        onClick: this.handleClick
                    }, React.createElement("img", {
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        src: this.state.item.picUrl + "?imageView&thumbnail=168x0&quality=75"
                    }), this.props.cell.showPrice ? React.createElement("div", {
                        className: "priceWrap"
                    }, React.createElement("span", {
                        className: "retailPrice",
                        style: {
                            fontSize: e < 1e4 ? "0.266666rem" : "0.24rem"
                        }
                    }, e ? "¥" + e : ""), t > e ? React.createElement("span", {
                        className: "counterPrice",
                        style: {
                            fontSize: "0.213333rem"
                        }
                    }, t ? "¥" + t : "") : null) : null)
                }
                return null
            },
            getSchemeUrl: function () {
                return this.state.item.schemeUrl
            }
        });
        e.exports = n
    },
    784: function (e, t) {},
    785: function (e, t, n) {
        n(786);
        var a = n(787),
            i = n(26),
            r = n(255),
            o = r.Tab,
            s = n(6),
            c = n(4),
            l = n(37),
            u = n(152),
            p = n(28),
            d = React.createClass({
                displayName: "Hd",
                getInitialState: function () {
                    return {
                        toggleActive: !1,
                        activeIndex: this.getDefaultActiveIndex(window.cateList)
                    }
                },
                componentDidMount: function () {
                    "index" != window.CURRENTPAGE || c._$isLogin() || YXStat.q.push(["add_event", {
                        event_name: "show_index_login",
                        page_name: "index",
                        event_action: "show"
                    }])
                },
                handleLodinBtnClick: function () {
                    u()
                },
                handleToggleClick: function () {
                    this.setState({
                        toggleActive: !this.state.toggleActive
                    })
                },
                handleIndexNavtabClick: function (e, t, n) {
                    "index" == window.CURRENTPAGE && YXStat.q.push(["track_click", {
                        event_name: "click_index_navtab",
                        page_name: "index",
                        topage: 1 === t ? "/" : "/item/list?categoryId={0}".format(n),
                        parameters: {
                            name: e,
                            sequen: t
                        }
                    }]), this.setState({
                        activeIndex: t - 1
                    }), this.props.isInMailMaster ? this.props.onHandleTabClick(n, t) : window.yanxuan_href = 1 === t ? "/" : "/item/list?categoryId={0}".format(n)
                },
                render: function () {
                    return React.createElement("div", {
                        className: p("m-indexHd", {
                            withMask: this.state.toggleActive
                        })
                    }, React.createElement("div", {
                        className: "line"
                    }, React.createElement("a", {
                        className: "logo",
                        href: "/"
                    }), React.createElement(a, {
                        className: "ipt"
                    }), !c._$isLogin() && React.createElement("div", {
                        className: "loginBtn",
                        onClick: this.handleLodinBtnClick
                    }, "登录")), React.createElement("div", {
                        className: "tabWrap"
                    }, this.state.toggleActive ? React.createElement("div", {
                        className: "tabAlter"
                    }, "全部频道") : React.createElement(r, {
                        activeIndex: l._$isInMailMaster() ? this.state.activeIndex : this.getDefaultActiveIndex(window.cateList)
                    }, React.createElement(o, {
                        onClick: this.handleIndexNavtabClick.bind(null, "推荐", 1)
                    }, "推荐"), window.cateList.map(function (e, t) {
                        return React.createElement(o, {
                            onClick: this.handleIndexNavtabClick.bind(null, e.name, t + 2, e.id)
                        }, e.name)
                    }.bind(this))), React.createElement("div", {
                        className: "toggleWrap"
                    }, React.createElement("div", {
                        className: "linear"
                    }), React.createElement("div", {
                        className: p("toggle", {
                            toggleActive: this.state.toggleActive
                        }),
                        onClick: this.handleToggleClick
                    }, React.createElement("div", {
                        className: "icon"
                    }))), this.state.toggleActive && React.createElement("div", {
                        className: "moreCate"
                    }, React.createElement("div", {
                        className: p("cateTag", {
                            "cateTag-active": 0 == this.state.activeIndex
                        }),
                        onClick: this.handleIndexNavtabClick.bind(null, "推荐", 1)
                    }, "推荐"), window.cateList.map(function (e, t) {
                        return React.createElement("div", {
                            className: p("cateTag", {
                                "cateTag-active": this.state.activeIndex == t + 1
                            }),
                            onClick: this.handleIndexNavtabClick.bind(null, e.name, t + 2, e.id)
                        }, e.name)
                    }.bind(this)))), this.state.toggleActive && React.createElement("div", {
                        className: "mask",
                        onClick: this.handleToggleClick
                    }))
                },
                getDefaultActiveIndex: function (e) {
                    var t = s.getUrlParam("categoryId"),
                        n = 0;
                    return t && e.some(function (e, a) {
                        var i = e.id == t;
                        return i && (n = a + 1), i
                    }), n
                }
            });
        e.exports = i(d)
    },
    786: function (e, t) {},
    787: function (e, t, n) {
        var a = n(788),
            i = React.createClass({
                displayName: "TopSearchIpt",
                getInitialState: function () {
                    return {
                        itemCount: 0
                    }
                },
                componentDidMount: function () {
                    a.getTotalNumbersOfProducts().done(function (e) {
                        this.setState({
                            itemCount: e.data
                        })
                    }.bind(this))
                },
                handleClick: function () {
                    YXStat.q.push(["track_click", {
                        event_name: "click_search_entrance",
                        page_name: "search",
                        topage: "/search"
                    }]), window.yanxuan_href = "/search?fromPage=" + window.CURRENTPAGE
                },
                render: function () {
                    return React.createElement("div", {
                        className: "m-topSearchIpt " + this.props.className,
                        onClick: this.handleClick
                    }, React.createElement("i", {
                        className: "icon"
                    }), React.createElement("span", {
                        className: "placeholder"
                    }, this.props.placeholder ? this.props.placeholder : "搜索商品, 共" + this.state.itemCount + "款好物"))
                }
            });
        e.exports = i
    },
    788: function (e, t, n) {
        var a = n(17),
            i = a("/xhr/search", ["searchAutoComplete", "init", {
                name: "search",
                ajaxConfig: {
                    type: "GET"
                }
            }, "getTotalNumbersOfProducts", {
                name: "colorfulEggV2/check",
                alias: "check"
            }, {
                name: "colorfulEggV2/receive",
                alias: "receive"
            }, {
                name: "colorfulEggV2/report",
                alias: "report"
            }]);
        e.exports = i
    },
    789: function (e, t, n) {
        n(790);
        var a = n(138),
            i = n(255),
            r = i.Tab,
            o = function () {
                return React.createElement(i, {
                    className: "m-hdForSpecificChannels",
                    activeIndex: 0
                }, React.createElement(r, {
                    onClick: function () {
                        window.yanxuan_href = "/"
                    }
                }, "推荐"), window.cateList.map(function (e) {
                    return React.createElement(r, {
                        onClick: function () {
                            window.yanxuan_href = "/item/list?categoryId={0}".format(e.id)
                        }
                    }, e.name)
                }))
            };
        e.exports = a(o)
    },
    790: function (e, t) {}
});