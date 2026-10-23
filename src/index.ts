
export interface DiffSliderOptions {
    start?: number | undefined;
    onChange?: ((value: number) => void) | undefined;
}

const clamp = (n: number): number => Math.min(100, Math.max(0, n));

export class DiffSlider {
    readonly element: HTMLElement;
    private readonly input: HTMLInputElement;
    private readonly handle: HTMLElement;
    private readonly onChange: ((value: number) => void) | undefined;

    constructor(element: HTMLElement, options: DiffSliderOptions = {}) {
        const [before, after] = Array.from(element.children);
        if (!before || !after) throw new Error("DiffSlider: the element needs two children (before, after)");

        this.element = element;
        this.onChange = options.onChange;

        element.classList.add("ds");
        after.classList.add("ds-after");

        this.input = document.createElement("input");
        this.input.type = "range";
        this.input.className = "ds-range";
        this.input.min = "0";
        this.input.max = "100";
        this.input.setAttribute("aria-label", "Image Comparison");

        this.handle = document.createElement("div");
        this.handle.className = "ds-handle";
        this.handle.setAttribute("aria-hidden", "true");

        element.append(this.input, this.handle);
        this.input.addEventListener("input", this.handleInput);
        this.setValue(options.start ?? 50);
    }

    private handleInput = (): void => {
        this.setValue(Number(this.input.value));
    }

    setValue(value: number): void {
        const v = clamp(value);

        this.input.value = String(v);
        this.element.style.setProperty("--ds-position", `${v}%`);
        this.onChange?.(v);
    }

    destroy(): void {
        this.input.removeEventListener("input", this.handleInput);
        this.input.remove();
        this.handle.remove();
        this.element.classList.remove("ds");
    }
}
