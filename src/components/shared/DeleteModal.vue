<template>
  <a-modal
    centered
    :closable="false"
    :maskClosable="false"
    :width="470"
    :zIndex="1050"
    :footer="false"
    class="confirm-delete-modal"
    :visible="showModal"
  >
    <div class="confirm-delete-container">
      <h1 class="confirm-delete-title">
        Are you sure you want to delete <b>{{ name }}</b
        >?
      </h1>
      <div class="confirm-delete-actions">
        <a-button
          @click="$emit('closeModal')"
          type="secondary"
          class="cancel-button"
          >Cancel</a-button
        >
        <a-button
          :loading="loading"
          type="danger"
          @click="$emit('onDelete')"
          class="primary-button--danger"
          >Delete</a-button
        >
      </div>
    </div>
  </a-modal>
</template>

<script>
export default {
  name: "DeleteModal",
  props: {
    type: { type: String, default: "" },
    name: { type: String, default: "" },
    actionType: { type: String, default: "" },
    loading: { type: Boolean, default: false },
    showModal: { type: Boolean, default: false },
  },
};
</script>

<style>
.ant-modal-body {
  padding: 0;
  border-radius: 5px;
}
.confirm-delete-container {
  padding: 2rem;
}

.confirm-delete-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.confirm-delete-description {
  color: grey;
  margin-bottom: 2.5rem;
  font-size: 1.4rem;
}
.confirm-delete-actions {
  text-align: end;
}
.cancel-button {
  margin-right: 0.5rem;
}
</style>
