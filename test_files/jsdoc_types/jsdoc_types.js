/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
goog.module('test_files.jsdoc_types.jsdoc_types');var module = module || {id: 'test_files/jsdoc_types/jsdoc_types.js'};/**
 * This test tests importing a type across module boundaries,
 * ensuring that the type gets the proper name in JSDoc comments.
 */

var module1 = goog.require('test_files.jsdoc_types.module1');
const tsickle_forward_declare_1 = goog.forwardDeclare("test_files.jsdoc_types.module1");
var module2_1 = goog.require('test_files.jsdoc_types.module2');
const tsickle_forward_declare_2 = goog.forwardDeclare("test_files.jsdoc_types.module2");
var default_1 = goog.require('test_files.jsdoc_types.default');
const tsickle_forward_declare_3 = goog.forwardDeclare("test_files.jsdoc_types.default");
const tsickle_forward_declare_4 = goog.forwardDeclare("test_files.jsdoc_types.nevertyped");
goog.require("test_files.jsdoc_types.nevertyped"); // force type-only module to be loaded
// Check that imported types get the proper names in JSDoc.
let /** @type {!tsickle_forward_declare_1.Class} */ useNamespacedClass = new module1.Class();
let /** @type {!tsickle_forward_declare_1.Class} */ useNamespacedClassAsType;
let /** @type {!tsickle_forward_declare_1.Interface} */ useNamespacedType;
// Should be references to the symbols in module2, perhaps via locals.
let /** @type {!tsickle_forward_declare_2.ClassOne} */ useLocalClass = new module2_1.ClassOne();
let /** @type {!tsickle_forward_declare_2.ClassOne} */ useLocalClassRenamed = new module2_1.ClassOne();
let /** @type {!tsickle_forward_declare_2.ClassTwo} */ useLocalClassRenamedTwo = new module2_1.ClassTwo();
let /** @type {!tsickle_forward_declare_2.ClassOne} */ useLocalClassAsTypeRenamed;
let /** @type {!tsickle_forward_declare_2.Interface} */ useLocalInterface;
let /** @type {!tsickle_forward_declare_2.ClassWithParams<number>} */ useClassWithParams;
// This is purely a value; it doesn't need renaming.
let /** @type {number} */ useLocalValue = module2_1.value;
// Check a default import.
let /** @type {!tsickle_forward_declare_3.default} */ useDefaultClass = new default_1.default();
let /** @type {!tsickle_forward_declare_3.default} */ useDefaultClassAsType;
// NeverTyped should be {?}, even in typed mode.
let /** @type {?} */ useNeverTyped;
let /** @type {(string|?)} */ useNeverTyped2;
let /** @type {?} */ useNeverTypedTemplated;
/**
 * Note: no implements JSDoc clause because the type is blacklisted.
 */
class ImplementsNeverTyped {
}
function ImplementsNeverTyped_tsickle_Closure_declarations() {
    /** @type {number} */
    ImplementsNeverTyped.prototype.foo;
}
/**
 * @template T
 */
class ImplementsNeverTypedTemplated {
}
function ImplementsNeverTypedTemplated_tsickle_Closure_declarations() {
    /** @type {T} */
    ImplementsNeverTypedTemplated.prototype.foo;
}
