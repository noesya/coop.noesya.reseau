window.search = {
    init: function () {
        'use strict';
        this.input = document.querySelector('[role="search"] input');
        this.items = document.querySelectorAll('article');
        this.body = document.querySelector('body');

        if (!this.input) {
            return null;
        }

        this.addListeners();
    },
    addListeners: function () {
        'use strict';

        this.input.addEventListener('input', function () {
            if (this.input.value.length > 0) {
                this.search(this.input.value);
            } else {
                this.body.classList.remove('searching');
            }
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
            string = this.formatString(_string);
        this.body.classList['add']('searching');
        for (i = 0; i < this.items.length; i += 1) {
            this.analyzeArticle(this.items[i], string);
        }
    },
    analyzeArticle: function (item, string) {
        'use strict';
        var content = this.formatString(item.innerHTML.replace(/<[^>]*>/g, '')),
            action = content.indexOf(string) === -1 ? 'add' : 'remove';
        item.classList[action]('not-in-search');
    },
    formatString: function (_string) {
        'use strict';
        var separator = '-',
            string = _string.toString()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .replace(/[^a-z0-9 -]/g, '')
                .trim()
                .replace(/\s+/g, separator);
        return string;
    }
};

window.search.init();
