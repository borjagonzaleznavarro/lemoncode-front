import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[rotate]",
})
export class RotateDirective {
  @Input("rotate") rotation: number;
  @Input("step") step: number;
  elRotation: number;
  defaultStep: number;
  shiftKeyPres: boolean;

  constructor(private el: ElementRef) {
    this.elRotation = 0;
    this.defaultStep = 10;
    this.shiftKeyPres = false;

    window.addEventListener("keydown", (e) => {
      if (e.key === "Shift") this.shiftKeyPres = true;
    });
    window.addEventListener("keyup", (e) => (this.shiftKeyPres = false));
  }

  private rotate(rotation: number, step: number) {
    rotation = this.el.nativeElement.getAttribute("rotate");
    this.elRotation = Number(rotation) + Number(step);
    this.el.nativeElement.style.transform = `rotate(${this.elRotation}deg)`;
    this.el.nativeElement.setAttribute("rotate", this.elRotation);
  }

  @HostListener("click")
  clickEvent() {
    if (this.el.nativeElement.nodeName === "IMG") {
      this.step = this.el.nativeElement.getAttribute("step")
        ? this.el.nativeElement.getAttribute("step")
        : this.defaultStep;
      if (this.shiftKeyPres) {
        this.step = -this.step;
      }
      this.rotate(this.rotation, this.step);
    }
  }

  ngOnInit() {
    this.rotate(this.rotation, 0);
  }
}
