"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.every");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.some");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-integer");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cloneDeep = require('lodash/cloneDeep');

var compare = require('json-schema-compare');

var computeLcm = require('compute-lcm');

var defaultsDeep = require('lodash/defaultsDeep');

var flatten = require('lodash/flatten');

var flattenDeep = require('lodash/flattenDeep');

var intersection = require('lodash/intersection');

var intersectionWith = require('lodash/intersectionWith');

var isEqual = require('lodash/isEqual');

var isPlainObject = require('lodash/isPlainObject');

var pullAll = require('lodash/pullAll');

var sortBy = require('lodash/sortBy');

var forEach = require('lodash/forEach');

var uniq = require('lodash/uniq');

var uniqWith = require('lodash/uniqWith');

var without = require('lodash/without');

var withoutArr = function withoutArr(arr) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return without.apply(null, [arr].concat(flatten(rest)));
};

var isPropertyRelated = function isPropertyRelated(key) {
  return contains(propertyRelated, key);
};

var isItemsRelated = function isItemsRelated(key) {
  return contains(itemsRelated, key);
};

var contains = function contains(arr, val) {
  return arr.indexOf(val) !== -1;
};

var isEmptySchema = function isEmptySchema(obj) {
  return !keys(obj).length && obj !== false && obj !== true;
};

var isSchema = function isSchema(val) {
  return isPlainObject(val) || val === true || val === false;
};

var isFalse = function isFalse(val) {
  return val === false;
};

var isTrue = function isTrue(val) {
  return val === true;
};

var schemaResolver = function schemaResolver(compacted, key, mergeSchemas) {
  return mergeSchemas(compacted);
};

var stringArray = function stringArray(values) {
  return sortBy(uniq(flattenDeep(values)));
};

var notUndefined = function notUndefined(val) {
  return val !== undefined;
};

var allUniqueKeys = function allUniqueKeys(arr) {
  return uniq(flattenDeep(arr.map(keys)));
}; // resolvers


var first = function first(compacted) {
  return compacted[0];
};

var required = function required(compacted) {
  return stringArray(compacted);
};

var maximumValue = function maximumValue(compacted) {
  return Math.max.apply(Math, compacted);
};

var minimumValue = function minimumValue(compacted) {
  return Math.min.apply(Math, compacted);
};

var uniqueItems = function uniqueItems(compacted) {
  return compacted.some(isTrue);
};

var examples = function examples(compacted) {
  return uniqWith(flatten(compacted), isEqual);
};

function compareProp(key) {
  return function (a, b) {
    return compare(_defineProperty({}, key, a), _defineProperty({}, key, b));
  };
}

function getAllOf(schema) {
  var _schema$allOf = schema.allOf,
      allOf = _schema$allOf === void 0 ? [] : _schema$allOf,
      copy = _objectWithoutProperties(schema, ["allOf"]);

  copy = isPlainObject(schema) ? copy : schema; // if schema is boolean

  return [copy].concat(_toConsumableArray(allOf.map(getAllOf)));
}

function getValues(schemas, key) {
  return schemas.map(function (schema) {
    return schema && schema[key];
  });
}

function getItemSchemas(subSchemas, key) {
  return subSchemas.map(function (sub) {
    if (!sub) {
      return;
    }

    if (Array.isArray(sub.items)) {
      var schemaAtPos = sub.items[key];

      if (isSchema(schemaAtPos)) {
        return schemaAtPos;
      } else if (sub.hasOwnProperty('additionalItems')) {
        return sub.additionalItems;
      }
    } else {
      return sub.items;
    }
  });
}

function tryMergeSchemaGroups(schemaGroups, mergeSchemas) {
  return schemaGroups.map(function (schemas, index) {
    try {
      return mergeSchemas(schemas, index);
    } catch (e) {
      return undefined;
    }
  }).filter(notUndefined);
}

function getAdditionalSchemas(subSchemas) {
  return subSchemas.map(function (sub) {
    if (!sub) {
      return;
    }

    if (Array.isArray(sub.items)) {
      return sub.additionalItems;
    }

    return sub.items;
  });
}

function keys(obj) {
  if (isPlainObject(obj) || Array.isArray(obj)) {
    return Object.keys(obj);
  } else {
    return [];
  }
}

function getAnyOfCombinations(arrOfArrays, combinations) {
  combinations = combinations || [];

  if (!arrOfArrays.length) {
    return combinations;
  }

  var values = arrOfArrays.slice(0).shift();
  var rest = arrOfArrays.slice(1);

  if (combinations.length) {
    return getAnyOfCombinations(rest, flatten(combinations.map(function (combination) {
      return values.map(function (item) {
        return [item].concat(combination);
      });
    })));
  }

  return getAnyOfCombinations(rest, values.map(function (item) {
    return item;
  }));
}

