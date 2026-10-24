
export interface DiffSliderOptions {
    start?: number | undefined;
    onChange?: ((value: number) => void) | undefined;
    handler?: HTMLElement | undefined;
}

const clamp = (n: number): number => Math.min(100, Math.max(0, n));

export class DiffSlider {
    readonly element: HTMLElement;
    private readonly input: HTMLInputElement;
    private readonly handle: HTMLElement;
    private readonly ownsHandle: boolean;
    private readonly onChange: ((value: number) => void) | undefined;

    constructor(element: HTMLElement, options: DiffSliderOptions = {}) {
        const children = Array.from(element.children) as HTMLElement[];
        const handle = options.handler ?? children.find((child) => child.classList.contains("ds-handler"));
        const [before, after] = children.filter((child) => child !== handle);
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

        if (handle) {
            this.handle = handle;
            this.ownsHandle = false;
            this.handle.classList.add("ds-handler");
        } else {
            this.handle = document.createElement("div");
            this.handle.className = "ds-handler ds-handle";
            this.handle.setAttribute("aria-hidden", "true");
            this.ownsHandle = true;
        }

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
        if (this.ownsHandle) this.handle.remove();
        this.element.classList.remove("ds");
    }
}
