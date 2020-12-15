'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var SlidingPanesPlugin = /** @class */ (function (_super) {
    __extends(SlidingPanesPlugin, _super);
    function SlidingPanesPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // helper variables
        _this.leavesOpenCount = 0;
        _this.activeLeafIndex = 0;
        // enable andy mode
        _this.enable = function () {
            // add the event handlers
            _this.app.workspace.on('resize', _this.recalculateLeaves);
            _this.app.workspace.on('file-open', _this.handleFileOpen);
            _this.app.vault.on('delete', _this.handleDelete);
            // wait for layout to be ready to perform the rest
            _this.app.workspace.layoutReady ? _this.reallyEnable() : _this.app.workspace.on('layout-ready', _this.reallyEnable);
        };
        // really enable things (once the layout is ready)
        _this.reallyEnable = function () {
            // we don't need the event handler anymore
            _this.app.workspace.off('layout-ready', _this.reallyEnable);
            // backup the function so I can restore it
            _this.rootSplitAny.oldOnChildResizeStart = _this.rootSplitAny.onChildResizeStart;
            _this.rootSplitAny.onChildResizeStart = _this.onChildResizeStart;
            // add some extra classes that can't fit in the styles.css
            // because they use settings
            _this.addStyle();
            // do all the calucations necessary for the workspace leaves
            _this.recalculateLeaves();
        };
        // shut down andy mode
        _this.disable = function () {
            // get rid of the extra style tag we added
            _this.removeStyle();
            // iterate through the root leaves to remove the stuff we added
            _this.app.workspace.iterateRootLeaves(function (leaf) {
                leaf.containerEl.style.width = null;
                leaf.containerEl.style.left = null;
                leaf.containerEl.style.right = null;
            });
            // restore the default functionality
            _this.rootSplitAny.onChildResizeStart = _this.rootSplitAny.oldOnChildResizeStart;
            // get rid of our event handlers
            _this.app.workspace.off('resize', _this.recalculateLeaves);
            _this.app.workspace.off('file-open', _this.handleFileOpen);
            _this.app.vault.off('delete', _this.handleDelete);
            _this.suggestionContainerObserver.disconnect();
        };
        // refresh funcion for when we change settings
        _this.refresh = function () {
            // re-load the style
            _this.updateStyle();
            // recalculate leaf positions
            _this.recalculateLeaves();
        };
        // remove the stlying elements we've created
        _this.removeStyle = function () {
            var el = document.getElementById('plugin-sliding-panes');
            if (el)
                el.remove();
            document.body.classList.remove('plugin-sliding-panes');
            document.body.classList.remove('plugin-sliding-panes-rotate-header');
            document.body.classList.remove('plugin-sliding-panes-header-alt');
            document.body.classList.remove('plugin-sliding-panes-stacking');
        };
        // add the styling elements we need
        _this.addStyle = function () {
            // add a css block for our settings-dependent styles
            var css = document.createElement('style');
            css.id = 'plugin-sliding-panes';
            document.getElementsByTagName("head")[0].appendChild(css);
            // add the main class
            document.body.classList.add('plugin-sliding-panes');
            // update the style with the settings-dependent styles
            _this.updateStyle();
        };
        // update the styles (at the start, or as the result of a settings change)
        _this.updateStyle = function () {
            // if we've got rotate headers on, add the class which enables it
            document.body.classList.toggle('plugin-sliding-panes-rotate-header', _this.settings.rotateHeaders);
            document.body.classList.toggle('plugin-sliding-panes-header-alt', _this.settings.headerAlt);
            // do the same for stacking
            document.body.classList.toggle('plugin-sliding-panes-stacking', _this.settings.stackingEnabled);
            // get the custom css element
            var el = document.getElementById('plugin-sliding-panes');
            if (!el)
                throw "plugin-sliding-panes element not found!";
            else {
                // set the settings-dependent css
                el.innerText = "\n        body.plugin-sliding-panes{--header-width:" + _this.settings.headerWidth + "px;}\n        body.plugin-sliding-panes .mod-root>.workspace-leaf{\n          width:" + (_this.settings.leafWidth + _this.settings.headerWidth) + "px;\n        }\n      ";
            }
        };
        // Recalculate the leaf sizing and positions
        _this.recalculateLeaves = function () {
            // rootSplit.children is undocumented for now, but it's easier to use for what we're doing.
            var leafCount = _this.rootSplitAny.children.length;
            var totalWidth = 0;
            // iterate through all the root-level leaves
            // keep the leaf as `any` to get the undocumented containerEl
            _this.rootSplitAny.children.forEach(function (leaf, i) {
                leaf.containerEl.style.left = _this.settings.stackingEnabled
                    ? (i * _this.settings.headerWidth) + "px"
                    : null;
                leaf.containerEl.style.right = _this.settings.stackingEnabled
                    ? (((leafCount - i) * _this.settings.headerWidth) - leaf.containerEl.clientWidth) + "px"
                    : null;
                leaf.containerEl.style.flex = null;
                // keep track of the total width of all leaves
                totalWidth += leaf.containerEl.clientWidth;
            });
            // if the total width of all leaves is less than the width available,
            // add back the flex class so they fill the space
            if (totalWidth < _this.rootSplitAny.containerEl.clientWidth) {
                _this.rootSplitAny.children.forEach(function (leaf) {
                    leaf.containerEl.style.flex = '1 0 0';
                });
            }
        };
        // this function is called, not only when a file opens, but when the active pane is switched
        _this.handleFileOpen = function (e) {
            // put a small timeout on it because when a file is opened on the far right 
            // it wasn't focussing properly. The timeout fixes this
            setTimeout(function () {
                // check for a closed leaf and activate the adjacent leaf if it was
                _this.activateAdjacentLeafIfClosed(e);
                // focus on the newly selected leaf
                _this.focusLeaf(e);
            }, 10);
        };
        // check for a closed leaf and activate the adjacent leaf
        _this.activateAdjacentLeafIfClosed = function (e) {
            // first we need to figure out the count of open leaves
            var leafCount = _this.rootSplitAny.children.length;
            // use this value to check if we've set an active leaf yet
            var isActiveLeafSet = false;
            // if the number of open leaves has changed
            if (leafCount != _this.leavesOpenCount) {
                // if the number of leaves is < our last saved value, we must have closed one (or more)
                if (leafCount < _this.leavesOpenCount) {
                    // iterate through the leaves
                    _this.rootSplitAny.children.forEach(function (leaf, i) {
                        // if we haven't activated a leaf yet and this leaf is adjacent to the closed one
                        if (!isActiveLeafSet && (i >= _this.activeLeafIndex - 1)) {
                            // set the active leaf (undocumented, hence `any`)
                            _this.app.workspace.setActiveLeaf(leaf);
                            isActiveLeafSet = true;
                            // set the index for next time, also.
                            _this.activeLeafIndex = i;
                        }
                    });
                }
                // set the new open count
                _this.leavesOpenCount = leafCount;
                // recalculate leaf positions
                _this.recalculateLeaves();
            }
        };
        _this.focusLeaf = function (file) {
            // get back to the leaf which has been andy'd (`any` because parentSplit is undocumented)
            var activeLeaf = _this.app.workspace.activeLeaf;
            while (activeLeaf != null && activeLeaf.parentSplit != null && activeLeaf.parentSplit != _this.app.workspace.rootSplit) {
                activeLeaf = activeLeaf.parentSplit;
            }
            if (activeLeaf != null) {
                // get the index of the active leaf
                // also, get the position of this leaf, so we can scroll to it
                // as leaves are resizable, we have to iterate through all leaves to the
                // left until we get to the active one and add all their widths together
                var position_1 = 0;
                _this.activeLeafIndex = -1;
                _this.rootSplitAny.children.forEach(function (leaf, index) {
                    // this is the active one
                    if (leaf == activeLeaf) {
                        _this.activeLeafIndex = index;
                        leaf.containerEl.classList.remove('mod-am-left-of-active');
                        leaf.containerEl.classList.remove('mod-am-right-of-active');
                    }
                    else if (_this.activeLeafIndex == -1 || index < _this.activeLeafIndex) {
                        // this is before the active one, add the width
                        position_1 += leaf.containerEl.clientWidth;
                        leaf.containerEl.classList.add('mod-am-left-of-active');
                        leaf.containerEl.classList.remove('mod-am-right-of-active');
                    }
                    else {
                        // this is right of the active one
                        leaf.containerEl.classList.remove('mod-am-left-of-active');
                        leaf.containerEl.classList.add('mod-am-right-of-active');
                    }
                });
                // get the total leaf count
                var leafCount = _this.rootSplitAny.children.length;
                // get this leaf's left value (the amount of space to the left for sticky headers)
                var left = parseInt(activeLeaf.containerEl.style.left) || 0;
                // the amount of space to the right we need to leave for sticky headers
                var headersToRightWidth = _this.settings.stackingEnabled ? (leafCount - _this.activeLeafIndex - 1) * _this.settings.headerWidth : 0;
                // the root element we need to scroll
                var rootEl = _this.rootSplitAny.containerEl;
                // it's too far left
                if (rootEl.scrollLeft > position_1 - left) {
                    // scroll the left side of the pane into view
                    rootEl.scrollTo({ left: position_1 - left, top: 0, behavior: 'smooth' });
                }
                // it's too far right
                else if (rootEl.scrollLeft + rootEl.clientWidth < position_1 + activeLeaf.containerEl.clientWidth + headersToRightWidth) {
                    // scroll the right side of the pane into view
                    rootEl.scrollTo({ left: position_1 + activeLeaf.containerEl.clientWidth + headersToRightWidth - rootEl.clientWidth, top: 0, behavior: 'smooth' });
                }
            }
        };
        // hande when a file is deleted
        _this.handleDelete = function (file) {
            // close any leaves with the deleted file open
            // detaching a leaf while iterating messes with the iteration
            var leavesToDetach = [];
            _this.app.workspace.iterateRootLeaves(function (leaf) {
                if (leaf.view instanceof obsidian.FileView && leaf.view.file == file) {
                    leavesToDetach.push(leaf);
                }
            });
            leavesToDetach.forEach(function (leaf) { return leaf.detach(); });
        };
        _this.positionSuggestionContainer = function (scNode) {
            var cmEditor = _this.app.workspace.activeLeaf.view.sourceMode.cmEditor;
            // find the open bracket to the left of or at the cursor
            var cursorPosition = cmEditor.getCursor();
            var currentToken = cmEditor.getTokenAt(cmEditor.getCursor());
            var currentLinkPosition;
            if (currentToken.string === '[]') { // there is no text within the double brackets yet
                currentLinkPosition = cursorPosition;
            }
            else { // there is text within the double brackets
                var lineTokens = cmEditor.getLineTokens(cursorPosition.line);
                var previousTokens = lineTokens.filter(function (token) { return token.start <= currentToken.start; }).reverse();
                var openBracketsToken = previousTokens.find(function (token) { return token.string.contains('['); });
                // position the suggestion container to just underneath the end of the open brackets
                currentLinkPosition = { line: cursorPosition.line, ch: openBracketsToken.end };
            }
            var scCoords = cmEditor.charCoords(currentLinkPosition);
            // make sure it fits within the window
            var appContainerEl = _this.app.dom.appContainerEl;
            var scRight = scCoords.left + scNode.offsetWidth;
            var appWidth = appContainerEl.offsetWidth;
            if (scRight > appWidth) {
                scCoords.left -= scRight - appWidth;
            }
            // set the left coord
            // the top coord is set by Obsidian and is correct.
            // it's also a pain to try to recalculate so I left it out.
            scNode.style.left = Math.max(scCoords.left, 0) + 'px';
        };
        // overriden function for rootSplit child resize
        _this.onChildResizeStart = function (leaf, event) {
            // only really apply this to vertical splits
            if (_this.rootSplitAny.direction === "vertical") {
                // this is the width the leaf started at before resize
                var startWidth_1 = leaf.containerEl.clientWidth;
                // the mousemove event to trigger while resizing
                var mousemove_1 = function (e) {
                    // get the difference between the first position and current
                    var deltaX = e.pageX - event.pageX;
                    // adjust the start width by the delta
                    leaf.containerEl.style.width = startWidth_1 + deltaX + "px";
                };
                // the mouseup event to trigger at the end of resizing
                var mouseup_1 = function () {
                    // if stacking is enabled, we need to re-jig the "right" value
                    if (_this.settings.stackingEnabled) {
                        // we need the leaf count and index to calculate the correct value
                        var leafCount = _this.rootSplitAny.children.length;
                        var leafIndex = _this.rootSplitAny.children.findIndex(function (l) { return l == leaf; });
                        leaf.containerEl.style.right = (((leafCount - leafIndex - 1) * _this.settings.headerWidth) - leaf.containerEl.clientWidth) + "px";
                    }
                    // remove these event listeners. We're done with them
                    document.removeEventListener("mousemove", mousemove_1);
                    document.removeEventListener("mouseup", mouseup_1);
                };
                // Add the above two event listeners
                document.addEventListener("mousemove", mousemove_1);
                document.addEventListener("mouseup", mouseup_1);
            }
        };
        return _this;
    }
    Object.defineProperty(SlidingPanesPlugin.prototype, "rootSplitAny", {
        // helper gets for any casts (for undocumented API stuff)
        get: function () { return this.app.workspace.rootSplit; },
        enumerable: false,
        configurable: true
    });
    // when the plugin is loaded
    SlidingPanesPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, observerTarget, observerConfig;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // load settings
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        // load settings
                        _a.settings = (_b.sent()) || new SlidingPanesSettings();
                        // if it's not disabled in the settings, enable it
                        if (!this.settings.disabled) {
                            this.enable();
                        }
                        // add the settings tab
                        this.addSettingTab(new SlidingPanesSettingTab(this.app, this));
                        // add the toggle on/off command
                        this.addCommand({
                            id: 'toggle-sliding-panes',
                            name: 'Toggle Sliding Panes',
                            callback: function () {
                                // switch the disabled setting and save
                                _this.settings.disabled = !_this.settings.disabled;
                                _this.saveData(_this.settings);
                                // disable or enable as necessary
                                _this.settings.disabled ? _this.disable() : _this.enable();
                            }
                        });
                        // add a command to toggle stacking
                        this.addCommand({
                            id: 'toggle-sliding-panes-stacking',
                            name: 'Toggle Stacking',
                            callback: function () {
                                // switch the setting, save and refresh
                                _this.settings.stackingEnabled = !_this.settings.stackingEnabled;
                                _this.saveData(_this.settings);
                                _this.refresh();
                            }
                        });
                        // add a command to toggle rotated headers
                        this.addCommand({
                            id: 'toggle-sliding-panes-rotated-headers',
                            name: 'Toggle Rotated Headers',
                            callback: function () {
                                // switch the setting, save and refresh
                                _this.settings.rotateHeaders = !_this.settings.rotateHeaders;
                                _this.saveData(_this.settings);
                                _this.refresh();
                            }
                        });
                        // add a command to toggle swapped header direction
                        this.addCommand({
                            id: 'toggle-sliding-panes-header-alt',
                            name: 'Swap rotated header direction',
                            callback: function () {
                                // switch the setting, save and refresh
                                _this.settings.headerAlt = !_this.settings.headerAlt;
                                _this.saveData(_this.settings);
                                _this.refresh();
                            }
                        });
                        // observe the app-container for when the suggestion-container appears
                        this.suggestionContainerObserver = new MutationObserver(function (mutations) {
                            mutations.forEach(function (mutation) {
                                mutation.addedNodes.forEach(function (node) {
                                    if (node.className === 'suggestion-container') {
                                        _this.positionSuggestionContainer(node);
                                    }
                                });
                            });
                        });
                        observerTarget = this.app.dom.appContainerEl;
                        observerConfig = { childList: true };
                        this.suggestionContainerObserver.observe(observerTarget, observerConfig);
                        return [2 /*return*/];
                }
            });
        });
    };
    // on unload, perform the same steps as disable
    SlidingPanesPlugin.prototype.onunload = function () {
        this.disable();
    };
    return SlidingPanesPlugin;
}(obsidian.Plugin));
var SlidingPanesSettings = /** @class */ (function () {
    function SlidingPanesSettings() {
        this.headerWidth = 32;
        this.leafWidth = 700;
        this.disabled = false;
        this.rotateHeaders = true;
        this.headerAlt = false;
        this.stackingEnabled = true;
    }
    return SlidingPanesSettings;
}());
var SlidingPanesSettingTab = /** @class */ (function (_super) {
    __extends(SlidingPanesSettingTab, _super);
    function SlidingPanesSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    SlidingPanesSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        new obsidian.Setting(containerEl)
            .setName("Toggle Sliding Panes")
            .setDesc("Turns sliding panes on or off globally")
            .addToggle(function (toggle) { return toggle.setValue(!_this.plugin.settings.disabled)
            .onChange(function (value) {
            _this.plugin.settings.disabled = !value;
            _this.plugin.saveData(_this.plugin.settings);
            if (_this.plugin.settings.disabled) {
                _this.plugin.disable();
            }
            else {
                _this.plugin.enable();
            }
        }); });
        new obsidian.Setting(containerEl)
            .setName('Leaf Width')
            .setDesc('The width of a single pane')
            .addText(function (text) { return text.setPlaceholder('Example: 700')
            .setValue((_this.plugin.settings.leafWidth || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.leafWidth = parseInt(value.trim());
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Toggle rotated headers")
            .setDesc("Rotates headers to use as spines")
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.rotateHeaders)
            .onChange(function (value) {
            _this.plugin.settings.rotateHeaders = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Swap rotated header direction")
            .setDesc("Swaps the direction of rotated headers")
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.headerAlt)
            .onChange(function (value) {
            _this.plugin.settings.headerAlt = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Toggle stacking")
            .setDesc("Panes will stack up to the left and right")
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.stackingEnabled)
            .onChange(function (value) {
            _this.plugin.settings.stackingEnabled = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Spine Width')
            .setDesc('The width of the rotated header (or gap) for stacking')
            .addText(function (text) { return text.setPlaceholder('Example: 32')
            .setValue((_this.plugin.settings.headerWidth || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.headerWidth = parseInt(value.trim());
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
    };
    return SlidingPanesSettingTab;
}(obsidian.PluginSettingTab));

module.exports = SlidingPanesPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgQXBwLCBGaWxlVmlldywgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBUQWJzdHJhY3RGaWxlLCBXb3Jrc3BhY2VMZWFmIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgRWRpdG9yLCBQb3NpdGlvbiwgVG9rZW4gfSBmcm9tICdjb2RlbWlycm9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGluZ1BhbmVzUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3M6IFNsaWRpbmdQYW5lc1NldHRpbmdzO1xuXG4gIC8vIGhlbHBlciB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBsZWF2ZXNPcGVuQ291bnQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgYWN0aXZlTGVhZkluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHN1Z2dlc3Rpb25Db250YWluZXJPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcblxuICAvLyBoZWxwZXIgZ2V0cyBmb3IgYW55IGNhc3RzIChmb3IgdW5kb2N1bWVudGVkIEFQSSBzdHVmZilcbiAgcHJpdmF0ZSBnZXQgcm9vdFNwbGl0QW55KCk6IGFueSB7IHJldHVybiB0aGlzLmFwcC53b3Jrc3BhY2Uucm9vdFNwbGl0OyB9XG5cbiAgLy8gd2hlbiB0aGUgcGx1Z2luIGlzIGxvYWRlZFxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgLy8gbG9hZCBzZXR0aW5nc1xuICAgIHRoaXMuc2V0dGluZ3MgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCkgfHwgbmV3IFNsaWRpbmdQYW5lc1NldHRpbmdzKCk7XG5cbiAgICAvLyBpZiBpdCdzIG5vdCBkaXNhYmxlZCBpbiB0aGUgc2V0dGluZ3MsIGVuYWJsZSBpdFxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdGhlIHNldHRpbmdzIHRhYlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU2xpZGluZ1BhbmVzU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuICAgIC8vIGFkZCB0aGUgdG9nZ2xlIG9uL29mZiBjb21tYW5kXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAndG9nZ2xlLXNsaWRpbmctcGFuZXMnLFxuICAgICAgbmFtZTogJ1RvZ2dsZSBTbGlkaW5nIFBhbmVzJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIC8vIHN3aXRjaCB0aGUgZGlzYWJsZWQgc2V0dGluZyBhbmQgc2F2ZVxuICAgICAgICB0aGlzLnNldHRpbmdzLmRpc2FibGVkID0gIXRoaXMuc2V0dGluZ3MuZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG5cbiAgICAgICAgLy8gZGlzYWJsZSBvciBlbmFibGUgYXMgbmVjZXNzYXJ5XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZGlzYWJsZWQgPyB0aGlzLmRpc2FibGUoKSA6IHRoaXMuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgYSBjb21tYW5kIHRvIHRvZ2dsZSBzdGFja2luZ1xuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3RvZ2dsZS1zbGlkaW5nLXBhbmVzLXN0YWNraW5nJyxcbiAgICAgIG5hbWU6ICdUb2dnbGUgU3RhY2tpbmcnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgLy8gc3dpdGNoIHRoZSBzZXR0aW5nLCBzYXZlIGFuZCByZWZyZXNoXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3RhY2tpbmdFbmFibGVkID0gIXRoaXMuc2V0dGluZ3Muc3RhY2tpbmdFbmFibGVkO1xuICAgICAgICB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGFkZCBhIGNvbW1hbmQgdG8gdG9nZ2xlIHJvdGF0ZWQgaGVhZGVyc1xuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3RvZ2dsZS1zbGlkaW5nLXBhbmVzLXJvdGF0ZWQtaGVhZGVycycsXG4gICAgICBuYW1lOiAnVG9nZ2xlIFJvdGF0ZWQgSGVhZGVycycsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAvLyBzd2l0Y2ggdGhlIHNldHRpbmcsIHNhdmUgYW5kIHJlZnJlc2hcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yb3RhdGVIZWFkZXJzID0gIXRoaXMuc2V0dGluZ3Mucm90YXRlSGVhZGVycztcbiAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgYSBjb21tYW5kIHRvIHRvZ2dsZSBzd2FwcGVkIGhlYWRlciBkaXJlY3Rpb25cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICd0b2dnbGUtc2xpZGluZy1wYW5lcy1oZWFkZXItYWx0JyxcbiAgICAgIG5hbWU6ICdTd2FwIHJvdGF0ZWQgaGVhZGVyIGRpcmVjdGlvbicsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAvLyBzd2l0Y2ggdGhlIHNldHRpbmcsIHNhdmUgYW5kIHJlZnJlc2hcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5oZWFkZXJBbHQgPSAhdGhpcy5zZXR0aW5ncy5oZWFkZXJBbHQ7XG4gICAgICAgIHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gb2JzZXJ2ZSB0aGUgYXBwLWNvbnRhaW5lciBmb3Igd2hlbiB0aGUgc3VnZ2VzdGlvbi1jb250YWluZXIgYXBwZWFyc1xuICAgIHRoaXMuc3VnZ2VzdGlvbkNvbnRhaW5lck9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQgPT4ge1xuICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCk6IHZvaWQgPT4ge1xuICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgIGlmIChub2RlLmNsYXNzTmFtZSA9PT0gJ3N1Z2dlc3Rpb24tY29udGFpbmVyJykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblN1Z2dlc3Rpb25Db250YWluZXIobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IG9ic2VydmVyVGFyZ2V0OiBOb2RlID0gKHRoaXMuYXBwIGFzIGFueSkuZG9tLmFwcENvbnRhaW5lckVsO1xuICAgIGNvbnN0IG9ic2VydmVyQ29uZmlnOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHsgY2hpbGRMaXN0OiB0cnVlIH1cbiAgICB0aGlzLnN1Z2dlc3Rpb25Db250YWluZXJPYnNlcnZlci5vYnNlcnZlKG9ic2VydmVyVGFyZ2V0LCBvYnNlcnZlckNvbmZpZyk7XG4gIH1cblxuICAvLyBvbiB1bmxvYWQsIHBlcmZvcm0gdGhlIHNhbWUgc3RlcHMgYXMgZGlzYWJsZVxuICBvbnVubG9hZCgpIHtcbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgfVxuXG4gIC8vIGVuYWJsZSBhbmR5IG1vZGVcbiAgZW5hYmxlID0gKCkgPT4ge1xuICAgIC8vIGFkZCB0aGUgZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ3Jlc2l6ZScsIHRoaXMucmVjYWxjdWxhdGVMZWF2ZXMpO1xuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbignZmlsZS1vcGVuJywgdGhpcy5oYW5kbGVGaWxlT3Blbik7XG4gICAgdGhpcy5hcHAudmF1bHQub24oJ2RlbGV0ZScsIHRoaXMuaGFuZGxlRGVsZXRlKTtcblxuICAgIC8vIHdhaXQgZm9yIGxheW91dCB0byBiZSByZWFkeSB0byBwZXJmb3JtIHRoZSByZXN0XG4gICAgKHRoaXMuYXBwLndvcmtzcGFjZSBhcyBhbnkpLmxheW91dFJlYWR5ID8gdGhpcy5yZWFsbHlFbmFibGUoKSA6IHRoaXMuYXBwLndvcmtzcGFjZS5vbignbGF5b3V0LXJlYWR5JywgdGhpcy5yZWFsbHlFbmFibGUpO1xuICB9XG5cbiAgLy8gcmVhbGx5IGVuYWJsZSB0aGluZ3MgKG9uY2UgdGhlIGxheW91dCBpcyByZWFkeSlcbiAgcmVhbGx5RW5hYmxlID0gKCkgPT4ge1xuICAgIC8vIHdlIGRvbid0IG5lZWQgdGhlIGV2ZW50IGhhbmRsZXIgYW55bW9yZVxuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vZmYoJ2xheW91dC1yZWFkeScsIHRoaXMucmVhbGx5RW5hYmxlKTtcblxuICAgIC8vIGJhY2t1cCB0aGUgZnVuY3Rpb24gc28gSSBjYW4gcmVzdG9yZSBpdFxuICAgIHRoaXMucm9vdFNwbGl0QW55Lm9sZE9uQ2hpbGRSZXNpemVTdGFydCA9IHRoaXMucm9vdFNwbGl0QW55Lm9uQ2hpbGRSZXNpemVTdGFydDtcbiAgICB0aGlzLnJvb3RTcGxpdEFueS5vbkNoaWxkUmVzaXplU3RhcnQgPSB0aGlzLm9uQ2hpbGRSZXNpemVTdGFydDtcblxuICAgIC8vIGFkZCBzb21lIGV4dHJhIGNsYXNzZXMgdGhhdCBjYW4ndCBmaXQgaW4gdGhlIHN0eWxlcy5jc3NcbiAgICAvLyBiZWNhdXNlIHRoZXkgdXNlIHNldHRpbmdzXG4gICAgdGhpcy5hZGRTdHlsZSgpO1xuXG4gICAgLy8gZG8gYWxsIHRoZSBjYWx1Y2F0aW9ucyBuZWNlc3NhcnkgZm9yIHRoZSB3b3Jrc3BhY2UgbGVhdmVzXG4gICAgdGhpcy5yZWNhbGN1bGF0ZUxlYXZlcygpO1xuICB9XG5cbiAgLy8gc2h1dCBkb3duIGFuZHkgbW9kZVxuICBkaXNhYmxlID0gKCkgPT4ge1xuXG4gICAgLy8gZ2V0IHJpZCBvZiB0aGUgZXh0cmEgc3R5bGUgdGFnIHdlIGFkZGVkXG4gICAgdGhpcy5yZW1vdmVTdHlsZSgpO1xuXG4gICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSByb290IGxlYXZlcyB0byByZW1vdmUgdGhlIHN0dWZmIHdlIGFkZGVkXG4gICAgdGhpcy5hcHAud29ya3NwYWNlLml0ZXJhdGVSb290TGVhdmVzKChsZWFmOiBhbnkpID0+IHtcbiAgICAgIGxlYWYuY29udGFpbmVyRWwuc3R5bGUud2lkdGggPSBudWxsO1xuICAgICAgbGVhZi5jb250YWluZXJFbC5zdHlsZS5sZWZ0ID0gbnVsbDtcbiAgICAgIGxlYWYuY29udGFpbmVyRWwuc3R5bGUucmlnaHQgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgLy8gcmVzdG9yZSB0aGUgZGVmYXVsdCBmdW5jdGlvbmFsaXR5XG4gICAgdGhpcy5yb290U3BsaXRBbnkub25DaGlsZFJlc2l6ZVN0YXJ0ID0gdGhpcy5yb290U3BsaXRBbnkub2xkT25DaGlsZFJlc2l6ZVN0YXJ0O1xuXG4gICAgLy8gZ2V0IHJpZCBvZiBvdXIgZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub2ZmKCdyZXNpemUnLCB0aGlzLnJlY2FsY3VsYXRlTGVhdmVzKTtcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub2ZmKCdmaWxlLW9wZW4nLCB0aGlzLmhhbmRsZUZpbGVPcGVuKTtcbiAgICB0aGlzLmFwcC52YXVsdC5vZmYoJ2RlbGV0ZScsIHRoaXMuaGFuZGxlRGVsZXRlKTtcbiAgICB0aGlzLnN1Z2dlc3Rpb25Db250YWluZXJPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH1cblxuICAvLyByZWZyZXNoIGZ1bmNpb24gZm9yIHdoZW4gd2UgY2hhbmdlIHNldHRpbmdzXG4gIHJlZnJlc2ggPSAoKSA9PiB7XG4gICAgLy8gcmUtbG9hZCB0aGUgc3R5bGVcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKClcbiAgICAvLyByZWNhbGN1bGF0ZSBsZWFmIHBvc2l0aW9uc1xuICAgIHRoaXMucmVjYWxjdWxhdGVMZWF2ZXMoKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSB0aGUgc3RseWluZyBlbGVtZW50cyB3ZSd2ZSBjcmVhdGVkXG4gIHJlbW92ZVN0eWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsdWdpbi1zbGlkaW5nLXBhbmVzJyk7XG4gICAgaWYgKGVsKSBlbC5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3BsdWdpbi1zbGlkaW5nLXBhbmVzJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwbHVnaW4tc2xpZGluZy1wYW5lcy1yb3RhdGUtaGVhZGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwbHVnaW4tc2xpZGluZy1wYW5lcy1oZWFkZXItYWx0Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwbHVnaW4tc2xpZGluZy1wYW5lcy1zdGFja2luZycpO1xuICB9XG5cbiAgLy8gYWRkIHRoZSBzdHlsaW5nIGVsZW1lbnRzIHdlIG5lZWRcbiAgYWRkU3R5bGUgPSAoKSA9PiB7XG4gICAgLy8gYWRkIGEgY3NzIGJsb2NrIGZvciBvdXIgc2V0dGluZ3MtZGVwZW5kZW50IHN0eWxlc1xuICAgIGNvbnN0IGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY3NzLmlkID0gJ3BsdWdpbi1zbGlkaW5nLXBhbmVzJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcblxuICAgIC8vIGFkZCB0aGUgbWFpbiBjbGFzc1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncGx1Z2luLXNsaWRpbmctcGFuZXMnKTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgc3R5bGUgd2l0aCB0aGUgc2V0dGluZ3MtZGVwZW5kZW50IHN0eWxlc1xuICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSB0aGUgc3R5bGVzIChhdCB0aGUgc3RhcnQsIG9yIGFzIHRoZSByZXN1bHQgb2YgYSBzZXR0aW5ncyBjaGFuZ2UpXG4gIHVwZGF0ZVN0eWxlID0gKCkgPT4ge1xuICAgIC8vIGlmIHdlJ3ZlIGdvdCByb3RhdGUgaGVhZGVycyBvbiwgYWRkIHRoZSBjbGFzcyB3aGljaCBlbmFibGVzIGl0XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdwbHVnaW4tc2xpZGluZy1wYW5lcy1yb3RhdGUtaGVhZGVyJywgdGhpcy5zZXR0aW5ncy5yb3RhdGVIZWFkZXJzKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3BsdWdpbi1zbGlkaW5nLXBhbmVzLWhlYWRlci1hbHQnLCB0aGlzLnNldHRpbmdzLmhlYWRlckFsdClcbiAgICAvLyBkbyB0aGUgc2FtZSBmb3Igc3RhY2tpbmdcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3BsdWdpbi1zbGlkaW5nLXBhbmVzLXN0YWNraW5nJywgdGhpcy5zZXR0aW5ncy5zdGFja2luZ0VuYWJsZWQpO1xuICAgIFxuICAgIC8vIGdldCB0aGUgY3VzdG9tIGNzcyBlbGVtZW50XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGx1Z2luLXNsaWRpbmctcGFuZXMnKTtcbiAgICBpZiAoIWVsKSB0aHJvdyBcInBsdWdpbi1zbGlkaW5nLXBhbmVzIGVsZW1lbnQgbm90IGZvdW5kIVwiO1xuICAgIGVsc2Uge1xuICAgICAgLy8gc2V0IHRoZSBzZXR0aW5ncy1kZXBlbmRlbnQgY3NzXG4gICAgICBlbC5pbm5lclRleHQgPSBgXG4gICAgICAgIGJvZHkucGx1Z2luLXNsaWRpbmctcGFuZXN7LS1oZWFkZXItd2lkdGg6JHt0aGlzLnNldHRpbmdzLmhlYWRlcldpZHRofXB4O31cbiAgICAgICAgYm9keS5wbHVnaW4tc2xpZGluZy1wYW5lcyAubW9kLXJvb3Q+LndvcmtzcGFjZS1sZWFme1xuICAgICAgICAgIHdpZHRoOiR7dGhpcy5zZXR0aW5ncy5sZWFmV2lkdGggKyB0aGlzLnNldHRpbmdzLmhlYWRlcldpZHRofXB4O1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlY2FsY3VsYXRlIHRoZSBsZWFmIHNpemluZyBhbmQgcG9zaXRpb25zXG4gIHJlY2FsY3VsYXRlTGVhdmVzID0gKCkgPT4ge1xuICAgIC8vIHJvb3RTcGxpdC5jaGlsZHJlbiBpcyB1bmRvY3VtZW50ZWQgZm9yIG5vdywgYnV0IGl0J3MgZWFzaWVyIHRvIHVzZSBmb3Igd2hhdCB3ZSdyZSBkb2luZy5cbiAgICBjb25zdCBsZWFmQ291bnQgPSB0aGlzLnJvb3RTcGxpdEFueS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xuXG4gICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCB0aGUgcm9vdC1sZXZlbCBsZWF2ZXNcbiAgICAvLyBrZWVwIHRoZSBsZWFmIGFzIGBhbnlgIHRvIGdldCB0aGUgdW5kb2N1bWVudGVkIGNvbnRhaW5lckVsXG4gICAgdGhpcy5yb290U3BsaXRBbnkuY2hpbGRyZW4uZm9yRWFjaCgobGVhZjogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGxlYWYuY29udGFpbmVyRWwuc3R5bGUubGVmdCA9IHRoaXMuc2V0dGluZ3Muc3RhY2tpbmdFbmFibGVkXG4gICAgICAgID8gKGkgKiB0aGlzLnNldHRpbmdzLmhlYWRlcldpZHRoKSArIFwicHhcIlxuICAgICAgICA6IG51bGw7XG4gICAgICBsZWFmLmNvbnRhaW5lckVsLnN0eWxlLnJpZ2h0ID0gdGhpcy5zZXR0aW5ncy5zdGFja2luZ0VuYWJsZWRcbiAgICAgICAgPyAoKChsZWFmQ291bnQgLSBpKSAqIHRoaXMuc2V0dGluZ3MuaGVhZGVyV2lkdGgpIC0gbGVhZi5jb250YWluZXJFbC5jbGllbnRXaWR0aCkgKyBcInB4XCJcbiAgICAgICAgOiBudWxsO1xuICAgICAgbGVhZi5jb250YWluZXJFbC5zdHlsZS5mbGV4ID0gbnVsbDtcbiAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIHRvdGFsIHdpZHRoIG9mIGFsbCBsZWF2ZXNcbiAgICAgIHRvdGFsV2lkdGggKz0gbGVhZi5jb250YWluZXJFbC5jbGllbnRXaWR0aDtcbiAgICB9KTtcblxuICAgIC8vIGlmIHRoZSB0b3RhbCB3aWR0aCBvZiBhbGwgbGVhdmVzIGlzIGxlc3MgdGhhbiB0aGUgd2lkdGggYXZhaWxhYmxlLFxuICAgIC8vIGFkZCBiYWNrIHRoZSBmbGV4IGNsYXNzIHNvIHRoZXkgZmlsbCB0aGUgc3BhY2VcbiAgICBpZiAodG90YWxXaWR0aCA8IHRoaXMucm9vdFNwbGl0QW55LmNvbnRhaW5lckVsLmNsaWVudFdpZHRoKSB7XG4gICAgICB0aGlzLnJvb3RTcGxpdEFueS5jaGlsZHJlbi5mb3JFYWNoKChsZWFmOiBhbnkpID0+IHtcbiAgICAgICAgbGVhZi5jb250YWluZXJFbC5zdHlsZS5mbGV4ID0gJzEgMCAwJztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLCBub3Qgb25seSB3aGVuIGEgZmlsZSBvcGVucywgYnV0IHdoZW4gdGhlIGFjdGl2ZSBwYW5lIGlzIHN3aXRjaGVkXG4gIGhhbmRsZUZpbGVPcGVuID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgIC8vIHB1dCBhIHNtYWxsIHRpbWVvdXQgb24gaXQgYmVjYXVzZSB3aGVuIGEgZmlsZSBpcyBvcGVuZWQgb24gdGhlIGZhciByaWdodCBcbiAgICAvLyBpdCB3YXNuJ3QgZm9jdXNzaW5nIHByb3Blcmx5LiBUaGUgdGltZW91dCBmaXhlcyB0aGlzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjaGVjayBmb3IgYSBjbG9zZWQgbGVhZiBhbmQgYWN0aXZhdGUgdGhlIGFkamFjZW50IGxlYWYgaWYgaXQgd2FzXG4gICAgICB0aGlzLmFjdGl2YXRlQWRqYWNlbnRMZWFmSWZDbG9zZWQoZSk7XG4gICAgICAvLyBmb2N1cyBvbiB0aGUgbmV3bHkgc2VsZWN0ZWQgbGVhZlxuICAgICAgdGhpcy5mb2N1c0xlYWYoZSlcbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgLy8gY2hlY2sgZm9yIGEgY2xvc2VkIGxlYWYgYW5kIGFjdGl2YXRlIHRoZSBhZGphY2VudCBsZWFmXG4gIGFjdGl2YXRlQWRqYWNlbnRMZWFmSWZDbG9zZWQgPSAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgLy8gZmlyc3Qgd2UgbmVlZCB0byBmaWd1cmUgb3V0IHRoZSBjb3VudCBvZiBvcGVuIGxlYXZlc1xuICAgIGNvbnN0IGxlYWZDb3VudCA9IHRoaXMucm9vdFNwbGl0QW55LmNoaWxkcmVuLmxlbmd0aDtcblxuICAgIC8vIHVzZSB0aGlzIHZhbHVlIHRvIGNoZWNrIGlmIHdlJ3ZlIHNldCBhbiBhY3RpdmUgbGVhZiB5ZXRcbiAgICBsZXQgaXNBY3RpdmVMZWFmU2V0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBpZiB0aGUgbnVtYmVyIG9mIG9wZW4gbGVhdmVzIGhhcyBjaGFuZ2VkXG4gICAgaWYgKGxlYWZDb3VudCAhPSB0aGlzLmxlYXZlc09wZW5Db3VudCkge1xuICAgICAgLy8gaWYgdGhlIG51bWJlciBvZiBsZWF2ZXMgaXMgPCBvdXIgbGFzdCBzYXZlZCB2YWx1ZSwgd2UgbXVzdCBoYXZlIGNsb3NlZCBvbmUgKG9yIG1vcmUpXG4gICAgICBpZiAobGVhZkNvdW50IDwgdGhpcy5sZWF2ZXNPcGVuQ291bnQpIHtcbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBsZWF2ZXNcbiAgICAgICAgdGhpcy5yb290U3BsaXRBbnkuY2hpbGRyZW4uZm9yRWFjaCgobGVhZjogV29ya3NwYWNlTGVhZiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgLy8gaWYgd2UgaGF2ZW4ndCBhY3RpdmF0ZWQgYSBsZWFmIHlldCBhbmQgdGhpcyBsZWFmIGlzIGFkamFjZW50IHRvIHRoZSBjbG9zZWQgb25lXG4gICAgICAgICAgaWYgKCFpc0FjdGl2ZUxlYWZTZXQgJiYgKGkgPj0gdGhpcy5hY3RpdmVMZWFmSW5kZXggLSAxKSkge1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBhY3RpdmUgbGVhZiAodW5kb2N1bWVudGVkLCBoZW5jZSBgYW55YClcbiAgICAgICAgICAgICh0aGlzLmFwcC53b3Jrc3BhY2UgYXMgYW55KS5zZXRBY3RpdmVMZWFmKGxlYWYpO1xuICAgICAgICAgICAgaXNBY3RpdmVMZWFmU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHNldCB0aGUgaW5kZXggZm9yIG5leHQgdGltZSwgYWxzby5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTGVhZkluZGV4ID0gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdGhlIG5ldyBvcGVuIGNvdW50XG4gICAgICB0aGlzLmxlYXZlc09wZW5Db3VudCA9IGxlYWZDb3VudDtcblxuICAgICAgLy8gcmVjYWxjdWxhdGUgbGVhZiBwb3NpdGlvbnNcbiAgICAgIHRoaXMucmVjYWxjdWxhdGVMZWF2ZXMoKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c0xlYWYgPSAoZmlsZTogVEFic3RyYWN0RmlsZSkgPT4ge1xuICAgIC8vIGdldCBiYWNrIHRvIHRoZSBsZWFmIHdoaWNoIGhhcyBiZWVuIGFuZHknZCAoYGFueWAgYmVjYXVzZSBwYXJlbnRTcGxpdCBpcyB1bmRvY3VtZW50ZWQpXG4gICAgbGV0IGFjdGl2ZUxlYWY6IGFueSA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xuICAgIHdoaWxlIChhY3RpdmVMZWFmICE9IG51bGwgJiYgYWN0aXZlTGVhZi5wYXJlbnRTcGxpdCAhPSBudWxsICYmIGFjdGl2ZUxlYWYucGFyZW50U3BsaXQgIT0gdGhpcy5hcHAud29ya3NwYWNlLnJvb3RTcGxpdCkge1xuICAgICAgYWN0aXZlTGVhZiA9IGFjdGl2ZUxlYWYucGFyZW50U3BsaXQ7XG4gICAgfVxuICAgIFxuICAgIGlmIChhY3RpdmVMZWFmICE9IG51bGwpIHtcbiAgICAgIC8vIGdldCB0aGUgaW5kZXggb2YgdGhlIGFjdGl2ZSBsZWFmXG4gICAgICAvLyBhbHNvLCBnZXQgdGhlIHBvc2l0aW9uIG9mIHRoaXMgbGVhZiwgc28gd2UgY2FuIHNjcm9sbCB0byBpdFxuICAgICAgLy8gYXMgbGVhdmVzIGFyZSByZXNpemFibGUsIHdlIGhhdmUgdG8gaXRlcmF0ZSB0aHJvdWdoIGFsbCBsZWF2ZXMgdG8gdGhlXG4gICAgICAvLyBsZWZ0IHVudGlsIHdlIGdldCB0byB0aGUgYWN0aXZlIG9uZSBhbmQgYWRkIGFsbCB0aGVpciB3aWR0aHMgdG9nZXRoZXJcbiAgICAgIGxldCBwb3NpdGlvbiA9IDA7XG4gICAgICB0aGlzLmFjdGl2ZUxlYWZJbmRleCA9IC0xO1xuICAgICAgdGhpcy5yb290U3BsaXRBbnkuY2hpbGRyZW4uZm9yRWFjaCgobGVhZjogYW55LCBpbmRleDpudW1iZXIpID0+IHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgYWN0aXZlIG9uZVxuICAgICAgICBpZiAobGVhZiA9PSBhY3RpdmVMZWFmKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVMZWFmSW5kZXggPSBpbmRleDtcbiAgICAgICAgICBsZWFmLmNvbnRhaW5lckVsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZC1hbS1sZWZ0LW9mLWFjdGl2ZScpO1xuICAgICAgICAgIGxlYWYuY29udGFpbmVyRWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kLWFtLXJpZ2h0LW9mLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5hY3RpdmVMZWFmSW5kZXggPT0gLTEgfHwgaW5kZXggPCB0aGlzLmFjdGl2ZUxlYWZJbmRleCkge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYmVmb3JlIHRoZSBhY3RpdmUgb25lLCBhZGQgdGhlIHdpZHRoXG4gICAgICAgICAgcG9zaXRpb24gKz0gbGVhZi5jb250YWluZXJFbC5jbGllbnRXaWR0aDtcbiAgICAgICAgICBsZWFmLmNvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoJ21vZC1hbS1sZWZ0LW9mLWFjdGl2ZScpO1xuICAgICAgICAgIGxlYWYuY29udGFpbmVyRWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kLWFtLXJpZ2h0LW9mLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMgaXMgcmlnaHQgb2YgdGhlIGFjdGl2ZSBvbmVcbiAgICAgICAgICBsZWFmLmNvbnRhaW5lckVsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZC1hbS1sZWZ0LW9mLWFjdGl2ZScpO1xuICAgICAgICAgIGxlYWYuY29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnbW9kLWFtLXJpZ2h0LW9mLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgLy8gZ2V0IHRoZSB0b3RhbCBsZWFmIGNvdW50XG4gICAgICBjb25zdCBsZWFmQ291bnQgPSB0aGlzLnJvb3RTcGxpdEFueS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAvLyBnZXQgdGhpcyBsZWFmJ3MgbGVmdCB2YWx1ZSAodGhlIGFtb3VudCBvZiBzcGFjZSB0byB0aGUgbGVmdCBmb3Igc3RpY2t5IGhlYWRlcnMpXG4gICAgICBjb25zdCBsZWZ0ID0gcGFyc2VJbnQoYWN0aXZlTGVhZi5jb250YWluZXJFbC5zdHlsZS5sZWZ0KSB8fCAwO1xuICAgICAgLy8gdGhlIGFtb3VudCBvZiBzcGFjZSB0byB0aGUgcmlnaHQgd2UgbmVlZCB0byBsZWF2ZSBmb3Igc3RpY2t5IGhlYWRlcnNcbiAgICAgIGNvbnN0IGhlYWRlcnNUb1JpZ2h0V2lkdGggPSB0aGlzLnNldHRpbmdzLnN0YWNraW5nRW5hYmxlZCA/IChsZWFmQ291bnQgLSB0aGlzLmFjdGl2ZUxlYWZJbmRleCAtIDEpICogdGhpcy5zZXR0aW5ncy5oZWFkZXJXaWR0aCA6IDA7XG4gICAgICAvLyB0aGUgcm9vdCBlbGVtZW50IHdlIG5lZWQgdG8gc2Nyb2xsXG4gICAgICBjb25zdCByb290RWwgPSB0aGlzLnJvb3RTcGxpdEFueS5jb250YWluZXJFbDtcbiAgICAgIFxuICAgICAgLy8gaXQncyB0b28gZmFyIGxlZnRcbiAgICAgIGlmIChyb290RWwuc2Nyb2xsTGVmdCA+IHBvc2l0aW9uIC0gbGVmdCkge1xuICAgICAgICAvLyBzY3JvbGwgdGhlIGxlZnQgc2lkZSBvZiB0aGUgcGFuZSBpbnRvIHZpZXdcbiAgICAgICAgcm9vdEVsLnNjcm9sbFRvKHsgbGVmdDogcG9zaXRpb24gLSBsZWZ0LCB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGl0J3MgdG9vIGZhciByaWdodFxuICAgICAgZWxzZSBpZiAocm9vdEVsLnNjcm9sbExlZnQgKyByb290RWwuY2xpZW50V2lkdGggPCBwb3NpdGlvbiArIGFjdGl2ZUxlYWYuY29udGFpbmVyRWwuY2xpZW50V2lkdGggKyBoZWFkZXJzVG9SaWdodFdpZHRoKSB7XG4gICAgICAgIC8vIHNjcm9sbCB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgcGFuZSBpbnRvIHZpZXdcbiAgICAgICAgcm9vdEVsLnNjcm9sbFRvKHsgbGVmdDogcG9zaXRpb24gKyBhY3RpdmVMZWFmLmNvbnRhaW5lckVsLmNsaWVudFdpZHRoICsgaGVhZGVyc1RvUmlnaHRXaWR0aCAtIHJvb3RFbC5jbGllbnRXaWR0aCwgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gaGFuZGUgd2hlbiBhIGZpbGUgaXMgZGVsZXRlZFxuICBoYW5kbGVEZWxldGUgPSAoZmlsZTogVEFic3RyYWN0RmlsZSkgPT4ge1xuICAgIC8vIGNsb3NlIGFueSBsZWF2ZXMgd2l0aCB0aGUgZGVsZXRlZCBmaWxlIG9wZW5cbiAgICAvLyBkZXRhY2hpbmcgYSBsZWFmIHdoaWxlIGl0ZXJhdGluZyBtZXNzZXMgd2l0aCB0aGUgaXRlcmF0aW9uXG4gICAgY29uc3QgbGVhdmVzVG9EZXRhY2g6IFdvcmtzcGFjZUxlYWZbXSA9IFtdO1xuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5pdGVyYXRlUm9vdExlYXZlcygobGVhZjogV29ya3NwYWNlTGVhZikgPT4ge1xuICAgICAgaWYgKGxlYWYudmlldyBpbnN0YW5jZW9mIEZpbGVWaWV3ICYmIGxlYWYudmlldy5maWxlID09IGZpbGUpIHtcbiAgICAgICAgbGVhdmVzVG9EZXRhY2gucHVzaChsZWFmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZWF2ZXNUb0RldGFjaC5mb3JFYWNoKGxlYWYgPT4gbGVhZi5kZXRhY2goKSk7XG4gIH07XG5cbiAgcG9zaXRpb25TdWdnZXN0aW9uQ29udGFpbmVyID0gKHNjTm9kZTogYW55KTogdm9pZCA9PiB7XG4gICAgY29uc3QgY21FZGl0b3IgPSAodGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWYudmlldyBhcyBhbnkpLnNvdXJjZU1vZGUuY21FZGl0b3IgYXMgRWRpdG9yO1xuXG4gICAgLy8gZmluZCB0aGUgb3BlbiBicmFja2V0IHRvIHRoZSBsZWZ0IG9mIG9yIGF0IHRoZSBjdXJzb3JcblxuICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gY21FZGl0b3IuZ2V0Q3Vyc29yKCk7XG4gICAgdmFyIGN1cnJlbnRUb2tlbiA9IGNtRWRpdG9yLmdldFRva2VuQXQoY21FZGl0b3IuZ2V0Q3Vyc29yKCkpO1xuXG4gICAgbGV0IGN1cnJlbnRMaW5rUG9zaXRpb246IFBvc2l0aW9uO1xuXG4gICAgaWYgKGN1cnJlbnRUb2tlbi5zdHJpbmcgPT09ICdbXScpIHsgLy8gdGhlcmUgaXMgbm8gdGV4dCB3aXRoaW4gdGhlIGRvdWJsZSBicmFja2V0cyB5ZXRcbiAgICAgIGN1cnJlbnRMaW5rUG9zaXRpb24gPSBjdXJzb3JQb3NpdGlvbjtcbiAgICB9IGVsc2UgeyAvLyB0aGVyZSBpcyB0ZXh0IHdpdGhpbiB0aGUgZG91YmxlIGJyYWNrZXRzXG4gICAgICB2YXIgbGluZVRva2VucyA9IGNtRWRpdG9yLmdldExpbmVUb2tlbnMoY3Vyc29yUG9zaXRpb24ubGluZSk7XG4gICAgICB2YXIgcHJldmlvdXNUb2tlbnMgPSBsaW5lVG9rZW5zLmZpbHRlcigodG9rZW46IFRva2VuKTogYm9vbGVhbiA9PiB0b2tlbi5zdGFydCA8PSBjdXJyZW50VG9rZW4uc3RhcnQpLnJldmVyc2UoKTtcbiAgICAgIGNvbnN0IG9wZW5CcmFja2V0c1Rva2VuID0gcHJldmlvdXNUb2tlbnMuZmluZCgodG9rZW46IFRva2VuKTogYm9vbGVhbiA9PiB0b2tlbi5zdHJpbmcuY29udGFpbnMoJ1snKSk7XG5cbiAgICAgIC8vIHBvc2l0aW9uIHRoZSBzdWdnZXN0aW9uIGNvbnRhaW5lciB0byBqdXN0IHVuZGVybmVhdGggdGhlIGVuZCBvZiB0aGUgb3BlbiBicmFja2V0c1xuICAgICAgY3VycmVudExpbmtQb3NpdGlvbiA9IHsgbGluZTogY3Vyc29yUG9zaXRpb24ubGluZSwgY2g6IG9wZW5CcmFja2V0c1Rva2VuLmVuZCB9O1xuICAgIH1cblxuICAgIGNvbnN0IHNjQ29vcmRzID0gY21FZGl0b3IuY2hhckNvb3JkcyhjdXJyZW50TGlua1Bvc2l0aW9uKTtcblxuICAgIC8vIG1ha2Ugc3VyZSBpdCBmaXRzIHdpdGhpbiB0aGUgd2luZG93XG5cbiAgICBjb25zdCBhcHBDb250YWluZXJFbCA9ICh0aGlzLmFwcCBhcyBhbnkpLmRvbS5hcHBDb250YWluZXJFbFxuXG4gICAgY29uc3Qgc2NSaWdodCA9IHNjQ29vcmRzLmxlZnQgKyBzY05vZGUub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgYXBwV2lkdGggPSBhcHBDb250YWluZXJFbC5vZmZzZXRXaWR0aDtcbiAgICBpZiAoc2NSaWdodCA+IGFwcFdpZHRoKSB7XG4gICAgICBzY0Nvb3Jkcy5sZWZ0IC09IHNjUmlnaHQgLSBhcHBXaWR0aDtcbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIGxlZnQgY29vcmRcbiAgICAvLyB0aGUgdG9wIGNvb3JkIGlzIHNldCBieSBPYnNpZGlhbiBhbmQgaXMgY29ycmVjdC5cbiAgICAvLyBpdCdzIGFsc28gYSBwYWluIHRvIHRyeSB0byByZWNhbGN1bGF0ZSBzbyBJIGxlZnQgaXQgb3V0LlxuXG4gICAgc2NOb2RlLnN0eWxlLmxlZnQgPSBNYXRoLm1heChzY0Nvb3Jkcy5sZWZ0LCAwKSArICdweCc7XG4gIH07XG5cbiAgLy8gb3ZlcnJpZGVuIGZ1bmN0aW9uIGZvciByb290U3BsaXQgY2hpbGQgcmVzaXplXG4gIG9uQ2hpbGRSZXNpemVTdGFydCA9IChsZWFmOiBhbnksIGV2ZW50OiBhbnkpID0+IHtcblxuICAgIC8vIG9ubHkgcmVhbGx5IGFwcGx5IHRoaXMgdG8gdmVydGljYWwgc3BsaXRzXG4gICAgaWYgKHRoaXMucm9vdFNwbGl0QW55LmRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAvLyB0aGlzIGlzIHRoZSB3aWR0aCB0aGUgbGVhZiBzdGFydGVkIGF0IGJlZm9yZSByZXNpemVcbiAgICAgIGNvbnN0IHN0YXJ0V2lkdGggPSBsZWFmLmNvbnRhaW5lckVsLmNsaWVudFdpZHRoO1xuXG4gICAgICAvLyB0aGUgbW91c2Vtb3ZlIGV2ZW50IHRvIHRyaWdnZXIgd2hpbGUgcmVzaXppbmdcbiAgICAgIGNvbnN0IG1vdXNlbW92ZSA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gZ2V0IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGZpcnN0IHBvc2l0aW9uIGFuZCBjdXJyZW50XG4gICAgICAgIGNvbnN0IGRlbHRhWCA9IGUucGFnZVggLSBldmVudC5wYWdlWDtcbiAgICAgICAgLy8gYWRqdXN0IHRoZSBzdGFydCB3aWR0aCBieSB0aGUgZGVsdGFcbiAgICAgICAgbGVhZi5jb250YWluZXJFbC5zdHlsZS53aWR0aCA9IGAke3N0YXJ0V2lkdGggKyBkZWx0YVh9cHhgO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgbW91c2V1cCBldmVudCB0byB0cmlnZ2VyIGF0IHRoZSBlbmQgb2YgcmVzaXppbmdcbiAgICAgIGNvbnN0IG1vdXNldXAgPSAoKSA9PiB7XG4gICAgICAgIC8vIGlmIHN0YWNraW5nIGlzIGVuYWJsZWQsIHdlIG5lZWQgdG8gcmUtamlnIHRoZSBcInJpZ2h0XCIgdmFsdWVcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc3RhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgICAgLy8gd2UgbmVlZCB0aGUgbGVhZiBjb3VudCBhbmQgaW5kZXggdG8gY2FsY3VsYXRlIHRoZSBjb3JyZWN0IHZhbHVlXG4gICAgICAgICAgY29uc3QgbGVhZkNvdW50ID0gdGhpcy5yb290U3BsaXRBbnkuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgIGNvbnN0IGxlYWZJbmRleCA9IHRoaXMucm9vdFNwbGl0QW55LmNoaWxkcmVuLmZpbmRJbmRleCgobDogYW55KSA9PiBsID09IGxlYWYpO1xuICAgICAgICAgIGxlYWYuY29udGFpbmVyRWwuc3R5bGUucmlnaHQgPSAoKChsZWFmQ291bnQgLSBsZWFmSW5kZXggLSAxKSAqIHRoaXMuc2V0dGluZ3MuaGVhZGVyV2lkdGgpIC0gbGVhZi5jb250YWluZXJFbC5jbGllbnRXaWR0aCkgKyBcInB4XCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgdGhlc2UgZXZlbnQgbGlzdGVuZXJzLiBXZSdyZSBkb25lIHdpdGggdGhlbVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlbW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNldXApO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIGFib3ZlIHR3byBldmVudCBsaXN0ZW5lcnNcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2Vtb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNldXApO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBTbGlkaW5nUGFuZXNTZXR0aW5ncyB7XG4gIGhlYWRlcldpZHRoOiBudW1iZXIgPSAzMjtcbiAgbGVhZldpZHRoOiBudW1iZXIgPSA3MDA7XG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHJvdGF0ZUhlYWRlcnM6IGJvb2xlYW4gPSB0cnVlO1xuICBoZWFkZXJBbHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhY2tpbmdFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbn1cblxuY2xhc3MgU2xpZGluZ1BhbmVzU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuXG4gIHBsdWdpbjogU2xpZGluZ1BhbmVzUGx1Z2luO1xuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBTbGlkaW5nUGFuZXNQbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuXG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJUb2dnbGUgU2xpZGluZyBQYW5lc1wiKVxuICAgICAgLnNldERlc2MoXCJUdXJucyBzbGlkaW5nIHBhbmVzIG9uIG9yIG9mZiBnbG9iYWxseVwiKVxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKCF0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXNhYmxlZClcbiAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmRpc2FibGVkID0gIXZhbHVlO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmRpc2FibGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5lbmFibGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICBcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdMZWFmIFdpZHRoJylcbiAgICAgIC5zZXREZXNjKCdUaGUgd2lkdGggb2YgYSBzaW5nbGUgcGFuZScpXG4gICAgICAuYWRkVGV4dCh0ZXh0ID0+IHRleHQuc2V0UGxhY2Vob2xkZXIoJ0V4YW1wbGU6IDcwMCcpXG4gICAgICAgIC5zZXRWYWx1ZSgodGhpcy5wbHVnaW4uc2V0dGluZ3MubGVhZldpZHRoIHx8ICcnKSArICcnKVxuICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubGVhZldpZHRoID0gcGFyc2VJbnQodmFsdWUudHJpbSgpKTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xuICAgICAgICB9KSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiVG9nZ2xlIHJvdGF0ZWQgaGVhZGVyc1wiKVxuICAgICAgLnNldERlc2MoXCJSb3RhdGVzIGhlYWRlcnMgdG8gdXNlIGFzIHNwaW5lc1wiKVxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnJvdGF0ZUhlYWRlcnMpXG4gICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5yb3RhdGVIZWFkZXJzID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcbiAgICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlN3YXAgcm90YXRlZCBoZWFkZXIgZGlyZWN0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlN3YXBzIHRoZSBkaXJlY3Rpb24gb2Ygcm90YXRlZCBoZWFkZXJzXCIpXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVhZGVyQWx0KVxuICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVhZGVyQWx0ID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcbiAgICAgICAgfSkpO1xuICAgIFxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJUb2dnbGUgc3RhY2tpbmdcIilcbiAgICAgIC5zZXREZXNjKFwiUGFuZXMgd2lsbCBzdGFjayB1cCB0byB0aGUgbGVmdCBhbmQgcmlnaHRcIilcbiAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zdGFja2luZ0VuYWJsZWQpXG4gICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zdGFja2luZ0VuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xuICAgICAgICB9KSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdTcGluZSBXaWR0aCcpXG4gICAgICAuc2V0RGVzYygnVGhlIHdpZHRoIG9mIHRoZSByb3RhdGVkIGhlYWRlciAob3IgZ2FwKSBmb3Igc3RhY2tpbmcnKVxuICAgICAgLmFkZFRleHQodGV4dCA9PiB0ZXh0LnNldFBsYWNlaG9sZGVyKCdFeGFtcGxlOiAzMicpXG4gICAgICAgIC5zZXRWYWx1ZSgodGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVhZGVyV2lkdGggfHwgJycpICsgJycpXG4gICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5oZWFkZXJXaWR0aCA9IHBhcnNlSW50KHZhbHVlLnRyaW0oKSk7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcbiAgICAgICAgfSkpO1xuXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlVmlldyIsIlBsdWdpbiIsIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxD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
