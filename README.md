
# diff-slider

## default slider

```html
<div id="ds-el" style="max-width: 600px">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=nuxtjs,vuejs,tailwindcss,wordpress,react,nodejs,symfony,laravel,htmx&perline=5" />
    <img src="https://raw.githubusercontent.com/LelouchFR/LelouchFR/a3e1007c29948ef6d5c8d4f22633ab52d71b8740/content/technologies.svg" />
</div>
```

```js
import { DiffSlider } from "diff-slider";
new DiffSlider(document.getElementById("ds-el"), { start: 50 });
```

## slider with custom handler

```html
<div id="ds-el" style="max-width: 600px">
    <img src="/IMG_9480-CLOSEUP.jpg" />
    <img src="/BDFM_2026_10_24_03_39.png" />
    <div class="ds-handler">
        <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7754 1.77539L3.5498 10L11.7754 18.2246L10 20L0 10L10 0L11.7754 1.77539ZM35.5508 10L25.5508 20L23.7754 18.2246L32 10L23.7754 1.77539L25.5508 0L35.5508 10Z" fill="#133BFF"/>
        </svg>
    </div>
</div>
```

```js
import { DiffSlider } from "diff-slider";
new DiffSlider(document.getElementById("ds-el"), { start: 50 });
```

## slider with custom handler and custom class

```html
<div id="ds-el" style="max-width: 600px">
    <img src="/IMG_9480-CLOSEUP.jpg" />
    <img src="/BDFM_2026_10_24_03_39.png" />
    <div class="ds-styled-handler">
        <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7754 1.77539L3.5498 10L11.7754 18.2246L10 20L0 10L10 0L11.7754 1.77539ZM35.5508 10L25.5508 20L23.7754 18.2246L32 10L23.7754 1.77539L25.5508 0L35.5508 10Z" fill="#133BFF"/>
        </svg>
    </div>
</div>
```

```js
import { DiffSlider } from "diff-slider";
new DiffSlider(document.getElementById("ds-el"), {
    start: 50,
    handler: document.querySelector(".ds-styled-handler")
});
```
