var Observable = require('FuseJS/Observable');

// var folders = Observable("Согласование", "Рассмотрение", "Исполнение", "Ознакомление", "Папка 1", "Папка 2", "Папка 3");

function Doc()
    {
        this.degrees = -4 + (8 * Math.random());
    }

module.exports = {
    docs : [
        new Doc (),
        // new Doc (),
        new Doc (),
        new Doc (),
        new Doc ()
    ],
    docs1 : [
        new Doc (),
        new Doc (),
        new Doc ()
    ],
     docs2 : [
        new Doc (),
        new Doc (),
        new Doc (),
        new Doc (),
        new Doc ()
    ]
};

