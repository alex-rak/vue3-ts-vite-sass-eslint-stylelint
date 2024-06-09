import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import autoImport from  "./.eslintrc-auto-import.json"  assert { type: "json" };

export default [
  {
    files: [
      "**/*.vue",
      "**/*.js",
      "**/*.jsx",
      "**/*.cjs",
      "**/*.mjs",
      "**/*.ts",
      "**/*.tsx",
      "**/*.cts",
      "**/*.mts",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...autoImport.languageOptions.globals,
      },
      parserOptions: {
        parser: {
          "js": "espree",
          "jsx": "espree",
          "mjs": "espree",
          "ts": tseslint.parser,
          "tsx": tseslint.parser,
          "mts": tseslint.parser,
          // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
        },
        extraFileExtensions: [".vue"],
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    ignores: ["dist/", "node_modules/"],
  },
  {
    rules: {
      // двойные ковычки везде
      quotes: ["error", "double"],
      // точка с запятой везде
      semi: ["error", "always"],

      indent: ["error", 2, {
        "ArrayExpression": 1,
        "ObjectExpression": 1,
      }],

      // первый тег и его закрывающаяя скобка ">"
      "vue/html-closing-bracket-newline": ["error", {
        "singleline": "never",
        "multiline": "always",
        "selfClosingTag": {
          "singleline": "never",
          "multiline": "always",
        },
      }],
      "vue/multi-word-component-names": ["error", {
        "ignores": [],
      }],
      // always  rel="noopener noreferrer"
      // https://eslint.vuejs.org/rules/no-template-target-blank.html
      "vue/no-template-target-blank": "error",
      // html теги - порядок атрибутов
      /*
        DEFINITION e.g. 'is', 'v-is'
        LIST_RENDERING e.g. 'v-for item in items'
        CONDITIONALS e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
        RENDER_MODIFIERS e.g. 'v-once', 'v-pre'
        GLOBAL e.g. 'id'
        UNIQUE e.g. 'ref', 'key'
        SLOT e.g. 'v-slot', 'slot'.
        TWO_WAY_BINDING e.g. 'v-model'
        OTHER_DIRECTIVES e.g. 'v-custom-directive'
        OTHER_ATTR e.g. 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
        EVENTS e.g. '@click="functionCall"', 'v-on="event"'
        CONTENT e.g. 'v-text', 'v-html'
      */
      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION",
            "LIST_RENDERING",
            "CONDITIONALS",
            "TWO_WAY_BINDING",
            "GLOBAL",
            ["UNIQUE", "SLOT"],
            "OTHER_DIRECTIVES",
            "OTHER_ATTR",
            "CONTENT",
            "RENDER_MODIFIERS",
            "EVENTS",
          ],
          alphabetical: false,
        },
      ],
      // html теги - первый атрибут переносится на новую строку
      "vue/first-attribute-linebreak": ["error", {
        singleline: "beside",
        multiline: "below",
      }],
      // html теги - максимальная длина
      "vue/max-len": ["error", 120, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      // html теги - максимальное кол-во атрибутов в 1 строке
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: 1,
          multiline: 1,
        },
      ],
      // html теги - отступы
      // отступы у атрибута,
      // у верхнего тега,
      // закрывающего тега,
      // выравнивание атрибутов по вертикали
      "vue/html-indent": ["error", 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      }],
      "vue/html-comment-content-newline": "error",
      "vue/html-comment-indent": "error",
      // html теги Всегда само-закрываться если он пустой
      "vue/html-self-closing": ["error", {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
      }],
      // html теги - имя компонентов в PascalCase
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        { registeredComponentsOnly: false },
      ],
      // html теги - если элемент в одну строчку контент переносится
      "vue/singleline-html-element-content-newline": ["error", {
        ignoreWhenNoAttributes: false,
        ignoreWhenEmpty: false,
        ignores: ["pre", "textarea"],
      }],
      // отступы между template-script-style
      "vue/padding-line-between-blocks": ["error", "always"],
      // порядок тегов в компоненте template-script-style
      "vue/component-tags-order": ["error", {
        order: ["script", "template", "style"],
      }],
      // js - максимальная длина
      "max-len": [2, 120, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignorePattern: "true",
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      // js - желаемый шаблон конкатенации `${var}str`
      "prefer-template": 2,
      // js - бесполезная конкатенация
      "no-useless-concat": 2,
      // js - неиспользуемый переменные
      "no-unused-vars": 2,

      // js - требовать запятую в конце массива или объекта, если они мультистрочные
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "never",
          exports: "never",
          functions: "never",
        },
      ],

      // js - пробелы перед круглыми скобками в функции
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      // js - Запрещает newоператоры вне присваивания или сравнения.
      "no-new": 2,

      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
  },
];