(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

if (true) {
  // use minified verion for production
  module.exports = __webpack_require__(1977);
} else {}

/***/ }),

/***/ 4413:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/GlobalComponents/index.js

const GlobalComponents_Section = (external_styled_components_default()).section`
  display: ${props => props.grid ? "grid" : "flex"};
  flex-direction: ${props => props.row ? "row" : "column"};
  padding: ${props => props.nopadding ? "0" : "32px 48px 0"} ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${props => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: ${props => props.nopadding ? "0" : "16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;
const GlobalComponents_SectionTitle = (external_styled_components_default()).h2`
  font-weight: 800;
  font-size: ${props => props.main ? '65px' : '56px'};
  line-height: ${props => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${props => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${props => props.main ? '56px' : '48px'};
    line-height: ${props => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${props => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${props => props.main ? '28px' : '32px'};
    line-height: ${props => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${props => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`;
const SectionText = (external_styled_components_default()).p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${props => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
const GlobalComponents_SectionDivider = (external_styled_components_default()).div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${props => props.divider ? "4rem 0" : ""};

  @media ${props => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
const SectionSubText = (external_styled_components_default()).p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${props => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
const SecondaryBtn = (external_styled_components_default()).button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${props => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;
const ButtonBack = (external_styled_components_default()).div`
  width: ${({
  alt
}) => alt ? '150px' : '262px'};
  height: ${({
  alt
}) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({
  alt
}) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px'};
  color: #fff;
  background: ${({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({
  disabled
}) => disabled ? '.5' : '1'};

  @media ${props => props.theme.breakpoints.md} {
    width: ${({
  alt
}) => alt ? '150px' : '184px'};
    height: ${({
  alt
}) => alt ? '52px' : '48px'};
    font-size: ${({
  alt
}) => alt ? '20px' : '16px'};
    margin-bottom: ${({
  alt
}) => alt ? '0' : '64px'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({
  alt
}) => alt ? '0' : '32px'};
  }
`;
const ButtonFront = (external_styled_components_default()).button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({
  disabled
}) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({
  alt
}) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${({
  alt
}) => alt ? '20px' : '16px'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
const LinkContainer = (external_styled_components_default()).div`
  margin-left: ${({
  large
}) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-left: ${({
  large
}) => large ? '16px' : '8px'};

  }
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: ${({
  large
}) => large ? '0' : '8px'};
  }
`;
const LinkIconImg = (external_styled_components_default()).div`
  display: flex;  
  height: ${({
  large
}) => large ? '32px' : '24px'};

  @media ${props => props.theme.breakpoints.md} {
    height: ${({
  nav
}) => nav ? '16px' : '24px'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: ${({
  large
}) => large ? '32px' : '16px'};
  }
`;
;// CONCATENATED MODULE: ./src/components/Accomplishments/AcomplishmentsStyles.js

const Boxes = (external_styled_components_default()).div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;
const AcomplishmentsStyles_Box = (external_styled_components_default()).div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`;
const BoxNum = (external_styled_components_default()).h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`;
const BoxText = (external_styled_components_default()).p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;
const Join = (external_styled_components_default()).div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;
const JoinText = (external_styled_components_default()).h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`;
const IconContainer = (external_styled_components_default()).div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`;
;// CONCATENATED MODULE: external "react-pdf"
var external_react_pdf_namespaceObject = require("react-pdf");;
// EXTERNAL MODULE: ./pdf-worker.js
var pdf_worker = __webpack_require__(9593);
var pdf_worker_default = /*#__PURE__*/__webpack_require__.n(pdf_worker);
;// CONCATENATED MODULE: ./src/components/Resume/pdf-viewer.js


 // import default react-pdf entry

 // import pdf worker as a url, see `next.config.js` and `pdf-worker.js`


external_react_pdf_namespaceObject.pdfjs.GlobalWorkerOptions.workerSrc = (pdf_worker_default());
function PDFViewer() {
  const {
    0: file,
    1: setFile
  } = useState("../../../public/sample.pdf");
  const {
    0: numPages,
    1: setNumPages
  } = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({
    numPages: nextNumPages
  }) {
    setNumPages(nextNumPages);
  }

  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("label", {
        htmlFor: "file",
        children: "Load from file:"
      }), " ", /*#__PURE__*/_jsx("input", {
        onChange: onFileChange,
        type: "file"
      })]
    }), /*#__PURE__*/_jsx("div", {
      children: /*#__PURE__*/_jsx(Document, {
        file: file,
        onLoadSuccess: onDocumentLoadSuccess,
        children: Array.from({
          length: numPages
        }, (_, index) => /*#__PURE__*/_jsx(Page, {
          pageNumber: index + 1,
          renderAnnotationLayer: false,
          renderTextLayer: false
        }, `page_${index + 1}`))
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Accomplishments/Acomplishments.js






const data = [{
  number: 10,
  text: 'Open Source Projects'
}];

const Accomplishments = () => /*#__PURE__*/_jsxs(Section, {
  children: [/*#__PURE__*/_jsx(SectionTitle, {
    children: "Resume"
  }), /*#__PURE__*/_jsx(Box, {
    children: "PDFViewer();"
  }), /*#__PURE__*/_jsx(SectionDivider, {})]
});

/* harmony default export */ var Acomplishments = ((/* unused pure expression or super */ null && (Accomplishments)));
;// CONCATENATED MODULE: ./src/components/BackgrooundAnimation/BackgroundAnimation.js




const BackgroundAnimation = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    className: "BgAnimation__svg",
    viewBox: "0 0 602 602",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      opacity: "0.15",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
        stroke: "url(#paint0_radial)",
        id: "path_0"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
        stroke: "url(#paint1_radial)",
        id: "path_1"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
        stroke: "url(#paint2_radial)",
        id: "path_2"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#945DD6",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_2"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint3_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_2"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#46737",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_2"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_2"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#945DD6",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint4_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "382.164",
      cy: "155.029",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
      fill: "#F46737",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M381.81 154.669L356.057 128.885",
      transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
      stroke: "url(#paint5_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "333.324",
      cy: "382.691",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
      fill: "#F46737",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_1"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M333.667 382.335L359.42 356.551",
      transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
      stroke: "url(#paint6_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_1"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "165.524",
      cy: "93.9596",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-165.524 -93.9596)",
      fill: "#F46737",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M165.182 94.3159L139.429 120.1",
      transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#13ADC7",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint11_linear)",
      children: /*#__PURE__*/jsx_runtime_.jsx("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("mpath", {
          xlinkHref: "#path_0"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("defs", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("radialGradient", {
        id: "paint0_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("radialGradient", {
        id: "paint1_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("radialGradient", {
        id: "paint2_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint3_linear",
        x1: "295.043",
        y1: "193.116",
        x2: "269.975",
        y2: "218.154",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#945DD6"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint4_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#945DD6"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint5_linear",
        x1: "382.168",
        y1: "155.027",
        x2: "357.1",
        y2: "129.989",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F46737"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint6_linear",
        x1: "333.309",
        y1: "382.693",
        x2: "358.376",
        y2: "357.655",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F46737"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint7_linear",
        x1: "165.54",
        y1: "93.9578",
        x2: "140.472",
        y2: "118.996",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F46737"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint8_linear",
        x1: "414.367",
        y1: "301.156",
        x2: "439.435",
        y2: "276.118",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#13ADC7"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint9_linear",
        x1: "515.943",
        y1: "288.238",
        x2: "541.339",
        y2: "291.454",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#13ADC7"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint10_linear",
        x1: "117.001",
        y1: "230.619",
        x2: "117.36",
        y2: "258.193",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#945DD6"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint11_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#13ADC7"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        })]
      })]
    })]
  })
});

/* harmony default export */ var BackgrooundAnimation_BackgroundAnimation = (BackgroundAnimation);
;// CONCATENATED MODULE: ./src/styles/GlobalComponents/Button.js





const Button = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonBack, {
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
  children: [props.children, /*#__PURE__*/jsx_runtime_.jsx(ButtonFront, {
    alt: props.alt,
    onClick: props.onClick,
    disabled: props.disabled,
    children: props.children
  })]
});

/* harmony default export */ var GlobalComponents_Button = (Button);
;// CONCATENATED MODULE: ./src/components/Hero/HeroStyles.js

const LeftSection = (external_styled_components_default()).div`
  width: 100%;
  @media ${props => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
;// CONCATENATED MODULE: ./src/components/Hero/Hero.js








const Hero = props => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
  children: /*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_Section, {
    row: true,
    nopadding: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LeftSection, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(GlobalComponents_SectionTitle, {
        main: true,
        center: true,
        children: ["Hello, I'm Daniel! ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Welcome to My Portfolio"]
      }), /*#__PURE__*/jsx_runtime_.jsx(SectionText, {
        children: "I'm a rising junior, majoring in Computer Science Engineering at Lehigh University. I'm most passionate about Python Development, EDM, and learning new technologies on a daily basis."
      }), /*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_Button, {
        onClick: props.handleClick,
        children: "Learn More"
      })]
    })
  })
});

/* harmony default export */ var Hero_Hero = (Hero);
;// CONCATENATED MODULE: ./src/components/Projects/ProjectsStyles.js

const Img = (external_styled_components_default()).img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`;
const GridContainer = (external_styled_components_default()).section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${props => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`;
const BlogCard = (external_styled_components_default()).div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
const TitleContent = (external_styled_components_default()).div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;
const HeaderThree = (external_styled_components_default()).h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${props => props.title ? '3rem' : '2rem'};
`;
const Hr = (external_styled_components_default()).hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;
const Intro = (external_styled_components_default()).div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;
const CardInfo = (external_styled_components_default()).p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${props => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;
const UtilityList = (external_styled_components_default()).ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;
const ExternalLinks = (external_styled_components_default()).a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;
const TagList = (external_styled_components_default()).ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`;
const Tag = (external_styled_components_default()).li`
color: #d8bfbf;
font-size: 1.5rem;
`;
;// CONCATENATED MODULE: ./src/constants/constants.js
//import gif from '../../tronGif.gif';
//import y from '../../src/pages/app2';
//import y from './../../src/pages/app2';
const projects = [{
  title: 'Reddit Search Interface',
  description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
  image: '/images/reddit.gif',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
}, {
  title: 'Star Wars Chess',
  description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to. Hello world beautiful",
  image: '/images/sterwars.gif',
  tags: ['React', 'JavaScript'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'Totally Real News',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/TotallyRealNews.gif',
  tags: ['React', 'WebRTC'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Tron Legacy: Light-and-Sound Memory Game',
  description: "News application features a free and paid user interfaces. Paid users are stored in MongoDB database, and a list of news preferences in their profile. Encryption is designed using Crypto.JS library for passwords",
  image: '/images/tronGif.gif',
  tags: ['Javascript', 'HTML', 'CSS', 'MongoDB', 'Express.js', 'Node.js'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}];
const TimeLineData = [{
  year: 2019,
  text: 'Began my Computer Science Studies at Lehigh University'
}, {
  year: 2020,
  text: 'Wrote my first program in Java'
}, {
  year: 2021,
  text: 'Started my first tech internship as a UI/UX Designer'
}, {
  year: 2022,
  text: 'Developed backend servers at ABS and Exorbital'
}];
;// CONCATENATED MODULE: ./src/components/Projects/Projects.js





 //import y from '../../../src/pages/app2';

const Projects = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(GlobalComponents_Section, {
  nopadding: true,
  id: "projects",
  children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_SectionDivider, {}), /*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_SectionTitle, {
    main: true,
    children: "Projects"
  }), /*#__PURE__*/jsx_runtime_.jsx(GridContainer, {
    children: projects.map((p, i) => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BlogCard, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Img, {
          src: p.image
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TitleContent, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderThree, {
            title: true,
            children: p.title
          }), /*#__PURE__*/jsx_runtime_.jsx(Hr, {})]
        }), /*#__PURE__*/jsx_runtime_.jsx(CardInfo, {
          className: "card-info",
          children: p.description
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(TitleContent, {
            children: "Stack"
          }), /*#__PURE__*/jsx_runtime_.jsx(TagList, {
            children: p.tags.map((t, i) => {
              return /*#__PURE__*/jsx_runtime_.jsx(Tag, {
                children: t
              }, i);
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(UtilityList, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ExternalLinks, {
            href: p.visit,
            children: "Code"
          }), /*#__PURE__*/jsx_runtime_.jsx(ExternalLinks, {
            href: p.source,
            children: "Source"
          })]
        })]
      }, i);
    })
  })]
});

/* harmony default export */ var Projects_Projects = (Projects);
;// CONCATENATED MODULE: ./src/components/Technologies/TechnologiesStyles.js

const ImageContainer = (external_styled_components_default()).div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;
const MainImage = (external_styled_components_default()).img`
  width: 100%;
`;
const List = (external_styled_components_default()).ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;
const ListContainer = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`;
const ListTitle = (external_styled_components_default()).h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`;
const ListParagraph = (external_styled_components_default()).p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`;
const ListItem = (external_styled_components_default()).li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`;
const ListIcon = (external_styled_components_default()).img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;
// EXTERNAL MODULE: ./src/components/Technologies/Personal_Website_Logos/azure.png
var azure = __webpack_require__(2733);
var azure_default = /*#__PURE__*/__webpack_require__.n(azure);
// EXTERNAL MODULE: ./src/components/Technologies/Personal_Website_Logos/jscsshtml.png
var jscsshtml = __webpack_require__(49);
var jscsshtml_default = /*#__PURE__*/__webpack_require__.n(jscsshtml);
// EXTERNAL MODULE: ./src/components/Technologies/Personal_Website_Logos/figma.png
var figma = __webpack_require__(7504);
var figma_default = /*#__PURE__*/__webpack_require__.n(figma);
// EXTERNAL MODULE: ./src/components/Technologies/Personal_Website_Logos/python.png
var python = __webpack_require__(6301);
var python_default = /*#__PURE__*/__webpack_require__.n(python);
// EXTERNAL MODULE: ./src/components/Technologies/Personal_Website_Logos/mySql.png
var mySql = __webpack_require__(6109);
var mySql_default = /*#__PURE__*/__webpack_require__.n(mySql);
// EXTERNAL MODULE: ./src/components/Technologies/Personal_Website_Logos/java.png
var java = __webpack_require__(6067);
var java_default = /*#__PURE__*/__webpack_require__.n(java);
// EXTERNAL MODULE: ./src/components/Technologies/Personal_Website_Logos/C.png
var C = __webpack_require__(521);
var C_default = /*#__PURE__*/__webpack_require__.n(C);
// EXTERNAL MODULE: ./src/components/Technologies/Personal_Website_Logos/R.png
var R = __webpack_require__(3603);
var R_default = /*#__PURE__*/__webpack_require__.n(R);
// EXTERNAL MODULE: ./src/components/Technologies/Personal_Website_Logos/minitab.png
var minitab = __webpack_require__(5074);
var minitab_default = /*#__PURE__*/__webpack_require__.n(minitab);
;// CONCATENATED MODULE: ./src/components/Technologies/Technologies.js
















const Technologies = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(GlobalComponents_Section, {
  id: "tech",
  children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_SectionDivider, {
    divider: true
  }), /*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_SectionTitle, {
    children: "Technologies"
  }), /*#__PURE__*/jsx_runtime_.jsx(SectionText, {
    children: "I've worked with a range a technologies in the web development world. From Back-end To Design"
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(List, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: __webpack_require__(7092)((jscsshtml_default())),
          width: "200",
          height: "100"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Front-End"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["HTML5, CSS3, Javascript ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "react.js, and next.js ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "1 year"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (mySql_default()),
          width: "200",
          height: "100"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Back-End"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Node, Django, and Databases ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "like Oracle and MySQL ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "1 year"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (azure_default()),
          width: "100",
          height: "100"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Azure"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Microsoft Azure Fundamentals ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "1 year"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (python_default()),
          width: "100",
          height: "100"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Python"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Python Programming ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "1.5 years"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (java_default()),
          width: "75",
          height: "100"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Java"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Java Programming ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "1.5 years"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (C_default()),
          width: "100",
          height: "100"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "C"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["C Programming ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "1 year"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (R_default()),
          width: "100",
          height: "100"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "R"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["R programming ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "for Data Science ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "0.5 years"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (minitab_default()),
          width: "100",
          height: "100"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "Minitab"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Minitab Statistical Software ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "for Data Science ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "0.5 years"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (figma_default()),
          width: "100",
          height: "100"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListTitle, {
          children: "UI/UX"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListParagraph, {
          children: ["Figma ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Design Software ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "0.5 years"]
        })]
      })]
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_SectionDivider, {
    colorAlt: true
  })]
});

/* harmony default export */ var Technologies_Technologies = (Technologies);
;// CONCATENATED MODULE: ./src/components/TimeLine/TimeLineStyles.js

const CarouselContainer = (external_styled_components_default()).ul`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
const CarouselMobileScrollNode = (external_styled_components_default()).div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({
  final
}) => final ? `120%;` : `min-content`}
  }
`;
const CarouselItem = (external_styled_components_default()).div`
  background: #0F1624;
  border-radius: 3px;
  max-width: 196px;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`;
const CarouselItemTitle = (external_styled_components_default()).h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;
const CarouselItemImg = (external_styled_components_default()).svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;
const CarouselItemText = (external_styled_components_default()).p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
const CarouselButtons = (external_styled_components_default()).div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;
const CarouselButton = (external_styled_components_default()).button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${props => props.active === props.index ? `1` : `.33`};
  transform: ${props => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;
const CarouselButtonDot = (external_styled_components_default()).div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;
;// CONCATENATED MODULE: ./src/components/TimeLine/TimeLine.js







const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,external_react_.useState)(0);
  const carouselRef = (0,external_react_.useRef)();

  const scroll = (node, left) => {
    return node.scrollTo({
      left,
      behavior: 'smooth'
    });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,external_react_.useEffect)(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(GlobalComponents_Section, {
    id: "about",
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_SectionTitle, {
      children: "About Me"
    }), /*#__PURE__*/jsx_runtime_.jsx(SectionText, {
      children: "Recently, I have completed 2 internship experiences as a back-end software engineer. I enjoy working on API development with Django Rest Framework, React.js, Node.JS, and Express.js. I find it fascinating how web apps provide so much functionality a typical user doesn't see from the back-end. Occasionally, I enjoy working on front-end to exercise my design skills and versatility."
    }), /*#__PURE__*/jsx_runtime_.jsx(CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: TimeLineData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(CarouselMobileScrollNode, {
          final: index === TOTAL_CAROUSEL_COUNT - 1,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CarouselItem, {
            index: index,
            id: `carousel__item-${index}`,
            active: activeItem,
            onClick: e => handleClick(e, index),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CarouselItemTitle, {
              children: [`${item.year}`, /*#__PURE__*/(0,jsx_runtime_.jsxs)(CarouselItemImg, {
                width: "208",
                height: "6",
                viewBox: "0 0 208 6",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                  fill: "url(#paint0_linear)",
                  fillOpacity: "0.33"
                }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "-4.30412e-10",
                    y1: "0.5",
                    x2: "208",
                    y2: "0.500295",
                    gradientUnits: "userSpaceOnUse",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
                      stopColor: "white"
                    }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
                      offset: "0.79478",
                      stopColor: "white",
                      stopOpacity: "0"
                    })]
                  })
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(CarouselItemText, {
              children: item.text
            })]
          })
        }, index))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CarouselButtons, {
      children: TimeLineData.map((item, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx(CarouselButton, {
          index: index,
          active: activeItem,
          onClick: e => handleClick(e, index),
          type: "button",
          children: /*#__PURE__*/jsx_runtime_.jsx(CarouselButtonDot, {
            active: activeItem
          })
        }, index);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_SectionDivider, {})]
  });
};

/* harmony default export */ var TimeLine = (Timeline);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(1649);
;// CONCATENATED MODULE: ./src/components/Header/HeaderStyles.js


const Container = (external_styled_components_default()).div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${props => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
const Div1 = (external_styled_components_default()).div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
const Div2 = (external_styled_components_default()).div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
const Div3 = (external_styled_components_default()).div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${props => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`; // Navigation Links

const NavLink = (external_styled_components_default()).a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`; /// DropDown Contact

const ContactDropDown = (external_styled_components_default()).button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${props => props.theme.breakpoints.md} {
    padding: 0;
  }
`;
const NavProductsIcon = external_styled_components_default()(io_index_esm/* IoIosArrowDropdown */.U0j)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({
  isOpen
}) => isOpen ? '1' : '.75'};
  transform: ${({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)'};

  &:hover {
    opacity: 1;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`; // Social Icons 

const SocialIcons = (external_styled_components_default()).a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`;
;// CONCATENATED MODULE: ./src/components/Footer/FooterStyles.js

const FooterWrapper = (external_styled_components_default()).section`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;
const LinkItem = (external_styled_components_default()).a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`;
const SocialIconsContainer = (external_styled_components_default()).div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`;
const CompanyContainer = (external_styled_components_default()).div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`;
const Slogan = (external_styled_components_default()).p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`;
const SocialContainer = (external_styled_components_default()).div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`;
const LinkList = (external_styled_components_default()).ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`;
const LinkColumn = (external_styled_components_default()).div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`;
const LinkTitle = (external_styled_components_default()).h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`;
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js







const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterWrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LinkList, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LinkColumn, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LinkTitle, {
          children: "Call"
        }), /*#__PURE__*/jsx_runtime_.jsx(LinkItem, {
          href: "tel:314-343-3432",
          children: "609-379-1776"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LinkColumn, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LinkTitle, {
          children: "Email"
        }), /*#__PURE__*/jsx_runtime_.jsx(LinkItem, {
          href: "mailto:contact@jsmastery.com",
          children: "unguryan77@gmail.com"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SocialIconsContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CompanyContainer, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Slogan, {
          children: "Thank you for Visiting"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SocialContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
          href: "",
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillGithub */.RrF, {
            size: "3rem"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
          href: "",
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillLinkedin */._iD, {
            size: "3rem"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
          href: "https://google.com",
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillInstagram */.t0C, {
            size: "3rem"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var Footer_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/react-icons/di/index.esm.js
var di_index_esm = __webpack_require__(859);
;// CONCATENATED MODULE: ./src/components/Header/Header.js








const Header = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(Div1, {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        style: {
          display: 'flex',
          alignItems: 'center',
          color: "white"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(di_index_esm/* DiCssdeck */.JAz, {
          size: "3rem"
        }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Portfolio"
        })]
      })
    })
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div2, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "#projects",
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          children: "Projects"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "#tech",
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          children: "Technologies"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "#about",
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          children: "About"
        })
      })
    })]
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div3, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
      href: "",
      children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillGithub */.RrF, {
        size: "3rem"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
      href: "",
      children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillLinkedin */._iD, {
        size: "3rem"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {
      href: "https://google.com",
      children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillInstagram */.t0C, {
        size: "3rem"
      })
    })]
  })]
});

