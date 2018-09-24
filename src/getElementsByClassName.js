// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    var output = [];

    function traverse(node, callback) {
        if (callback(node) === false) {
            return false;
        };

        node = node.firstChild;
        while (node != null) {
            if (traverse(node, callback) === false) {
                return false;
            }
            node = node.nextSibling;
        };
    };

    traverse(document.body, function(node) {
        var nodeClassName = node.className;
        if (String(nodeClassName).includes(className)) {
           output.push(node);
        }
    });

    return output;

};
