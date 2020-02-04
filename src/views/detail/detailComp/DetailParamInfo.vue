<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <div class="info-tables">
      <table class="info-table" v-for="(table,tableIndex) in paramInfo.ruleTables" :key="tableIndex">
        <tr v-for="(tr,trIndex) in table" :key="trIndex">
          <td v-for="(td,tdIndex) in tr" :key="tdIndex">
            {{td}}
          </td>
        </tr>
      </table>
    </div>

    <div class="rule-tables">
      <table class="rule-table">
        <tr v-for="(tr,trIndex) in paramInfo.infos" :key="trIndex">
          <td class="key">{{tr.key}}</td>
          <td class="value">{{tr.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .param-info {
    padding: 8% 4%;
    font-size: 85%;
    border-bottom: 5px solid rgba(100,100,100,.1);
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  table tr {
    height: 44px;
  }
  table td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-table {
    border-bottom: 4px solid rgba(100,100,100,.1);
  }
  .rule-table .key {
    width: 95px;
  }
  .rule-table .value {
    color: deeppink;
  }
</style>