module.exports = {
    name: 'Arterning',
    /**
     * 箭头函数的特性是没有自己的 this 绑定，而是继承了外层的作用域的 this。因此，this.name 将无法访问 name 属性，因为箭头函数没有自己的 this。
     */
    say: () => {
        return 'hello ' + this.name;
    },
    /**
     * 改用普通的函数表达式来定义 say 方法，从而让 this 可以正确地绑定到对象上，使得 name 属性能够被访问。
     */
    sayHi: function() {
        return 'hello ' + this.name;
    }
}