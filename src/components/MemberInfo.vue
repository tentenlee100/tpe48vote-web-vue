<template>
<div id="member-info">
  <modal v-if="girl" v-model="open" title="" size="lg" @show="modalShow" @hide="modalHide">
    <div class="row">
      <div class="col-xs-12">
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <img class="img-responsive" :src="girl.imageUrl" alt="...">
          </div>
          <div class="col-xs-12 col-sm-8">
            <div class="col-xs-12">
              <div class="row">
                <h2 class=""><strong>{{girl.name}}</strong><strong> 編號: </strong>{{girl.seq}}</h2>
                <div class="col-xs-6">
                  <div class="row">
                    <h4><strong>生日: </strong>{{girl.birth}}</h4>
                  </div>
                </div>
                <div class="col-xs-6">
                  <div class="row">
                    <h4><strong>地區: </strong>{{girl.location}}</h4>
                  </div>
                </div>
                <div v-if="girlInfo.voteCount" class="col-xs-6">
                  <div class="row">
                    <h4><strong>累積票數: </strong>{{girlInfo.voteCount}}</h4>
                  </div>
                </div>
                <div v-if="girlInfo.voteToday" class="col-xs-6">
                  <div class="row">
                    <h4><strong>本日票數: </strong>{{girlInfo.voteToday}}</h4>
                  </div>
                </div>
                <div v-if="girlInfo.introduce" class="col-xs-12">
                  <div class="row">
                    <h4><strong>自我介紹: </strong>{{girlInfo.introduce}}</h4>
                  </div>
                </div>
              </div>
            </div>
            <!-- SNS展示 -->
            <div class="col-xs-12">
              <div v-if="loading" class="text-center">
                <spinner class="spinner inline-block" size="small"></spinner>
              </div>
              <div v-if="girlInfo.sns && girlInfo.sns.length > 0" class="row">
                <h3>社群連結:</h3>
                <template v-for="sns in girlInfo.sns">
                  <sns-cell :sns="sns" ></sns-cell>
                </template>
              </div>
            </div>
          </div>
          <div class="col-xs-12">
            <a :href="url" target="_blank" class="vote-btn btn btn-warning btn-block pull-right" type="button" name="button">我要投票</a>
          </div>
          <!-- 功課一覽 -->

          <div v-if="girlInfo.workHistory && girlInfo.workHistory.length > 0" class="col-xs-12">
            <h3>功課一覽:</h3>
            <div class="row">
              <template v-for="work in girlInfo.workHistory">
                <template v-if="work.type === '2'">
                  <work-type2-cell :workInfo="work" :typeKey="work.day" ></work-type2-cell>
                </template>
              <template v-if="work.type === '1'">
                  <work-type1-cell :workInfo="work" :typeKey="work.day" :path="work.imagePath"></work-type1-cell>
                </template>
              </template>
            </div>

          </div>

        </div>
      </div>
    </div>
    <div slot="footer">
      <button class="btn btn-danger pull-left " @click="modalHide">關閉</button>
      <a :href="url" target="_blank" class="btn btn-warning" type="button" name="button">我要投票</a>
    </div>
  </modal>
</div>
</template>
<script>
import {
  Modal
} from 'uiv'
import Spinner from 'vue-simple-spinner'
import ApiUrl from '@/config/ApiUrl'
import SnsCell from './SnsCell'
import WorkType2Cell from './WorkType2/WorkType2Cell'
import WorkType1Cell from './WorkType1/WorkType1Cell'

export default {
  name: "member-info",
  props: ["value", "girl"],
  data: () => ({
    detailData: {},
    loading: false
  }),
  methods: {
    modalHide() {
      this.$emit('input', false)
      this.detailData = {}

    },
    modalShow() {
      this.callApi()
    },
    callApi() {
      const body = {
        seq: this.girl.seq
      }
      this.loading = true
      this.$http.post(ApiUrl.memberDetail, body).then(response => {
        this.detailData = response.body
        this.loading = false

      }, response => {
        this.loading = false

      })
    }
  },
  computed: {
    girlInfo: function() {
      if (this.detailData.length === 0) {
        return this.girl
      } else {
        return this.detailData
      }
    },
    open: {
      set: function(n) {
        this.$emit('input', n)
      },
      get: function() {
        return this.value
      }
    },
    title: function() {
      if (this.girl == null) {
        return ""
      }
      return "編號:" + this.girl.seq + " " + this.girl.name
    },
    url: function() {
      return 'http://tpe48.tw/auditionPersonal.html?gid=' + this.girl.seq
    }
  },
  components: {
    Modal,
    Spinner,
    SnsCell,
    WorkType2Cell,
    WorkType1Cell
  }
}
</script>
<style scoped>
h2 {
  margin-top: 5px;
}
.vote-btn{
    margin-top: 10px;
}
</style>
