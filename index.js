module.exports = Viewport;

var firstKey = require('firstKey');
    div = document.createElement('div'),
    perspective = firstKey(div.style,
        'perspective',
        'webkitPerspective',
        'mzPerspective',
        'msPerspective',
        'oPerspective');

    function Viewport(fovy) {
        this.fovy = fovy;
        this.perspective = 0;
        this.cx = 0;
        this.cy = 0;
    }

    function update(container) {
        var width = container.clientWidth,
            height = container.clientHeight,
            perspective = (height/2) / Math.tan(this.fovy/2);

        container.style[this.perspectiveKey] = perspective + 'px';
        this.perspective = perspective;
        this.cx = width/2;
        this.cy = height/2;

    }

    Viewport.prototype.perspectiveKey = perspective;
    Viewport.prototype.update = update;