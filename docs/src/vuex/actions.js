var AV = require('avoscloud-sdk');

AV.initialize('IsqV9oNn0Qf14oTG8VeQjnEo-gzGzoHsz', 'OLLDSIaSPh9CkzhKzF8RY6nE');

var modules = [
    {
        "name": "badges/badge",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/badges.html\">Badges</a> can notify you that there are new or unread messages or notifications. Add the new class to the badge to give it the background.",
        "props": [
            {
                "name": "label",
                "type": "{String}",
                "default": "''",
                "description": "badge label"
            },
            {
                "name": "new",
                "type": "{Boolean}",
                "default": "false",
                "description": "apply the new-style of this badge"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "badges in collections",
                "description": "you can put badges in collections by adding <code>badge</code> into the collection <code>links</code> object",
                "code": "<template>\r\n    <link-collection :links=\"links\"></link-collection>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example badges in collections\r\n     * @for badge\r\n     * @description you can put badges in collections by adding <code>badge</code> into the collection <code>links</code> object\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'link-collection': require('material-ui-vue/components/collections/link-collection.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                links: [\r\n                    {href: '#!', label: 'Inbox', badge: {label: '12', new: true}},\r\n                    {href: '#!', label: 'Outbox', badge: {label: '2', new: false}},\r\n                    {href: '#!', label: 'Draft'}\r\n                ]\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "badge",
                "demoComponentName": "badges-in-collections"
            },
            {
                "name": "badges in collections with slot",
                "description": "you can put badges in collections by adding child element of <code>link-collection</code> element",
                "code": "<template>\r\n    <link-collection>\r\n        <a href=\"#!\">Inbox<badge new>12</badge></a>\r\n        <a href=\"#!\">Outbox<badge>22</badge></a>\r\n        <a href=\"#!\">Draft<badge>2</badge></a>\r\n    </link-collection>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example badges in collections with slot\r\n     * @for badge\r\n     * @description you can put badges in collections by adding child element of <code>link-collection</code> element\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'badge': require('material-ui-vue/components/badges/badge.vue'),\r\n            'link-collection': require('material-ui-vue/components/collections/link-collection.vue')\r\n        }\r\n    }\r\n</script>",
                "componentName": "badge",
                "demoComponentName": "badges-in-collections-with-slot"
            },
            {
                "name": "badges in dropdown via slot",
                "description": "you can put badges in dropdown by adding child elements",
                "code": "<template>\r\n    <dropdown label=\"dropdown\">\r\n        <ul>\r\n            <li><a href=\"#!\">Inbox<badge new class=\"red\">12</badge></a></li>\r\n            <li><a href=\"#!\">Outbox</a></li>\r\n            <li><a href=\"#!\">Draft<badge label=\"3\"></badge></a></li>\r\n        </ul>\r\n    </dropdown>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example badges in dropdown via slot\r\n     * @for badge\r\n     * @description you can put badges in dropdown by adding child elements\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'badge': require('material-ui-vue/components/badges/badge.vue'),\r\n            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "badge",
                "demoComponentName": "badges-in-dropdown-with-slot"
            },
            {
                "name": "badges in dropdown via props",
                "description": "you can put badges in dropdown, by assigning <code>badge</code> attribute of dropdown item.",
                "code": "<template>\r\n    <dropdown label=\"dropdown\" :items=\"dropdownItems\"></dropdown>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example badges in dropdown via props\r\n     * @for badge\r\n     * @description you can put badges in dropdown, by assigning <code>badge</code> attribute of dropdown item.\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'badge': require('material-ui-vue/components/badges/badge.vue'),\r\n            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                dropdownItems: [\r\n                    {href: '#!', label: 'Inbox', badge: {label: '12', new: true}},\r\n                    {href: '#!', label: 'Outbox'},\r\n                    {href: '#!', label: 'Draft', badge: {label: '3', new: false}},\r\n                    {href: '#!', label: 'Deleted'}\r\n                ]\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "badge",
                "demoComponentName": "badges-in-dropdown"
            },
            {
                "name": "badges in navbar",
                "description": "you can put badges in navbar by adding <code>badge</code> element into <code>nav-item</code> element",
                "code": "<template>\r\n    <navbar logo=\"Material UI Vue\">\r\n        <nav-item><a href=\"#\">Vue<badge new>102</badge></a></nav-item>\r\n        <nav-item><a href=\"#\">React</a></nav-item>\r\n    </navbar>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example badges in navbar\r\n     * @for badge\r\n     * @description you can put badges in navbar by adding <code>badge</code> element into <code>nav-item</code> element\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'navbar': require('material-ui-vue/components/navbar/navbar.vue'),\r\n            'nav-item': require('material-ui-vue/components/navbar/nav-item.vue'),\r\n            'badge': require('material-ui-vue/components/badges/badge.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "badge",
                "demoComponentName": "badges-in-navbar"
            }
        ]
    },
    {
        "name": "breadcrumbs/breadcrumbs",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/breadcrumbs.html\">Breadcrumbs</a> are a good way to display your current location. This is usually used when you have multiple layers of content.",
        "props": [
            {
                "name": "crumbs",
                "type": "{Array}",
                "default": "function() {return [];}",
                "description": "example value: [{href: '#!', label: 'First'}, {href: '#!', label: 'Second'}, {href: '#!', label: 'Third'}]"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "with slot",
                "description": "you can init breadcrumbs by adding anchor as child elements",
                "code": "<template>\r\n    <breadcrumbs>\r\n        <a href=\"#!\">Top</a>\r\n        <a href=\"#!\">Middle</a>\r\n        <a href=\"#!\">Bottom</a>\r\n    </breadcrumbs>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example with slot\r\n     * @for breadcrumbs\r\n     * @description you can init breadcrumbs by adding anchor as child elements\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'breadcrumbs': require('material-ui-vue/components/breadcrumbs/breadcrumbs.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "breadcrumbs",
                "demoComponentName": "breadcrumbs-with-slot"
            },
            {
                "name": "basic usage",
                "description": "you can init breadcrumbs by assigning <code>crumbs</code> prop",
                "code": "<template>\r\n    <breadcrumbs :crumbs=\"crumbs\"></breadcrumbs>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example basic usage\r\n     * @for breadcrumbs\r\n     * @description you can init breadcrumbs by assigning <code>crumbs</code> prop\r\n     */\r\n    module.exports = {\r\n\r\n        components: {\r\n            'breadcrumbs': require('material-ui-vue/components/breadcrumbs/breadcrumbs.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                crumbs: [\r\n                    {href: '#!', label: 'Top'},\r\n                    {href: '#!', label: 'Middle'},\r\n                    {href: '#!', label: 'Bottom'}\r\n                ]\r\n            };\r\n        }\r\n    };\r\n</script>",
                "componentName": "breadcrumbs",
                "demoComponentName": "breadcrumbs"
            }
        ]
    },
    {
        "name": "cards/card-action",
        "author": "Jack Yang",
        "description": "a component for card-action",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "buttons/button",
        "author": "Jack Yang",
        "description": "There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.",
        "props": [],
        "methods": [],
        "examples": [
            {
                "name": "flat button",
                "description": "",
                "code": "<template>\r\n    <div>\r\n        <flat-button type=\"flat\" :light-wave=\"false\" class=\"waves-red\">flat button</flat-button>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example flat button\r\n     * @for button\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'flat-button': require('material-ui-vue/components/buttons/button.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "button",
                "demoComponentName": "flat-button"
            },
            {
                "name": "float button",
                "description": "",
                "code": "<template>\r\n    <div>\r\n        <float-button type=\"floating\" icon=\"add\" large class=\"red\"></float-button>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example float button\r\n     * @for button\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'float-button': require('material-ui-vue/components/buttons/button.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "button",
                "demoComponentName": "float-button"
            },
            {
                "name": "raised button",
                "description": "",
                "code": "<template>\r\n    <div>\r\n        <raised-button label=\"raised button\"></raised-button>\r\n        <raised-button>slot label button</raised-button>\r\n        <raised-button label=\"left icon button\" icon=\"edit\" icon-position=\"left\"></raised-button>\r\n        <raised-button label=\"right icon button\" icon=\"edit\" icon-position=\"right\"></raised-button>\r\n        <raised-button label=\"large button\" large></raised-button>\r\n        <raised-button label=\"disabled button\" disabled></raised-button>\r\n        <raised-button label=\"no waves effect button\" :waves-effect=\"false\"></raised-button>\r\n        <raised-button label=\"no light waves button\" :light-wave=\"false\"></raised-button>\r\n        <raised-button label=\"styled button\" class=\"red black-text\"></raised-button>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example raised button\r\n     * @for button\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'raised-button': require('material-ui-vue/components/buttons/button.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "button",
                "demoComponentName": "raised-button"
            }
        ]
    },
    {
        "name": "cards/card-content",
        "author": "Jack Yang",
        "description": "a component for card-content",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "cards/card-image",
        "author": "Jack Yang",
        "description": "this is a component to create image card",
        "props": [
            {
                "name": "src",
                "type": "{String}",
                "default": "null",
                "description": "src of the image"
            },
            {
                "name": "title",
                "type": "{String}",
                "default": "null",
                "description": "title of the image"
            },
            {
                "name": "activator",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this image is the activator in card reveal"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "card image",
                "description": "",
                "code": "<template>\r\n    <div class=\"col s12 m6\">\r\n        <card>\r\n            <card-image :src=\"imageUrl\">\r\n                <card-title>Card Title</card-title>\r\n            </card-image>\r\n            <card-content>\r\n                <p>this is image description</p>\r\n            </card-content>\r\n            <card-action>\r\n                <a href=\"#!\">Link A</a>\r\n            </card-action>\r\n        </card>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example card image\r\n     * @for card-image\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'card': require('material-ui-vue/components/cards/card.vue'),\r\n            'card-title': require('material-ui-vue/components/cards/card-title.vue'),\r\n            'card-content': require('material-ui-vue/components/cards/card-content.vue'),\r\n            'card-action': require('material-ui-vue/components/cards/card-action.vue'),\r\n            'card-image': require('material-ui-vue/components/cards/card-image.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                imageUrl: 'http://materializecss.com/images/sample-1.jpg'\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "card-image",
                "demoComponentName": "image-card"
            }
        ]
    },
    {
        "name": "buttons/fixed-action-button",
        "author": "Jack Yang",
        "description": "If you want a fixed floating action button, you can add multiple actions that will appear on hover. Our demo is in the bottom righthand corner of the page.",
        "props": [
            {
                "name": "horizontal",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this is a horizontal FAB"
            },
            {
                "name": "clickOnly",
                "type": "{Boolean}",
                "default": "false",
                "description": "if you want to disable the hover behaviour, and instead toggle the FAB menu when the user clicks on the large button (works great on mobile!), just add the click-to-toggle class to the FAB"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "click only FAB",
                "description": "",
                "code": "<template>\r\n    <fixed-action-button icon=\"edit\" :click-only=\"true\">\r\n        <ul>\r\n            <li><btn type=\"floating\" class=\"red\" icon=\"edit\"></btn></li>\r\n            <li><btn type=\"floating\" class=\"yellow\" icon=\"edit\"></btn></li>\r\n            <li><btn type=\"floating\" class=\"green\" icon=\"edit\"></btn></li>\r\n            <li><btn type=\"floating\" class=\"blue\" icon=\"edit\"></btn></li>\r\n        </ul>\r\n    </fixed-action-button>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example click only FAB\r\n     * @for fixed-action-button\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'btn': require('material-ui-vue/components/buttons/button.vue'),\r\n            'fixed-action-button': require('material-ui-vue/components/buttons/fixed-action-button.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "fixed-action-button",
                "demoComponentName": "click-only-fab"
            },
            {
                "name": "horizontal FAB",
                "description": "",
                "code": "<template>\r\n    <fixed-action-button icon=\"edit\" :horizontal=\"true\">\r\n        <ul>\r\n            <li><btn type=\"floating\" class=\"red\" icon=\"edit\"></btn></li>\r\n            <li><btn type=\"floating\" class=\"yellow\" icon=\"edit\"></btn></li>\r\n            <li><btn type=\"floating\" class=\"green\" icon=\"edit\"></btn></li>\r\n            <li><btn type=\"floating\" class=\"blue\" icon=\"edit\"></btn></li>\r\n        </ul>\r\n    </fixed-action-button>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example horizontal FAB\r\n     * @for fixed-action-button\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'btn': require('material-ui-vue/components/buttons/button.vue'),\r\n            'fixed-action-button': require('material-ui-vue/components/buttons/fixed-action-button.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "fixed-action-button",
                "demoComponentName": "horizontal-fab"
            },
            {
                "name": "vertical FAB",
                "description": "",
                "code": "<template>\r\n    <fixed-action-button icon=\"edit\" :active=\"true\">\r\n        <ul>\r\n            <li><btn type=\"floating\" class=\"red\" icon=\"edit\"></btn></li>\r\n            <li><btn type=\"floating\" class=\"yellow\" icon=\"edit\"></btn></li>\r\n            <li><btn type=\"floating\" class=\"green\" icon=\"edit\"></btn></li>\r\n            <li><btn type=\"floating\" class=\"blue\" icon=\"edit\"></btn></li>\r\n        </ul>\r\n    </fixed-action-button>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example vertical FAB\r\n     * @for fixed-action-button\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'btn': require('material-ui-vue/components/buttons/button.vue'),\r\n            'fixed-action-button': require('material-ui-vue/components/buttons/fixed-action-button.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "fixed-action-button",
                "demoComponentName": "vertical-fab"
            }
        ]
    },
    {
        "name": "cards/card-panel",
        "author": "Jack Yang",
        "description": "a component for card-panel",
        "props": [],
        "methods": [],
        "examples": [
            {
                "name": "basic card panel",
                "description": "",
                "code": "<template>\r\n    <div class=\"col s12 m6\">\r\n        <card-panel class=\"teal\">\r\n            <span class=\"white-text\">I am a very simple card. I am good at containing small bits of information.\r\n              I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\r\n            </span>\r\n        </card-panel>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example basic card panel\r\n     * @for card-panel\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'card-panel': require('material-ui-vue/components/cards/card-panel.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "card-panel",
                "demoComponentName": "card-panel"
            }
        ]
    },
    {
        "name": "cards/card-reveal",
        "author": "Jack Yang",
        "description": "a component for card-reveal",
        "props": [],
        "methods": [],
        "examples": [
            {
                "name": "card reveal",
                "description": "",
                "code": "<template>\r\n    <div class=\"col s12 m6\">\r\n        <card :revealed=\"false\">\r\n            <card-image :src=\"imageUrl\" activator></card-image>\r\n            <card-content>\r\n                <card-title class=\"red-text\">Card Title</card-title>\r\n            </card-content>\r\n            <card-reveal>\r\n                <card-title class=\"blue-text\">Reveal title</card-title>\r\n                <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n            </card-reveal>\r\n        </card>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example card reveal\r\n     * @for card-reveal\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'card': require('material-ui-vue/components/cards/card.vue'),\r\n            'card-title': require('material-ui-vue/components/cards/card-title.vue'),\r\n            'card-content': require('material-ui-vue/components/cards/card-content.vue'),\r\n            'card-action': require('material-ui-vue/components/cards/card-action.vue'),\r\n            'card-image': require('material-ui-vue/components/cards/card-image.vue'),\r\n            'card-reveal': require('material-ui-vue/components/cards/card-reveal.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                imageUrl: 'http://materializecss.com/images/sample-1.jpg'\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "card-reveal",
                "demoComponentName": "card-reveal"
            }
        ]
    },
    {
        "name": "cards/card-title",
        "author": "Jack Yang",
        "description": "a component for card-title",
        "props": [
            {
                "name": "title",
                "type": "{String}",
                "default": "null",
                "description": "title of the card"
            }
        ],
        "methods": [],
        "examples": []
    },
    {
        "name": "cards/card",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/cards.html\">Cards</a> are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length",
        "props": [
            {
                "name": "size",
                "type": "{String}",
                "default": "''",
                "description": "if you want to have uniformly sized cards, you can use our premade size classes. Just add the size class in addition to the card class. Possible values: 'small', 'medium', 'large', and by default ''"
            },
            {
                "name": "revealed",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate the status for card reveal"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "basic card",
                "description": "",
                "code": "<template>\r\n    <div class=\"col s12 m6\">\r\n        <card class=\"blue-grey darken-1\">\r\n            <card-content>\r\n                <card-title class=\"red-text\">Card Title</card-title>\r\n                <p class=\"white-text\">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\r\n            </card-content>\r\n            <card-action>\r\n                <a href=\"#!\">This is a link</a>\r\n                <a href=\"#!\">This is a link</a>\r\n            </card-action>\r\n        </card>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example basic card\r\n     * @for card\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'card': require('material-ui-vue/components/cards/card.vue'),\r\n            'card-title': require('material-ui-vue/components/cards/card-title.vue'),\r\n            'card-content': require('material-ui-vue/components/cards/card-content.vue'),\r\n            'card-action': require('material-ui-vue/components/cards/card-action.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "card",
                "demoComponentName": "basic-card"
            },
            {
                "name": "different size of cards",
                "description": "",
                "code": "<template>\r\n    <div class=\"col s12 m6\">\r\n        <card size=\"small\">\r\n            <card-content>\r\n                <card-title>Small Card</card-title>\r\n                <p>This is a small card demo.</p>\r\n            </card-content>\r\n            <card-action>\r\n                <a href=\"#!\">This is a link</a>\r\n            </card-action>\r\n        </card>\r\n        <card size=\"medium\">\r\n            <card-content>\r\n                <card-title>Medium Card</card-title>\r\n                <p>This is a medium card demo.</p>\r\n            </card-content>\r\n            <card-action>\r\n                <a href=\"#!\">This is a link</a>\r\n            </card-action>\r\n        </card>\r\n        <card size=\"large\">\r\n            <card-content>\r\n                <card-title>Large Card</card-title>\r\n                <p>This is a large card demo.</p>\r\n            </card-content>\r\n            <card-action>\r\n                <a href=\"#!\">This is a link</a>\r\n            </card-action>\r\n        </card>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example different size of cards\r\n     * @for card\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'card': require('material-ui-vue/components/cards/card.vue'),\r\n            'card-title': require('material-ui-vue/components/cards/card-title.vue'),\r\n            'card-content': require('material-ui-vue/components/cards/card-content.vue'),\r\n            'card-action': require('material-ui-vue/components/cards/card-action.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "card",
                "demoComponentName": "card-size"
            }
        ]
    },
    {
        "name": "chips/chip",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/chips.html\">Chips</a> can be used to represent small blocks of information. They are most commonly used either for contacts or for tags.",
        "props": [
            {
                "name": "label",
                "type": "{String}",
                "default": "''",
                "description": "label of the chip"
            },
            {
                "name": "removable",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this chip is removable or not"
            },
            {
                "name": "image",
                "type": "{String}",
                "default": "''",
                "description": "src of the chip image"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "chip with image",
                "description": "",
                "code": "<template>\r\n    <chip label=\"Jane Joe\" :image=\"imageUrl\"></chip>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example chip with image\r\n     * @for chip\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'chip': require('material-ui-vue/components/chips/chip.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                imageUrl: 'http://materializecss.com/images/yuna.jpg'\r\n            };\r\n        }\r\n    };\r\n</script>",
                "componentName": "chip",
                "demoComponentName": "image-chip"
            },
            {
                "name": "removable chip",
                "description": "",
                "code": "<template>\r\n    <chip label=\"Vue.js\" removable></chip>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example removable chip\r\n     * @for chip\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'chip': require('material-ui-vue/components/chips/chip.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "chip",
                "demoComponentName": "removable-chip"
            }
        ]
    },
    {
        "name": "collapsible/collapsible-body",
        "author": "Jack Yang",
        "description": "a component for collapsible-body",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "collapsible/collapsible-header",
        "author": "Jack Yang",
        "description": "a component for collapsible-header",
        "props": [
            {
                "name": "label",
                "type": "{String}",
                "default": "''",
                "description": ""
            },
            {
                "name": "icon",
                "type": "{String}",
                "default": "''",
                "description": "the icon of the collapsible-header"
            },
            {
                "name": "iconPosition",
                "type": "{String}",
                "default": "'left'",
                "description": "indicate the position of the icon. Possible values: 'left', 'right'"
            },
            {
                "name": "active",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate the collapsible open status"
            }
        ],
        "methods": [],
        "examples": []
    },
    {
        "name": "collapsible/collapsible-item",
        "author": "Jack Yang",
        "description": "a component for collapsible-item",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "collapsible/collapsible",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/collapsible.html\">Collapsibles</a> are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.",
        "props": [
            {
                "name": "behavior",
                "type": "{String}",
                "default": "'accordion'",
                "description": "indicate the behavior of the collapsible. Possible values: 'accordion', 'expandable'"
            },
            {
                "name": "popout",
                "type": "{Boolean}",
                "default": "false",
                "description": "set as true to create a popout collapsible"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "accordion collapsible",
                "description": "",
                "code": "<template>\r\n    <collapsible>\r\n        <collapsible-item>\r\n            <collapsible-header label=\"First\" icon=\"filter_drama\"></collapsible-header>\r\n            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>\r\n        </collapsible-item>\r\n        <collapsible-item>\r\n            <collapsible-header label=\"Second\" icon=\"place\"></collapsible-header>\r\n            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>\r\n        </collapsible-item>\r\n        <collapsible-item>\r\n            <collapsible-header label=\"Third\" icon=\"whatshot\"></collapsible-header>\r\n            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>\r\n        </collapsible-item>\r\n    </collapsible>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example accordion collapsible\r\n     * @for collapsible\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'collapsible': require('material-ui-vue/components/collapsible/collapsible.vue'),\r\n            'collapsible-body': require('material-ui-vue/components/collapsible/collapsible-body.vue'),\r\n            'collapsible-header': require('material-ui-vue/components/collapsible/collapsible-header.vue'),\r\n            'collapsible-item': require('material-ui-vue/components/collapsible/collapsible-item.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "collapsible",
                "demoComponentName": "accordion-collapsible"
            },
            {
                "name": "expandable collapsible",
                "description": "",
                "code": "<template>\r\n    <collapsible behavior=\"expandable\">\r\n        <collapsible-item>\r\n            <collapsible-header active label=\"First\" icon=\"filter_drama\"></collapsible-header>\r\n            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>\r\n        </collapsible-item>\r\n        <collapsible-item>\r\n            <collapsible-header label=\"Second\" icon=\"place\"></collapsible-header>\r\n            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>\r\n        </collapsible-item>\r\n        <collapsible-item>\r\n            <collapsible-header label=\"Third\" icon=\"whatshot\"></collapsible-header>\r\n            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>\r\n        </collapsible-item>\r\n    </collapsible>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example expandable collapsible\r\n     * @for collapsible\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'collapsible': require('material-ui-vue/components/collapsible/collapsible.vue'),\r\n            'collapsible-body': require('material-ui-vue/components/collapsible/collapsible-body.vue'),\r\n            'collapsible-header': require('material-ui-vue/components/collapsible/collapsible-header.vue'),\r\n            'collapsible-item': require('material-ui-vue/components/collapsible/collapsible-item.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "collapsible",
                "demoComponentName": "expandable-collapsible"
            },
            {
                "name": "popout collapsible",
                "description": "",
                "code": "<template>\r\n    <collapsible popout>\r\n        <collapsible-item>\r\n            <collapsible-header active label=\"First\" icon=\"filter_drama\"></collapsible-header>\r\n            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>\r\n        </collapsible-item>\r\n        <collapsible-item>\r\n            <collapsible-header label=\"Second\" icon=\"place\"></collapsible-header>\r\n            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>\r\n        </collapsible-item>\r\n        <collapsible-item>\r\n            <collapsible-header label=\"Third\" icon=\"whatshot\"></collapsible-header>\r\n            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>\r\n        </collapsible-item>\r\n    </collapsible>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example popout collapsible\r\n     * @for collapsible\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'collapsible': require('material-ui-vue/components/collapsible/collapsible.vue'),\r\n            'collapsible-body': require('material-ui-vue/components/collapsible/collapsible-body.vue'),\r\n            'collapsible-header': require('material-ui-vue/components/collapsible/collapsible-header.vue'),\r\n            'collapsible-item': require('material-ui-vue/components/collapsible/collapsible-item.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "collapsible",
                "demoComponentName": "popout-collapsible"
            }
        ]
    },
    {
        "name": "collections/collection-header",
        "author": "Jack Yang",
        "description": "a component for collection-header",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "collections/collection-item",
        "author": "Jack Yang",
        "description": "a component for collection-item",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "collections/collection",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/collections.html\">Collections</a> allow you to group list objects together.",
        "props": [
            {
                "name": "withHeader",
                "type": "{Boolean}",
                "default": "false",
                "description": "to indicate the collection with header or not"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "basic collection",
                "description": "",
                "code": "<template>\r\n    <collection>\r\n        <collection-item>\r\n            <div>\r\n                Vue\r\n                <a href=\"#!\" class=\"secondary-content\">\r\n                    <icon value=\"send\"></icon>\r\n                </a>\r\n            </div>\r\n        </collection-item>\r\n        <collection-item>React</collection-item>\r\n        <collection-item>Angular</collection-item>\r\n        <collection-item>Meteor</collection-item>\r\n        <collection-item dismissable>This one is dismissable</collection-item>\r\n    </collection>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example basic collection\r\n     * @for collection\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'collection': require('material-ui-vue/components/collections/collection.vue'),\r\n            'collection-item': require('material-ui-vue/components/collections/collection-item.vue'),\r\n            'icon': require('material-ui-vue/components/icons/icon.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "collection",
                "demoComponentName": "basic-collection"
            },
            {
                "name": "avatar collection",
                "description": "",
                "code": "<template>\r\n    <collection>\r\n        <collection-item avatar>\r\n            <img :src=\"imageUrl\" alt=\"\" class=\"circle\">\r\n            <span class=\"title\">Title</span>\r\n            <p>First Line <br>\r\n                Second Line\r\n            </p>\r\n            <a href=\"#!\" class=\"secondary-content\"><icon value=\"grade\"></icon></a>\r\n        </collection-item>\r\n        <collection-item avatar>\r\n            <icon value=\"folder\" class=\"circle\"></icon>\r\n            <span class=\"title\">Title</span>\r\n            <p>First Line <br>\r\n                Second Line\r\n            </p>\r\n            <a href=\"#!\" class=\"secondary-content\"><icon value=\"grade\"></icon></a>\r\n        </collection-item>\r\n    </collection>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example avatar collection\r\n     * @for collection\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'collection': require('material-ui-vue/components/collections/collection.vue'),\r\n            'collection-item': require('material-ui-vue/components/collections/collection-item.vue'),\r\n            'icon': require('material-ui-vue/components/icons/icon.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                imageUrl: 'http://materializecss.com/images/yuna.jpg'\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "collection",
                "demoComponentName": "avatar-collection"
            },
            {
                "name": "collection with header",
                "description": "",
                "code": "<template>\r\n    <collection with-header>\r\n        <collection-header><h4>Frameworks</h4></collection-header>\r\n        <collection-item>Vue</collection-item>\r\n        <collection-item>React</collection-item>\r\n        <collection-item>Angular</collection-item>\r\n        <collection-item>Meteor</collection-item>\r\n    </collection>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example collection with header\r\n     * @for collection\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'collection': require('material-ui-vue/components/collections/collection.vue'),\r\n            'collection-header': require('material-ui-vue/components/collections/collection-header.vue'),\r\n            'collection-item': require('material-ui-vue/components/collections/collection-item.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "collection",
                "demoComponentName": "header-collection"
            }
        ]
    },
    {
        "name": "collections/link-collection",
        "author": "Jack Yang",
        "description": "a component for link collection",
        "props": [
            {
                "name": "links",
                "type": "{Array}",
                "default": "function() {return [];}",
                "description": "links data for rendering. Example value: [{href: '#!', label: 'Link A', active: true}, {href: '#!', label: 'Link B', active: false, badge: {label: '1', new: false}}]"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "link collection with slot",
                "description": "",
                "code": "<template>\r\n    <link-collection>\r\n        <a href=\"#!\" class=\"active\">Vue</a>\r\n        <a href=\"#!\">React</a>\r\n        <a href=\"#!\">Angular</a>\r\n    </link-collection>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example link collection with slot\r\n     * @for link-collection\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'link-collection': require('material-ui-vue/components/collections/link-collection.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "link-collection",
                "demoComponentName": "link-collection-with-slot"
            },
            {
                "name": "link collection",
                "description": "",
                "code": "<template>\r\n    <link-collection :links=\"links\"></link-collection>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example link collection\r\n     * @for link-collection\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'link-collection': require('material-ui-vue/components/collections/link-collection.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                links: [\r\n                    {href: '#!', label: 'Vue', active: true},\r\n                    {href: '#!', label: 'Angular', active: false},\r\n                    {href: '#!', label: 'React', active: false}\r\n                ]\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "link-collection",
                "demoComponentName": "link-collection"
            }
        ]
    },
    {
        "name": "dropdown/dropdown",
        "author": "Jack Yang",
        "description": "Add a <a href=\"http://materializecss.com/dropdown.html\">dropdown</a> list to any button. These button props can't be changed for a dropdown: waves-effect, light-wave and disabled.",
        "props": [],
        "methods": [],
        "examples": [
            {
                "name": "dropdown with click",
                "description": "",
                "code": "<template>\r\n    <dropdown :items=\"items\" label=\"Click to Drop Me!\" :hover=\"false\"></dropdown>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example dropdown with click\r\n     * @for dropdown\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                items: [\r\n                    {href: '#!', label: 'One'},\r\n                    {href: '#!', label: 'Two'},\r\n                    {divider: true},\r\n                    {href: '#!', label: 'Three'},\r\n                ]\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "dropdown",
                "demoComponentName": "click-dropdown"
            },
            {
                "name": "dropdown with slot",
                "description": "",
                "code": "<template>\r\n    <dropdown label=\"Dropdown with slot\">\r\n        <ul>\r\n            <li><a href=\"#!\">One</a></li>\r\n            <li class=\"divider\"></li>\r\n            <li><a href=\"#!\">Two</a></li>\r\n            <li><a href=\"#!\">Three</a></li>\r\n        </ul>\r\n    </dropdown>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example dropdown with slot\r\n     * @for dropdown\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "dropdown",
                "demoComponentName": "dropdown-with-slot"
            },
            {
                "name": "icon, and large dropdown",
                "description": "",
                "code": "<template>\r\n    <dropdown :items=\"items\" label=\"Drop Me!\" icon=\"edit\" icon-position=\"right\" large></dropdown>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example icon, and large dropdown\r\n     * @for dropdown\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                items: [\r\n                    {href: '#!', label: 'One'},\r\n                    {href: '#!', label: 'Two'},\r\n                    {divider: true},\r\n                    {href: '#!', label: 'Three'},\r\n                ]\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "dropdown",
                "demoComponentName": "icon-large-dropdown"
            },
            {
                "name": "basic dropdown",
                "description": "",
                "code": "<template>\r\n    <dropdown :items=\"items\" label=\"Drop Me!\" icon=\"edit\" icon-position=\"right\" :large=\"true\"></dropdown>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example basic dropdown\r\n     * @for dropdown\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                items: [\r\n                    {href: '#!', label: 'One'},\r\n                    {href: '#!', label: 'Two'},\r\n                    {divider: true},\r\n                    {href: '#!', label: 'Three'},\r\n                ]\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "dropdown",
                "demoComponentName": "dropdown"
            }
        ]
    },
    {
        "name": "footer/footer",
        "author": "Jack Yang",
        "description": "a component for footer",
        "props": [],
        "methods": [],
        "examples": [
            {
                "name": "footer with copyright",
                "description": "",
                "code": "<template>\r\n    <mui-footer>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col l6 s12\">\r\n                    <h5 class=\"white-text\">Footer Content</h5>\r\n                    <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\r\n                </div>\r\n                <div class=\"col l4 offset-l2 s12\">\r\n                    <h5 class=\"white-text\">Links</h5>\r\n                    <ul>\r\n                        <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\r\n                        <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\r\n                        <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\r\n                        <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <footer-copyright>\r\n            <div class=\"container\">\r\n                © 2014 Copyright Text\r\n                <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\r\n            </div>\r\n        </footer-copyright>\r\n    </mui-footer>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example footer with copyright\r\n     * @for footer\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'mui-footer': require('material-ui-vue/components/footer/footer.vue'),\r\n            'footer-copyright': require('material-ui-vue/components/footer/footer-copyright.vue')\r\n        }\r\n    }\r\n</script>",
                "componentName": "footer",
                "demoComponentName": "footer-demo"
            }
        ]
    },
    {
        "name": "footer/footer-copyright",
        "author": "Jack Yang",
        "description": "a component for footer-copyright",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "forms/checkbox",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/forms.html\">forms</a> checkbox component",
        "props": [
            {
                "name": "selected",
                "type": "{Array}",
                "default": "function() {return [];}",
                "description": "indicate the items been selected. Value should come from value attribute of item object. Example value: ['red', 'green']"
            },
            {
                "name": "items",
                "type": "{Array}",
                "default": "function() {return [];}",
                "description": "items of the checkbox. Example value: [{label: 'RED', value: 'red', disabled: false}, {label: 'GREEN', value: 'green', disabled: true}]"
            },
            {
                "name": "filledIn",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate use filled-in style or not"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "basic checkbox",
                "description": "",
                "code": "<template>\r\n    <form>\r\n        <checkbox :items=\"items\" :selected=\"selected\"></checkbox>\r\n    </form>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example basic checkbox\r\n     * @for checkbox\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'checkbox': require('material-ui-vue/components/forms/checkbox.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                items: [\r\n                    {label: 'Green', value: 'green'},\r\n                    {label: 'Red', value: 'red'},\r\n                    {label: 'Yellow', value: 'yellow', disabled: true},\r\n                    {label: 'Blue', value: 'blue'}\r\n                ],\r\n                selected: ['green', 'red', 'yellow']\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "checkbox",
                "demoComponentName": "checkbox-demo"
            }
        ]
    },
    {
        "name": "forms/date-picker",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/forms.html\">forms</a> date picker component",
        "props": [
            {
                "name": "label",
                "type": "{String}",
                "default": "''",
                "description": "label of the date picker input controller"
            },
            {
                "name": "icon",
                "type": "{String}",
                "default": "''",
                "description": "icon of the date picker input controller"
            },
            {
                "name": "date",
                "type": "{Date}",
                "default": "new Date()",
                "description": "date value of the date picker"
            },
            {
                "name": "pickerOptions",
                "type": "{Object}",
                "default": "''",
                "description": "options for pickdate.js"
            },
            {
                "name": "opened",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this picker popup is opened or not"
            },
            {
                "name": "disabled",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this picker is disabled or not"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "basic date-picker",
                "description": "",
                "code": "<template>\r\n    <form>\r\n        <date-picker label=\"birthday\" icon=\"today\" :date=\"new Date()\"></date-picker>\r\n    </form>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example basic date-picker\r\n     * @for date-picker\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'date-picker': require('material-ui-vue/components/forms/date-picker.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "date-picker",
                "demoComponentName": "date-picker-demo"
            }
        ]
    },
    {
        "name": "forms/range",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/forms.html\">forms</a> range component",
        "props": [
            {
                "name": "min",
                "type": "{Number}",
                "default": "0",
                "description": "set the min of range"
            },
            {
                "name": "max",
                "type": "{Number}",
                "default": "100",
                "description": "set the max of range"
            },
            {
                "name": "value",
                "type": "{Number}",
                "default": "50",
                "description": "set the current value of range"
            },
            {
                "name": "disabled",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this range controller is disabled or not"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "basic range and disabled range",
                "description": "",
                "code": "<template>\r\n    <form>\r\n        <div class=\"row\">\r\n            <range min=\"0\" max=\"100\" value=\"61\"></range>\r\n            <range min=\"0\" max=\"100\" value=\"10\" disabled></range>\r\n        </div>\r\n    </form>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example basic range and disabled range\r\n     * @for range\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'range': require('material-ui-vue/components/forms/range.vue')\r\n        }\r\n    }\r\n</script>",
                "componentName": "range",
                "demoComponentName": "range-demo"
            }
        ]
    },
    {
        "name": "forms/radio",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/forms.html\">forms</a> radio component",
        "props": [
            {
                "name": "group",
                "type": "{String}",
                "default": "''",
                "description": "the group name of this radios"
            },
            {
                "name": "withGap",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate apply with-gap style or not"
            },
            {
                "name": "selected",
                "type": "{String}",
                "default": "''",
                "description": "indicate which item is selected. Value should come from value attribute of item object. Example value: 'green'"
            },
            {
                "name": "items",
                "type": "{Array}",
                "default": "function() {return [];}",
                "description": "radio items data. Example value: [{label: 'RED', value: 'red', disabled: false}, {label: 'GREEN', value: 'green', disabled: true}]"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "basic radio",
                "description": "",
                "code": "<template>\r\n    <form>\r\n        <radio group=\"r1\" :items=\"items\" selected=\"red\"></radio>\r\n    </form>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example basic radio\r\n     * @for radio\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'radio': require('material-ui-vue/components/forms/radio.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                items: [\r\n                    {label: 'Green', value: 'green'},\r\n                    {label: 'Red', value: 'red'},\r\n                    {label: 'Yellow', value: 'yellow', disabled: true},\r\n                    {label: 'Blue', value: 'blue'}\r\n                ]\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "radio",
                "demoComponentName": "radio-demo"
            }
        ]
    },
    {
        "name": "forms/select-field",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/forms.html\">forms</a> select field component",
        "props": [
            {
                "name": "label",
                "type": "{String}",
                "default": "''",
                "description": "label of select field"
            },
            {
                "name": "multiple",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this is a multiple select field or not"
            },
            {
                "name": "disabled",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this select field is disabled or not"
            },
            {
                "name": "options",
                "type": "{Array}",
                "default": "function() {return [];}",
                "description": "options of the select field. Example value: [{value: '0', label: 'zero', disabled: false, icon: 'path/to/image.jpg'}, {value: '1', label: 'one', disabled: false, icon: 'path/to/image.jpg'}]"
            },
            {
                "name": "groupOptions",
                "type": "{Object}",
                "default": "null",
                "description": "group options of the select field. Example value: {g1: [{value: '0', label: 'zero', disabled: false}, {value: '1', label: 'one', disabled: false}], g2: [{value: '2', label: 'two', disabled: false}, {value: '3', label: 'three', disabled: false}]}"
            },
            {
                "name": "selected",
                "type": "{Array | String}",
                "default": "''",
                "description": "value been select. It could be a string value or an array of string values. Values should come from value attribute of item object."
            },
            {
                "name": "icons",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate options with icons"
            },
            {
                "name": "iconPosition",
                "type": "{String}",
                "default": "'left'",
                "description": "position of option icon. Possible values: 'left' and 'right'"
            },
            {
                "name": "circleIcon",
                "type": "{Boolean}",
                "default": "true",
                "description": "apply circle icon style or not"
            },
            {
                "name": "browserDefault",
                "type": "{Boolean}",
                "default": "false",
                "description": "use browser default style or not"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "select field demos",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <form class=\"col s12\">\r\n            <select-field class=\"col s12\" label=\"single selection\" :options=\"options\"></select-field>\r\n            <select-field class=\"col s12\" label=\"multiple selection\" :options=\"options\" multiple></select-field>\r\n            <select-field class=\"col s12\" label=\"group selection\" :group-options=\"groupOptions\"></select-field>\r\n            <select-field class=\"col s6\" label=\"image selection style 1\" :options=\"imageOptions\" icons></select-field>\r\n            <select-field class=\"col s6\" label=\"image selection style 2\" :options=\"imageOptions\" icons icon-position=\"right\"></select-field>\r\n            <select-field class=\"col s12\" label=\"disabled selection\" :options=\"options\" disabled></select-field>\r\n        </form>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example select field demos\r\n     * @for select-field\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'select-field': require('material-ui-vue/components/forms/select-field.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                options: [\r\n                    {label: 'Choose your option', value: '', disabled: true, selected: true},\r\n                    {label: 'Option 1', value: '01'},\r\n                    {label: 'Option 2', value: '02'},\r\n                    {label: 'Option 3', value: '03'}\r\n                ],\r\n                groupOptions: {\r\n                    team1: [\r\n                        {label: 'Option 1', value: 't01'},\r\n                        {label: 'Option 2', value: 't02'}\r\n                    ],\r\n                    team2: [\r\n                        {label: 'Option 1', value: 't11'},\r\n                        {label: 'Option 2', value: 't12'}\r\n                    ]\r\n                },\r\n                imageOptions: [\r\n                    {label: 'Choose your option', value: '', disabled: true, selected: true},\r\n                    {label: 'Option 1', value: '01', icon: 'http://materializecss.com/images/yuna.jpg'},\r\n                    {label: 'Option 2', value: '02', icon: 'http://materializecss.com/images/yuna.jpg'},\r\n                    {label: 'Option 3', value: '03', icon: 'http://materializecss.com/images/yuna.jpg'}\r\n                ]\r\n            };\r\n        }\r\n    };\r\n</script>",
                "componentName": "select-field",
                "demoComponentName": "select-field-demo"
            }
        ]
    },
    {
        "name": "forms/switch",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/forms.html\">forms</a> switch component",
        "props": [
            {
                "name": "rightLabel",
                "type": "{String}",
                "default": "''",
                "description": "right label of switch"
            },
            {
                "name": "leftLabel",
                "type": "{String}",
                "default": "''",
                "description": "left label of switch"
            },
            {
                "name": "value",
                "type": "{Boolean}",
                "default": "false",
                "description": "value of switch. Set true means switch on. Set false means switch off"
            },
            {
                "name": "disabled",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate the switch disabled or not"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "switch demos",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <switch right-label=\"on\" left-label=\"off\" :value=\"true\"></switch>\r\n    </div>\r\n    <div class=\"row\">\r\n        <switch right-label=\"on\" left-label=\"off\" :value=\"false\" disabled></switch>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example switch demos\r\n     * @for switch\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'switch': require('material-ui-vue/components/forms/switch.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "switch",
                "demoComponentName": "switch-demo"
            }
        ]
    },
    {
        "name": "forms/text-area",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/forms.html\">forms</a> text area component",
        "props": [
            {
                "name": "label",
                "type": "{String}",
                "default": "''",
                "description": "label of text area controller"
            },
            {
                "name": "value",
                "type": "{String}",
                "default": "''",
                "description": "text value of text area controller"
            },
            {
                "name": "icon",
                "type": "{String}",
                "default": "''",
                "description": "icon of text area controller"
            },
            {
                "name": "length",
                "type": "{Number}",
                "default": "null",
                "description": "length restriction of text area controller"
            },
            {
                "name": "validate",
                "type": "{Boolean}",
                "default": "false",
                "description": "enable text area validate or not"
            },
            {
                "name": "errorMessage",
                "type": "{String}",
                "default": "''",
                "description": "error message content"
            },
            {
                "name": "successMessage",
                "type": "{String}",
                "default": "''",
                "description": "success message content"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "text-area demo",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <form class=\"col s12\">\r\n            <div class=\"row\">\r\n                <text-area class=\"col s12\"\r\n                           label=\"textarea\"\r\n                           value=\"this is the text content\"\r\n                           icon=\"mode_edit\"></text-area>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example text-area demo\r\n     * @for text-area\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'text-area': require('material-ui-vue/components/forms/text-area.vue')\r\n        }\r\n    }\r\n</script>",
                "componentName": "text-area",
                "demoComponentName": "text-area-demo"
            }
        ]
    },
    {
        "name": "forms/text-field",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/forms.html\">forms</a> text field component",
        "props": [
            {
                "name": "label",
                "type": "{String}",
                "default": "''",
                "description": "label of text field"
            },
            {
                "name": "value",
                "type": "{String}",
                "default": "''",
                "description": "value of text field"
            },
            {
                "name": "placeholder",
                "type": "{String}",
                "default": "''",
                "description": "placeholder of text field"
            },
            {
                "name": "length",
                "type": "{Number}",
                "default": "null",
                "description": "length of text field"
            },
            {
                "name": "type",
                "type": "{String}",
                "default": "'text'",
                "description": "input type of text field"
            },
            {
                "name": "disabled",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate text field is disabled or not"
            },
            {
                "name": "icon",
                "type": "{String}",
                "default": "''",
                "description": "icon of text field"
            },
            {
                "name": "validate",
                "type": "{Boolean}",
                "default": "false",
                "description": "enable field validate or not"
            },
            {
                "name": "errorMessage",
                "type": "{String}",
                "default": "''",
                "description": "error message content"
            },
            {
                "name": "successMessage",
                "type": "{String}",
                "default": "''",
                "description": "success message content"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "text-field demos",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <form class=\"col s12\">\r\n            <div class=\"row\">\r\n                <text-field class=\"col s6\" placeholder=\"Placeholder\" label=\"First Name\"></text-field>\r\n                <text-field class=\"col s6\" placeholder=\"Placeholder\" label=\"Last Name\"></text-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <text-field class=\"col s12\" value=\"I am not editable\" label=\"disabled field\" disabled></text-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <text-field class=\"col s12\" type=\"password\" label=\"password\"></text-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <text-field class=\"col s12\" type=\"email\"\r\n                            label=\"email with validation\"\r\n                            icon=\"email\"\r\n                            value=\"yg@email.com\"\r\n                            error-message=\"wrong email\"\r\n                            success-message=\"correct email\"\r\n                            validate>\r\n                </text-field>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example text-field demos\r\n     * @for text-field\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'text-field': require('material-ui-vue/components/forms/text-field.vue')\r\n        }\r\n    }\r\n</script>",
                "componentName": "text-field",
                "demoComponentName": "text-field-demo"
            }
        ]
    },
    {
        "name": "icons/icon",
        "author": "Jack Yang",
        "description": "We have included 740 Material Design <a href=\"http://materializecss.com/icons.html\">Icons</a> courtesy of Google. You can download them directly from the Material Design specs",
        "props": [
            {
                "name": "value",
                "type": "{String}",
                "default": "null",
                "description": "icon value"
            },
            {
                "name": "size",
                "type": "{String}",
                "default": "''",
                "description": "indicate size of the icon. Possible values: 'tiny', 'small', 'medium', 'large' and by default ''"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "icon demos",
                "description": "",
                "code": "<template>\r\n    <div>\r\n        <icon value=\"edit\"></icon>\r\n        <icon value=\"input\" size=\"tiny\"></icon>\r\n        <icon value=\"input\" size=\"small\"></icon>\r\n        <icon value=\"input\" size=\"medium\"></icon>\r\n        <icon value=\"input\" size=\"large\"></icon>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example icon demos\r\n     * @for icon\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'icon': require('material-ui-vue/components/icons/icon.vue')\r\n        }\r\n    }\r\n</script>",
                "componentName": "icon",
                "demoComponentName": "icon"
            }
        ]
    },
    {
        "name": "media/carousel",
        "author": "Jack Yang",
        "description": "Our slider is a simple and elegant image carousel. You can also have captions that will be transitioned on their own depending on their alignment. You can also have indicators that show up on the bottom of the slider",
        "props": [
            {
                "name": "images",
                "type": "{Array}",
                "default": "function() {return [];}",
                "description": "image data. Example value: [{src: 'path/to/your/image.png', href: '#!'}]"
            },
            {
                "name": "slider",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate the carousel in a slider-type"
            },
            {
                "name": "dist",
                "type": "{Number}",
                "default": "-100",
                "description": "perspective zoom. If 0, all items are the same size"
            },
            {
                "name": "timeConstant",
                "type": "{Number}",
                "default": "200",
                "description": "transition time"
            },
            {
                "name": "shift",
                "type": "{Number}",
                "default": "0",
                "description": "spacing for center image"
            },
            {
                "name": "padding",
                "type": "{Number}",
                "default": "0",
                "description": "padding between non center items"
            },
            {
                "name": "fullWidth",
                "type": "{Boolean}",
                "default": "false",
                "description": "change to full width styles"
            }
        ],
        "methods": [],
        "examples": []
    },
    {
        "name": "media/material-box",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/media.html\">Material</a> is a material design implementation of the Lightbox plugin. When a user clicks on an image that can be enlarged. Material box centers the image and enlarges it in a smooth, non-jarring manner. To dismiss the image, the user can either click on the image again, scroll away, or press the ESC key",
        "props": [
            {
                "name": "imageUrl",
                "type": "{String}",
                "default": "''",
                "description": "url of the image"
            },
            {
                "name": "caption",
                "type": "{String}",
                "default": "''",
                "description": "caption of the image"
            }
        ],
        "methods": [],
        "examples": []
    },
    {
        "name": "media/slider-item",
        "author": "Jack Yang",
        "description": "a component for slider-item",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "media/slider",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/media.html\">Slider</a> is a simple and elegant image carousel. You can also have captions that will be transitioned on their own depending on their alignment. You can also have indicators that show up on the bottom of the slider",
        "props": [
            {
                "name": "fullscreen",
                "type": "{Boolean}",
                "default": "false",
                "description": "make it a fullscreen slider"
            },
            {
                "name": "images",
                "type": "{Array}",
                "default": "function() {return [];}",
                "description": "images of the slider. Example value: [{src: 'path/to/your/image.png', caption: 'nice image', description: 'really?'}]"
            },
            {
                "name": "indicators",
                "type": "{Boolean}",
                "default": "true",
                "description": "set to false to hide slide indicators"
            },
            {
                "name": "height",
                "type": "{Number}",
                "default": "400",
                "description": "set height of slider"
            },
            {
                "name": "transition",
                "type": "{Number}",
                "default": "500",
                "description": "set the duration of the transition animation in ms"
            },
            {
                "name": "interval",
                "type": "{Number}",
                "default": "6000",
                "description": "set the duration between transitions in ms"
            }
        ],
        "methods": [],
        "examples": []
    },
    {
        "name": "modals/modal-content",
        "author": "Jack Yang",
        "description": "a component for modal-content",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "modals/modal-footer",
        "author": "Jack Yang",
        "description": "a component for modal-footer",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "modals/modal",
        "author": "Jack Yang",
        "description": "Use a <a href=\"http://materializecss.com/modals.html\">modal</a> for dialog boxes, confirmation messages, or other content that can be called up. In order for the modal to work you have to add the Modal ID to the link of the trigger",
        "props": [
            {
                "name": "opacity",
                "type": "{Number}",
                "default": "0.5",
                "description": "opacity of modal background"
            },
            {
                "name": "inDuration",
                "type": "{Number}",
                "default": "350",
                "description": "transition in duration"
            },
            {
                "name": "outDuration",
                "type": "{Number}",
                "default": "250",
                "description": "transition out duration"
            },
            {
                "name": "readyCallback",
                "type": "{Function}",
                "default": "null",
                "description": "callback for Modal open"
            },
            {
                "name": "completeCallback",
                "type": "{Function}",
                "default": "null",
                "description": "callback for Modal close"
            },
            {
                "name": "dismissible",
                "type": "{Boolean}",
                "default": "true",
                "description": "modal can be dismissed by clicking outside of the modal"
            },
            {
                "name": "fixedFooter",
                "type": "{Boolean}",
                "default": "false",
                "description": "set true, if you have content that is very long and you want the action buttons to be visible all the time"
            },
            {
                "name": "bottomSheet",
                "type": "{Boolean}",
                "default": "false",
                "description": "bottom Sheet Modals are good for displaying actions to the user on the bottom of a screen. They still act the same as regular modals"
            },
            {
                "name": "open",
                "type": "{Boolean}",
                "default": "false",
                "description": "the model open status"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "modal demos",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <div class=\"col s12\">\r\n            <btn @click=\"toggleM1\">Open Modal</btn>\r\n            <modal :open=\"m1OpenStatus\" :complete-callback=\"toggleM1\">\r\n                <modal-content>\r\n                    <h4>Modal Header</h4>\r\n                    <p>A bunch of text</p>\r\n                </modal-content>\r\n                <modal-footer>\r\n                    <btn @click=\"toggleM1\" class=\"modal-action\" type=\"flat\">close</btn>\r\n                </modal-footer>\r\n            </modal>\r\n        </div>\r\n        <div class=\"col s12\">\r\n            <btn @click=\"toggleM2\">Open Fixed Footer Modal</btn>\r\n            <modal :open=\"m2OpenStatus\" :complete-callback=\"toggleM2\" fixed-footer>\r\n                <modal-content>\r\n                    <h4>Modal Header</h4>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n                    </p>\r\n                </modal-content>\r\n                <modal-footer>\r\n                    <btn @click=\"toggleM2\" class=\"modal-action\" type=\"flat\">close</btn>\r\n                </modal-footer>\r\n            </modal>\r\n        </div>\r\n        <div class=\"col s12\">\r\n            <btn @click=\"toggleM3\">Open Bottom Sheet Style Modal</btn>\r\n            <modal :open=\"m3OpenStatus\" :complete-callback=\"toggleM3\" bottom-sheet>\r\n                <modal-content>\r\n                    <h4>Modal Header</h4>\r\n                    <p>A bunch of text</p>\r\n                </modal-content>\r\n                <modal-footer>\r\n                    <btn @click=\"toggleM3\" class=\"modal-action\" type=\"flat\">close</btn>\r\n                </modal-footer>\r\n            </modal>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example modal demos\r\n     * @for modal\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'btn': require('material-ui-vue/components/buttons/button.vue'),\r\n            'modal': require('material-ui-vue/components/modals/modal.vue'),\r\n            'modal-content': require('material-ui-vue/components/modals/modal-content.vue'),\r\n            'modal-footer': require('material-ui-vue/components/modals/modal-footer.vue'),\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                m1OpenStatus: false,\r\n                m2OpenStatus: false,\r\n                m3OpenStatus: false\r\n            };\r\n        },\r\n\r\n        methods: {\r\n            toggleM1: function() {\r\n                this.m1OpenStatus = !this.m1OpenStatus;\r\n            },\r\n            toggleM2: function() {\r\n                this.m2OpenStatus = !this.m2OpenStatus;\r\n            },\r\n            toggleM3: function() {\r\n                this.m3OpenStatus = !this.m3OpenStatus;\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "modal",
                "demoComponentName": "modal-demo"
            }
        ]
    },
    {
        "name": "navbar/nav-collapsible-item",
        "author": "Jack Yang",
        "description": "collapsible menu component in navbar. When your nav bar is resized, you will see that the links on the right turn into a hamburger icon",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "navbar/nav-dropdown-item",
        "author": "Jack Yang",
        "description": "dropdown menu component in navbar",
        "props": [
            {
                "name": "iconPosition",
                "type": "{String}",
                "default": "'right'",
                "description": "icon position of the nav-dropdown-item"
            }
        ],
        "methods": [],
        "examples": []
    },
    {
        "name": "navbar/nav-item",
        "author": "Jack Yang",
        "description": "a component for nav-item",
        "props": [],
        "methods": [],
        "examples": []
    },
    {
        "name": "navbar/navbar",
        "author": "Jack Yang",
        "description": "The <a href=\"http://materializecss.com/navbar.html\">navbar</a> is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right",
        "props": [
            {
                "name": "linkPosition",
                "type": "{String}",
                "default": "'right'",
                "description": "to indicate the position of links in the navbar. Possible values: 'left' and 'right'"
            },
            {
                "name": "logo",
                "type": "{String}",
                "default": "''",
                "description": "logo text value"
            },
            {
                "name": "logoHref",
                "type": "{String}",
                "default": "'#!'",
                "description": "href of logo"
            },
            {
                "name": "logoPosition",
                "type": "{String}",
                "default": "'left'",
                "description": "position of logo. Possible values: 'left', 'right', 'center' and by default ''"
            },
            {
                "name": "fixed",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this is a fixed navbar"
            },
            {
                "name": "autoHide",
                "type": "{Boolean}",
                "default": "true",
                "description": "add hide-on-med-and-down"
            },
            {
                "name": "sideNavId",
                "type": "{String}",
                "default": "''",
                "description": ""
            },
            {
                "name": "showOnLarge",
                "type": "{Boolean}",
                "default": "false",
                "description": "to control collapse button show on large screen"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "navbar demos",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <navbar logo=\"Navbar\" logo-href=\"#!\">\r\n            <nav-item><a href=\"#!\"><icon value=\"refresh\"></icon></a></nav-item>\r\n            <nav-item active><a href=\"#!\">Vue</a></nav-item>\r\n            <nav-item><a href=\"#!\">React</a></nav-item>\r\n            <nav-item><a href=\"#!\">Angular</a></nav-item>\r\n            <nav-item><btn label=\"button\"></btn></nav-item>\r\n        </navbar>\r\n        <navbar logo=\"Centering Logo Navbar\" logo-href=\"#!\" logo-position=\"center\" link-position=\"left\">\r\n            <nav-item active><a href=\"#!\">Vue</a></nav-item>\r\n            <nav-item><a href=\"#!\">React</a></nav-item>\r\n            <nav-item><a href=\"#!\">Angular</a></nav-item>\r\n        </navbar>\r\n        <navbar logo=\"Navbar with dropdown\" logo-href=\"#!\">\r\n            <nav-item active><a href=\"#!\">Vue</a></nav-item>\r\n            <nav-item><a href=\"#!\">React</a></nav-item>\r\n            <nav-item><a href=\"#!\">Angular</a></nav-item>\r\n            <nav-dropdown-item label=\"Others 1\" :items=\"dropdownItems\"></nav-dropdown-item>\r\n            <nav-dropdown-item label=\"Others 2\">\r\n                <ul>\r\n                    <li><a href=\"#!\">Three</a></li>\r\n                    <li><a href=\"#!\">Four</a></li>\r\n                </ul>\r\n            </nav-dropdown-item>\r\n        </navbar>\r\n\r\n        <div>\r\n            <navbar logo=\"Logo\" logo-href=\"#!\" side-nav-id=\"sideNav\">\r\n                <nav-item><a href=\"#!\">Link 1</a></nav-item>\r\n                <nav-item><a href=\"#!\">Link 2</a></nav-item>\r\n                <nav-dropdown-item label=\"dropdown menu\">\r\n                    <ul>\r\n                        <li><a href=\"#!\">Link 3</a></li>\r\n                        <li><a href=\"#!\">Link 4</a></li>\r\n                    </ul>\r\n                </nav-dropdown-item>\r\n            </navbar>\r\n            <side-nav id=\"sideNav\">\r\n                <nav-item active><a href=\"#!\" class=\"waves-effect waves-teal\">Link 1</a></nav-item>\r\n                <nav-item><a href=\"#!\" class=\"waves-effect waves-teal\">Link 2</a></nav-item>\r\n                <nav-collapsible-item>\r\n                    <collapsible-header label=\"dropdown menu\" icon=\"arrow_drop_down\" icon-position=\"right\"></collapsible-header>\r\n                    <collapsible-body>\r\n                        <ul>\r\n                            <nav-item><a href=\"#!\">Link 3</a></nav-item>\r\n                            <nav-item><a href=\"#!\">Link 4</a></nav-item>\r\n                        </ul>\r\n                    </collapsible-body>\r\n                </nav-collapsible-item>\r\n            </side-nav>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example navbar demos\r\n     * @for navbar\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'navbar': require('material-ui-vue/components/navbar/navbar.vue'),\r\n            'nav-item': require('material-ui-vue/components/navbar/nav-item.vue'),\r\n            'nav-collapsible-item': require('material-ui-vue/components/navbar/nav-collapsible-item.vue'),\r\n            'nav-dropdown-item': require('material-ui-vue/components/navbar/nav-dropdown-item.vue'),\r\n            'icon': require('material-ui-vue/components/icons/icon.vue'),\r\n            'btn': require('material-ui-vue/components/buttons/button.vue'),\r\n            'side-nav': require('material-ui-vue/components/side-nav/side-nav.vue'),\r\n            'collapsible-header': require('material-ui-vue/components/collapsible/collapsible-header.vue'),\r\n            'collapsible-body': require('material-ui-vue/components/collapsible/collapsible-body.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                dropdownItems: [\r\n                    {href: '#!', label: 'One'},\r\n                    {href: '#!', label: 'Two'},\r\n                    {divider: true},\r\n                    {href: '#!', label: 'Three'},\r\n                ]\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "navbar",
                "demoComponentName": "navbar-demo"
            }
        ]
    },
    {
        "name": "pagination/pagination-item",
        "author": "Jack Yang",
        "description": "a component for pagination-item",
        "props": [
            {
                "name": "disabled",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate if this pagination is disabled or not"
            },
            {
                "name": "active",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate the active status of this pagination item"
            },
            {
                "name": "link",
                "type": "{String}",
                "default": "'#!'",
                "description": "link of this pagination item"
            },
            {
                "name": "prev",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this is the \"prev\" pagination"
            },
            {
                "name": "next",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this is the \"next\" pagination"
            },
            {
                "name": "label",
                "type": "{String}",
                "default": "''",
                "description": "label of this pagination item. This value will be ignored when prev or next props is set as true"
            },
            {
                "name": "wavesEffect",
                "type": "{Boolean}",
                "default": "true",
                "description": "indicate the pagination with waves effect or not"
            }
        ],
        "methods": [],
        "examples": []
    },
    {
        "name": "pagination/pagination",
        "author": "Jack Yang",
        "description": "a component for pagination",
        "props": [],
        "methods": [],
        "examples": [
            {
                "name": "pagination demo",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <pagination>\r\n            <pagination-item prev disabled></pagination-item>\r\n            <pagination-item v-for=\"page in pages\"\r\n                             :active=\"page == current\"\r\n                             @click=\"setCurrent(page)\">\r\n                {{page}}\r\n            </pagination-item>\r\n            <pagination-item next></pagination-item>\r\n        </pagination>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example pagination demo\r\n     * @for pagination\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'pagination': require('material-ui-vue/components/pagination/pagination.vue'),\r\n            'pagination-item': require('material-ui-vue/components/pagination/pagination-item.vue')\r\n        },\r\n\r\n        data: function() {\r\n            return {\r\n                pages: [1,2,3],\r\n                current: 1\r\n            }\r\n        },\r\n\r\n        methods: {\r\n            setCurrent: function(pageIndex) {\r\n                this.current = pageIndex;\r\n            }\r\n        }\r\n    };\r\n</script>",
                "componentName": "pagination",
                "demoComponentName": "pagination-demo"
            }
        ]
    },
    {
        "name": "parallax/parallax",
        "author": "Jack Yang",
        "description": "<a href=\"http://materializecss.com/parallax.html\">Parallax</a> is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling",
        "props": [
            {
                "name": "imageSrc",
                "type": "{String}",
                "default": "''",
                "description": "src of image of the parallax"
            },
            {
                "name": "height",
                "type": "{Number}",
                "default": "500",
                "description": "define the height (px) of the parallax"
            }
        ],
        "methods": [],
        "examples": []
    },
    {
        "name": "progresses/linear-progress",
        "author": "Jack Yang",
        "description": "Linear <a href=\"http://materializecss.com/preloader.html\">preloader</a> in materializecss",
        "props": [
            {
                "name": "determinate",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this is a determinate progress or not"
            },
            {
                "name": "percentage",
                "type": "{Number}",
                "default": "0",
                "description": "this value used in a determinate progress"
            },
            {
                "name": "color",
                "type": "{String}",
                "default": "''",
                "description": "set the front color. <a href=\"http://materializecss.com/color.html\">Possible</a>. Example: color=\"red\""
            },
            {
                "name": "backgroundColor",
                "type": "{String}",
                "default": "''",
                "description": "set the background color. <a href=\"http://materializecss.com/color.html\">Possible</a>. Example: background-color=\"red lighten-4\""
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "linear-progress demo",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <linear-progress color=\"red\" background-color=\"red lighten-4\"></linear-progress>\r\n        <linear-progress color=\"red\" background-color=\"red lighten-4\" determinate :percentage=\"33\"></linear-progress>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example linear-progress demo\r\n     * @for linear-progress\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'linear-progress': require('material-ui-vue/components/progresses/linear-progress.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "linear-progress",
                "demoComponentName": "linear-progress-demo"
            }
        ]
    },
    {
        "name": "progresses/circle-progress",
        "author": "Jack Yang",
        "description": "Circular <a href=\"http://materializecss.com/preloader.html\">preloader</a> in materializecss",
        "props": [
            {
                "name": "size",
                "type": "{String}",
                "default": "''",
                "description": "size of the circle. Possible values: 'big', 'small' and by default ''"
            },
            {
                "name": "active",
                "type": "{Boolean}",
                "default": "true",
                "description": "indicate the progress is active or not"
            },
            {
                "name": "color",
                "type": "{String}",
                "default": "'red'",
                "description": "color or the circle. Possible values: 'red', 'blue', 'yellow' and 'green'"
            },
            {
                "name": "flash",
                "type": "{Boolean}",
                "default": "false",
                "description": "enable circular flashing colors"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "circle-progress demo",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <circle-progress color=\"red\"></circle-progress>\r\n        <circle-progress color=\"teal\" size=\"small\"></circle-progress>\r\n        <circle-progress color=\"yellow\" size=\"big\"></circle-progress>\r\n        <circle-progress active flash></circle-progress>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example circle-progress demo\r\n     * @for circle-progress\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'circle-progress': require('material-ui-vue/components/progresses/circle-progress.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "circle-progress",
                "demoComponentName": "circle-progress-demo"
            }
        ]
    },
    {
        "name": "side-nav/side-nav",
        "author": "Jack Yang",
        "description": "This is a slide out menu. You can add a dropdown to your sidebar by using our collapsible component. If you want to see a demo, our sidebar will use this on smaller screens. To use this in conjunction with a fullscreen navigation, you have to use two copies of the same UL",
        "props": [
            {
                "name": "fixed",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this is a fixed side-nav or not"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "side-nav demo",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <side-nav fixed>\r\n            <nav-item><a href=\"#!\" class=\"waves-effect waves-teal\">Link 1</a></nav-item>\r\n            <nav-item><a href=\"#!\" class=\"waves-effect waves-teal\">Link 2</a></nav-item>\r\n            <nav-collapsible-item>\r\n                <collapsible-header label=\"dropdown menu\" icon=\"arrow_drop_down\" icon-position=\"right\"></collapsible-header>\r\n                <collapsible-body>\r\n                    <ul>\r\n                        <nav-item><a href=\"#!\">Link 3</a></nav-item>\r\n                        <nav-item><a href=\"#!\">Link 4</a></nav-item>\r\n                    </ul>\r\n                </collapsible-body>\r\n            </nav-collapsible-item>\r\n        </side-nav>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example side-nav demo\r\n     * @for side-nav\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'side-nav': require('material-ui-vue/components/side-nav/side-nav.vue'),\r\n            'nav-collapsible-item': require('material-ui-vue/components/navbar/nav-collapsible-item.vue'),\r\n            'nav-dropdown-item': require('material-ui-vue/components/navbar/nav-dropdown-item.vue'),\r\n            'nav-item': require('material-ui-vue/components/navbar/nav-item.vue'),\r\n            'collapsible-header': require('material-ui-vue/components/collapsible/collapsible-header.vue'),\r\n            'collapsible-body': require('material-ui-vue/components/collapsible/collapsible-body.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "side-nav",
                "demoComponentName": "side-nav-demo"
            }
        ]
    },
    {
        "name": "tabs/tab",
        "author": "Jack Yang",
        "description": "single tab component",
        "props": [
            {
                "name": "label",
                "type": "{String}",
                "default": "''",
                "description": "label of this tab"
            },
            {
                "name": "active",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this tab is active or not"
            },
            {
                "name": "disabled",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this tab is disabled or not"
            }
        ],
        "methods": [],
        "examples": []
    },
    {
        "name": "tabs/tabs",
        "author": "Jack Yang",
        "description": "The <a href=\"http://materializecss.com/tabs.html\">tabs</a> structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible",
        "props": [],
        "methods": [],
        "examples": [
            {
                "name": "tabs demo",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <tabs>\r\n            <tab label=\"Test 1\" >\r\n                Test 1 Page\r\n            </tab>\r\n            <tab label=\"Test 2\" acitve>\r\n                Test 2 Page\r\n            </tab>\r\n            <tab label=\"Disabled Tab\" disabled>\r\n                Test 3 page\r\n            </tab>\r\n            <tab label=\"Test 4\">\r\n                Test 4 page\r\n            </tab>\r\n        </tabs>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example tabs demo\r\n     * @for tabs\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'tabs': require('material-ui-vue/components/tabs/tabs.vue'),\r\n            'tab': require('material-ui-vue/components/tabs/tab.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "tabs",
                "demoComponentName": "tabs-demo"
            }
        ]
    },
    {
        "name": "navbar/search-bar",
        "author": "Jack Yang",
        "description": "search form in the navbar",
        "props": [
            {
                "name": "placeholder",
                "type": "{String}",
                "default": "''",
                "description": "placeholder of search box"
            },
            {
                "name": "value",
                "type": "{String}",
                "default": "''",
                "description": "value of the search box"
            },
            {
                "name": "fixed",
                "type": "{Boolean}",
                "default": "false",
                "description": "indicate this is fixed search-bar or not"
            }
        ],
        "methods": [],
        "examples": [
            {
                "name": "search-bar demo",
                "description": "",
                "code": "<template>\r\n    <div class=\"row\">\r\n        <search-bar placeholder=\"search...\"></search-bar>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    /**\r\n     * @example search-bar demo\r\n     * @for search-bar\r\n     * @description\r\n     */\r\n    module.exports = {\r\n        components: {\r\n            'search-bar': require('material-ui-vue/components/navbar/search-bar.vue')\r\n        }\r\n    };\r\n</script>",
                "componentName": "search-bar",
                "demoComponentName": "search-bar-demo"
            }
        ]
    }
];


module.exports = {
    loadAllModules: function(store) {
        store.dispatch('SET_MODULES', modules.sort(function(m1, m2) {
            return m1.name < m2.name;
        }));
    },

    selectModule: function(store, name) {
        store.dispatch('SET_CURRENT_MODULE', name);
    }
};