/* harmony default export */ var Header_Header = (Header);
;// CONCATENATED MODULE: ./src/layout/LayoutStyles.js

const LayoutStyles_Container = (external_styled_components_default()).div`
max-width: 1280px;
width: 100%;
margin: auto;
`;
;// CONCATENATED MODULE: ./src/layout/Layout.js






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(LayoutStyles_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
  });
};
;// CONCATENATED MODULE: ./src/pages/index.js











const Home = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(GlobalComponents_Section, {
      grid: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Hero_Hero, {}), /*#__PURE__*/jsx_runtime_.jsx(BackgrooundAnimation_BackgroundAnimation, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(Projects_Projects, {}), /*#__PURE__*/jsx_runtime_.jsx(Technologies_Technologies, {}), /*#__PURE__*/jsx_runtime_.jsx(TimeLine, {})]
  });
};

/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 521:
/***/ (function(module) {

module.exports = "/_next/static/images/C-bf0af88d24cd724c83bce7f59aee594b.png";

/***/ }),

/***/ 3603:
/***/ (function(module) {

module.exports = "/_next/static/images/R-f63933a1019d2a1fb5e7be234b30857d.png";

/***/ }),

/***/ 2733:
/***/ (function(module) {

module.exports = "/_next/static/images/azure-27603aaf1cc44b44deaef1121891b9a3.png";

/***/ }),

