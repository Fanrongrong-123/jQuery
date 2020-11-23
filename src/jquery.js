window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }

    //api 可以操作elements
    return {
        //闭包：函数访问外部的变量
        addClass(className) { //复杂版：abbClass:function(){}  是一个键值对
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className) //elements.classList返回class元素的属性
            }
            return this
        },
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this //this就是旧api
            return jQuery(array)
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
            }
            return this //api对象
        },
        parent() {
            const array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children() {
            const array = []
            this.each((node) => {
                array.push(...node.children)
            })
            return jQuery(array)
        },
        print() { console.log(elements) },
        oldApi: selectorOrArray.oldApi,
        end() {
            return this.oldApi  //this是新的api
        },
        siblings() {


        },
        index(node) {

        }
    }
}