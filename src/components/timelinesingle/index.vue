<template>
    <div class="time-line-single default" :class="{'rotate': direction === 'horizontal'}">
        <div class="top-line" v-if="circleType !== 'top'" :style="topLineStyle"></div>
        <div class="circle" :style="circleStyle">
            <div class="circle-center" :style="circleCenterStyle"></div>
        </div>
        <div class="bottom-line" v-if="circleType !== 'bottom'" :style="bottomLineStyle"></div>
    </div>
</template>

<script>
export default {
    name: "timelinesingle",
    props: {
        direction: {
            type: String,
            default: 'vertical'
        },
        circleType: {
            type: String,
            default: "middle",
        },
        circleColor: {
            type: String,
            default: "rgba(245,128,52,.2)",
        },
        circleSize: {
            type: Number,
            default: 20,
        },
        circleCenterColor: {
            type: String,
            default: "rgba(245,128,52,1)",
        },
        circleCenterSize: {
            type: Number,
            default: 10,
        },
        lineType: {
            type: String,
            default: "both",
        },
        lineColor: {
            type: String,
            default: "rgba(245,128,52,1)",
        },
        lineWidth: {
            type: Number,
            default: 2,
        },
        lineHeight: {
            type: Number,
            default: 100,
        },
        lineOffset: {
            type: Number,
            default: 12,
        },
    },
    computed: {
        circleStyle() {
            let st = {
                width: this.circleSize + "px",
                height: this.circleSize + "px",
                background: this.circleColor,
                borderColor: this.circleCenterColor,
            };
            return st;
        },
        circleCenterStyle() {
            let st = {
                width: this.circleCenterSize + "px",
                height: this.circleCenterSize + "px",
                background: this.circleCenterColor,
            };
            return st;
        },
        topLineStyle() {
            let st = {
                width: this.lineWidth + "px",
                height: this.lineHeight + "px",
                marginTop: this.lineOffset + "px",
                background: this.lineColor,
            };
            if (this.lineType === 'bottom' || this.lineType === 'none') {
                st.background = 'none'
            }
            return st;
        },
        bottomLineStyle() {
            let st = {
                width: this.lineWidth + "px",
                height: this.lineHeight + "px",
                marginBottom: this.lineOffset + "px",
                background: this.lineColor,
            };
            if (this.lineType === 'top' || this.lineType === 'none') {
                st.background = 'none'
            }
            return st;
        },
    },
};
</script>

<style lang="less" scoped>
.rotate {
    transform: rotate(90deg);
}
.time-line-single {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        flex-shrink: 0;
        .circle-center {
            border-radius: 50%;
        }
    }
    .line {
        max-height: 100%;
    }
}
</style>
