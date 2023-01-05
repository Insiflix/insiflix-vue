<template>
  <div>
    <NavBar></NavBar>
    <main>
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="inner-wrapper">
            <div class="flex-wrapper">
              <div class="inner-flex">
                <CustomSelect></CustomSelect>
                <img class="logoleinchen" src="../img/insiarsch.png" alt="" />
              </div>
              <YoutubeUpload
                v-if="this.$store.state.activeUploadComponent == 'Youtube'"
              ></YoutubeUpload>
              <FileUpload
                v-if="this.$store.state.activeUploadComponent == 'File'"
              ></FileUpload>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import FileUpload from "../components/FileUpload.vue";
import YoutubeUpload from "../components/YoutubeUpload.vue";
import CustomSelect from "../components/CustomSelect.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
    CustomSelect,
    YoutubeUpload,
    FileUpload,
  },
};
</script>

<style lang="scss" scoped>
.inner-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logoleinchen {
  width: 5rem;
  padding: 2rem;
}

.flex-wrapper {
  display: flex;
  align-items: start;
  flex-direction: column;
  position: relative;
}

.outer-wrapper {
  margin: 4rem;
}

.wrapper {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.inner-wrapper {
  position: relative;
  min-width: 30rem;
  padding-bottom: 2rem;
  width: 100%;
  background: linear-gradient(145deg, #1b1b1b, #323233);
  box-shadow: 20px 20px 60px #111111, -20px -20px 60px #171717;
  border-radius: 0.75rem;
}
</style>