/***/ 7504:
/***/ (function(module) {

module.exports = "/_next/static/images/figma-532313dc5d4b445429388d09bb8969d0.png";

/***/ }),

/***/ 6067:
/***/ (function(module) {

module.exports = "/_next/static/images/java-35397b59170cfd616feee9bee85ff8b5.png";

/***/ }),

/***/ 49:
/***/ (function(module) {

module.exports = "/_next/static/images/jscsshtml-07c642fbe973e4a6442f381ccbaf02d2.png";

/***/ }),

/***/ 5074:
/***/ (function(module) {

module.exports = "/_next/static/images/minitab-7840f75cc521450ecc45ad4075fdcc8c.png";

/***/ }),

/***/ 6109:
/***/ (function(module) {

module.exports = "/_next/static/images/mySql-9abb470bd3a3e2290e3975695f237887.png";

/***/ }),

/***/ 6301:
/***/ (function(module) {

module.exports = "/_next/static/images/python-67a96446f70ae7be72e9bc585d7d17e2.png";

/***/ }),

/***/ 7092:
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 7092;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 1977:
/***/ (function(module) {

"use strict";
module.exports = require("pdfjs-dist/build/pdf.worker.min.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [300], function() { return __webpack_exec__(4413); });
module.exports = __webpack_exports__;

})();