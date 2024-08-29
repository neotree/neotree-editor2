"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_swift"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/swift.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/swift.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = swift\nswift.displayName = 'swift'\nswift.aliases = []\nfunction swift(Prism) {\n  Prism.languages.swift = {\n    comment: {\n      // Nested comments are supported up to 2 levels\n      pattern:\n        /(^|[^\\\\:])(?:\\/\\/.*|\\/\\*(?:[^/*]|\\/(?!\\*)|\\*(?!\\/)|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*\\*\\/)/,\n      lookbehind: true,\n      greedy: true\n    },\n    'string-literal': [\n      // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html\n      {\n        pattern: RegExp(\n          /(^|[^\"#])/.source +\n            '(?:' + // single-line string\n            /\"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\\r\\n|[^(])|[^\\\\\\r\\n\"])*\"/\n              .source +\n            '|' + // multi-line string\n            /\"\"\"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\\"]|\"(?!\"\"))*\"\"\"/\n              .source +\n            ')' +\n            /(?![\"#])/.source\n        ),\n        lookbehind: true,\n        greedy: true,\n        inside: {\n          interpolation: {\n            pattern: /(\\\\\\()(?:[^()]|\\([^()]*\\))*(?=\\))/,\n            lookbehind: true,\n            inside: null // see below\n          },\n          'interpolation-punctuation': {\n            pattern: /^\\)|\\\\\\($/,\n            alias: 'punctuation'\n          },\n          punctuation: /\\\\(?=[\\r\\n])/,\n          string: /[\\s\\S]+/\n        }\n      },\n      {\n        pattern: RegExp(\n          /(^|[^\"#])(#+)/.source +\n            '(?:' + // single-line string\n            /\"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\\r\\n|[^#])|[^\\\\\\r\\n])*?\"/\n              .source +\n            '|' + // multi-line string\n            /\"\"\"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?\"\"\"/.source +\n            ')' +\n            '\\\\2'\n        ),\n        lookbehind: true,\n        greedy: true,\n        inside: {\n          interpolation: {\n            pattern: /(\\\\#+\\()(?:[^()]|\\([^()]*\\))*(?=\\))/,\n            lookbehind: true,\n            inside: null // see below\n          },\n          'interpolation-punctuation': {\n            pattern: /^\\)|\\\\#+\\($/,\n            alias: 'punctuation'\n          },\n          string: /[\\s\\S]+/\n        }\n      }\n    ],\n    directive: {\n      // directives with conditions\n      pattern: RegExp(\n        /#/.source +\n          '(?:' +\n          (/(?:elseif|if)\\b/.source +\n            '(?:[ \\t]*' + // This regex is a little complex. It's equivalent to this:\n            //   (?:![ \\t]*)?(?:\\b\\w+\\b(?:[ \\t]*<round>)?|<round>)(?:[ \\t]*(?:&&|\\|\\|))?\n            // where <round> is a general parentheses expression.\n            /(?:![ \\t]*)?(?:\\b\\w+\\b(?:[ \\t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \\t]*(?:&&|\\|\\|))?/\n              .source +\n            ')+') +\n          '|' +\n          /(?:else|endif)\\b/.source +\n          ')'\n      ),\n      alias: 'property',\n      inside: {\n        'directive-name': /^#\\w+/,\n        boolean: /\\b(?:false|true)\\b/,\n        number: /\\b\\d+(?:\\.\\d+)*\\b/,\n        operator: /!|&&|\\|\\||[<>]=?/,\n        punctuation: /[(),]/\n      }\n    },\n    literal: {\n      pattern:\n        /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\\b/,\n      alias: 'constant'\n    },\n    'other-directive': {\n      pattern: /#\\w+\\b/,\n      alias: 'property'\n    },\n    attribute: {\n      pattern: /@\\w+/,\n      alias: 'atrule'\n    },\n    'function-definition': {\n      pattern: /(\\bfunc\\s+)\\w+/,\n      lookbehind: true,\n      alias: 'function'\n    },\n    label: {\n      // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141\n      pattern:\n        /\\b(break|continue)\\s+\\w+|\\b[a-zA-Z_]\\w*(?=\\s*:\\s*(?:for|repeat|while)\\b)/,\n      lookbehind: true,\n      alias: 'important'\n    },\n    keyword:\n      /\\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    nil: {\n      pattern: /\\bnil\\b/,\n      alias: 'constant'\n    },\n    'short-argument': /\\$\\d+\\b/,\n    omit: {\n      pattern: /\\b_\\b/,\n      alias: 'keyword'\n    },\n    number:\n      /\\b(?:[\\d_]+(?:\\.[\\de_]+)?|0x[a-f0-9_]+(?:\\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b/i,\n    // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.\n    'class-name': /\\b[A-Z](?:[A-Z_\\d]*[a-z]\\w*)?\\b/,\n    function: /\\b[a-z_]\\w*(?=\\s*\\()/i,\n    constant: /\\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\\b/,\n    // Operators are generic in Swift. Developers can even create new operators (e.g. +++).\n    // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481\n    // This regex only supports ASCII operators.\n    operator: /[-+*/%=!<>&|^~?]+|\\.[.\\-+*/%=!<>&|^~?]+/,\n    punctuation: /[{}[\\]();,.:\\\\]/\n  }\n  Prism.languages.swift['string-literal'].forEach(function (rule) {\n    rule.inside['interpolation'].inside = Prism.languages.swift\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9zd2lmdC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsR0FBRztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixNQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc3dpZnQuanM/YjQyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzd2lmdFxuc3dpZnQuZGlzcGxheU5hbWUgPSAnc3dpZnQnXG5zd2lmdC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHN3aWZ0KFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5zd2lmdCA9IHtcbiAgICBjb21tZW50OiB7XG4gICAgICAvLyBOZXN0ZWQgY29tbWVudHMgYXJlIHN1cHBvcnRlZCB1cCB0byAyIGxldmVsc1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgLyhefFteXFxcXDpdKSg/OlxcL1xcLy4qfFxcL1xcKig/OlteLypdfFxcLyg/IVxcKil8XFwqKD8hXFwvKXxcXC9cXCooPzpbXipdfFxcKig/IVxcLykpKlxcKlxcLykqXFwqXFwvKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAnc3RyaW5nLWxpdGVyYWwnOiBbXG4gICAgICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svTGFuZ3VhZ2VHdWlkZS9TdHJpbmdzQW5kQ2hhcmFjdGVycy5odG1sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cChcbiAgICAgICAgICAvKF58W15cIiNdKS8uc291cmNlICtcbiAgICAgICAgICAgICcoPzonICsgLy8gc2luZ2xlLWxpbmUgc3RyaW5nXG4gICAgICAgICAgICAvXCIoPzpcXFxcKD86XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCl8XFxyXFxufFteKF0pfFteXFxcXFxcclxcblwiXSkqXCIvXG4gICAgICAgICAgICAgIC5zb3VyY2UgK1xuICAgICAgICAgICAgJ3wnICsgLy8gbXVsdGktbGluZSBzdHJpbmdcbiAgICAgICAgICAgIC9cIlwiXCIoPzpcXFxcKD86XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCl8W14oXSl8W15cXFxcXCJdfFwiKD8hXCJcIikpKlwiXCJcIi9cbiAgICAgICAgICAgICAgLnNvdXJjZSArXG4gICAgICAgICAgICAnKScgK1xuICAgICAgICAgICAgLyg/IVtcIiNdKS8uc291cmNlXG4gICAgICAgICksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogLyhcXFxcXFwoKSg/OlteKCldfFxcKFteKCldKlxcKSkqKD89XFwpKS8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgaW5zaWRlOiBudWxsIC8vIHNlZSBiZWxvd1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2ludGVycG9sYXRpb24tcHVuY3R1YXRpb24nOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXlxcKXxcXFxcXFwoJC8sXG4gICAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHVuY3R1YXRpb246IC9cXFxcKD89W1xcclxcbl0pLyxcbiAgICAgICAgICBzdHJpbmc6IC9bXFxzXFxTXSsvXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cChcbiAgICAgICAgICAvKF58W15cIiNdKSgjKykvLnNvdXJjZSArXG4gICAgICAgICAgICAnKD86JyArIC8vIHNpbmdsZS1saW5lIHN0cmluZ1xuICAgICAgICAgICAgL1wiKD86XFxcXCg/OiMrXFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCl8XFxyXFxufFteI10pfFteXFxcXFxcclxcbl0pKj9cIi9cbiAgICAgICAgICAgICAgLnNvdXJjZSArXG4gICAgICAgICAgICAnfCcgKyAvLyBtdWx0aS1saW5lIHN0cmluZ1xuICAgICAgICAgICAgL1wiXCJcIig/OlxcXFwoPzojK1xcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfFteI10pfFteXFxcXF0pKj9cIlwiXCIvLnNvdXJjZSArXG4gICAgICAgICAgICAnKScgK1xuICAgICAgICAgICAgJ1xcXFwyJ1xuICAgICAgICApLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGludGVycG9sYXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXFxcXCMrXFwoKSg/OlteKCldfFxcKFteKCldKlxcKSkqKD89XFwpKS8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgaW5zaWRlOiBudWxsIC8vIHNlZSBiZWxvd1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2ludGVycG9sYXRpb24tcHVuY3R1YXRpb24nOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXlxcKXxcXFxcIytcXCgkLyxcbiAgICAgICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHJpbmc6IC9bXFxzXFxTXSsvXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIGRpcmVjdGl2ZToge1xuICAgICAgLy8gZGlyZWN0aXZlcyB3aXRoIGNvbmRpdGlvbnNcbiAgICAgIHBhdHRlcm46IFJlZ0V4cChcbiAgICAgICAgLyMvLnNvdXJjZSArXG4gICAgICAgICAgJyg/OicgK1xuICAgICAgICAgICgvKD86ZWxzZWlmfGlmKVxcYi8uc291cmNlICtcbiAgICAgICAgICAgICcoPzpbIFxcdF0qJyArIC8vIFRoaXMgcmVnZXggaXMgYSBsaXR0bGUgY29tcGxleC4gSXQncyBlcXVpdmFsZW50IHRvIHRoaXM6XG4gICAgICAgICAgICAvLyAgICg/OiFbIFxcdF0qKT8oPzpcXGJcXHcrXFxiKD86WyBcXHRdKjxyb3VuZD4pP3w8cm91bmQ+KSg/OlsgXFx0XSooPzomJnxcXHxcXHwpKT9cbiAgICAgICAgICAgIC8vIHdoZXJlIDxyb3VuZD4gaXMgYSBnZW5lcmFsIHBhcmVudGhlc2VzIGV4cHJlc3Npb24uXG4gICAgICAgICAgICAvKD86IVsgXFx0XSopPyg/OlxcYlxcdytcXGIoPzpbIFxcdF0qXFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCkpP3xcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKSkoPzpbIFxcdF0qKD86JiZ8XFx8XFx8KSk/L1xuICAgICAgICAgICAgICAuc291cmNlICtcbiAgICAgICAgICAgICcpKycpICtcbiAgICAgICAgICAnfCcgK1xuICAgICAgICAgIC8oPzplbHNlfGVuZGlmKVxcYi8uc291cmNlICtcbiAgICAgICAgICAnKSdcbiAgICAgICksXG4gICAgICBhbGlhczogJ3Byb3BlcnR5JyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnZGlyZWN0aXZlLW5hbWUnOiAvXiNcXHcrLyxcbiAgICAgICAgYm9vbGVhbjogL1xcYig/OmZhbHNlfHRydWUpXFxiLyxcbiAgICAgICAgbnVtYmVyOiAvXFxiXFxkKyg/OlxcLlxcZCspKlxcYi8sXG4gICAgICAgIG9wZXJhdG9yOiAvIXwmJnxcXHxcXHx8Wzw+XT0/LyxcbiAgICAgICAgcHVuY3R1YXRpb246IC9bKCksXS9cbiAgICAgIH1cbiAgICB9LFxuICAgIGxpdGVyYWw6IHtcbiAgICAgIHBhdHRlcm46XG4gICAgICAgIC8jKD86Y29sb3JMaXRlcmFsfGNvbHVtbnxkc29oYW5kbGV8ZmlsZSg/OklEfExpdGVyYWx8UGF0aCk/fGZ1bmN0aW9ufGltYWdlTGl0ZXJhbHxsaW5lKVxcYi8sXG4gICAgICBhbGlhczogJ2NvbnN0YW50J1xuICAgIH0sXG4gICAgJ290aGVyLWRpcmVjdGl2ZSc6IHtcbiAgICAgIHBhdHRlcm46IC8jXFx3K1xcYi8sXG4gICAgICBhbGlhczogJ3Byb3BlcnR5J1xuICAgIH0sXG4gICAgYXR0cmlidXRlOiB7XG4gICAgICBwYXR0ZXJuOiAvQFxcdysvLFxuICAgICAgYWxpYXM6ICdhdHJ1bGUnXG4gICAgfSxcbiAgICAnZnVuY3Rpb24tZGVmaW5pdGlvbic6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiZnVuY1xccyspXFx3Ky8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAvLyBodHRwczovL2RvY3Muc3dpZnQub3JnL3N3aWZ0LWJvb2svTGFuZ3VhZ2VHdWlkZS9Db250cm9sRmxvdy5odG1sI0lEMTQxXG4gICAgICBwYXR0ZXJuOlxuICAgICAgICAvXFxiKGJyZWFrfGNvbnRpbnVlKVxccytcXHcrfFxcYlthLXpBLVpfXVxcdyooPz1cXHMqOlxccyooPzpmb3J8cmVwZWF0fHdoaWxlKVxcYikvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnaW1wb3J0YW50J1xuICAgIH0sXG4gICAga2V5d29yZDpcbiAgICAgIC9cXGIoPzpBbnl8UHJvdG9jb2x8U2VsZnxUeXBlfGFjdG9yfGFzfGFzc2lnbm1lbnR8YXNzb2NpYXRlZHR5cGV8YXNzb2NpYXRpdml0eXxhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnRpbnVlfGNvbnZlbmllbmNlfGRlZmF1bHR8ZGVmZXJ8ZGVpbml0fGRpZFNldHxkb3xkeW5hbWljfGVsc2V8ZW51bXxleHRlbnNpb258ZmFsbHRocm91Z2h8ZmlsZXByaXZhdGV8ZmluYWx8Zm9yfGZ1bmN8Z2V0fGd1YXJkfGhpZ2hlclRoYW58aWZ8aW1wb3J0fGlufGluZGlyZWN0fGluZml4fGluaXR8aW5vdXR8aW50ZXJuYWx8aXN8aXNvbGF0ZWR8bGF6eXxsZWZ0fGxldHxsb3dlclRoYW58bXV0YXRpbmd8bm9uZXxub25pc29sYXRlZHxub25tdXRhdGluZ3xvcGVufG9wZXJhdG9yfG9wdGlvbmFsfG92ZXJyaWRlfHBvc3RmaXh8cHJlY2VkZW5jZWdyb3VwfHByZWZpeHxwcml2YXRlfHByb3RvY29sfHB1YmxpY3xyZXBlYXR8cmVxdWlyZWR8cmV0aHJvd3N8cmV0dXJufHJpZ2h0fHNhZmV8c2VsZnxzZXR8c29tZXxzdGF0aWN8c3RydWN0fHN1YnNjcmlwdHxzdXBlcnxzd2l0Y2h8dGhyb3d8dGhyb3dzfHRyeXx0eXBlYWxpYXN8dW5vd25lZHx1bnNhZmV8dmFyfHdlYWt8d2hlcmV8d2hpbGV8d2lsbFNldClcXGIvLFxuICAgIGJvb2xlYW46IC9cXGIoPzpmYWxzZXx0cnVlKVxcYi8sXG4gICAgbmlsOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxibmlsXFxiLyxcbiAgICAgIGFsaWFzOiAnY29uc3RhbnQnXG4gICAgfSxcbiAgICAnc2hvcnQtYXJndW1lbnQnOiAvXFwkXFxkK1xcYi8sXG4gICAgb21pdDoge1xuICAgICAgcGF0dGVybjogL1xcYl9cXGIvLFxuICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgIH0sXG4gICAgbnVtYmVyOlxuICAgICAgL1xcYig/OltcXGRfXSsoPzpcXC5bXFxkZV9dKyk/fDB4W2EtZjAtOV9dKyg/OlxcLlthLWYwLTlwX10rKT98MGJbMDFfXSt8MG9bMC03X10rKVxcYi9pLFxuICAgIC8vIEEgY2xhc3MgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYW4gdXBwZXItY2FzZSBsZXR0ZXIgYW5kIGJlIGVpdGhlciAxIGxldHRlciBsb25nIG9yIGNvbnRhaW4gYSBsb3dlci1jYXNlIGxldHRlci5cbiAgICAnY2xhc3MtbmFtZSc6IC9cXGJbQS1aXSg/OltBLVpfXFxkXSpbYS16XVxcdyopP1xcYi8sXG4gICAgZnVuY3Rpb246IC9cXGJbYS16X11cXHcqKD89XFxzKlxcKCkvaSxcbiAgICBjb25zdGFudDogL1xcYig/OltBLVpfXXsyLH18a1tBLVpdW0EtWmEtel9dKylcXGIvLFxuICAgIC8vIE9wZXJhdG9ycyBhcmUgZ2VuZXJpYyBpbiBTd2lmdC4gRGV2ZWxvcGVycyBjYW4gZXZlbiBjcmVhdGUgbmV3IG9wZXJhdG9ycyAoZS5nLiArKyspLlxuICAgIC8vIGh0dHBzOi8vZG9jcy5zd2lmdC5vcmcvc3dpZnQtYm9vay9SZWZlcmVuY2VNYW51YWwvenpTdW1tYXJ5T2ZUaGVHcmFtbWFyLmh0bWwjSUQ0ODFcbiAgICAvLyBUaGlzIHJlZ2V4IG9ubHkgc3VwcG9ydHMgQVNDSUkgb3BlcmF0b3JzLlxuICAgIG9wZXJhdG9yOiAvWy0rKi8lPSE8PiZ8Xn4/XSt8XFwuWy5cXC0rKi8lPSE8PiZ8Xn4/XSsvLFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9W1xcXSgpOywuOlxcXFxdL1xuICB9XG4gIFByaXNtLmxhbmd1YWdlcy5zd2lmdFsnc3RyaW5nLWxpdGVyYWwnXS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgcnVsZS5pbnNpZGVbJ2ludGVycG9sYXRpb24nXS5pbnNpZGUgPSBQcmlzbS5sYW5ndWFnZXMuc3dpZnRcbiAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/swift.js\n"));

/***/ })

}]);