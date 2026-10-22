import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<XTreeToggle @model={{@model}} @toggleExpand={{@toggleExpand}}>\n  <:expandedIcon>\n    {{#if (has-block \"expandedIcon\")}}\n      {{yield to=\"expandedIcon\"}}\n    {{else}}\n      &#x25BC;\n    {{/if}}\n  </:expandedIcon>\n  <:collapsedIcon>\n    {{#if (has-block \"collapsedIcon\")}}\n      {{yield to=\"collapsedIcon\"}}\n    {{else}}\n      &#x25B6;\n    {{/if}}\n  </:collapsedIcon>\n</XTreeToggle>");

var XTreeNodeToggle = setComponentTemplate(TEMPLATE, templateOnly());

export { XTreeNodeToggle as default };
//# sourceMappingURL=x-tree-node-toggle.js.map
