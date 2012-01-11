BEM.DOM.decl('b-rating', {

    _onClick : function() {
        if (!this.params.url) return;

        var that = this;

        $.get(this.params.url, function(data) {
            (typeof data.value == 'number') && that.setValue(data.value)

        }, 'json')
    },

    setValue : function(value) {
/*
        var mods = this.getMods(),
            marks = [],
            length = parseInt(mods.length),
            frac = parseInt(mods.frac) || 1;

        for (var i = 0; i < length; i++) {
            marks.push({
                elem: 'mark',
                elemMods: {
                    fill: (i >= value)
                              ? 'no'
                              : (i < Math.floor(value))
                                  ? 'full'
                                  : Math.round((value - Math.floor(value)) * frac)
                }
            })
        }
*/

        var mods = this.getMods(),
            marks = this.elem('mark'),
            length = parseInt(mods.length),
            frac = parseInt(mods.frac) || 1,
            fill;

        for (var i = 0, l = marks.length; i < l; i++) {
            fill = (i >= value)
                        ? 'no'
                        : (i < Math.floor(value))
                            ? 'full'
                            : Math.round((value - Math.floor(value)) * frac);

            this.setMod($(marks[i]), 'fill', fill)
        }

    }

}, {

    live : function() {

        this.liveBindTo('click', function(e) {
            this._onClick(e);
        });

    }

});
