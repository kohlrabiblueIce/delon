function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Jo5G:function(t,e,o){"use strict";o.r(e),o.d(e,"AclModule",(function(){return u}));var a,d,c,n,l=o("tyNb"),r=o("PCNd"),i=o("0qEG"),s=o("fXoL"),h=o("II6v"),p=[{path:"",component:i.a,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"control",redirectTo:"control/zh",pathMatch:"full"},{path:"control/:lang",component:(c=function t(){_classCallCheck(this,t),this.item={cols:1,urls:{"en-US":"packages/acl/docs/control.en-US.md","zh-CN":"packages/acl/docs/control.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><h2 id="Foreword">Foreword<a onclick="window.location.hash = \'Foreword\'" class="anchor">#</a></h2><p>Many times you need to control the permissions of a button. <code>@delon/acl</code> provides an <code>acl</code> directive that allows you to control the permissions of a button, table, list, etc.</p><h2 id="Principle">Principle<a onclick="window.location.hash = \'Principle\'" class="anchor">#</a></h2><p><code>[acl]</code> adds a <code>acl__hide</code> style to the target element by default, and hides the unauthorized element with <code>display: none</code>, which is a simple and efficient way.</p><p>The corresponding <code>*aclIf</code> is a structured directive similar to <code>ngIf</code> which does not render the element when it is not authorized. <strong>Note:</strong> In order to keep it simple, it does not support <code>acl-ability</code> permission point configuration.</p><h2 id="DEMO">DEMO<a onclick="window.location.hash = \'DEMO\'" class="anchor">#</a></h2><h3 id="Role">Role<a onclick="window.location.hash = \'Role\'" class="anchor">#</a></h3><p>Displayed when the button must have a user role.</p><pre class="hljs language-html"><code>&lt;button [acl]="\'user\'"&gt;&lt;/button&gt;\n&lt;button *aclIf="\'user\'"&gt;&lt;/button&gt;</code></pre><p>Displayed when the button must have a user or manage role.</p><pre class="hljs language-html"><code>&lt;button [acl]="[\'user\', \'manage\']"&gt;&lt;/button&gt;\n&lt;button *aclIf="[\'user\', \'manage\']"&gt;&lt;/button&gt;</code></pre><p>Displayed when the button must have a user and manage role.</p><pre class="hljs language-html"><code>&lt;button [acl]="{ role: [\'user\', \'manage\'], mode: \'allOf\' }"&gt;&lt;/button&gt;\n&lt;button *aclIf="{ role: [\'user\', \'manage\'], mode: \'allOf\' }"&gt;&lt;/button&gt;</code></pre><p>Displayed when the input muse have a user role, displayed text when it\'s not authorized.</p><pre class="hljs language-html"><code>&lt;input nz-input *aclIf="\'user\'; else unauthorized"&gt;\n&lt;ng-template #unauthorized&gt;{{user}}&lt;/ng-template&gt;</code></pre><p>Use <code>except</code> reverse control to displayed when it\'s not authorized.</p><pre class="hljs language-html"><code>&lt;ng-template [aclIf]="role" except&gt;\n  &lt;input nz-input&gt;\n&lt;/ng-template&gt;</code></pre><h3 id="Permission">Permission<a onclick="window.location.hash = \'Permission\'" class="anchor">#</a></h3><p>Displayed when the button must have a 10 value permisseion.</p><pre class="hljs language-html"><code>&lt;button [acl]="10"&gt;&lt;/button&gt;</code></pre><p>In order for the acl instruction to be a role or a permission, so the value of the parameter value is <code>string</code> which mean the role, <code>number</code> which mean the permission. Use the <code>acl-ability</code> parameter if the permission is a string.</p><pre class="hljs language-html"><code>&lt;button acl [acl-ability]="\'USER-EDIT\'"&gt;&lt;/button&gt;</code></pre><ul><li><p><code>oneOf</code> Must be valid against exactly one of the given permission (default).</p></li><li><p><code>allOf</code> Must be valid against all of the given permission</p></li></ul><p>Displayed when the button must have a <code>10</code> and <code>USER-EDIT</code> permission.</p><pre class="hljs language-html"><code>&lt;button [acl]="{ ability: [10, \'USER-EDIT\'], mode: \'allOf\' }"&gt;&lt;/button&gt;</code></pre><p><strong>String permission</strong></p><p>The check permission is via the <code>can</code> method, and through <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a> <code>acl.preCan</code> method, which can be used to implement a string to distinguish roles or permissions.</p><pre class="hljs language-ts"><code>// global-config.module.ts\nconst alainConfig: AlainConfig = {\n  acl: {\n    preCan: (roleOrAbility) => {\n      const str = roleOrAbility.toString();\n      return str.startsWith(\'ability.\') ? { ability: [ str ] } : null;\n    }\n  }\n};</code></pre><p>Therefore, passing a string with the beginning of <code>ability.</code> will be considered a permission point, for example:</p><pre class="hljs language-html"><code>&lt;button acl="ability.user.edit"&gt;&lt;/button&gt;</code></pre></section>',api:'<h2 id="API">API<a onclick="window.location.hash = \'API\'" class="anchor">#</a></h2><h3 id="*aclIf">*aclIf<a onclick="window.location.hash = \'*aclIf\'" class="anchor">#</a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[aclIf]</code></td><td><code>can</code> method parameter</td><td><code>ACLCanType</code></td><td>-</td></tr><tr><td><code>[aclIfThen]</code></td><td>Display template when authorized</td><td><code>TemplateRef&lt;void> | null</code></td><td>-</td></tr><tr><td><code>[aclIfElse]</code></td><td>Display template when not authorized</td><td><code>TemplateRef&lt;void> | null</code></td><td>-</td></tr><tr><td><code>[except]</code></td><td>Permissions denied to display</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{order:3,title:"Granular permissions",type:"Documents"},toc:[{id:"Foreword",title:"Foreword",h:2},{id:"Principle",title:"Principle",h:2},{id:"DEMO",title:"DEMO",h:2},{id:"Role",title:"Role",h:3},{id:"Permission",title:"Permission",h:3},{id:"API",title:"API",h:2},{id:"*aclIf",title:"*aclIf",h:3}]},"zh-CN":{content:'<section class="markdown"><h2 id="\u5199\u5728\u524d\u9762">\u5199\u5728\u524d\u9762<a onclick="window.location.hash = \'\u5199\u5728\u524d\u9762\'" class="anchor">#</a></h2><p>\u5f88\u591a\u65f6\u5019\u9700\u8981\u5bf9\u67d0\u4e2a\u6309\u94ae\u8fdb\u884c\u6743\u9650\u63a7\u5236\uff0c<code>@delon/acl</code> \u63d0\u4f9b\u4e00\u4e2a <code>acl</code> \u6307\u4ee4\uff0c\u53ef\u4ee5\u5229\u7528\u89d2\u8272\u6216\u6743\u9650\u70b9\u5bf9\u67d0\u4e2a\u6309\u94ae\u3001\u8868\u683c\u3001\u5217\u8868\u7b49\u5143\u7d20\u8fdb\u884c\u6743\u9650\u63a7\u5236\u3002</p><h2 id="\u539f\u7406">\u539f\u7406<a onclick="window.location.hash = \'\u539f\u7406\'" class="anchor">#</a></h2><p><code>[acl]</code> \u9ed8\u8ba4\u4f1a\u5728\u76ee\u6807\u5143\u7d20\u4e0a\u589e\u52a0\u4e00\u4e2a <code>acl__hide</code> \u6837\u5f0f\uff0c\u5229\u7528 <code>display: none</code> \u6765\u9690\u85cf\u672a\u6388\u6743\u5143\u7d20\uff0c\u5b83\u662f\u4e00\u4e2a\u7b80\u5355\u3001\u53c8\u9ad8\u6548\u7684\u65b9\u5f0f\u3002</p><p>\u4ee5\u6b64\u76f8\u5bf9\u5e94\u7684 <code>*aclIf</code> \u662f\u4e00\u4e2a\u7ed3\u6784\u578b\u6307\u4ee4\uff0c\u5b83\u7c7b\u4f3c <code>ngIf</code> \u5728\u672a\u6388\u6743\u65f6\u4f1a\u4e0d\u6e32\u67d3\u8be5\u5143\u7d20\u3002<strong>\u6ce8\uff1a</strong> \u4e3a\u4e86\u4fdd\u6301\u7b80\u6d01\u5b83\u5e76\u4e0d\u652f\u6301 <code>acl-ability</code> \u6743\u9650\u70b9\u914d\u7f6e\u3002</p><h2 id="\u793a\u4f8b">\u793a\u4f8b<a onclick="window.location.hash = \'\u793a\u4f8b\'" class="anchor">#</a></h2><h3 id="\u89d2\u8272">\u89d2\u8272<a onclick="window.location.hash = \'\u89d2\u8272\'" class="anchor">#</a></h3><p>\u6309\u94ae\u5fc5\u987b\u62e5\u6709 user \u89d2\u8272\u663e\u793a\u3002</p><pre class="hljs language-html"><code>&lt;button [acl]="\'user\'"&gt;&lt;/button&gt;\n&lt;button *aclIf="\'user\'"&gt;&lt;/button&gt;</code></pre><p>\u6309\u94ae\u5fc5\u987b\u62e5\u6709 user \u6216 manage \u89d2\u8272\u663e\u793a\u3002</p><pre class="hljs language-html"><code>&lt;button [acl]="[\'user\', \'manage\']"&gt;&lt;/button&gt;\n&lt;button *aclIf="[\'user\', \'manage\']"&gt;&lt;/button&gt;</code></pre><p>\u6309\u94ae\u5fc5\u987b\u62e5\u6709 user \u548c manage \u89d2\u8272\u663e\u793a\u3002</p><pre class="hljs language-html"><code>&lt;button [acl]="{ role: [\'user\', \'manage\'], mode: \'allOf\' }"&gt;&lt;/button&gt;\n&lt;button *aclIf="{ role: [\'user\', \'manage\'], mode: \'allOf\' }"&gt;&lt;/button&gt;</code></pre><p>\u5f53\u62e5\u6709 user \u89d2\u8272\u663e\u793a\u6587\u672c\u6846\uff0c\u672a\u6388\u6743\u663e\u793a\u6587\u672c\u3002</p><pre class="hljs language-html"><code>&lt;input nz-input *aclIf="\'user\'; else unauthorized"&gt;\n&lt;ng-template #unauthorized&gt;{{user}}&lt;/ng-template&gt;</code></pre><p>\u4f7f\u7528 <code>except</code> \u53cd\u5411\u63a7\u5236\uff0c\u5f53\u672a\u62e5\u6709 user \u89d2\u8272\u65f6\u663e\u793a\u3002</p><pre class="hljs language-html"><code>&lt;ng-template [aclIf]="role" except&gt;\n  &lt;input nz-input&gt;\n&lt;/ng-template&gt;</code></pre><h3 id="\u6743\u9650\u70b9">\u6743\u9650\u70b9<a onclick="window.location.hash = \'\u6743\u9650\u70b9\'" class="anchor">#</a></h3><p>\u6309\u94ae\u5fc5\u987b\u62e5\u6709 10 \u6743\u9650\u70b9\u663e\u793a\u3002</p><pre class="hljs language-html"><code>&lt;button [acl]="10"&gt;&lt;/button&gt;</code></pre><p>acl \u6307\u4ee4\u4e3a\u4e86\u80fd\u6240\u4f20\u9012\u7684\u503c\u662f\u89d2\u8272\u8fd8\u662f\u6743\u9650\u70b9\uff0c\u6240\u4ee5\u4ee5 <code>string</code> \u7c7b\u578b\u8868\u793a\u89d2\u8272\u3001<code>number</code> \u7c7b\u578b\u8868\u793a\u6743\u9650\u70b9\uff0c\u82e5\u6743\u9650\u70b9\u4e3a\u5b57\u7b26\u4e32\uff0c\u53ef\u4f7f\u7528\u4ee5\u4e0b\u5199\u6cd5\u3002</p><pre class="hljs language-html"><code>&lt;button acl [acl-ability]="\'USER-EDIT\'"&gt;&lt;/button&gt;</code></pre><p>\u4f7f\u7528 <code>mode: \'allOf\'</code> \u8868\u793a\u5fc5\u987b\u540c\u65f6\u62e5\u6709\u3002</p><ul><li><p><code>oneOf</code> \u8868\u793a\u53ea\u987b\u6ee1\u8db3\u89d2\u8272\u6216\u6743\u9650\u70b9\u6570\u7ec4\u4e2d\u7684\u4e00\u9879\u7b97\u6709\u6548\uff08\u9ed8\u8ba4\uff09</p></li><li><p><code>allOf</code> \u8868\u793a\u5fc5\u987b\u6ee1\u8db3\u6240\u6709\u89d2\u8272\u6216\u6743\u9650\u70b9\u6570\u7ec4\u7b97\u6709\u6548</p></li></ul><p>\u6309\u94ae\u5fc5\u987b\u62e5\u6709 <code>10</code> \u548c <code>USER-EDIT</code> \u6743\u9650\u70b9\u65f6\u663e\u793a\u3002</p><pre class="hljs language-html"><code>&lt;button [acl]="{ ability: [10, \'USER-EDIT\'], mode: \'allOf\' }"&gt;&lt;/button&gt;</code></pre><p><strong>\u5b57\u7b26\u4e32\u578b\u6743\u9650\u70b9</strong></p><p>\u68c0\u67e5\u6743\u9650\u662f\u901a\u8fc7 <code>can</code> \u65b9\u6cd5\uff0c\u901a\u8fc7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5c40\u914d\u7f6e</a> <code>acl.preCan</code> \u65b9\u6cd5\uff0c\u53ef\u4ee5\u5229\u7528\u8be5\u65b9\u6cd5\u6765\u5b9e\u73b0\u4e00\u4e2a\u5b57\u7b26\u4e32\u533a\u5206\u89d2\u8272\u6216\u6743\u9650\u70b9\u3002</p><pre class="hljs language-ts"><code>// global-config.module.ts\nconst alainConfig: AlainConfig = {\n  acl: {\n    preCan: (roleOrAbility) => {\n      const str = roleOrAbility.toString();\n      return str.startsWith(\'ability.\') ? { ability: [ str ] } : null;\n    }\n  }\n};</code></pre><p>\u56e0\u6b64\uff0c\u5f53\u4f20\u9012\u4e00\u4e2a\u5e26\u6709 <code>ability.</code> \u5f00\u5934\u7684\u5b57\u7b26\u4e32\u4f1a\u88ab\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4e2a\u6743\u9650\u70b9\uff0c\u4f8b\u5982\uff1a</p><pre class="hljs language-html"><code>&lt;button acl="ability.user.edit"&gt;&lt;/button&gt;</code></pre></section>',api:'<h2 id="API">API<a onclick="window.location.hash = \'API\'" class="anchor">#</a></h2><h3 id="*aclIf">*aclIf<a onclick="window.location.hash = \'*aclIf\'" class="anchor">#</a></h3><table><thead><tr><th>\u53c2\u6570</th><th>\u8bf4\u660e</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th></tr></thead><tbody><tr><td><code>[aclIf]</code></td><td><code>can</code> \u65b9\u6cd5\u53c2\u6570\u4f53</td><td><code>ACLCanType</code></td><td>-</td></tr><tr><td><code>[aclIfThen]</code></td><td>\u5df2\u6388\u6743\u65f6\u663e\u793a\u6a21\u677f</td><td><code>TemplateRef&lt;void> | null</code></td><td>-</td></tr><tr><td><code>[aclIfElse]</code></td><td>\u672a\u6388\u6743\u65f6\u663e\u793a\u6a21\u677f</td><td><code>TemplateRef&lt;void> | null</code></td><td>-</td></tr><tr><td><code>[except]</code></td><td>\u672a\u6388\u6743\u65f6\u663e\u793a</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{order:3,title:"\u7c92\u5ea6\u63a7\u5236",type:"Documents"},toc:[{id:"\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{id:"\u539f\u7406",title:"\u539f\u7406",h:2},{id:"\u793a\u4f8b",title:"\u793a\u4f8b",h:2},{id:"\u89d2\u8272",title:"\u89d2\u8272",h:3},{id:"\u6743\u9650\u70b9",title:"\u6743\u9650\u70b9",h:3},{id:"API",title:"API",h:2},{id:"*aclIf",title:"*aclIf",h:3}]}},demo:!1},this.codes=[]},c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=s.Ob({type:c,selectors:[["app-acl-control"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,e){1&t&&s.Vb(0,"app-docs",0),2&t&&s.tc("codes",e.codes)("item",e.item)},directives:[h.a],styles:["[_nghost-%COMP%] { display: block }"]}),c)},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:(d=function t(){_classCallCheck(this,t),this.item={cols:1,urls:{"en-US":"packages/acl/docs/getting-started.en-US.md","zh-CN":"packages/acl/docs/getting-started.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>ACL (Access Control List) is a very simple role-based permission control method, you can use in any Angular projects, a online <a target="_blank" href="//ng-alain.github.io/ng-alain/#/logics/acl" data-url="//ng-alain.github.io/ng-alain/#/logics/acl">DEMO</a></p><h2 id="About-ACLService">About ACLService<a onclick="window.location.hash = \'About-ACLService\'" class="anchor">#</a></h2><p>The <code>ACLService</code> service class contains a set of methods based on role permissions. For a better coding experience ng-alain has multiple components or modules that depend on it, such as <code>st</code>, <code>MenuService</code> etc.. So, when you encounter the <code>acl</code> attribute, it means the parameter value of the <a href="#ACLCanType" data-url="#ACLCanType">can</a> method.</p><h2 id="Usage">Usage<a onclick="window.location.hash = \'Usage\'" class="anchor">#</a></h2><p>Install <code>@delon/acl</code>:</p><pre class="hljs language-bash"><code>yarn add @delon/acl</code></pre><p>Import <code>DelonACLModule</code> module:</p><pre class="hljs language-typescript"><code>import { DelonACLModule } from \'@delon/acl\';\n\n@NgModule({\n  imports: [\n    DelonACLModule.forRoot()\n  ]\n})\nexport class AppModule { }</code></pre></section>',api:'<h2 id="API">API<a onclick="window.location.hash = \'API\'" class="anchor">#</a></h2><h3 id="DelonACLConfig">DelonACLConfig<a onclick="window.location.hash = \'DelonACLConfig\'" class="anchor">#</a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[guard_url]</code></td><td><code>string</code></td><td>Router URL when guard fail</td><td><code>/403</code></td><td>\u2705</td></tr><tr><td><code>[preCan]</code></td><td><code>(roleOrAbility: <a data-toc="ACLCanType">ACLCanType</a>) => <a data-toc="ACLType">ACLType</a></code></td><td><code>can</code> before execution callback</td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="ACLService">ACLService<a onclick="window.location.hash = \'ACLService\'" class="anchor">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>[change]</code></td><td>Listen for ACL change notifications</td></tr><tr><td><code>[data]</code></td><td>Get all ACL data</td></tr><tr><td><code>setFull(val: boolean)</code></td><td>Whether to super administrator</td></tr><tr><td><code>set(value: <a data-toc="ACLType">ACLType</a>)</code></td><td>Set current user role or permission (automatic override)</td></tr><tr><td><code>setRole(roles: string[])</code></td><td>Set current user role (automatic override)</td></tr><tr><td><code>setAbility(abilities: (number | string)[])</code></td><td>Set current user permission (automatic override)</td></tr><tr><td><code>add(value: <a data-toc="ACLType">ACLType</a>)</code></td><td>Add role or permission to the current user</td></tr><tr><td><code>attachRole(roles: string[])</code></td><td>Attach a role to the current user</td></tr><tr><td><code>attachAbility(abilities: (number | string)[])</code></td><td>Attach a permission to the current user</td></tr><tr><td><code>removeRole(roles: string[])</code></td><td>Remove the role for the current user</td></tr><tr><td><code>removeAbility(abilities: (number | string)[])</code></td><td>Remove the permission for the current user</td></tr><tr><td><code>can(roleOrAbility: <a data-toc="ACLCanType">ACLCanType</a>)</code></td><td>Whether the current user has a role</td></tr><tr><td><code>canAbility(ability: <a data-toc="ACLCanType">ACLCanType</a>)</code></td><td>Whether the current user has a permission</td></tr></tbody></table><h3 id="ACLCanType">ACLCanType<a onclick="window.location.hash = \'ACLCanType\'" class="anchor">#</a></h3><pre class="hljs language-ts"><code>type ACLCanType = number | number[] | string | string[] | ACLType</code></pre><h3 id="ACLType">ACLType<a onclick="window.location.hash = \'ACLType\'" class="anchor">#</a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Summary</th><th>Default</th></tr></thead><tbody><tr><td><code>[role]</code></td><td><code>string[]</code></td><td>List of role</td><td>-</td></tr><tr><td><code>[ability]</code></td><td><code>number[], string[]</code></td><td>List of permission</td><td>-</td></tr><tr><td><code>[mode]</code></td><td><code>allOf, oneOf</code></td><td><code>allOf</code> Must be valid against all of the given permission.<br><code>oneOf</code> Must be valid against exactly one of the given permission.</td><td><code>oneOf</code></td></tr><tr><td><code>[except]</code></td><td><code>boolean</code></td><td>Whether it\'s except, when the result is <code>true</code>, it means unauthorized</td><td><code>false</code></td></tr></tbody></table>',meta:{order:1,title:"Getting Started",type:"Documents",module:"DelonACLModule"},toc:[{id:"About-ACLService",title:"About ACLService",h:2},{id:"Usage",title:"Usage",h:2},{id:"API",title:"API",h:2},{id:"DelonACLConfig",title:"DelonACLConfig",h:3},{id:"ACLService",title:"ACLService",h:3},{id:"ACLCanType",title:"ACLCanType",h:3},{id:"ACLType",title:"ACLType",h:3}]},"zh-CN":{content:'<section class="markdown"><p>ACL \u5168\u79f0\u53eb\u8bbf\u95ee\u63a7\u5236\u5217\u8868\uff08Access Control List\uff09\uff0c\u662f\u4e00\u79cd\u975e\u5e38\u7b80\u5355\u7684\u57fa\u4e8e\u89d2\u8272\u6743\u9650\u63a7\u5236\u65b9\u5f0f\u3002\u4e00\u4e2a\u5b8c\u5168\u72ec\u7acb <code>@delon/acl</code> \u6a21\u5757\uff08<a target="_blank" href="//ng-alain.github.io/ng-alain/#/logics/acl" data-url="//ng-alain.github.io/ng-alain/#/logics/acl">DEMO</a>\uff09\u3002</p><h2 id="\u5982\u4f55\u8fd0\u884c">\u5982\u4f55\u8fd0\u884c<a onclick="window.location.hash = \'\u5982\u4f55\u8fd0\u884c\'" class="anchor">#</a></h2><p>\u5185\u90e8\u5b9e\u9645\u662f\u4e00\u4e2a <code>ACLService</code> \u5b83\u63d0\u4f9b\u4e00\u5957\u57fa\u4e8e\u89d2\u8272\u6743\u9650\u670d\u52a1\u7c7b\u3002\u4e3a\u4e86\u66f4\u597d\u7684\u7f16\u7801\u4f53\u9a8c ng-alain \u6709\u591a\u5904\u7ec4\u4ef6\u6216\u6a21\u5757\u4e5f\u4f9d\u8d56\u4e8e\u5b83\uff0c\u4f8b\u5982\uff1a<code>st</code>\u3001<code>MenuService</code> \u7b49\uff0c\u5e76\u4e14\u8fd9\u4e9b\u4f1a\u4ee5 <code>acl</code> \u5c5e\u6027\u7684\u5f62\u5f0f\u8868\u73b0\u3002\u56e0\u6b64\uff0c\u5f53\u9047\u5230 <code>acl</code> \u5c5e\u6027\u90fd\u8868\u793a <a href="#ACLCanType" data-url="#ACLCanType">can</a> \u65b9\u6cd5\u7684<strong>\u53c2\u6570\u503c</strong>\u3002</p><h2 id="\u5982\u4f55\u4f7f\u7528">\u5982\u4f55\u4f7f\u7528<a onclick="window.location.hash = \'\u5982\u4f55\u4f7f\u7528\'" class="anchor">#</a></h2><p>\u5b89\u88c5 <code>@delon/acl</code> \u4f9d\u8d56\u5305\uff1a</p><pre class="hljs language-bash"><code>yarn add @delon/acl</code></pre><p>\u5bfc\u5165 <code>DelonACLModule</code> \u6a21\u5757\uff1a</p><pre class="hljs language-typescript"><code>import { DelonACLModule } from \'@delon/acl\';\n\n@NgModule({\n  imports: [\n    DelonACLModule.forRoot()\n  ]\n})\nexport class AppModule { }</code></pre></section>',api:'<h2 id="API">API<a onclick="window.location.hash = \'API\'" class="anchor">#</a></h2><h3 id="DelonACLConfig">DelonACLConfig<a onclick="window.location.hash = \'DelonACLConfig\'" class="anchor">#</a></h3><table><thead><tr><th>\u53c2\u6570</th><th>\u8bf4\u660e</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th><th>\u5168\u5c40\u914d\u7f6e</th></tr></thead><tbody><tr><td><code>[guard_url]</code></td><td><code>string</code></td><td>\u8def\u7531\u5b88\u536b\u5931\u8d25\u540e\u8df3\u8f6c</td><td><code>/403</code></td><td>\u2705</td></tr><tr><td><code>[preCan]</code></td><td><code>(roleOrAbility: <a data-toc="ACLCanType">ACLCanType</a>) => <a data-toc="ACLType">ACLType</a></code></td><td><code>can</code> \u6267\u884c\u524d\u56de\u8c03</td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="ACLService">ACLService<a onclick="window.location.hash = \'ACLService\'" class="anchor">#</a></h3><table><thead><tr><th>\u65b9\u6cd5</th><th>\u8bf4\u660e</th></tr></thead><tbody><tr><td><code>[change]</code></td><td>\u76d1\u542cACL\u53d8\u66f4\u901a\u77e5</td></tr><tr><td><code>[data]</code></td><td>\u83b7\u53d6\u6240\u6709ACL\u6570\u636e</td></tr><tr><td><code>setFull(val: boolean)</code></td><td>\u6807\u8bc6\u5f53\u524d\u7528\u6237\u4e3a\u5168\u91cf\uff0c\u5373\u4e0d\u53d7\u9650</td></tr><tr><td><code>set(value: <a data-toc="ACLType">ACLType</a>)</code></td><td>\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u89d2\u8272\u6216\u6743\u9650\u80fd\u529b\uff08\u4f1a\u5148\u6e05\u9664\u6240\u6709\uff09</td></tr><tr><td><code>setRole(roles: string[])</code></td><td>\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u89d2\u8272\uff08\u4f1a\u5148\u6e05\u9664\u6240\u6709\uff09</td></tr><tr><td><code>setAbility(abilities: (number | string)[])</code></td><td>\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u6743\u9650\u80fd\u529b\uff08\u4f1a\u5148\u6e05\u9664\u6240\u6709\uff09</td></tr><tr><td><code>add(value: <a data-toc="ACLType">ACLType</a>)</code></td><td>\u4e3a\u5f53\u524d\u7528\u6237\u589e\u52a0\u89d2\u8272\u6216\u6743\u9650\u80fd\u529b</td></tr><tr><td><code>attachRole(roles: string[])</code></td><td>\u4e3a\u5f53\u524d\u7528\u6237\u9644\u52a0\u89d2\u8272</td></tr><tr><td><code>attachAbility(abilities: (number | string)[])</code></td><td>\u4e3a\u5f53\u524d\u7528\u6237\u9644\u52a0\u6743\u9650</td></tr><tr><td><code>removeRole(roles: string[])</code></td><td>\u4e3a\u5f53\u524d\u7528\u6237\u79fb\u9664\u89d2\u8272</td></tr><tr><td><code>removeAbility(abilities: (number | string)[])</code></td><td>\u4e3a\u5f53\u524d\u7528\u6237\u79fb\u9664\u6743\u9650</td></tr><tr><td><code>can(roleOrAbility: <a data-toc="ACLCanType">ACLCanType</a>)</code></td><td>\u5f53\u524d\u7528\u6237\u662f\u5426\u6709\u5bf9\u5e94\u89d2\u8272</td></tr><tr><td><code>canAbility(ability: <a data-toc="ACLCanType">ACLCanType</a>)</code></td><td>\u5f53\u524d\u7528\u6237\u662f\u5426\u6709\u5bf9\u5e94\u6743\u9650\u70b9</td></tr></tbody></table><h3 id="ACLCanType">ACLCanType<a onclick="window.location.hash = \'ACLCanType\'" class="anchor">#</a></h3><pre class="hljs language-ts"><code>type ACLCanType = number | number[] | string | string[] | ACLType</code></pre><h3 id="ACLType">ACLType<a onclick="window.location.hash = \'ACLType\'" class="anchor">#</a></h3><table><thead><tr><th>\u5c5e\u6027</th><th>\u7c7b\u578b</th><th>\u8bf4\u660e</th><th>\u9ed8\u8ba4</th></tr></thead><tbody><tr><td><code>[role]</code></td><td><code>string[]</code></td><td>\u89d2\u8272</td><td>-</td></tr><tr><td><code>[ability]</code></td><td><code>number[], string[]</code></td><td>\u6743\u9650\u70b9</td><td>-</td></tr><tr><td><code>[mode]</code></td><td><code>allOf, oneOf</code></td><td><code>allOf</code> \u8868\u793a\u5fc5\u987b\u6ee1\u8db3\u6240\u6709\u89d2\u8272\u6216\u6743\u9650\u70b9\u6570\u7ec4\u7b97\u6709\u6548<br><code>oneOf</code> \u8868\u793a\u53ea\u987b\u6ee1\u8db3\u89d2\u8272\u6216\u6743\u9650\u70b9\u6570\u7ec4\u4e2d\u7684\u4e00\u9879\u7b97\u6709\u6548</td><td><code>oneOf</code></td></tr><tr><td><code>[except]</code></td><td><code>boolean</code></td><td>\u662f\u5426\u53d6\u53cd\uff0c\u5373\u7ed3\u679c\u4e3a <code>true</code> \u65f6\u8868\u793a\u672a\u6388\u6743</td><td><code>false</code></td></tr></tbody></table>',meta:{order:1,title:"\u5f00\u59cb\u4f7f\u7528",type:"Documents",module:"DelonACLModule"},toc:[{id:"\u5982\u4f55\u8fd0\u884c",title:"\u5982\u4f55\u8fd0\u884c",h:2},{id:"\u5982\u4f55\u4f7f\u7528",title:"\u5982\u4f55\u4f7f\u7528",h:2},{id:"API",title:"API",h:2},{id:"DelonACLConfig",title:"DelonACLConfig",h:3},{id:"ACLService",title:"ACLService",h:3},{id:"ACLCanType",title:"ACLCanType",h:3},{id:"ACLType",title:"ACLType",h:3}]}},demo:!1},this.codes=[]},d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=s.Ob({type:d,selectors:[["app-acl-getting-started"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,e){1&t&&s.Vb(0,"app-docs",0),2&t&&s.tc("codes",e.codes)("item",e.item)},directives:[h.a],styles:["[_nghost-%COMP%] { display: block }"]}),d)},{path:"guard",redirectTo:"guard/zh",pathMatch:"full"},{path:"guard/:lang",component:(a=function t(){_classCallCheck(this,t),this.item={cols:1,urls:{"en-US":"packages/acl/docs/guard.en-US.md","zh-CN":"packages/acl/docs/guard.zh-CN.md"},content:{"en-US":{content:"<section class=\"markdown\"><article><h2 id=\"Foreword\">Foreword<a onclick=\"window.location.hash = 'Foreword'\" class=\"anchor\">#</a></h2><p>Routing guard prevent unauthorized users visit the page.</p><p><code>@delon/acl</code> implements the generic guard class <code>ACLGuard</code>, which allows for complex operations through simple configuration in route registration, and supports the <code>Observable</code> type.</p><p>Use the fixed attribute <code>guard</code> to specify the <code>ACLCanType</code> parameter value, for example:</p><pre class=\"hljs language-ts\"><code>const routes: Routes = [\n  {\n    path: 'auth',\n    canActivate: [ ACLGuard ],\n    data: { guard: 'user1' }\n  },\n  {\n    path: 'auth',\n    canActivate: [ ACLGuard ],\n    data: {\n      guard: <ACLType>{\n        role: [ 'user1' ],\n        ability: [ 10, 'USER-EDIT' ],\n        mode: 'allOf'\n      },\n      guard_url: '/no-permisseion'\n    }\n  },\n]</code></pre><blockquote><p>The value of <code>guard</code> must match the value of <a href=\"/acl/api#ACLCanType\" data-url=\"/acl/api#ACLCanType\">ACLCanType</a>.</p></blockquote><h2 id=\"DEMO\">DEMO<a onclick=\"window.location.hash = 'DEMO'\" class=\"anchor\">#</a></h2><pre class=\"hljs language-ts\"><code>import { of } from 'rxjs';\nimport { ACLGuard } from '@delon/acl';\nconst routes: Routes = [\n  {\n    path: 'guard',\n    component: GuardComponent,\n    children: [\n      { path: 'auth', component: GuardAuthComponent, canActivate: [ ACLGuard ], data: { guard: 'user1' } },\n      { path: 'admin', component: GuardAdminComponent, canActivate: [ ACLGuard ], data: { guard: 'admin' } }\n    ],\n    canActivateChild: [ ACLGuard ],\n    data: { guard: <ACLType>{ role: [ 'user1' ], ability: [ 10, 'USER-EDIT' ], mode: 'allOf' } }\n  },\n  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: 1 } },\n  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: of(false).pipe(map(v => 'admin')) } }\n];</code></pre></article></section>",meta:{order:3,title:"Guard",type:"Documents"},toc:[{id:"Foreword",title:"Foreword",h:2},{id:"DEMO",title:"DEMO",h:2}]},"zh-CN":{content:"<section class=\"markdown\"><article><h2 id=\"\u5199\u5728\u524d\u9762\">\u5199\u5728\u524d\u9762<a onclick=\"window.location.hash = '\u5199\u5728\u524d\u9762'\" class=\"anchor\">#</a></h2><p>\u8def\u7531\u5b88\u536b\u53ef\u4ee5\u9632\u6b62\u672a\u6388\u6743\u7528\u6237\u8bbf\u95ee\u9875\u9762\u3002</p><p>\u8def\u7531\u5b88\u536b\u9700\u8981\u5355\u72ec\u5bf9\u6bcf\u4e00\u4e2a\u8def\u7531\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5f88\u591a\u65f6\u5019\u8fd9\u770b\u8d77\u6765\u5f88\u7e41\u7410\uff0c<code>@delon/acl</code> \u5b9e\u73b0\u4e86\u901a\u7528\u5b88\u536b\u7c7b <code>ACLGuard</code>\uff0c\u53ef\u4ee5\u5728\u8def\u7531\u6ce8\u518c\u65f6\u900f\u8fc7\u7b80\u5355\u7684\u914d\u7f6e\u5b8c\u6210\u4e00\u4e9b\u590d\u6742\u7684\u64cd\u4f5c\uff0c\u751a\u81f3\u652f\u6301 <code>Observable</code> \u7c7b\u578b\u3002</p><p>\u4f7f\u7528\u56fa\u5b9a\u5c5e\u6027 <code>guard</code> \u6765\u6307\u5b9a <code>ACLCanType</code> \u53c2\u6570\uff0c\u4f8b\u5982\uff1a</p><pre class=\"hljs language-ts\"><code>const routes: Routes = [\n  {\n    path: 'auth',\n    canActivate: [ ACLGuard ],\n    data: { guard: 'user1' }\n  },\n  {\n    path: 'auth',\n    canActivate: [ ACLGuard ],\n    data: {\n      guard: <ACLType>{\n        role: [ 'user1' ],\n        ability: [ 10, 'USER-EDIT' ],\n        mode: 'allOf'\n      },\n      guard_url: '/no-permisseion'\n    }\n  },\n]</code></pre><blockquote><p><code>guard</code> \u7684\u503c\u5fc5\u987b\u7b26\u5408 <a href=\"/acl/getting-started#ACLCanType\" data-url=\"/acl/getting-started#ACLCanType\">ACLCanType</a> \u7c7b\u578b\u503c\u3002</p></blockquote><h2 id=\"\u793a\u4f8b\">\u793a\u4f8b<a onclick=\"window.location.hash = '\u793a\u4f8b'\" class=\"anchor\">#</a></h2><pre class=\"hljs language-ts\"><code>import { of } from 'rxjs';\nimport { ACLGuard } from '@delon/acl';\nconst routes: Routes = [\n  {\n    path: 'guard',\n    component: GuardComponent,\n    children: [\n      // \u89d2\u8272\u9650\u5b9a\n      { path: 'auth', component: GuardAuthComponent, canActivate: [ ACLGuard ], data: { guard: 'user1' } },\n      { path: 'admin', component: GuardAdminComponent, canActivate: [ ACLGuard ], data: { guard: 'admin' } }\n    ],\n    // \u6240\u6709\u5b50\u8def\u7531\u6709\u6548\n    canActivateChild: [ ACLGuard ],\n    data: { guard: <ACLType>{ role: [ 'user1' ], ability: [ 10, 'USER-EDIT' ], mode: 'allOf' } }\n  },\n  // \u6743\u9650\u70b9\u9650\u5b9a\n  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: 1 } },\n  // \u6216\u4f7f\u7528Observable\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u884c\u4e3a\n  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: of(false).pipe(map(v => 'admin')) } }\n];</code></pre></article></section>",meta:{order:3,title:"\u8def\u7531\u5b88\u536b",type:"Documents"},toc:[{id:"\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{id:"\u793a\u4f8b",title:"\u793a\u4f8b",h:2}]}},demo:!1},this.codes=[]},a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=s.Ob({type:a,selectors:[["app-acl-guard"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,e){1&t&&s.Vb(0,"app-docs",0),2&t&&s.tc("codes",e.codes)("item",e.item)},directives:[h.a],styles:["[_nghost-%COMP%] { display: block }"]}),a)}]}],u=((n=function t(){_classCallCheck(this,t)}).\u0275mod=s.Sb({type:n}),n.\u0275inj=s.Rb({factory:function(t){return new(t||n)},imports:[[r.a,l.k.forChild(p)]]}),n)}}]);