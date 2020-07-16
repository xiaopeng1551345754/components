<template>
    <div class="timelinesinglewrap" :class="{'rotate': isRotate == 'horizontal'}">
        <div class="item" v-for="(idx, item) in list" :key="idx">
            <div class="text">
                <!-- {{ item.text }} -->
            </div>
            <div class="line">
                <timelinesingle :circle-type="
            idx === 0 ? 'top' : idx === list.length - 1 ? 'bottom' : 'center'
          " :circle-color="'rgba(245,128,52,.2)'" :circle-size="20" :circle-center-color="'rgba(245,128,52,1)'" :circle-center-size="10" :line-type="'both'" :line-color="'rgba(245,128,52,1)'" :line-width="2"
                    :line-height="idx === 0 ? 70 : idx === list.length - 1 ? 70 : 30" :line-offset="0"></timelinesingle>
            </div>
            <div class="text">
                <!-- {{ item.text }} -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: "top",
            theme: "1",
            list: [],
            isRotate: 'horizontal'
        };
    },
    ready() {
        for (let i = 5; i--;) {
            this.list.push({
                text: "qweqweqweqweqwe" + i,
                id: i,
            });
        }
    },
};
</script>

<style lang="less" scoped>
.rotate {
    transform: rotate(90deg);
}
.timelinesinglewrap {
    width: 200px;
    margin: auto;
    .item {
        display: flex;
        .text {
            width: 40%;
            overflow: hidden;
            line-height: 100px;
        }
        .line {
            width: 10%;
            margin: 0 5%;
            overflow: hidden;
            height: 100px;
        }
    }
}
</style>
