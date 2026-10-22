import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<span class=\"tree-checkbox\">\n  <span role=\"button\" {{on \"click\" @toggleCheck}}>\n    {{! template-lint-disable no-invalid-role no-nested-interactive }}\n    <input\n      aria-label=\"Checkbox for {{@model.name}}\"\n      checked={{@model.isChecked}}\n      disabled={{@model.isDisabled}}\n      indeterminate={{@model.isIndeterminate}}\n      role=\"presentation\"\n      type=\"checkbox\"\n    />\n  </span>\n</span>");

var XTreeCheckbox = setComponentTemplate(TEMPLATE, templateOnly());

export { XTreeCheckbox as default };
//# sourceMappingURL=x-tree-checkbox.js.map
