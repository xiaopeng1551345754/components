<template>
  <div class="card_menu" v-el:wrap>
    <div
      v-el:card
      class="card"
      v-for="(idx, card) in list"
      :key="idx"
      :class="{ active: active >= idx }"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <div class="card_name">
        {{ card.name }}
      </div>
      <div
        class="items"
        :style="{ overflow: disabled || active !== idx ? 'hidden' : 'auto' }"
      >
        <div
          class="item"
          v-for="(idx2, item) in card.children"
          :key="idx2"
          @click="select(item, card)"
        >
          <div class="item_icon">
            <img :src="item.image" />
          </div>
          <div class="item_text">
            <div class="item_name">
              {{ item.name }}
            </div>
            <div class="item_desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardmenu",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    defaultActive: {
      type: Number,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: 0,
      start: 0,
      dom: "",
      onoff: false,
    };
  },
  methods: {
    touchStart(e) {
      e = e || event;
      this.start =
        e.targetTouches[0].clientY - this.dom.getBoundingClientRect().top;
      if (!this.disabled) {
        this.onoff = true;
      }
    },
    touchMove(e) {
      e = e || event;
      if (this.onoff) {
        const tar = document.querySelectorAll(".card")[this.active].children[1];
        const st = tar.scrollTop;
        const ch = tar.clientHeight;
        const sh = tar.scrollHeight;
        const t = st === 0;
        const b = sh - ch -st <= 10;
        if (t || b) {
          const move =
            e.targetTouches[0].clientY - this.dom.getBoundingClientRect().top;
          if (move > this.start && this.active > 0 && t) {
            this.active--;
            if (tar && tar.scrollTo) {
              tar.scrollTo(0, 0);
            }
          } else if (
            move < this.start &&
            this.active < this.list.length - 1 &&
            b
          ) {
            this.active++;
            if (tar && tar.scrollTo) {
              tar.scrollTo(0, 0);
            }
          }
          this.onoff = false;
        }
      }
    },
    touchEnd() {
      this.onoff = false;
    },
    select(item, card) {
      this.$emit("select", item, card);
    },
  },
  watch: {
    defaultActive: {
      immediate: true,
      handler(n) {
        if (n) {
          this.active = n;
        }
      },
    },
    active: {
      immediate: true,
      handler(n) {
        this.$emit("active", n);
      },
    },
  },
  ready() {
    this.dom = this.$els.wrap;
  },
};
</script>

<style lang="less" scoped>
@t: 80px;
.card_menu {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  user-select: none;
  .card {
    width: 100%;
    border-radius: 30px 30px 0px 0px;
    position: absolute;
    left: 0;
    top: 100%;
    bottom: 0;
    transition: 0.3s;
    background: #fff;
    padding: 0 36px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    &.active {
      .loop(@i) when (@i<10) {
        &:nth-child(@{i}) {
          top: @i * @t - @t;
        }
        .loop(@i+1);
      }
      .loop(1);
    }
    .card_name {
      font-size: 18px;
      font-weight: 600;
      color: rgba(47, 45, 41, 1);
      line-height: 25px;
      margin-top: 30px;
      margin-bottom: 25px;
      flex-shrink: 0;
    }
    .items {
      height: 1px;
      flex-grow: 1;
      &::-webkit-scrollbar {
        display: none;
      }
      .item {
        padding: 20px 0;
        border-bottom: 1px solid #f4f4f4;
        display: flex;
        .item_icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .item_text {
          width: 100px;
          flex-grow: 1;
          margin-left: 30px;
          .item_name {
            font-size: 15px;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            line-height: 21px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item_desc {
            font-size: 12px;
            font-weight: 300;
            color: rgba(152, 152, 152, 1);
            line-height: 17px;
            margin-top: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
