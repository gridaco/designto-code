# React builder built uppon Bridged's CoLI

## Installation

```sh
yarn add @coli.codes/react-builder
```

## Suopported code styles

**Languages**

- Typescript first
- Also supports JS
- Basic Language Features Powered by [CoLI](https://coli.codes) - What coli can do, works here as well.

**Components**

- Function Components
- Class Components

**React Api**

- hooks
  - useState
  - useEffect
- build your custom hooks with Hooks Builder

**Styles**

- css in jsx - `<div style={{color: "white"}}/>`
- styled (emotion and styled-components) - `styled.div`
- (Not recommanded) standard css & tsx(js/jsx) files - `.container {}, <div className="container"/>`
  - nextJS's style separation
- Reflect UI React components in the box
  - Column, Row, Button, TextField and much more. - learn more at [reflect-ui.com](https://reflect-ui.com)

## References

- [index.d.ts of ReactJS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts)

all html atrributes for react (naming)

```ts
type Key = string | number;

/**
 * @internal You shouldn't need to use this type since you never see these attributes
 * inside your component or have to validate them.
 */
interface Attributes {
  key?: Key | null | undefined;
}

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  "aria-activedescendant"?: string | undefined;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  "aria-atomic"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  "aria-busy"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  "aria-colcount"?: number | string | undefined;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  "aria-colindex"?: number | string | undefined;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  "aria-colspan"?: number | string | undefined;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  "aria-controls"?: string | undefined;
  /** Indicates the element that represents the current item within a container or set of related elements. */
  "aria-current"?:
    | boolean
    | "false"
    | "true"
    | "page"
    | "step"
    | "location"
    | "date"
    | "time"
    | undefined;
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  "aria-describedby"?: string | undefined;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  "aria-details"?: string | undefined;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  "aria-disabled"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  "aria-dropeffect"?:
    | "none"
    | "copy"
    | "execute"
    | "link"
    | "move"
    | "popup"
    | undefined;
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  "aria-errormessage"?: string | undefined;
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  "aria-expanded"?: boolean | "false" | "true" | undefined;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  "aria-flowto"?: string | undefined;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  "aria-grabbed"?: boolean | "false" | "true" | undefined;
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  "aria-haspopup"?:
    | boolean
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog"
    | undefined;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  "aria-hidden"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  "aria-invalid"?:
    | boolean
    | "false"
    | "true"
    | "grammar"
    | "spelling"
    | undefined;
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  "aria-keyshortcuts"?: string | undefined;
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  "aria-label"?: string | undefined;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  "aria-labelledby"?: string | undefined;
  /** Defines the hierarchical level of an element within a structure. */
  "aria-level"?: number | string | undefined;
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  "aria-live"?: "off" | "assertive" | "polite" | undefined;
  /** Indicates whether an element is modal when displayed. */
  "aria-modal"?: boolean | "false" | "true" | undefined;
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  "aria-multiline"?: boolean | "false" | "true" | undefined;
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  "aria-multiselectable"?: boolean | "false" | "true" | undefined;
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  "aria-orientation"?: "horizontal" | "vertical" | undefined;
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  "aria-owns"?: string | undefined;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  "aria-placeholder"?: string | undefined;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  "aria-posinset"?: number | string | undefined;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  "aria-readonly"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  "aria-relevant"?:
    | "additions"
    | "additions text"
    | "all"
    | "removals"
    | "text"
    | undefined;
  /** Indicates that user input is required on the element before a form may be submitted. */
  "aria-required"?: boolean | "false" | "true" | undefined;
  /** Defines a human-readable, author-localized description for the role of an element. */
  "aria-roledescription"?: string | undefined;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  "aria-rowcount"?: number | string | undefined;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  "aria-rowindex"?: number | string | undefined;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  "aria-rowspan"?: number | string | undefined;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  "aria-selected"?: boolean | "false" | "true" | undefined;
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  "aria-setsize"?: number | string | undefined;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
  /** Defines the maximum allowed value for a range widget. */
  "aria-valuemax"?: number | string | undefined;
  /** Defines the minimum allowed value for a range widget. */
  "aria-valuemin"?: number | string | undefined;
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  "aria-valuenow"?: number | string | undefined;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  "aria-valuetext"?: string | undefined;
}

interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  // React-specific Attributes
  defaultChecked?: boolean | undefined;
  defaultValue?: string | number | string[] | undefined;
  suppressContentEditableWarning?: boolean | undefined;
  suppressHydrationWarning?: boolean | undefined;

  // Standard HTML Attributes
  accessKey?: string | undefined;
  accesskey?: string | undefined;
  className?: string | undefined;
  class?: string | undefined;
  contentEditable?: Booleanish | "inherit" | undefined;
  contenteditable?: Booleanish | "inherit" | undefined;
  contextMenu?: string | undefined;
  contextmenu?: string | undefined;
  dir?: string | undefined;
  draggable?: Booleanish | undefined;
  hidden?: boolean | string | undefined;
  id?: string | undefined;
  lang?: string | undefined;
  placeholder?: string | undefined;
  slot?: string | undefined;
  spellCheck?: Booleanish | undefined;
  spellcheck?: Booleanish | undefined;
  style?: CSSProperties | undefined;
  tabIndex?: number | undefined;
  tabindex?: number | string | undefined;
  title?: string | undefined;
  translate?: "yes" | "no" | undefined;

  // Unknown
  radioGroup?: string | undefined; // <command>, <menuitem>
  radiogroup?: string | undefined;

  // WAI-ARIA
  role?: string | undefined;

  // RDFa Attributes
  about?: string | undefined;
  datatype?: string | undefined;
  inlist?: any;
  prefix?: string | undefined;
  property?: string | undefined;
  resource?: string | undefined;
  typeof?: string | undefined;
  vocab?: string | undefined;

  // Non-standard Attributes
  autoCapitalize?: string | undefined;
  autocapitalize?: string | undefined;
  autoCorrect?: string | undefined;
  autocorrect?: string | undefined;
  autoSave?: string | undefined;
  autosave?: string | undefined;
  color?: string | undefined;
  itemProp?: string | undefined;
  itemprop?: string | undefined;
  itemScope?: boolean | undefined;
  itemscope?: boolean | string | undefined;
  itemType?: string | undefined;
  itemtype?: string | undefined;
  itemID?: string | undefined;
  itemid?: string | undefined;
  itemRef?: string | undefined;
  itemref?: string | undefined;
  results?: number | string | undefined;
  security?: string | undefined;
  unselectable?: "on" | "off" | undefined;

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  inputmode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string | undefined;
}

interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
  // Standard HTML Attributes
  accept?: string | undefined;
  acceptCharset?: string | undefined;
  action?: string | undefined;
  allowFullScreen?: boolean | undefined;
  allowTransparency?: boolean | undefined;
  alt?: string | undefined;
  as?: string | undefined;
  async?: boolean | undefined;
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  autoPlay?: boolean | undefined;
  capture?: boolean | string | undefined;
  cellPadding?: number | string | undefined;
  cellSpacing?: number | string | undefined;
  charSet?: string | undefined;
  challenge?: string | undefined;
  checked?: boolean | undefined;
  cite?: string | undefined;
  classID?: string | undefined;
  cols?: number | undefined;
  colSpan?: number | undefined;
  content?: string | undefined;
  controls?: boolean | undefined;
  coords?: string | undefined;
  crossOrigin?: string | undefined;
  data?: string | undefined;
  dateTime?: string | undefined;
  default?: boolean | undefined;
  defer?: boolean | undefined;
  disabled?: boolean | undefined;
  download?: any;
  encType?: string | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  frameBorder?: number | string | undefined;
  headers?: string | undefined;
  height?: number | string | undefined;
  high?: number | undefined;
  href?: string | undefined;
  hrefLang?: string | undefined;
  htmlFor?: string | undefined;
  httpEquiv?: string | undefined;
  integrity?: string | undefined;
  keyParams?: string | undefined;
  keyType?: string | undefined;
  kind?: string | undefined;
  label?: string | undefined;
  list?: string | undefined;
  loop?: boolean | undefined;
  low?: number | undefined;
  manifest?: string | undefined;
  marginHeight?: number | undefined;
  marginWidth?: number | undefined;
  max?: number | string | undefined;
  maxLength?: number | undefined;
  media?: string | undefined;
  mediaGroup?: string | undefined;
  method?: string | undefined;
  min?: number | string | undefined;
  minLength?: number | undefined;
  multiple?: boolean | undefined;
  muted?: boolean | undefined;
  name?: string | undefined;
  nonce?: string | undefined;
  noValidate?: boolean | undefined;
  open?: boolean | undefined;
  optimum?: number | undefined;
  pattern?: string | undefined;
  placeholder?: string | undefined;
  playsInline?: boolean | undefined;
  poster?: string | undefined;
  preload?: string | undefined;
  readOnly?: boolean | undefined;
  rel?: string | undefined;
  required?: boolean | undefined;
  reversed?: boolean | undefined;
  rows?: number | undefined;
  rowSpan?: number | undefined;
  sandbox?: string | undefined;
  scope?: string | undefined;
  scoped?: boolean | undefined;
  scrolling?: string | undefined;
  seamless?: boolean | undefined;
  selected?: boolean | undefined;
  shape?: string | undefined;
  size?: number | undefined;
  sizes?: string | undefined;
  span?: number | undefined;
  src?: string | undefined;
  srcDoc?: string | undefined;
  srcLang?: string | undefined;
  srcSet?: string | undefined;
  start?: number | undefined;
  step?: number | string | undefined;
  summary?: string | undefined;
  target?: string | undefined;
  type?: string | undefined;
  useMap?: string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  width?: number | string | undefined;
  wmode?: string | undefined;
  wrap?: string | undefined;
}
```

## Key

> How we handle lists & keys for react

[React lists-and-keys](https://reactjs.org/docs/lists-and-keys.html)

```tsx
<ul id="example-1">
  {[1, 2, 3].map((i) => {
    return <li key={i}>{{ i }}</li>;
  })}
</ul>
```

> Vue has a same concept, but in vue syntax

```vue
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
```

from `index.d.ts`

```ts
type Key = string | number;

/**
 * @internal You shouldn't need to use this type since you never see these attributes
 * inside your component or have to validate them.
 */
interface Attributes {
  key?: Key | null | undefined;
}
```
