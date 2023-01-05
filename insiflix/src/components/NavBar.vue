<template>
  <div>
    <nav>
      <div class="outer-wrapper">
        <div class="outer-flex">
          <div class="inner-flex">
            <a class="insi-a" href="/"
              ><img src="../img/insiarschtext.png" alt="insiarsch"
            /></a>
            <a
              :class="this.active == '/my_list' ? 'white_link' : ''"
              href="/my_list"
              >Meine Liste</a
            >
            <a
              :class="this.active == '/upload' ? 'white_link' : ''"
              href="/upload"
              >Upload</a
            >
            <a
              :class="this.active == '/video-lounge' ? 'white_link' : ''"
              href="/video-lounge"
              >Video-Lounge</a
            >
            <a
              :class="this.active == '/hanno' ? 'white_link' : ''"
              href="/hanno"
              >Hanno</a
            >
          </div>
          <div class="inner-flex right-menu">
            <div class="video-search-wrapper">
              <i class="bi bi-search"></i>
            </div>
            <a href="#">Adults</a>
            <div class="profile-wrapper">
              <img src="../img/insiprofil.png" alt="profil" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
    };
  },
  mounted() {
    this.active = window.location.pathname;
  },
};
</script>

<style lang="scss" scoped>
.outer-wrapper {
  padding: 2rem;
  background-color: #141414;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
}

.white_link {
  color: white !important;
  font-weight: 500 !important;
}

.insi-a {
  display: flex;
}

.right-menu {
  gap: 1rem;
}

.outer-flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .video-search-wrapper {
    i {
      font-size: 1.25rem;
    }
  }

  .inner-flex {
    font-size: 0.9rem;
    font-weight: 300;
    color: #e5e5e5;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;

    .profile-wrapper {
      display: flex;

      img {
        width: 2rem;
        border-radius: 0.25rem;
      }
    }

    a {
      color: #e5e5e5;
      text-decoration: none;
    }

    img {
      width: 100px;
    }
  }
}
</style>
