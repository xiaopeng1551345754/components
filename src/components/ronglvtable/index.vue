<template>
  <div class="table-list-wrapper">
    <table cellpadding="0px"
           cellspacing="0px"
           class="table-list">
      <thead class="table-header">
        <tr class="table-header-contant">
          <th class="header-item"
              v-for="(index, item) in dataList[0]"
              :key="index">
            <div class="item">
              <div>{{ item.name }}</div>
              <div v-if="item.label === 'date'"
                   class="arrow">
                <img v-if="asc"
                     class="up"
                     src="/platform/img/arrow_up_active.png"
                     alt=""
                     @click="ascing">
                <img v-if="!asc"
                     class="up"
                     src="/platform/img/arrow_up.png"
                     alt=""
                     @click="ascing">
                <img v-if="desc"
                     class="down"
                     src="/platform/img/arrow_down_active.png"
                     alt=""
                     @click="descing">
                <img v-if="!desc"
                     class="down"
                     src="/platform/img/arrow_down.png"
                     alt=""
                     @click="descing">
              </div>
            </div>
          </th>
          <th class="header-item"
              style="text-align:center;">操作</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr class="table-body-contant"
            v-for="(key, item) in dataList[1]"
            :key="key">
          <td class="body-item"
              v-if="item[bodyList[0]] || item[bodyList[0]] === ''">
            <p class="tag"
               :class="{
                    'tag-a' : item[bodyList[0]] === '环境',
                    'tag-b' : item[bodyList[0]] === '社会',
                    'tag-c' : item[bodyList[0]] === '治理',
                    'tag-e' : item[bodyList[0]] === '媒体',
                    'tag-f' : item[bodyList[0]] === '监管',
                    'tag-g' :  item[bodyList[0]] === '有媒体'
                  }">{{ item[bodyList[0]] }}</p>
          </td>
          <td v-if="item[bodyList[1]] || item[bodyList[1]] === ''"
              class="body-item">
            <p class="tag"
               :class="{
                    'tag-a' : item[bodyList[1]] === '环境',
                    'tag-b' : item[bodyList[1]] === '社会',
                    'tag-c' : item[bodyList[1]] === '治理',
                    'tag-e' : item[bodyList[1]] === '媒体',
                    'tag-f' : item[bodyList[1]] === '监管',
                    'tag-g' :  item[bodyList[1]] === '有媒体'
                  }">{{ item[bodyList[1]] }}</p>
          </td>
          <td v-if="item[bodyList[2]] || item[bodyList[2]] === ''"
              class="body-item">
            <p class="tag"
               :class="{
                    'tag-a' : item[bodyList[2]] === '环境',
                    'tag-b' : item[bodyList[2]] === '社会',
                    'tag-c' : item[bodyList[2]] === '治理',
                    'tag-e' : item[bodyList[2]] === '媒体',
                    'tag-f' : item[bodyList[2]] === '监管',
                    'tag-g' :  item[bodyList[2]] === '有媒体'
                  }">{{ item[bodyList[2]] }}</p>
          </td>
          <td v-if="item[bodyList[3]] || item[bodyList[3]] === ''"
              class="body-item">
            <p class="tag"
               :class="{
                    'tag-a' : item[bodyList[3]] === '环境',
                    'tag-b' : item[bodyList[3]] === '社会',
                    'tag-c' : item[bodyList[3]] === '治理',
                    'tag-e' : item[bodyList[3]] === '媒体',
                    'tag-f' : item[bodyList[3]] === '监管',
                    'tag-g' :  item[bodyList[3]] === '有媒体'
                  }">{{ item[bodyList[3]] }}</p>
          </td>
          <td v-if="item[bodyList[4]] || item[bodyList[4]] === ''"
              class="body-item">
            <p class="tag"
               :class="{
                    'tag-a' : item[bodyList[4]] === '环境',
                    'tag-b' : item[bodyList[4]] === '社会',
                    'tag-c' : item[bodyList[4]] === '治理',
                    'tag-e' : item[bodyList[4]] === '媒体',
                    'tag-f' : item[bodyList[4]] === '监管',
                    'tag-g' :  item[bodyList[4]] === '有媒体'
                  }">{{ item[bodyList[4]] }}</p>
          </td>
          <td v-if="item[bodyList[5]] || item[bodyList[5]] === ''"
              class="body-item">
            <p class="tag"
               :class="{
                    'tag-a' : item[bodyList[5]] === '环境',
                    'tag-b' : item[bodyList[5]] === '社会',
                    'tag-c' : item[bodyList[5]] === '治理',
                    'tag-e' : item[bodyList[5]] === '媒体',
                    'tag-f' : item[bodyList[5]] === '监管',
                    'tag-g' :  item[bodyList[5]] === '有媒体'
                  }">{{ item[bodyList[5]] }}</p>
          </td>
          <td v-if="item[bodyList[6]] || item[bodyList[6]] === ''"
              class="body-item">
            <p class="tag"
               :class="{
                    'tag-a' : item[bodyList[6]] === '环境',
                    'tag-b' : item[bodyList[6]] === '社会',
                    'tag-c' : item[bodyList[6]] === '治理',
                    'tag-e' : item[bodyList[6]] === '媒体',
                    'tag-f' : item[bodyList[6]] === '监管',
                    'tag-g' :  item[bodyList[6]] === '有媒体'
                  }">{{ item[bodyList[6]]}}</p>
          </td>
          <td v-if="item[bodyList[7]] || item[bodyList[7]] === ''"
              class="body-item">
            <p class="tag"
               :class="{
                    'tag-a' : item[bodyList[7]] === '环境',
                    'tag-b' : item[bodyList[7]] === '社会',
                    'tag-c' : item[bodyList[7]] === '治理',
                    'tag-e' : item[bodyList[7]] === '媒体',
                    'tag-f' : item[bodyList[7]] === '监管',
                    'tag-g' :  item[bodyList[7]] === '有媒体'
                  }">{{ item[bodyList[7]] }}</p>
          </td>
          <td v-if="item[bodyList[8]] || item[bodyList[8]] === ''"
              class="body-item">
            <p class="tag"
               :class="{
                    'tag-a' : item[bodyList[8]] === '环境',
                    'tag-b' : item[bodyList[8]] === '社会',
                    'tag-c' : item[bodyList[8]] === '治理',
                    'tag-e' : item[bodyList[8]] === '媒体',
                    'tag-f' : item[bodyList[8]] === '监管',
                    'tag-g' :  item[bodyList[8]] === '有媒体'
                  }">{{ item[bodyList[8]] }} </p>
          </td>
          <td class="body-item"
              @click="clicknode(item)">
            <p class="btn">查看</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    // 表格数据
    dataList: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    bodyList () {
      return this.dataList[0].map(v => v.label);
    }
  },
  data () {
    return {
      asc: false,
      desc: true
    }
  },
  methods: {
    clicknode (item) {
      this.$emit('clicknode', item)
    },
    ascing () {
      if (this.asc) {
        this.asc = true
        this.desc = false
      } else {
        this.asc = true
        this.desc = false
      }
      this.$emit('ascing')
    },
    descing () {
      if (this.desc) {
        this.desc = true;
        this.asc = false;
      } else {
        this.desc = true;
        this.asc = false;
      }
      this.$emit('descing')
    }
  }
}
</script>
<style lang="less" scoped>
.table-list-wrapper {
  width: 100%;
  border: 1px solid transparent;
  border-radius: 6px;
  overflow: hidden;
  .table-list {
    table-layout: fixed;
    width: 100%;
  }
  .table-header {
    font-size: 14px;
    font-weight: 500;
    color: rgba(22, 72, 127, 1);
    .table-header-contant {
      background: rgba(224, 236, 250, 1);
      .header-item {
        height: 48px;
        padding: 0 12px;
        box-sizing: border-box;
        .item {
          display: flex;
          align-items: center;
          justify-content: center;
          .arrow {
            display: flex;
            flex-direction: column;
            margin-left: 6px;
          }
          img {
            width: 17px;
          }
          .up {
            position: relative;
            top: 3px;
          }
          .down {
            position: relative;
            top: -1px;
          }
        }
      }
    }
  }
  .table-body {
    font-size: 14px;
    font-weight: 400;
    color: rgba(45, 56, 68, 0.8);
    .table-body-contant:nth-child(odd) {
      background: rgba(255, 255, 255, 1);
      height: 48px;
      .body-item {
        padding: 0px 12px;
        box-sizing: border-box;
        .btn {
          width: 48px;
          padding: 2px 0px;
          margin: 0 auto;
          background: rgba(89, 138, 190, 1);
          border-radius: 4px;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
          box-sizing: border-box;
          cursor: pointer;
          text-align: center;
        }
        .tag {
          max-width: 322px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 12px;
          border-radius: 4px;
          border-radius: 4px;
          text-align: center;
        }
        .tag-a {
          width: 56px;
          margin: 0 auto;
          background: rgba(91, 144, 123, 0.1);
          color: rgba(91, 144, 123, 1);
        }
        .tag-b {
          width: 56px;
          margin: 0 auto;
          background: rgba(255, 151, 64, 0.1);
          color: rgba(255, 151, 64, 1);
        }
        .tag-c {
          width: 56px;
          margin: 0 auto;
          background: rgba(49, 122, 222, 0.1);
          color: rgba(49, 122, 222, 1);
        }
        .tag-e {
          width: 56px;
          margin: 0 auto;
          background: rgba(89, 138, 190, 0.1);
          color: rgba(89, 138, 190, 1);
        }
        .tag-f {
          width: 56px;
          margin: 0 auto;
          background: rgba(236, 162, 15, 0.1);
          color: rgba(236, 162, 15, 1);
        }
        .tag-g {
          color: rgba(245, 97, 77, 0.8);
        }
      }
    }
    .table-body-contant:nth-child(even) {
      background: rgba(246, 248, 251, 1);
      height: 48px;
      .body-item {
        padding: 0px 12px;
        box-sizing: border-box;
        .btn {
          width: 48px;
          padding: 2px 0px;
          margin: 0 auto;
          background: rgba(89, 138, 190, 1);
          border-radius: 4px;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
          box-sizing: border-box;
          cursor: pointer;
          text-align: center;
        }
        .tag {
          max-width: 322px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 12px;
          border-radius: 4px;
          border-radius: 4px;
          text-align: center;
        }
        .tag-a {
          width: 56px;
          margin: 0 auto;
          background: rgba(91, 144, 123, 0.1);
          color: rgba(91, 144, 123, 1);
        }
        .tag-b {
          width: 56px;
          margin: 0 auto;
          background: rgba(255, 151, 64, 0.1);
          color: rgba(255, 151, 64, 1);
        }
        .tag-c {
          width: 56px;
          margin: 0 auto;
          background: rgba(49, 122, 222, 0.1);
          color: rgba(49, 122, 222, 1);
        }
        .tag-e {
          width: 56px;
          margin: 0 auto;
          background: rgba(89, 138, 190, 0.1);
          color: rgba(89, 138, 190, 1);
        }
        .tag-f {
          width: 56px;
          margin: 0 auto;
          background: rgba(236, 162, 15, 0.1);
          color: rgba(236, 162, 15, 1);
        }
        .tag-g {
          color: rgba(245, 97, 77, 0.8);
        }
      }
    }
  }
}
</style>

