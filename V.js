/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/lodash/lodash.d.ts" />
var V;
(function (V) {
    'use strict';
    ;
    var defaults = {
        sideEffects: true,
        affectsParent: 'fieldset',
        rulesSelector: 'v-rules',
        rulesDivider: '|'
    };
    var validationRules = {
        required: function (s) {
            return s.length > 0;
        },
        email: function (s) {
            return s.length === 0 || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(s);
        },
        url: function (s) {
            return /((https?):\/\/)?[^ "]+$/.test(s);
        }
    };
    function validate($element, opts) {
        var options = $.extend({}, defaults, opts);
        if ($element.is('form')) {
            return validateForm($element, options);
        }
        else if ($element.is('input')) {
            return validateInput($element, options);
        }
    }
    V.validate = validate;
    function validateInput($input, options) {
        // Assuming true, until we find a rule that doesn't match
        var result = true;
        var value;
        var rules = $input.attr(options.rulesSelector).split('|');
        if ($input.is('input[type="checkbox"]')) {
            value = $input.prop('checked') ? 'x' : '';
        }
        else {
            value = $input.val();
        }
        _.each(rules, function (rule) {
            if (validationRules[rule] && validationRules[rule](value) !== true) {
                result = false;
            }
        });
        if (options.sideEffects) {
            $input.parents(options.affectsParent).addClass(result ? 'is-valid' : 'is-invalid').removeClass(result ? 'is-invalid' : 'is-valid');
        }
        return result;
    }
    function validateForm($form, options) {
        var result = true;
        // Find all validatable input fields and validate them
        $form.find('[' + options.rulesSelector + ']').each(function (index, el) {
            var valid = validateInput($(el), options);
            if (!valid) {
                result = false;
            }
        });
        return result;
    }
})(V || (V = {}));
;
$.fn.validate = function (opts) {
    if (opts === void 0) { opts = {}; }
    var result;
    // Meh: result is result of last validation; should be used with only one!
    this.each(function () {
        result = V.validate($(this), opts);
    });
    return result;
};
