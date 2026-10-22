import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<ul class=\"tree-branch\">\n  {{#each @model as |child|}}\n    {{#if child.isVisible}}\n      {{#if (has-block)}}\n        <XTreeChildren\n          @checkable={{@checkable}}\n          @recursiveCheck={{@recursiveCheck}}\n          @updateCheckbox={{@updateCheckbox}}\n          @chosenId={{@chosenId}}\n          @onCheck={{@onCheck}}\n          @onContextMenu={{@onContextMenu}}\n          @onSelect={{@onSelect}}\n          @onHover={{@onHover}}\n          @onHoverOut={{@onHoverOut}}\n          @model={{child}}\n        >\n          <:expandedIcon>{{yield to=\"expandedIcon\"}}</:expandedIcon>\n          <:collapsedIcon>{{yield to=\"collapsedIcon\"}}</:collapsedIcon>\n          <:default as |node|>{{yield node}}</:default>\n        </XTreeChildren>\n      {{else}}\n        <XTreeChildren\n          @model={{child}}\n          @checkable={{@checkable}}\n          @recursiveCheck={{@recursiveCheck}}\n          @updateCheckbox={{@updateCheckbox}}\n          @chosenId={{@chosenId}}\n          @onCheck={{@onCheck}}\n          @onContextMenu={{@onContextMenu}}\n          @onSelect={{@onSelect}}\n          @onHover={{@onHover}}\n          @onHoverOut={{@onHoverOut}}\n        >\n          <:expandedIcon>{{yield to=\"expandedIcon\"}}</:expandedIcon>\n          <:collapsedIcon>{{yield to=\"collapsedIcon\"}}</:collapsedIcon>\n        </XTreeChildren>\n      {{/if}}\n    {{/if}}\n  {{/each}}\n</ul>");

var xTreeBranch = setComponentTemplate(TEMPLATE, templateOnly());

export { xTreeBranch as default };
//# sourceMappingURL=x-tree-branch.js.map
