function ShortcutManager()
{
    var me = this;

    this.disabled = false;
    this.shortcuts = {};
    
    this.addshortcut = function(key, callback) {
        //log.console("ADDING SHORTCUT");
        if (typeof key === 'number') {
            //log.console("KEY: " + key);
            key = [key];
            
        }
        
        for (i in key) {
            //log.console("SHORCUT KEY: " + i);
            if (!(key[i] in this.shortcuts)) {
                this.shortcuts[key[i]] = [];
            }
            this.shortcuts[key[i]].push(callback);
        }
    }

    $(window).keydown(function(e) {
        console.log("Key press: " + e.keyCode);

        var keycode = e.keyCode ? e.keyCode : e.which;
        eventlog("keyboard", "Key press: " + keycode);
        console.log(me.shortcuts);
        if (keycode in me.shortcuts) {
            e.preventDefault();
            for (var i in me.shortcuts[keycode]) {
                console.log(me.shortcuts[keycode][i]);
                me.shortcuts[keycode][i]();
            }
        }
    });

}
