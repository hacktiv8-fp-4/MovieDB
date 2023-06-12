declare module "react-flickity-component" {
  import { Component, HtmlHTMLAttributes } from "react";
  import FlickityOptions from "flickity";

  export interface FlickityProps extends HtmlHTMLAttributes<HTMLDivElement> {
    options: FlickityOptions;
    className?: FlickityOptions;
  }

  export default class Flickity extends Component<FlickityProps> {
    readonly flickity: Flickity | undefined;
  }
}
