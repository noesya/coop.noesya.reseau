window.search = {
    init: function () {
        'use strict';
        this.input = document.querySelector('[role="search"] input');
        this.items = document.querySelectorAll('article');
        this.body = document.querySelector('body');

        if (!this.input) {
            return null;
        }

        this.bind();
    },
    bind: function () {
        'use strict';

        this.input.addEventListener('input', function () {
            this.search(this.input.value);
        }.bind(this));
        this.input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                document.querySelector('#personnes').scrollIntoView();
            }
        }.bind(this));
    },
    search: function (_string) {
        'use strict';
        var i = 0,
            string = _string.toLowerCase();
        this.body.classList['add']('searching');
        for (i = 0; i < this.items.length; i += 1) {
            this.analyzeArticle(this.items[i], string);
        }
    },
    analyzeArticle: function (item, string) {
        'use strict';
        var content = item.innerHTML
                .replace(/<[^>]*>/g, '')
                .toLowerCase(),
            action = content.indexOf(string) === -1 ? 'add' : 'remove';
        item.classList[action]('not-in-search');
    }
};

window.search.init();
