const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    if (!this.node) {
      this.node = new Node(data);
    } else {
      let currentNode = this.node;
      while (true) {
        if (currentNode.data > data) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = new Node(data);
          }
        } else if (currentNode.data < data) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = new Node(data);
          }
        } else {
          break;
        }
      }
    }
  }

  has(data) {
    let currentNode = this.node;

    while (currentNode) {
      if (currentNode.data == data) {
        return true;
      } else if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else if (currentNode.data < data) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.node;

    while (currentNode) {
      if (currentNode.data == data) {
        return currentNode;
      } else if (currentNode.data < data) {
        currentNode = currentNode.right;
      } else if (currentNode.data > data) {
        currentNode = currentNode.left;
      }
    }

    return null;
  }

  remove(data) {
    let currentNode = this.node;
    let prevNode = this.node;
    let changedNode;

    if (currentNode.data == data) {
      if (currentNode.right) {
        changedNode = currentNode.right;

        while (changedNode.left) {
          changedNode = changedNode.left;
        }

        changedNode.left = currentNode.left;
        this.node = currentNode.right;
      } else if (currentNode.left) {
        changedNode = currentNode.left;

        while (changedNode.right) {
          changedNode = changedNode.right;
        }

        changedNode.right = currentNode.right;
        this.node = currentNode.left;
      } else {
        this.node = null;
      }
    }

    while (currentNode) {
      if (currentNode.data > data) {
        prevNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.data < data) {
        prevNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.data == data) {
        changedNode = currentNode;

        if (changedNode.right) {
          changedNode = changedNode.right;

          while (changedNode.left) {
            changedNode = changedNode.left;
          }
          changedNode.left = currentNode.left;

          if (prevNode.data < data) {
            prevNode.right = currentNode.right;
          } else {
            prevNode.left = currentNode.right;
          }
        } else if (changedNode.left) {
          changedNode = changedNode.left;

          while (changedNode.right) {
            changedNode = changedNode.right;
          }

          changedNode.right = currentNode.right;
          prevNode.left = currentNode.left;
        } else {
          if (prevNode.data > data) {
            prevNode.left = null;
          } else {
            prevNode.right = null;
          }
        }
        return;
      } else {
        return;
      }
    }
  }

  min() {
    let currentNode = this.node;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.node;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}
module.exports = {
  BinarySearchTree,
};
