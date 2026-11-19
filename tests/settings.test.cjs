const test = require('node:test');
const assert = require('node:assert/strict');
const Plugin = require('../asszxcSettings.plugin.js');

test('settings lifecycle, persistence, validation and reset', () => {
    const store = new Map();
    const styles = new Map();
    let enabled = true;
    global.BdApi = {
        Data: {load: (name,key) => store.get(key), save: (name,key,value) => store.set(key,structuredClone(value))},
        DOM: {addStyle:(key,css)=>styles.set(key,css), removeStyle:key=>styles.delete(key)},
        Themes: {isEnabled:()=>enabled}, UI:{showToast:()=>{}}
    };
    const p = new Plugin();
    p.start();
    try {
        assert.equal(styles.has('asszxc-settings-overrides'),false);
        assert.equal(p.set('--az-blur', 20),20);
        assert.match(styles.get('asszxc-settings-overrides'), /--az-blur: 20px/);
        p.set('--az-glass-opacity', 35);
        assert.match(styles.get('asszxc-settings-overrides'), /--az-glass-opacity: 0.35/);
        p.set('--az-glass-rgb','#112233');
        assert.match(styles.get('asszxc-settings-overrides'), /17, 34, 51/);
        assert.throws(()=>p.set('--az-wallpaper','javascript:alert(1)'));
        assert.throws(()=>p.set('--az-wallpaper','http://example.org/a.png'));
        assert.throws(()=>p.set('--az-wallpaper','https://user:pass@example.org/a.png'));
        assert.throws(()=>p.set('--az-brand','other'));
        assert.equal(p.set('--az-wallpaper',''), '');
        assert.match(styles.get('asszxc-settings-overrides'), /--az-wallpaper: none/);
        enabled = false;
        p.apply();
        assert.equal(styles.has('asszxc-settings-overrides'), false);
        enabled = true;
        p.apply();
        assert.equal(styles.has('asszxc-settings-overrides'), true);
    } finally {p.stop();}
    assert.equal(styles.size,0);
    const q=new Plugin();q.start();
    try {assert.equal(q.values['--az-blur'],20); q.set('--az-blur',6);assert.equal(Object.hasOwn(q.values,'--az-blur'),false);q.values={};q.apply();q.flush();assert.equal(styles.has('asszxc-settings-overrides'),false);assert.deepEqual(store.get('settings'),{});} finally {q.stop();}
});
