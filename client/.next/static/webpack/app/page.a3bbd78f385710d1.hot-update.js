"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/components/ProjectCard.jsx":
/*!***********************************************!*\
  !*** ./components/components/ProjectCard.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ProjectCard = (param)=>{\n    let { title, preview, description, githuburl, siteurl, tags, githublogo } = param;\n    _s();\n    tags = tags.split(\",\");\n    const [previeww, setPrevieww] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-56 h-72 shadow-lg rounded-md relative flex flex-col border border-slate-400 hover:border-amber-500\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 relative overflow-hidden\",\n                onMouseEnter: ()=>setPrevieww(true),\n                onMouseLeave: ()=>setPrevieww(false),\n                children: [\n                    siteurl && previeww && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        id: \"livepreview\",\n                        href: siteurl,\n                        target: \"_blank\",\n                        className: \"absolute body-font tracking-wider h-full w-full hover:bg-[rgba(82,25,31,0.4)] text-[#fff] flex justify-center items-center\",\n                        children: \"Live Site\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 41\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: preview ? preview : \"https://i.pinimg.com/564x/20/b7/4c/20b74cc25225a73f99c941e9163b80fd.jpg\",\n                        alt: \"preview\",\n                        className: \"w-full h-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 cursor-default p-1 px-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"font-bold me-text tracking-wider\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"body-font text-xs\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"text-xs text-slate-500\",\n                        children: tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"#\",\n                                    tag,\n                                    \" \"\n                                ]\n                            }, tag, true, {\n                                fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 39\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: githuburl,\n                className: \"absolute top-1 right-1 bg-white rounded-full \",\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: githublogo.src,\n                    alt: \"github link\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Djalti\\\\Desktop\\\\Projects\\\\ninestars\\\\client\\\\components\\\\components\\\\ProjectCard.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProjectCard, \"pwnsDy1Md2qhHb0I3r5faepcBgY=\");\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3dDO0FBRXhDLE1BQU1FLGNBQWM7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUU7O0lBRXRGRCxPQUFPQSxLQUFLRSxLQUFLLENBQUM7SUFDbEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXpDLHFCQUNJLDhEQUFDWTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQWtDQyxjQUFjLElBQU1ILFlBQVk7Z0JBQU9JLGNBQWMsSUFBTUosWUFBWTs7b0JBQ25ITCxXQUFXSSwwQkFBWSw4REFBQ007d0JBQUVDLElBQUc7d0JBQWNDLE1BQU1aO3dCQUFTYSxRQUFPO3dCQUFTTixXQUFVO2tDQUE2SDs7Ozs7O2tDQUdsTiw4REFBQ087d0JBQUlDLEtBQUtsQixVQUFVQSxVQUFVO3dCQUEyRW1CLEtBQUk7d0JBQVVULFdBQVU7Ozs7Ozs7Ozs7OzswQkFFckksOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1U7d0JBQVFWLFdBQVU7a0NBQ2RYOzs7Ozs7a0NBRUwsOERBQUNxQjt3QkFBUVYsV0FBVTtrQ0FDZFQ7Ozs7OztrQ0FFTCw4REFBQ21CO3dCQUFRVixXQUFVO2tDQUNkTixLQUFLaUIsR0FBRyxDQUFDQyxDQUFBQSxvQkFBUSw4REFBQ0M7O29DQUFlO29DQUFFRDtvQ0FBSTs7K0JBQVhBOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdyQyw4REFBQ1Q7Z0JBQUVFLE1BQU1iO2dCQUFXUSxXQUFVO2dCQUFnRE0sUUFBTzswQkFDakYsNEVBQUNDO29CQUFJQyxLQUFLYixXQUFXYSxHQUFHO29CQUFFQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QztHQTlCTXJCO0tBQUFBO0FBZ0NOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3g/YzhmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUHJvamVjdENhcmQgPSAoeyB0aXRsZSwgcHJldmlldywgZGVzY3JpcHRpb24sIGdpdGh1YnVybCwgc2l0ZXVybCwgdGFncywgZ2l0aHVibG9nbyB9KSA9PiB7XHJcbiAgICBcclxuICAgIHRhZ3MgPSB0YWdzLnNwbGl0KFwiLFwiKVxyXG4gICAgY29uc3QgW3ByZXZpZXd3LCBzZXRQcmV2aWV3d10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTU2IGgtNzIgc2hhZG93LWxnIHJvdW5kZWQtbWQgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBib3JkZXIgYm9yZGVyLXNsYXRlLTQwMCBob3Zlcjpib3JkZXItYW1iZXItNTAwJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtMSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4nIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0UHJldmlld3codHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0UHJldmlld3coZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgIHtzaXRldXJsICYmIHByZXZpZXd3ICYmIDxhIGlkPSdsaXZlcHJldmlldycgaHJlZj17c2l0ZXVybH0gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm9keS1mb250IHRyYWNraW5nLXdpZGVyIGgtZnVsbCB3LWZ1bGwgaG92ZXI6YmctW3JnYmEoODIsMjUsMzEsMC40KV0gdGV4dC1bI2ZmZl0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIExpdmUgU2l0ZVxyXG4gICAgICAgICAgICAgICAgPC9hPn1cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcmV2aWV3ID8gcHJldmlldyA6IFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8yMC9iNy80Yy8yMGI3NGNjMjUyMjVhNzNmOTljOTQxZTkxNjNiODBmZC5qcGdcIn0gYWx0PVwicHJldmlld1wiIGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LTEgY3Vyc29yLWRlZmF1bHQgcC0xIHB4LTInPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmb250LWJvbGQgbWUtdGV4dCB0cmFja2luZy13aWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdib2R5LWZvbnQgdGV4dC14cyc+XHJcbiAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtc2xhdGUtNTAwJz5cclxuICAgICAgICAgICAgICAgICAgICB7dGFncy5tYXAodGFnID0+ICg8c3BhbiBrZXk9e3RhZ30+I3t0YWd9IDwvc3Bhbj4pKX1cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2dpdGh1YnVybH0gY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMSByaWdodC0xIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCAnIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpdGh1YmxvZ28uc3JjfSBhbHQ9XCJnaXRodWIgbGlua1wiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9qZWN0Q2FyZCIsInRpdGxlIiwicHJldmlldyIsImRlc2NyaXB0aW9uIiwiZ2l0aHVidXJsIiwic2l0ZXVybCIsInRhZ3MiLCJnaXRodWJsb2dvIiwic3BsaXQiLCJwcmV2aWV3dyIsInNldFByZXZpZXd3IiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYSIsImlkIiwiaHJlZiIsInRhcmdldCIsImltZyIsInNyYyIsImFsdCIsInNlY3Rpb24iLCJtYXAiLCJ0YWciLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/components/ProjectCard.jsx\n"));

/***/ })

});