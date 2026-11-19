/**
 * @name asszxc Settings
 * @author asszxc
 * @source https://github.com/Meldixx/asszxc-discord
 * @version 1.0.0
 * @description Settings for the asszxc Glass Dawn theme.
 */
'use strict';

const FIELDS = [
  {
    "section": "Background",
    "key": "--az-wallpaper",
    "label": "Wallpaper URL",
    "kind": "url",
    "default": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80",
    "labelRu": "Ссылка на обои"
  },
  {
    "section": "Background",
    "key": "--az-position",
    "label": "Position",
    "kind": "select",
    "default": "center",
    "options": [
      "center",
      "top",
      "bottom",
      "left",
      "right"
    ],
    "labelRu": "Положение"
  },
  {
    "section": "Background",
    "key": "--az-wallpaper-size",
    "label": "Image size",
    "kind": "select",
    "default": "cover",
    "options": [
      "cover",
      "contain",
      "auto",
      "100% 100%"
    ],
    "labelRu": "Масштаб"
  },
  {
    "section": "Background",
    "key": "--az-base",
    "label": "Base background",
    "kind": "color",
    "default": "#101522",
    "labelRu": "Базовый фон"
  },
  {
    "section": "Background",
    "key": "--az-fallback-top",
    "label": "Upper gradient",
    "kind": "color",
    "default": "#8e7276",
    "labelRu": "Градиент сверху"
  },
  {
    "section": "Background",
    "key": "--az-fallback-middle",
    "label": "Middle gradient",
    "kind": "color",
    "default": "#1b3049",
    "labelRu": "Градиент в центре"
  },
  {
    "section": "Background",
    "key": "--az-fallback-bottom",
    "label": "Lower gradient",
    "kind": "color",
    "default": "#0a1728",
    "labelRu": "Градиент снизу"
  },
  {
    "section": "Background",
    "key": "--az-tint",
    "label": "Upper tint",
    "kind": "rgb",
    "default": "#10131c",
    "labelRu": "Оттенок сверху"
  },
  {
    "section": "Background",
    "key": "--az-tint-bottom",
    "label": "Lower tint",
    "kind": "rgb",
    "default": "#070d18",
    "labelRu": "Оттенок снизу"
  },
  {
    "section": "Background",
    "key": "--az-dim",
    "label": "Upper dimming",
    "kind": "range",
    "default": 48,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Затемнение сверху"
  },
  {
    "section": "Background",
    "key": "--az-dim-bottom",
    "label": "Lower dimming",
    "kind": "range",
    "default": 65,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Затемнение снизу"
  },
  {
    "section": "Background",
    "key": "--az-settings-dim",
    "label": "Settings upper dimming",
    "kind": "range",
    "default": 69,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Затемнение настроек сверху"
  },
  {
    "section": "Background",
    "key": "--az-settings-dim-bottom",
    "label": "Settings lower dimming",
    "kind": "range",
    "default": 81,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Затемнение настроек снизу"
  },
  {
    "section": "Glass",
    "key": "--az-blur",
    "label": "Window blur",
    "kind": "range",
    "default": 6,
    "min": 0,
    "max": 40,
    "step": 1,
    "unit": "px",
    "scale": 1,
    "labelRu": "Размытие окна"
  },
  {
    "section": "Glass",
    "key": "--az-popup-blur",
    "label": "Menu blur",
    "kind": "range",
    "default": 14,
    "min": 0,
    "max": 40,
    "step": 1,
    "unit": "px",
    "scale": 1,
    "labelRu": "Размытие меню"
  },
  {
    "section": "Glass",
    "key": "--az-saturate",
    "label": "Glass saturation",
    "kind": "range",
    "default": 100,
    "min": 0,
    "max": 200,
    "step": 5,
    "unit": "%",
    "scale": 1,
    "labelRu": "Насыщенность стекла"
  },
  {
    "section": "Panels",
    "key": "--az-glass-rgb",
    "label": "Main panel color",
    "kind": "rgb",
    "default": "#11131b",
    "labelRu": "Основная панель — цвет"
  },
  {
    "section": "Panels",
    "key": "--az-glass-opacity",
    "label": "Main panel opacity",
    "kind": "range",
    "default": 12,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Основная панель — плотность"
  },
  {
    "section": "Panels",
    "key": "--az-sidebar-rgb",
    "label": "Sidebar color",
    "kind": "rgb",
    "default": "#0d1018",
    "labelRu": "Боковые панели — цвет"
  },
  {
    "section": "Panels",
    "key": "--az-sidebar-opacity",
    "label": "Sidebar opacity",
    "kind": "range",
    "default": 18,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Боковые панели — плотность"
  },
  {
    "section": "Panels",
    "key": "--az-card-rgb",
    "label": "Card color",
    "kind": "rgb",
    "default": "#11141d",
    "labelRu": "Карточки — цвет"
  },
  {
    "section": "Panels",
    "key": "--az-card-opacity",
    "label": "Card opacity",
    "kind": "range",
    "default": 32,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Карточки — плотность"
  },
  {
    "section": "Panels",
    "key": "--az-input-rgb",
    "label": "Input color",
    "kind": "rgb",
    "default": "#0c0f16",
    "labelRu": "Поля ввода — цвет"
  },
  {
    "section": "Panels",
    "key": "--az-input-opacity",
    "label": "Input opacity",
    "kind": "range",
    "default": 38,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Поля ввода — плотность"
  },
  {
    "section": "Panels",
    "key": "--az-popup-rgb",
    "label": "Popup color",
    "kind": "rgb",
    "default": "#171923",
    "labelRu": "Всплывающие меню — цвет"
  },
  {
    "section": "Panels",
    "key": "--az-popup-opacity",
    "label": "Popup opacity",
    "kind": "range",
    "default": 83,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Всплывающие меню — плотность"
  },
  {
    "section": "Panels",
    "key": "--az-modal-rgb",
    "label": "Modal color",
    "kind": "rgb",
    "default": "#12141d",
    "labelRu": "Модальные окна — цвет"
  },
  {
    "section": "Panels",
    "key": "--az-modal-opacity",
    "label": "Modal opacity",
    "kind": "range",
    "default": 69,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Модальные окна — плотность"
  },
  {
    "section": "Panels",
    "key": "--az-line-rgb",
    "label": "Border color",
    "kind": "rgb",
    "default": "#ffffff",
    "labelRu": "Границы — цвет"
  },
  {
    "section": "Panels",
    "key": "--az-line-opacity",
    "label": "Border opacity",
    "kind": "range",
    "default": 11,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Границы — плотность"
  },
  {
    "section": "Panels",
    "key": "--az-hover-opacity",
    "label": "Hover highlight",
    "kind": "range",
    "default": 7.5,
    "min": 0,
    "max": 100,
    "step": 0.5,
    "unit": "%",
    "scale": 100,
    "labelRu": "Подсветка при наведении"
  },
  {
    "section": "Panels",
    "key": "--az-selected-opacity",
    "label": "Selected item",
    "kind": "range",
    "default": 15,
    "min": 0,
    "max": 100,
    "step": 0.5,
    "unit": "%",
    "scale": 100,
    "labelRu": "Выбранный элемент"
  },
  {
    "section": "Panels",
    "key": "--az-scrollbar-opacity",
    "label": "Scrollbar opacity",
    "kind": "range",
    "default": 15,
    "min": 0,
    "max": 100,
    "step": 0.5,
    "unit": "%",
    "scale": 100,
    "labelRu": "Полоса прокрутки"
  },
  {
    "section": "Colors",
    "key": "--az-text",
    "label": "Primary text",
    "kind": "color",
    "default": "#f1f0f3",
    "labelRu": "Основной текст"
  },
  {
    "section": "Colors",
    "key": "--az-muted",
    "label": "Secondary text",
    "kind": "color",
    "default": "#c0bdc4",
    "labelRu": "Вторичный текст"
  },
  {
    "section": "Colors",
    "key": "--az-faint",
    "label": "Muted text",
    "kind": "color",
    "default": "#aaa7af",
    "labelRu": "Приглушённый текст"
  },
  {
    "section": "Colors",
    "key": "--az-accent",
    "label": "Accent",
    "kind": "color",
    "default": "#c6bcc7",
    "labelRu": "Акцент"
  },
  {
    "section": "Colors",
    "key": "--az-accent-pressed",
    "label": "Pressed accent",
    "kind": "color",
    "default": "#9b929f",
    "labelRu": "Акцент при нажатии"
  },
  {
    "section": "Colors",
    "key": "--az-focus",
    "label": "Focus outline",
    "kind": "color",
    "default": "#d0c5d4",
    "labelRu": "Обводка фокуса"
  },
  {
    "section": "Colors",
    "key": "--az-link",
    "label": "Links",
    "kind": "color",
    "default": "#b9d5ff",
    "labelRu": "Ссылки"
  },
  {
    "section": "Colors",
    "key": "--az-button-rgb",
    "label": "Button color",
    "kind": "rgb",
    "default": "#ffffff",
    "labelRu": "Цвет кнопок"
  },
  {
    "section": "Colors",
    "key": "--az-button-opacity",
    "label": "Button opacity",
    "kind": "range",
    "default": 19,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Плотность кнопок"
  },
  {
    "section": "Colors",
    "key": "--az-button-hover-opacity",
    "label": "Button hover",
    "kind": "range",
    "default": 26,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Наведение на кнопку"
  },
  {
    "section": "Colors",
    "key": "--az-button-active-opacity",
    "label": "Button pressed",
    "kind": "range",
    "default": 32,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Нажатие кнопки"
  },
  {
    "section": "Colors",
    "key": "--az-legacy-button-opacity",
    "label": "Legacy button opacity",
    "kind": "range",
    "default": 17,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Старые кнопки"
  },
  {
    "section": "Colors",
    "key": "--az-legacy-hover-opacity",
    "label": "Legacy button hover",
    "kind": "range",
    "default": 25,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%",
    "scale": 100,
    "labelRu": "Наведение — старые кнопки"
  }
];

