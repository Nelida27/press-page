<template>
  <a-layout>
    <a-spin class="loading-icon" v-if="loading" size="large" />
    <div v-else>
      <h1 class="user-label">User List</h1>
      <UserItem
        v-for="item in getUsers"
        :key="item.id"
        :user="item"
        @openDeleteModal="handleDelete(item)"
      />
      <div v-if="getUsers.length === 0"><p>No data found</p></div>
    </div>

    <delete-modal
      type="UserList"
      :name="currentUser.login"
      :showModal="showDeleteModal"
      :loading="submiting"
      @closeModal="showDeleteModal = false"
      @onDelete="deleteUser(this.currentUser)"
    ></delete-modal>
  </a-layout>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import UserItem from "../components/UserItem.vue";
import DeleteModal from "../components/shared/DeleteModal";
export default {
  name: "UserListView",
  components: {
    UserItem,
    DeleteModal,
  },
  data() {
    return {
      showDeleteModal: false,
      currentUser: {},
      submiting: true,
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  created() {
    this.getUsersData();
  },
  methods: {
    ...mapActions(["removeUser"]),
    async getUsersData() {
      this.loading = true;

      try {
        await this.$store.dispatch("getUsers");
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
    setCurrentUser(user) {
      this.currentUser = { ...user };
    },
    deleteUser(item) {
      this.removeUser(item);
      this.showDeleteModal = false;
      this.submiting = true;
    },
    handleDelete(user) {
      this.setCurrentUser(user);
      this.showDeleteModal = true;
      this.submiting = false;
    },
  },
};
</script>
<style>
.ant-layout-header {
  color: #fff;
  background: #7dbcea;
  margin-bottom: 2rem;
}
.ant-layout {
  background: white;
}
.user-label {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.loading-icon {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
