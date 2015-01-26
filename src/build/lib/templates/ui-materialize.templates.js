angular.module("ui.materialize").run(["$templateCache", function($templateCache) {$templateCache.put("components/blur.template.html","");
$templateCache.put("components/button.template.html","");
$templateCache.put("components/card.template.html","");
$templateCache.put("components/collapsible.template.html","");
$templateCache.put("components/collection.template.html","");
$templateCache.put("components/dialog.template.html","");
$templateCache.put("components/form.template.html","");
$templateCache.put("components/include.template.html","");
$templateCache.put("components/media.template.html","");
$templateCache.put("components/modal.template.html","");
$templateCache.put("components/notification.template.html","");
$templateCache.put("components/progress.template.html","");
$templateCache.put("components/ripple.template.html","");
$templateCache.put("components/select.template.html","");
$templateCache.put("components/shadow.template.html","");
$templateCache.put("components/tab.template.html","");
$templateCache.put("components/tabContent.template.html","");
$templateCache.put("components/table.template.html","");
$templateCache.put("components/tabs.template.html","");
$templateCache.put("components/text-field.template.html","");
$templateCache.put("components/tooltip.template.html","");
$templateCache.put("core/materialize.template.html","<div class=\"ui-materialize\">\n</div>");
$templateCache.put("layout/body.template.html","");
$templateCache.put("layout/col.template.html","");
$templateCache.put("layout/container.template.html","");
$templateCache.put("layout/flex.template.html","");
$templateCache.put("layout/footer.template.html","<footer class=\"page-footer grey lighten-4\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col l6 s12\">\n                <h5 class=\"grey-text\">Footer Content</h5>\n                <p class=\"grey-text text-darken-2\">You can use rows and columns here to organize your footer content.</p>\n            </div>\n            <div class=\"col l4 offset-l2 s12\">\n                <h5 class=\"grey-text\">Links</h5>\n                <li><a class=\"grey-text text-darken-2\" href=\"#!\">Link 1</a></li>\n                <li><a class=\"grey-text text-darken-2\" href=\"#!\">Link 2</a></li>\n                <li><a class=\"grey-text text-darken-2\" href=\"#!\">Link 3</a></li>\n                <li><a class=\"grey-text text-darken-2\" href=\"#!\">Link 4</a></li>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer-copyright\">\n        <div class=\"container pink-text accent-2\">\n            © 2015 Copyright i-materialize\n            <a class=\"grey-text text-darken-2 right\" href=\"#!\">More Links</a>\n        </div>\n    </div>\n</footer>");
$templateCache.put("layout/main.template.html","");
$templateCache.put("layout/view.template.html","");
$templateCache.put("nav/nav-action.template.html","<li><a class=\"{{waves}}\"  data-ng-class=\"childClassList\"  href=\"{{link}}\"\n    >   <i  data-ng-if=\"icon\"  class=\"{{icon}}\" ></i>\n        <span  ng-if=\"label\"  class=\"nav-action-text\" >{{label}}</span>\n    </a></li>\n");
$templateCache.put("nav/nav-collapsible-group.template.html","<ul>\n    <nav-collapse\n          waves=true\n          icon=\"mdi-image-color-lens\"\n          header=\"Stylus\">\n           <nav-action-group side=\"bottom\" links=\"blue-text text-accent-2\">\n               <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-editor-insert-chart\">\n                    <span class=\"nav-action-text\">Color</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    ui-sref=\'grid\'\n                    icon=\"mdi-device-storage\">\n                    <span class=\"nav-action-text\">Grid</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-device-now-widgets\">\n                    <span class=\"nav-action-text\">Shadow</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-content-send\">\n                    <span class=\"nav-action-text\">Table</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-action-settings-power\">\n                    <span class=\"nav-action-text\">Typography</span>\n              </nav-action>\n          </nav-action-group>\n    </nav-collapse>\n    <nav-collapse\n          waves=true\n          icon=\"mdi-action-dashboard\"\n          header=\"Components\">\n            <nav-action-group side=\"bottom\" links=\"blue-text text-accent-2\">\n               <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-editor-insert-chart\">\n                    <span class=\"nav-action-text\">Buttons</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-device-storage\">\n                    <span class=\"nav-action-text\">Cards</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-device-now-widgets\">\n                    <span class=\"nav-action-text\">Collections</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-content-send\">\n                    <span class=\"nav-action-text\">footer<span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-action-settings-power\">\n                    <span class=\"nav-action-text\">forms</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-action-settings-power\">\n                    <span class=\"nav-action-text\">forms</span>\n              </nav-action>\n          </nav-action-group>\n    </nav-collapse>\n    <nav-collapse\n          waves=true\n          icon=\"mdi-maps-layers\"\n          header=\"Directives\">\n            <nav-action-group side=\"bottom\" links=\"blue-text text-accent-2\">\n               <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-editor-insert-chart\">\n                    <span class=\"nav-action-text\">mz-materialize</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-device-storage\">\n                    <span class=\"nav-action-text\">mz-body</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-device-now-widgets\">\n                    <span class=\"nav-action-text\">mz-nav</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-content-send\">\n                    <span class=\"nav-action-text\">mz-main</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-action-settings-power\">\n                    <span class=\"nav-action-text\">mz-view</span>\n              </nav-action>\n          </nav-action-group>\n    </nav-collapse>\n    <nav-collapse\n          waves=true\n          icon=\"mdi-action-autorenew\"\n          header=\"Services\">\n            <nav-action-group side=\"bottom\" links=\"blue-text text-accent-2\">\n               <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-editor-insert-chart\">\n                    <span class=\"nav-action-text\">$Materialize</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-device-storage\">\n                    <span class=\"nav-action-text\">$mzNavigation</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-device-now-widgets\">\n                    <span class=\"nav-action-text\">$MenuService</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-content-send\">\n                    <span class=\"nav-action-text\">$ApplicationDelegate</span>\n              </nav-action>\n              <nav-action\n                    waves=true\n                    state=\'components\'\n                    icon=\"mdi-action-settings-power\">\n                    <span class=\"nav-action-text\">$ApplicationConfig</span>\n              </nav-action>\n          </nav-action-group>\n    </nav-collapse>\n</ul>");
$templateCache.put("nav/nav-side.template.html","<!-- <div class=\"transparent-bg\">\n    <div class=\"blured-bg\">\n    </div>\n</div> -->\n<aside class=\"nav-container nav-{{settings.side}}-container\">\n    <mz-nav-side-heading>\n        <button type=\"button\"\n                mz-side-nav-toggle=\"right\"\n                toggle=\'open\'\n                class=\"nav-action no-margin waves-effect waves-dark pink accent-2 \"\n                icon=\"mdi-navigation-menu\"\n                next-icon=\'mdi-navigation-arrow-forward\'\n                header-action-huge\n                ></button>\n        <!-- <li><a href=\"#\" class=\"linked\" mz-side-nav-toggle=\"right\" toggle=\'open\'><i class=\"mdi-navigation-menu\"></i></a></li> -->\n    </mz-nav-side-heading>\n    <mz-nav-side-content>\n        <nav-collapsible-group>\n        </nav-collapsible-group>\n        <nav-action-group side=\"bottom\" links=\"blue-text text-accent-2\">\n             <!-- <nav-action\n                  waves=true\n                  state=\'components\'\n                  icon=\"mdi-editor-insert-chart\">\n                  <span class=\"nav-action-text\">CSS</span>\n            </nav-action>\n            <nav-action\n                  waves=true\n                  state=\'components\'\n                  icon=\"mdi-device-storage\">\n                  <span class=\"nav-action-text\">Directives</span>\n            </nav-action>\n            <nav-action\n                  waves=true\n                  state=\'components\'\n                  icon=\"mdi-device-now-widgets\">\n                  <span class=\"nav-action-text\">Grid</span>\n            </nav-action> -->\n           <!--  <nav-action\n                  waves=true\n                  state=\'components\'\n                  icon=\"mdi-content-send\">\n                  <span class=\"nav-action-text\">Services</span>\n            </nav-action> -->\n\n                  <!-- link=\'http://github.com/joelcoxokc/ui-materialize\' -->\n            <nav-action\n                  waves=\'light\'\n                  icon=\"fa fa-github\"\n                  label=\"github\"\n                  ></nav-action>\n\n        </nav-action-group>\n    </mz-nav-side-content>\n</aside>\n");}]);