window.search = {
    init: function () {
        'use strict';
        this.input = document.querySelector('[role="search"] input');
        this.items = document.querySelectorAll('article');

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

        for (i = 0; i < this.items.length; i += 1) {
            this.toggle(this.items[i], string);
        }
    },
    toggle: function (item, string) {
        'use strict';
        var content = item.innerHTML
                .replace(/<[^>]*>/g, '')
                .toLowerCase(),
            action = content.indexOf(string) === -1 ? 'add' : 'remove';
        item.classList[action]('is-hidden');
    }
};

window.search.init();