function mergeWithArray(base, newItems) {
  if (Array.isArray(base)) {
    base.splice.apply(base, [0, 0].concat(newItems));
    return base;
  } else {
    return newItems;
  }
}

function throwIncompatible(values, paths) {
  var asJSON;

  try {
    asJSON = values.map(function (val) {
      return JSON.stringify(val, null, 2);
    }).join('\n');
  } catch (variable) {
    asJSON = values.join(', ');
  }

  throw new Error('Could not resolve values for path:"' + paths.join('.') + '". They are probably incompatible. Values: \n' + asJSON);
}

function cleanupReturnValue(returnObject) {
  // cleanup empty
  for (var prop in returnObject) {
    if (returnObject.hasOwnProperty(prop) && isEmptySchema(returnObject[prop])) {
      delete returnObject[prop];
    }
  }

  return returnObject;
}

function createRequiredSubMerger(mergeSchemas, key, parents) {
  return function (schemas, subKey) {
    if (subKey === undefined) {
      throw new Error('You need to call merger with a key for the property name or index if array.');
    }

    subKey = String(subKey);
    return mergeSchemas(schemas, null, parents.concat(key, subKey));
  };
}

function callGroupResolver(keys, resolverName, schemas, mergeSchemas, options, parents) {
  if (keys.length) {
    var resolver = options.resolvers[resolverName];

    if (!resolver) {
      throw new Error('No resolver found for ' + resolverName);
    }

    var compacted = uniqWith(schemas.map(function (schema) {
      return keys.reduce(function (all, key) {
        if (schema[key] !== undefined) {
          all[key] = schema[key];
        }

        return all;
      }, {});
    }).filter(notUndefined), compare);
    var related = resolverName === 'properties' ? propertyRelated : itemsRelated;
    var mergers = related.reduce(function (all, key) {
      if (contains(schemaGroupProps, key)) {
        all[key] = createRequiredSubMerger(mergeSchemas, key, parents);
      } else {
        all[key] = function (schemas) {
          return mergeSchemas(schemas, null, parents.concat(key));
        };
      }

      return all;
    }, {});

    if (resolverName === 'items') {
      mergers.itemsArray = createRequiredSubMerger(mergeSchemas, 'items', parents);

      mergers.items = function (schemas) {
        return mergeSchemas(schemas, null, parents.concat('items'));
      };
    }

    var result = resolver(compacted, parents.concat(resolverName), mergers, options);

    if (!isPlainObject(result)) {
      throwIncompatible(compacted, parents.concat(resolverName));
    }

    return cleanupReturnValue(result);
  }
} // Provide source when array


function mergeSchemaGroup(group, mergeSchemas, source) {
  var allKeys = allUniqueKeys(source || group);
  var extractor = source ? getItemSchemas : getValues;
  return allKeys.reduce(function (all, key) {
    var schemas = extractor(group, key);
    var compacted = uniqWith(schemas.filter(notUndefined), compare);
    all[key] = mergeSchemas(compacted, key);
    return all;
  }, source ? [] : {});
}

function removeFalseSchemas(target) {
  forEach(target, function (schema, prop) {
    if (schema === false) {
      delete target[prop];
    }
  });
}

function removeFalseSchemasFromArray(target) {
  forEach(target, function (schema, index) {
    if (schema === false) {
      target.splice(index, 1);
    }
  });
}

function createRequiredMetaArray(arr) {
  return {
    required: arr
  };
}

