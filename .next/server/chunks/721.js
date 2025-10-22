"use strict";
exports.id = 721;
exports.ids = [721];
exports.modules = {

/***/ 721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utils.js
function initCursor() {
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let cursor = {
        el: document.querySelector(".cursor"),
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        w: 30,
        h: 30,
        update: function() {
            let l = this.x - this.w / 2;
            let t = this.y - this.h / 2;
            this.el.style.transform = "translate3d(" + l + "px," + t + "px, 0)";
        }
    };
    window.addEventListener("mousemove", (e)=>{
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    const link = document.querySelectorAll("a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk");
    link.forEach((link)=>{
        link.addEventListener("mouseenter", ()=>{
            cursor.el.classList.add("cursor-zoom");
        });
        link.addEventListener("mouseleave", ()=>{
            cursor.el.classList.remove("cursor-zoom");
        });
    });
    setInterval(move, 1000 / 60);
    function move() {
        cursor.x = lerp(cursor.x, mouseX, 0.1);
        cursor.y = lerp(cursor.y, mouseY, 0.1);
        cursor.update();
    }
    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }
}
const stickyNav = ()=>{
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".header");
    sticky.forEach((sticky)=>{
        if (sticky) {
            if (offset > 100) {
                sticky.classList.add("animate-in", "sticky");
            } else {
                // sticky.classList.add("animate-out");
                sticky.classList.remove("animate-in", "sticky");
            // setTimeout(() => {
            //   sticky.classList.remove("animate-out");
            // }, 500);
            }
        }
    });
};
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// jarallax
const parallax = ()=>{
    const section = document.querySelectorAll(".section");
    section.forEach((element, i)=>{
        setTimeout(()=>{
            const div = document.createElement("div");
            const div2 = document.createElement("div");
            div.classList.add("pbefore");
            div2.classList.add("pafter");
            element.appendChild(div);
            element.appendChild(div2);
            let { jarallax , jarallaxVideo  } = __webpack_require__(409);
            jarallaxVideo();
            jarallax(document.querySelectorAll(`.section .pbefore`), {
                speed: 0.85,
                keepImg: true,
                automaticResize: true,
                videoVolume: 0
            });
            jarallax(document.querySelectorAll(`.section .pafter`), {
                speed: 0.85,
                keepImg: true,
                automaticResize: true,
                videoVolume: 0
            });
            jarallax(document.querySelectorAll(`.js-parallax`), {
                speed: 0.65,
                type: "scroll"
            });
        }, 200);
    });
};
const splittingText = ()=>{
    const texts = document.querySelectorAll(".splitting-text-anim-2,.splitting-text-anim-1");
    texts.forEach((text)=>{
        if (text.classList.contains("subtitle")) {
            text.classList.add("word", "chars", "splitting", "animate__active", "animate__animated");
        }
        const innerText = text.innerHTML;
        const splitText = innerText.split("");
        const span = document.createElement("span");
        span.classList.add("word");
        splitText.forEach((element, i)=>{
            const childSpan = document.createElement("span");
            span.appendChild(childSpan);
            childSpan.innerText = element;
            childSpan.classList.add("char");
            childSpan.classList.add(`char-index-${i}`);
        });
        text.innerHTML = span.outerHTML;
    });
};

;// CONCATENATED MODULE: ./src/layout/Footer.js

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "footer__builder",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-4 col-lg-4 align-left",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "social-links",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "http://twitter.com",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            "aria-hidden": "true",
                                            className: "fab fa-twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "http://dribble.com",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            "aria-hidden": "true",
                                            className: "fab fa-dribbble"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "http://behance.com",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            "aria-hidden": "true",
                                            className: "fab fa-behance"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "copyright-text",
                                children: "\xa9 2025 Amol Dhole. All rights reserved."
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/Header.js



const Header = ()=>{
    const openMenu = (event1)=>{
        event1.preventDefault();
        const menu = document.querySelector(".menu-btn");
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            menu.classList.add("no-touch");
            document.body.classList.remove("no-scroll");
            document.querySelector(".menu-full-overlay").classList.remove("is-open");
            document.querySelector(".menu-full-overlay").classList.remove("has-scroll");
            document.querySelector(".menu-full-overlay").classList.remove("animate-active");
            setTimeout(function() {
                document.querySelector(".menu-full-overlay").classList.remove("visible");
                menu.classList.remove("no-touch");
            }, 1000);
        } else {
            menu.classList.add("active", "no-touch");
            // var height = document.querySelector(window).height();
            // document.querySelector(".menu-full-overlay").css({ height: height });
            document.body.classList.add("no-scroll");
            document.querySelector(".menu-full-overlay").classList.add("is-open", "visible");
            setTimeout(function() {
                document.querySelector(".menu-full-overlay").classList.add("has-scroll", "animate-active");
                menu.classList.remove("no-touch");
            }, 1000);
        }
    };
    const { 0: day , 1: setDay  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        const mood = localStorage.getItem("ober-mood");
        localStorage.setItem("ober-mood", mood !== null ? "night" : "day");
        if (day) {
            localStorage.setItem("ober-mood", "day");
            document.querySelector("body").classList.add("home", "page", "light-skin");
        } else {
            localStorage.setItem("ober-mood", "night");
            document.querySelector("body").classList.remove("home", "page", "light-skin");
        }
    }, [
        day
    ]);
    const { 0: pageToggle , 1: setPageToggle  } = (0,external_react_.useState)(false);
    const linkClick = ()=>{
        const menu = document.querySelector(".menu-btn");
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            menu.classList.add("no-touch");
            document.body.classList.remove("no-scroll");
            document.querySelector(".menu-full-overlay").classList.remove("is-open");
            document.querySelector(".menu-full-overlay").classList.remove("has-scroll");
            document.querySelector(".menu-full-overlay").classList.remove("animate-active");
            setTimeout(function() {
                document.querySelector(".menu-full-overlay").classList.remove("visible");
                menu.classList.remove("no-touch");
            }, 1000);
        } else {
            menu.classList.add("active", "no-touch");
            // var height = document.querySelector(window).height();
            // document.querySelector(".menu-full-overlay").css({ height: height });
            document.body.classList.add("no-scroll");
            document.querySelector(".menu-full-overlay").classList.add("is-open", "visible");
            setTimeout(function() {
                document.querySelector(".menu-full-overlay").classList.add("has-scroll", "animate-active");
                menu.classList.remove("no-touch");
            }, 1000);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header__builder",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xs-4 col-sm-4 col-md-4 col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: " Amol Dhole"
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    className: `switcher-btn ${day ? "active" : ""}`,
                                    onClick: ()=>setDay(!day),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sw-before",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "22.22",
                                                height: "22.313",
                                                viewBox: "0 0 22.22 22.313",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "#fff",
                                                    d: "M1752.49,105.511a5.589,5.589,0,0,0-3.94-1.655,5.466,5.466,0,0,0-3.94,1.655,5.61,5.61,0,0,0,3.94,9.566,5.473,5.473,0,0,0,3.94-1.653,5.643,5.643,0,0,0,1.65-3.957A5.516,5.516,0,0,0,1752.49,105.511Zm-1.06,6.85a4.1,4.1,0,0,1-5.76,0,4.164,4.164,0,0,1,0-5.788A4.083,4.083,0,0,1,1751.43,112.361Zm7.47-3.662h-2.27a0.768,0.768,0,0,0,0,1.536h2.27A0.768,0.768,0,0,0,1758.9,108.7Zm-10.35,8.12a0.777,0.777,0,0,0-.76.769v2.274a0.777,0.777,0,0,0,.76.767,0.786,0.786,0,0,0,.77-0.767v-2.274A0.786,0.786,0,0,0,1748.55,116.819Zm7.85-.531-1.62-1.624a0.745,0.745,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.625a0.747,0.747,0,0,0,1.06,0A0.759,0.759,0,0,0,1756.4,116.288ZM1748.55,98.3a0.777,0.777,0,0,0-.76.768v2.273a0.778,0.778,0,0,0,.76.768,0.787,0.787,0,0,0,.77-0.768V99.073A0.786,0.786,0,0,0,1748.55,98.3Zm7.88,3.278a0.744,0.744,0,0,0-1.06,0l-1.62,1.624a0.758,0.758,0,0,0,0,1.063,0.745,0.745,0,0,0,1.06,0l1.62-1.624A0.758,0.758,0,0,0,1756.43,101.583Zm-15.96,7.116h-2.26a0.78,0.78,0,0,0-.77.768,0.76,0.76,0,0,0,.77.768h2.26A0.768,0.768,0,0,0,1740.47,108.7Zm2.88,5.965a0.745,0.745,0,0,0-1.06,0l-1.62,1.624a0.759,0.759,0,0,0,0,1.064,0.747,0.747,0,0,0,1.06,0l1.62-1.625A0.758,0.758,0,0,0,1743.35,114.664Zm0-11.457-1.62-1.624a0.744,0.744,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.624a0.745,0.745,0,0,0,1.06,0A0.758,0.758,0,0,0,1743.35,103.207Z",
                                                    transform: "translate(-1737.44 -98.313)"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sw-after",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 23,
                                                height: 23,
                                                viewBox: "0 0 23 23",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "#fff",
                                                    d: "M1759.46,111.076a0.819,0.819,0,0,0-.68.147,8.553,8.553,0,0,1-2.62,1.537,8.167,8.167,0,0,1-2.96.531,8.655,8.655,0,0,1-8.65-8.682,9.247,9.247,0,0,1,.47-2.864,8.038,8.038,0,0,1,1.42-2.54,0.764,0.764,0,0,0-.12-1.063,0.813,0.813,0,0,0-.68-0.148,11.856,11.856,0,0,0-6.23,4.193,11.724,11.724,0,0,0,1,15.387,11.63,11.63,0,0,0,19.55-5.553A0.707,0.707,0,0,0,1759.46,111.076Zm-4.5,6.172a10.137,10.137,0,0,1-14.29-14.145,10.245,10.245,0,0,1,3.38-2.836c-0.14.327-.29,0.651-0.41,1.006a9.908,9.908,0,0,0-.56,3.365,10.162,10.162,0,0,0,10.15,10.189,9.776,9.776,0,0,0,3.49-.62,11.659,11.659,0,0,0,1.12-.473A10.858,10.858,0,0,1,1754.96,117.248Z",
                                                    transform: "translate(-1737 -98)"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "menu-btn",
                                    onClick: ()=>openMenu(event),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "menu-full-overlay",
                style: {
                    minHeight: "100vh"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "menu-full-container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-full",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "menu-full",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/#about-section",
                                                        onClick: ()=>linkClick(),
                                                        children: "About"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/#resume-section",
                                                        onClick: ()=>linkClick(),
                                                        children: "Resume"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/#works-section",
                                                        onClick: ()=>linkClick(),
                                                        children: "Works"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/#pricing-section",
                                                        onClick: ()=>linkClick(),
                                                        children: "Pricing"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/#blog-section",
                                                        onClick: ()=>linkClick(),
                                                        children: "Blog"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/#contact-section",
                                                        onClick: ()=>linkClick(),
                                                        children: "Contact"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "menu-item menu-item-has-children has-children",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "position-relative",
                                                            onClick: ()=>setPageToggle(!pageToggle),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Pages"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-chevron-down pageArrow"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "sub-menu",
                                                            style: {
                                                                marginTop: "1rem",
                                                                display: `${pageToggle ? "block" : "none"}`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    className: "menu-item",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/works",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            onClick: ()=>linkClick(),
                                                                            children: "Works (grid)"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    className: "menu-item",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/works-list",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            onClick: ()=>linkClick(),
                                                                            children: "Works (list)"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    className: "menu-item",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/work-single",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            onClick: ()=>linkClick(),
                                                                            children: "Work Single Page"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    className: "menu-item",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            onClick: ()=>linkClick(),
                                                                            children: "Blog Posts"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    className: "menu-item",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog-single",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            onClick: ()=>linkClick(),
                                                                            children: "Blog Single Post"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "menu-social-links",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "http://dribbble.com",
                                target: "blank",
                                title: "dribbble",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fab fa-dribbble"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "http://twitter.com",
                                target: "blank",
                                title: "twitter",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fab fa-twitter"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "http://behance.com",
                                target: "blank",
                                title: "behance",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fab fa-behance"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./src/layout/PreLoader.js


const PreLoader = ()=>{
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            document.querySelector(".preloader").classList.add("loaded");
            document.querySelector(".centrize").style.display = "none";
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "preloader",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "centrize full-width",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "vertical-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: " Mr. Amol Dhole"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "spinner-dot"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "spinner spinner-line"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

;// CONCATENATED MODULE: ./src/layout/Layout.js






const Layout = ({ children , extraWrapClass  })=>{
    (0,external_react_.useEffect)(()=>{
        initCursor();
        animation();
        window.addEventListener("scroll", stickyNav);
    }, []);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const srollAnimation = document.querySelectorAll(".scroll-animate");
            srollAnimation.forEach((element)=>{
                const elementHeight = element.offsetHeight;
                const width = window.scrollY;
                element.classList.add("animate__active", "animate__animated");
            });
        }, 500);
    }, []);
    (0,external_react_.useEffect)(()=>{
        splittingText();
        parallax();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-page ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_PreLoader, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `wrapper ${extraWrapClass}`,
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cursor"
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;