const NAME = 'asszxc Settings';
const STYLE = 'asszxc-settings-ui';
const OVERRIDES = 'asszxc-settings-overrides';
const MAX_IMAGE = 8 * 1024 * 1024;

const fieldMap = new Map(FIELDS.map(f => [f.key, f]));
const sectionsRu = { Background: 'Фон', Glass: 'Стекло', Panels: 'Панели', Colors: 'Цвета' };

function clean(f, v) {
    if (f.kind === 'range') {
        if (typeof v !== 'number' || !Number.isFinite(v)) throw Error('Invalid number');
        return Math.min(f.max, Math.max(f.min, Math.round((v - f.min) / f.step) * f.step + f.min));
    }
    if (f.kind === 'checkbox') {
        if (typeof v !== 'boolean') throw Error('Invalid value');
        return v;
    }
    if (f.kind === 'select') {
        if (!f.options.includes(v)) throw Error('Invalid option');
        return v;
    }
    if (f.kind === 'color' || f.kind === 'rgb') {
        if (typeof v !== 'string' || !/^#[\da-f]{6}$/i.test(v)) throw Error('Invalid color');
        return v.toLowerCase();
    }
    if (typeof v !== 'string') throw Error('Invalid text');
    if (f.kind === 'text') return v.replace(/[\x00-\x1f\x7f]/g, '').slice(0, 32);
    v = v.trim();
    if (!v || v === 'none') return '';
    if (/^data:image\/(?:png|jpeg|webp|gif|avif);base64,[a-z0-9+/]+={0,2}$/i.test(v) && v.length <= MAX_IMAGE * 1.4 + 100) return v;
    if (v.length > 4096 || !/^https:\/\//i.test(v) || /[\x00-\x20\x7f]/.test(v)) throw Error('Enter an HTTPS URL or select an image');
    const url = new URL(v);
    if (url.protocol !== 'https:' || url.username || url.password) throw Error('Invalid URL');
    return url.href;
}

function cssValue(f, v) {
    switch (f.kind) {
        case 'range': return String(v / f.scale) + (f.scale === 100 ? '' : f.unit);
        case 'rgb': return [1, 3, 5].map(i => parseInt(v.slice(i, i + 2), 16)).join(', ');
        case 'checkbox': return v ? 'inline-block' : 'none';
        case 'url': return v ? `url(${JSON.stringify(v)})` : 'none';
        case 'text': return JSON.stringify(v);
        default: return v;
    }
}

const UI = `
.azs-panel {padding:16px; color:var(--text-normal,#eee); font:14px/1.5 var(--font-primary, sans-serif);}
.azs-panel * {box-sizing:border-box;}
.azs-panel h2 {font-size:20px;margin:0 0 6px;}
.azs-panel p {margin:6px 0;color:var(--text-muted,#b8b5c2);}
.azs-tabs,.azs-actions {display:flex;flex-wrap:wrap;gap:8px;margin:14px 0;}
.azs-panel button {font:inherit;cursor:pointer;color:var(--text-normal,#eee);background:var(--az-card,#303038);border:1px solid var(--az-line,#ffffff25);border-radius:8px;padding:7px 12px;}
.azs-panel button:hover {background:var(--az-selected,#555);}
.azs-panel button[aria-pressed=true] {background:var(--az-accent,#c6bcc7);color:#17151b;}
.azs-panel :is(button,input,select):focus-visible {outline:2px solid var(--az-focus,#c6bcc7);outline-offset:2px;}
.azs-row {display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:44px;border-bottom:1px solid var(--az-line,#ffffff15);padding:8px 0;}
.azs-row label {flex:1;min-width:0;}
.azs-control {display:flex;align-items:center;gap:8px;max-width:65%;min-width:0;}
.azs-control input[type=range] {width:clamp(70px,18vw,180px);accent-color:var(--az-accent,#c6bcc7);}
.azs-control :is(input[type=text],select) {min-width:0;max-width:100%;font:inherit;color:var(--text-normal,#eee);background:var(--az-input,#222);border:1px solid var(--az-line,#ffffff25);border-radius:6px;padding:6px;}
.azs-control output {min-width:42px;text-align:right;font-variant-numeric:tabular-nums;}
.azs-preview {height:100px;background-size:cover;background-position:center;border-radius:8px;border:1px solid var(--az-line,#ffffff25);margin:8px 0;}
.azs-error {color:#ffb4a9 !important;}
@media(max-width:480px){.azs-row{flex-wrap:wrap}.azs-control{max-width:100%}}
`;

function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

module.exports = class AsszxcSettings {
    start() {
        if (this.running) return;
        this.running = true;
        this.values = {};
        this.lastCSS = null;
        this.reader = null;
        this.panel = null;
        this.panelEvents = null;
        this.locale = 'en';

        try {
            const saved = BdApi.Data.load(NAME, 'settings') || {};
            const locale = BdApi.Data.load(NAME, 'locale');
            this.locale = ['en', 'ru'].includes(locale) ? locale :
                (navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en');

            for (const field of FIELDS) {
                if (!Object.hasOwn(saved, field.key)) continue;
                try {
                    const value = clean(field, saved[field.key]);
                    if (value !== field.default) this.values[field.key] = value;
                } catch {}
            }
        } catch (err) {
            console.error(NAME, err);
        }

        BdApi.DOM.addStyle(STYLE, UI);
        this.apply();
        this.poll = setInterval(() => this.apply(), 1500);
    }

    stop() {
        if (!this.running) return;
        this.running = false;
        clearInterval(this.poll);
        clearTimeout(this.saveTimer);
        this.panelEvents?.abort();
        if (this.reader?.readyState === 1) this.reader.abort();
        this.reader = null;
        this.panel?.remove();
        this.panel = null;
        this.flush();
        BdApi.DOM.removeStyle(STYLE);
        BdApi.DOM.removeStyle(OVERRIDES);
        this.lastCSS = null;
    }

    enabled() {
        try {
            return BdApi.Themes.isEnabled('asszxc') || BdApi.Themes.isEnabled('asszxc.theme.css');
        } catch {
            return false;
        }
    }

    apply() {
        if (!this.running) return;
        const css = this.enabled()
            ? Object.entries(this.values)
                .map(([key, value]) => `${key}: ${cssValue(fieldMap.get(key), value)} !important;`)
                .join('\n')
            : '';
        if (css === this.lastCSS) return;
        if (css) BdApi.DOM.addStyle(OVERRIDES, `html:root {\n${css}\n}`);
        else BdApi.DOM.removeStyle(OVERRIDES);
        this.lastCSS = css;
    }

    flush() {
        try {
            BdApi.Data.save(NAME, 'settings', this.values || {});
            return true;
        } catch (err) {
            console.error(NAME, err);
            BdApi.UI.showToast('asszxc: settings not saved', { type: 'error' });
            return false;
        }
    }

    set(key, input) {
        if (!this.running) return;
        const field = fieldMap.get(key);
        if (!field) throw Error('Unknown setting');
        const value = clean(field, input);
        if (value === field.default) delete this.values[key];
        else this.values[key] = value;
        this.apply();
        clearTimeout(this.saveTimer);
        this.saveTimer = setTimeout(() => this.flush(), 350);
        return value;
    }

    value(field) {
        return this.values[field.key] ?? field.default;
    }

    t(en, ru) {
        return this.locale === 'ru' ? ru : en;
    }

    getSettingsPanel() {
        this.panelEvents?.abort();
        if (this.reader?.readyState === 1) this.reader.abort();

        const events = new AbortController();
        this.panelEvents = events;
        const root = element('div', 'azs-panel');
        this.panel = root;
        let section = 'Background';

        const status = (note, error) => {
            note.classList.toggle('azs-error', Boolean(error));
            note.textContent = error
                ? String(error.message || error)
                : this.enabled()
                    ? this.t('Theme active · Settings save automatically', 'Тема активна · Настройки сохраняются автоматически')
                    : this.t('Enable asszxc in Themes to apply changes.', 'Включи asszxc в разделе «Темы», чтобы применить изменения.');
        };

        const render = () => {
            this.renderEvents?.abort();
            this.renderEvents = new AbortController();
            const signal = this.renderEvents.signal;

            const listen = (node, type, handler) => node.addEventListener(type, handler, { signal });
            const btn = (text, callback) => {
                const node = element('button', '', text);
                node.type = 'button';
                listen(node, 'click', callback);
                return node;
            };

            root.replaceChildren();

            const header = element('h2', '', 'asszxc / Settings');
            const language = btn(this.t('Русский', 'English'), () => {
                this.locale = this.locale === 'en' ? 'ru' : 'en';
                try { BdApi.Data.save(NAME, 'locale', this.locale); } catch (err) { console.error(NAME, err); }
                render();
            });

            const note = element('p');
            note.setAttribute('role', 'status');
            status(note);

            root.append(header, language, note);

            const tabs = element('div', 'azs-tabs');
            for (const name of Object.keys(sectionsRu)) {
                const tab = btn(this.t(name, sectionsRu[name]), () => { section = name; render(); });
                tab.setAttribute('aria-pressed', String(name === section));
                tabs.append(tab);
            }
            root.append(tabs);

            for (const field of FIELDS.filter(item => item.section === section)) {
                const row = element('div', 'azs-row');
                const label = element('label', '', this.t(field.label, field.labelRu));
                const control = element('div', 'azs-control');
                const current = this.value(field);
                const input = element(field.kind === 'select' ? 'select' : 'input');

                input.id = `azs-${field.key.slice(5)}`;
                label.htmlFor = input.id;

                if (field.kind === 'select') {
                    for (const value of field.options) {
                        const option = element('option', '', value);
                        option.value = value;
                        input.append(option);
                    }
                } else {
                    input.type = field.kind === 'range'
                        ? 'range'
                        : ['color', 'rgb'].includes(field.kind) ? 'color' : 'text';
                    if (field.kind === 'range') {
                        input.min = field.min;
                        input.max = field.max;
                        input.step = field.step;
                    }
                    if (field.kind === 'url') {
                        input.placeholder = 'https://…';
                        input.maxLength = 4096;
                    }
                }

                input.value = field.kind === 'url' && current.startsWith('data:') ? '' : current;
                control.append(input);
                row.append(label, control);
                root.append(row);

                let output;
                if (field.kind === 'range') {
                    output = element('output', '', current + field.unit);
                    control.append(output);
                }

                const preview = field.kind === 'url' ? element('div', 'azs-preview') : null;

                const change = () => {
                    if (!this.running) return;
                    try {
                        const value = this.set(field.key, field.kind === 'range' ? Number(input.value) : input.value);
                        if (output) output.textContent = value + field.unit;
                        if (preview) preview.style.backgroundImage = cssValue(field, value);
                        status(note);
                    } catch (err) {
                        status(note, err);
                    }
                };
                listen(input, ['range', 'color', 'rgb'].includes(field.kind) ? 'input' : 'change', change);

                if (preview) {
                    preview.style.backgroundImage = cssValue(field, current);

                    const actions = element('div', 'azs-actions');
                    const file = element('input');
                    file.type = 'file';
                    file.accept = 'image/png,image/jpeg,image/webp,image/gif,image/avif';
                    file.hidden = true;

                    listen(file, 'change', () => {
                        const selected = file.files?.[0];
                        if (!selected) return;
                        if (selected.size > MAX_IMAGE) {
                            status(note, Error(this.t('Maximum image size: 8 MB', 'Максимальный размер: 8 МБ')));
                            return;
                        }
                        if (this.reader?.readyState === 1) this.reader.abort();
                        const reader = new FileReader();
                        this.reader = reader;
                        reader.onload = () => {
                            if (!this.running || signal.aborted) return;
                            try { this.set(field.key, reader.result); render(); }
                            catch (err) { status(note, err); }
                        };
                        reader.onerror = () => {
                            if (!signal.aborted) status(note, Error(this.t('Cannot read image', 'Не удалось прочитать изображение')));
                        };
                        reader.readAsDataURL(selected);
                    });

                    actions.append(
                        btn(this.t('Choose local image', 'Выбрать файл'), () => file.click()),
                        btn(this.t('No wallpaper', 'Без картинки'), () => { this.set(field.key, ''); render(); }),
                        btn(this.t('Default wallpaper', 'Стандартные обои'), () => { this.set(field.key, field.default); render(); })
                    );

                    root.append(actions, file, preview);
                }
            }

            const actions = element('div', 'azs-actions');
            actions.append(
                btn(this.t('Reset all settings', 'Сбросить всё'), () => {
                    this.values = {};
                    this.apply();
                    clearTimeout(this.saveTimer);
                    this.flush();
                    render();
                }),
                btn(this.t('Save now', 'Сохранить сейчас'), () => {
                    clearTimeout(this.saveTimer);
                    if (this.flush()) status(note);
                })
            );
            root.append(actions);
        };

        events.signal.addEventListener('abort', () => this.renderEvents?.abort(), { once: true });
        render();
        return root;
    }
};