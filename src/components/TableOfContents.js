import * as React from "react";
import { List, ListItem, Typography, Stack } from "@mui/material";
import ScrollLink from "./ScrollLink";
import { active } from "../pages/equations/equation.module.css";
import slugify from "slugify";

/**
 * Class that represents a section of the page's content.
 * @class
 * @public
 * @constructor
 */
export class Section {
  /**
   * Build a section object from its name with empty children list.
   * @param {string} name
   */
  constructor(name) {
    /**
     * @type {string}
     */
    this.name = name;
    /**
     * @type {string}
     */
    this.slug = slugify(name);
    /**
     * @type {Section[]}
     */
    this.children = [];
  }

  /**
   * Build a section array from markdownRemark headings array.
   * @param {Array} headings
   * @returns {Array[Section]}
   */
  static sectionArrayFromHeadings(headings) {
    let sections = [];

    while (headings.length) {
      const heading = headings.shift();
      const newSection = new Section(heading.value);
      if (heading.depth === 1) {
        sections.push(newSection);
      } else {
        sections.at(-1).addSubsection(newSection);
      }
    }

    return sections;
  }

  /**
   * Add a section object to this section's children.
   * @param {Section} subsection
   */
  addSubsection(subsection) {
    this.children.push(subsection);
  }
}

/**
 * TableOfContents constructs a table of contents via an input
 * sections array. Every section link has an associated {@link ScrollLink}
 * to an ID of the slugified name of the section.
 * @param {object} props - Props of the component.
 * @param {Section[]} sections - Array of section objects.
 * @returns {JSX.Element}
 */
export default function TableOfContents({
  sections,
  ...rest
}) {
  return <Stack {...rest}>
    <Typography sx={{
      color: "#808080"
    }} variant="h3">Contents</Typography>
    <List>
      {
        sections.map(
          (section, index) => <React.Fragment key={index}>
            <ListItem sx={{
              p: 0,
              mt: 2
            }}>
              <ScrollLink to={section.slug} offset={0} smooth spy
                          activeClass={active} sx={{
                color: "#808080",
                fontSize: "0.8rem",
                textDecoration: "none"
              }}>
                {section.name}
              </ScrollLink>
            </ListItem>
            {
              section.children.map((subsection, subindex) => <ListItem key={`sub-${subindex}`}>
                <ScrollLink to={subsection.slug} smooth spy
                            activeClass={active} sx={{
                  color: "#808080",
                  fontSize: "0.8rem",
                  textDecoration: "none"
                }}>
                  {subsection.name}
                </ScrollLink>
              </ListItem>)
            }
          </React.Fragment>)
      }

    </List>
  </Stack>;
}
