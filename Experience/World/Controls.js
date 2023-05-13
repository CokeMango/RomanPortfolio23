import * as THREE from "three";
import Experience from "../Experience.js";
import Camera from "../Camera";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { Timeline } from "gsap/gsap-core.js";
import ASScroll from "@ashthornton/asscroll";
import Sizes from "../Utils/Sizes.js";
import Floor from "./Floor.js";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.room = this.experience.world.room.actualRoom;
    this.room.children.forEach((child) => {
      if (child.type === "RectAreaLight") {
        this.rectLight = child;
      }
    });
    this.circleFirst = this.experience.world.floor.circleFirst;
    this.circleSecond = this.experience.world.floor.circleSecond;
    this.circleThird = this.experience.world.floor.circleThird;

    GSAP.registerPlugin(ScrollTrigger);
    this.setSmoothScroll();
    this.setScrollTrigger();
  }

  setupASScroll() {
    // https://github.com/ashthornton/asscroll
    const asscroll = new ASScroll({
      disableRaf: true,
    });

    GSAP.ticker.add(asscroll.update);

    ScrollTrigger.defaults({
      scroller: asscroll.containerElement,
    });

    ScrollTrigger.scrollerProxy(asscroll.containerElement, {
      scrollTop(value) {
        if (arguments.length) {
          asscroll.currentPos = value;
          return;
        }
        return asscroll.currentPos;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      fixedMarkers: true,
    });

    asscroll.on("update", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", asscroll.resize);

    requestAnimationFrame(() => {
      asscroll.enable({
        newScrollElements: document.querySelectorAll(
          ".gsap-marker-start, .gsap-marker-end, [asscroll]"
        ),
      });
    });
    return asscroll;
  }

  setSmoothScroll() {
    this.asscroll = this.setupASScroll();
  }

  setScrollTrigger() {
    ScrollTrigger.matchMedia({
      //Desktop
      "(min-width: 969px)": () => {
        this.room.scale.set(0.11, 0.11, 0.11);
        this.rectLight.width = 0.5;
        this.rectLight.height = 0.7;
        //First section -------------------------
        this.firstMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            start: "top top",
            end: "bottom bottom",

            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        this.firstMoveTimeline.to(this.room.position, {
          x: () => {
            return this.sizes.width * 0.0014;
          },
        });

        // Second section -----------------------------------------
        this.secondMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
          .to(
            this.room.position,
            {
              x: () => {
                return 1;
              },
              z: () => {
                return this.sizes.height * 0.0032;
              },
            },
            "same"
          )
          .to(
            this.room.scale,
            {
              x: 0.4,
              y: 0.4,
              z: 0.4,
            },
            "same"
          )
          .to(
            this.rectLight,
            {
              width: 0.5 * 4,
              height: 0.7 * 4,
            },
            "same"
          );
        console.log(this.rectLight.scale);

        // Third section -----------------------------------------
        this.thirdMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".third-move2",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }).to(this.room.position, {
          y: 1.4,
          z: -3.1,
        });
      },

      "(max-width: 968px)": () => {
        console.log("fired mobile");

        //Resets
        this.room.scale.set(0.07, 0.07, 0.07);
        this.room.position.set(0, 0, 0);
        (this.rectLight.width = 0.3),
          (this.rectLight.height = 0.4),
          //First section -------------------------
          (this.firstMoveTimeline = new GSAP.timeline({
            scrollTrigger: {
              trigger: ".first-move",
              start: "top top",
              end: "bottom bottom",

              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          }).to(this.room.scale, {
            x: 0.1,
            y: 0.1,
            z: 0.1,
          }));
        // Second section -----------------------------------------
        this.secondMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
          .to(
            this.room.scale,
            {
              x: 0.25,
              y: 0.25,
              z: 0.25,
            },
            "same"
          )
          .to(
            this.rectLight,
            {
              width: 0.3 * 3.4,
              height: 0.4 * 3.4,
            },
            "same"
          )
          .to(
            this.room.position,
            {
              x: 1.5,
            },
            "same"
          );

        // Third section -----------------------------------------
        this.thirdMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".third-move2",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      },

      // all
      all: () => {
        // First section -----------------------------------------
        this.firstCircle = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }).to(this.circleFirst.scale, {
          x: 3,
          y: 3,
          z: 3,
      });

        // Second section -----------------------------------------
        this.secondCircle = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        })
          .to(
            this.circleSecond.scale,
            {
              x: 3,
              y: 3,
              z: 3,
            },
            "same"
          )
          .to(
            this.room.position,
            {
              y: 0.7,
            },
            "same"
          );

        // Third section -----------------------------------------
        this.thirdCircle = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }).to(this.circleThird.scale, {
          x: 3,
          y: 3,
          z: 3,
        });
      },
    });
  }

  resize() {}

  update() {}
}
