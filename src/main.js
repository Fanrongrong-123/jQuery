const api = jQuery('.test')   //jQuery不返回元素，只返回api这个对象
api.addClass('red').addClass('blue') //链式操作 .addClass返回的就是api

// Obj.fn(p1)
// obj.fn.call(obj, p1)


jQuery('.test1').find('.child').addClass('red')
    .end()
    .addClass('yellow');

const x = jQuery('.test2').find('.child')
x.each((div) => console.log(div))



const y = jQuery('.test2')
y.children().print()


y.parent().print()