var propertyRelated = ['properties', 'patternProperties', 'additionalProperties'];
var itemsRelated = ['items', 'additionalItems'];
var schemaGroupProps = ['properties', 'patternProperties', 'definitions', 'dependencies'];
var schemaArrays = ['anyOf', 'oneOf'];
var schemaProps = ['additionalProperties', 'additionalItems', 'contains', 'propertyNames', 'not', 'items'];
var defaultResolvers = {
  type: function type(compacted) {
    if (compacted.some(Array.isArray)) {
      var normalized = compacted.map(function (val) {
        return Array.isArray(val) ? val : [val];
      });
      var common = intersection.apply(null, normalized);

      if (common.length === 1) {
        return common[0];
      } else if (common.length > 1) {
        return uniq(common);
      }
    }
  },
  properties: function properties(values, key, mergers, options) {
    // first get rid of all non permitted properties
    if (!options.ignoreAdditionalProperties) {
      values.forEach(function (subSchema) {
        var otherSubSchemas = values.filter(function (s) {
          return s !== subSchema;
        });
        var ownKeys = keys(subSchema.properties);
        var ownPatternKeys = keys(subSchema.patternProperties);
        var ownPatterns = ownPatternKeys.map(function (k) {
          return new RegExp(k);
        });
        otherSubSchemas.forEach(function (other) {
          var allOtherKeys = keys(other.properties);
          var keysMatchingPattern = allOtherKeys.filter(function (k) {
            return ownPatterns.some(function (pk) {
              return pk.test(k);
            });
          });
          var additionalKeys = withoutArr(allOtherKeys, ownKeys, keysMatchingPattern);
          additionalKeys.forEach(function (key) {
            other.properties[key] = mergers.properties([other.properties[key], subSchema.additionalProperties], key);
          });
        });
      }); // remove disallowed patternProperties

      values.forEach(function (subSchema) {
        var otherSubSchemas = values.filter(function (s) {
          return s !== subSchema;
        });
        var ownPatternKeys = keys(subSchema.patternProperties);

        if (subSchema.additionalProperties === false) {
          otherSubSchemas.forEach(function (other) {
            var allOtherPatterns = keys(other.patternProperties);
            var additionalPatternKeys = withoutArr(allOtherPatterns, ownPatternKeys);
            additionalPatternKeys.forEach(function (key) {
              return delete other.patternProperties[key];
            });
          });
        }
      });
    }

    var returnObject = {
      additionalProperties: mergers.additionalProperties(values.map(function (s) {
        return s.additionalProperties;
      })),
      patternProperties: mergeSchemaGroup(values.map(function (s) {
        return s.patternProperties;
      }), mergers.patternProperties),
      properties: mergeSchemaGroup(values.map(function (s) {
        return s.properties;
      }), mergers.properties)
    };

    if (returnObject.additionalProperties === false) {
      removeFalseSchemas(returnObject.properties);
    }

    return returnObject;
  },
  dependencies: function dependencies(compacted, paths, mergeSchemas) {
    var allChildren = allUniqueKeys(compacted);
    return allChildren.reduce(function (all, childKey) {
      var childSchemas = getValues(compacted, childKey);
      var innerCompacted = uniqWith(childSchemas.filter(notUndefined), isEqual); // to support dependencies

      var innerArrays = innerCompacted.filter(Array.isArray);

      if (innerArrays.length) {
        if (innerArrays.length === innerCompacted.length) {
          all[childKey] = stringArray(innerCompacted);
        } else {
          var innerSchemas = innerCompacted.filter(isSchema);
          var arrayMetaScheams = innerArrays.map(createRequiredMetaArray);
          all[childKey] = mergeSchemas(innerSchemas.concat(arrayMetaScheams), childKey);
        }

        return all;
      }

      innerCompacted = uniqWith(innerCompacted, compare);
      all[childKey] = mergeSchemas(innerCompacted, childKey);
      return all;
    }, {});
  },
  items: function items(values, paths, mergers) {
    var items = values.map(function (s) {
      return s.items;
    });
    var itemsCompacted = items.filter(notUndefined);
    var returnObject = {};

    if (itemsCompacted.every(isSchema)) {
      returnObject.items = mergers.items(items);
    } else {
      returnObject.items = mergeSchemaGroup(values, mergers.itemsArray, items);
    }

    var schemasAtLastPos;

    if (itemsCompacted.every(Array.isArray)) {
      schemasAtLastPos = values.map(function (s) {
        return s.additionalItems;
      });
    } else if (itemsCompacted.some(Array.isArray)) {
      schemasAtLastPos = getAdditionalSchemas(values);
    }

    if (schemasAtLastPos) {
      returnObject.additionalItems = mergers.additionalItems(schemasAtLastPos);
    }

    if (returnObject.additionalItems === false && Array.isArray(returnObject.items)) {
      removeFalseSchemasFromArray(returnObject.items);
    }

    return returnObject;
  },
  oneOf: function oneOf(compacted, paths, mergeSchemas) {
    var combinations = getAnyOfCombinations(cloneDeep(compacted));
    var result = tryMergeSchemaGroups(combinations, mergeSchemas);
    var unique = uniqWith(result, compare);

    if (unique.length) {
      return unique;
    }
  },
  not: function not(compacted) {
    return {
      anyOf: compacted
    };
  },
  pattern: function pattern(compacted) {
    return compacted.map(function (r) {
      return '(?=' + r + ')';
    }).join('');
  },
  multipleOf: function multipleOf(compacted) {
    var integers = compacted.slice(0);
    var factor = 1;

    while (integers.some(function (n) {
      return !Number.isInteger(n);
    })) {
      integers = integers.map(function (n) {
        return n * 10;
      });
      factor = factor * 10;
    }

    return computeLcm(integers) / factor;
  },
  enum: function _enum(compacted) {
    var enums = intersectionWith.apply(null, compacted.concat(isEqual));

    if (enums.length) {
      return sortBy(enums);
    }
  }
};
defaultResolvers.$id = first;
defaultResolvers.$ref = first;
defaultResolvers.$schema = first;
defaultResolvers.additionalItems = schemaResolver;
defaultResolvers.additionalProperties = schemaResolver;
defaultResolvers.anyOf = defaultResolvers.oneOf;
defaultResolvers.contains = schemaResolver;
defaultResolvers.default = first;
defaultResolvers.definitions = defaultResolvers.dependencies;
defaultResolvers.description = first;
defaultResolvers.examples = examples;
defaultResolvers.exclusiveMaximum = minimumValue;
defaultResolvers.exclusiveMinimum = maximumValue;
defaultResolvers.maximum = minimumValue;
defaultResolvers.maxItems = minimumValue;
defaultResolvers.maxLength = minimumValue;
defaultResolvers.maxProperties = minimumValue;
defaultResolvers.minimum = maximumValue;
defaultResolvers.minItems = maximumValue;
defaultResolvers.minLength = maximumValue;
defaultResolvers.minProperties = maximumValue;
defaultResolvers.propertyNames = schemaResolver;
defaultResolvers.required = required;
defaultResolvers.title = first;
defaultResolvers.uniqueItems = uniqueItems;

