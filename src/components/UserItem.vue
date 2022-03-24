<template>
  <a-row>
    <a-col :span="12" :offset="6">
      <a-card hoverable class="card">
        <div class="card-body">
          <a-avatar :src="user.avatar_url" :size="64"> </a-avatar>
          <div class="card-title">
            <p>{{ user.login }}</p>
          </div>
          <div class="delete-button" @click="$emit('openDeleteModal')">
            <delete-outlined />
          </div>
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>
<script>
import { DeleteOutlined } from "@ant-design/icons-vue";
export default {
  name: "UserItem",
  components: {
    DeleteOutlined,
  },
  props: {
    user: Object,
  },
};
</script>
<style lang="css">
.card {
  border-radius: 5px;
  margin-bottom: 1rem;
  background: whitesmoke;
}
.card-body {
  display: flex;
  justify-content: space-between;
}
.card-title {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.delete-button {
  margin: 0;
  color: red;
  position: absolute;
  top: 50%;
  left: 92%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
