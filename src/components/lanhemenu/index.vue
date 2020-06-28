<template>
  <div class="lanhe_menu" v-el:wrap :style="{ overflow: disabled ? 'hidden' : 'auto' }">
    <template v-for="(idx, card) in list">
      <div class="card_name" :key="idx">
        {{ card.name }}
      </div>
      <div v-el:card class="card" :key="idx">
        <div class="items">
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
    </template>
  </div>
</template>

<script>
export default {
  name: "lanhemenu",
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
    init() {
      this.$nextTick(() => {
        const doms = document.querySelectorAll(".card_name");
        for (let i = 0; i < doms.length; i++) {
          doms[i].style.top = i * 76 + "px";
        }
      });
    },
    select(item, card) {
      this.$emit("select", item, card);
    },
  },
  watch: {
    list: {
      immediate: true,
      handler(n) {
        this.init();
      },
    },
  },
  ready() {
    this.dom = this.$els.wrap;
    this.init();
    this.$nextTick(() => {
      this.dom.onscroll = () => {
        this.$emit("scrollt", this.dom.scrollTop);
      };
    });
  },
};
</script>

<style lang="less" scoped>
.lanhe_menu {
  width: 100%;
  height: 100%;
  overflow: auto;
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .card_name {
    font-size: 18px;
    font-weight: 600;
    color: rgba(47, 45, 41, 1);
    line-height: 24px;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    background: #fff;
    padding: 26px 36px;
    border-radius: 30px 30px 0px 0px;
    border-top: 1px solid #eeeeee;
  }
  .card {
    width: 100%;
    background: #fff;
    padding: 0 36px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    &.active {
      top: 0;
    }
    .items {
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