function merger(rootSchema, options, totalSchemas) {
  totalSchemas = totalSchemas || [];
  options = defaultsDeep(options, {
    ignoreAdditionalProperties: false,
    resolvers: defaultResolvers,
    deep: true
  });

  function mergeSchemas(schemas, base, parents) {
    schemas = cloneDeep(schemas.filter(notUndefined));
    parents = parents || [];
    var merged = isPlainObject(base) ? base : {}; // return undefined, an empty schema

    if (!schemas.length) {
      return;
    }

    if (schemas.some(isFalse)) {
      return false;
    }

    if (schemas.every(isTrue)) {
      return true;
    } // there are no false and we don't need the true ones as they accept everything


    schemas = schemas.filter(isPlainObject);
    var allKeys = allUniqueKeys(schemas);

    if (options.deep && contains(allKeys, 'allOf')) {
      return merger({
        allOf: schemas
      }, options, totalSchemas);
    }

    var propertyKeys = allKeys.filter(isPropertyRelated);
    pullAll(allKeys, propertyKeys);
    var itemKeys = allKeys.filter(isItemsRelated);
    pullAll(allKeys, itemKeys);
    allKeys.forEach(function (key) {
      var values = getValues(schemas, key);
      var compacted = uniqWith(values.filter(notUndefined), compareProp(key)); // arrayprops like anyOf and oneOf must be merged first, as they contains schemas
      // allOf is treated differently alltogether

      if (compacted.length === 1 && contains(schemaArrays, key)) {
        merged[key] = compacted[0].map(function (schema) {
          return mergeSchemas([schema], schema);
        }); // prop groups must always be resolved
      } else if (compacted.length === 1 && !contains(schemaGroupProps, key) && !contains(schemaProps, key)) {
        merged[key] = compacted[0];
      } else {
        var resolver = options.resolvers[key] || options.resolvers.defaultResolver;

        if (!resolver) {
          throw new Error('No resolver found for key ' + key + '. You can provide a resolver for this keyword in the options, or provide a default resolver.');
        }

        var merger; // get custom merger for groups

        if (contains(schemaGroupProps, key) || contains(schemaArrays, key)) {
          merger = createRequiredSubMerger(mergeSchemas, key, parents);
        } else {
          merger = function merger(schemas) {
            return mergeSchemas(schemas, null, parents.concat(key));
          };
        }

        var calledWithArray = false;
        merged[key] = resolver(compacted, parents.concat(key), merger, options, function (unresolvedSchemas) {
          calledWithArray = Array.isArray(unresolvedSchemas);
          return addToAllOf(unresolvedSchemas);
        });

        if (merged[key] === undefined && !calledWithArray) {
          throwIncompatible(compacted, parents.concat(key));
        } else if (merged[key] === undefined) {
          delete merged[key];
        }
      }
    });
    Object.assign(merged, callGroupResolver(propertyKeys, 'properties', schemas, mergeSchemas, options, parents));
    Object.assign(merged, callGroupResolver(itemKeys, 'items', schemas, mergeSchemas, options, parents));

    function addToAllOf(unresolvedSchemas) {
      merged.allOf = mergeWithArray(merged.allOf, unresolvedSchemas);
    }

    return merged;
  }

  var allSchemas = flattenDeep(getAllOf(rootSchema));
  var merged = mergeSchemas(allSchemas);
  return merged;
}

merger.options = {
  resolvers: defaultResolvers
};
module.exports = merger;