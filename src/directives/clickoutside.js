export default {
    bind () {
        var last = new Date().getTime()
        this.documentHandler = (e) => {
            if (this.el.contains(e.target)) {
                return false;
            }
            // 处理模拟的双击事件
            if (this.expression && (new Date().getTime())- last > 200) {
              let tar = ''
              let data = ''
              if (this.expression.indexOf('(')) {
                tar = this.expression.split(/[(,)]/)[0]
                data = this.expression.split(/[(,)]/)[1]
              }
                this.vm[tar](data);
                last = Date.now()
            }
        };
        document.addEventListener('click', this.documentHandler);
    },
    update () {

    },
    unbind () {
        document.removeEventListener('click', this.documentHandler);
    }
};
