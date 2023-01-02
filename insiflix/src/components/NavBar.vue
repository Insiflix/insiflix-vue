<template>
    <div>
        <nav>
            <div class="outer-wrapper">
                <div class="outer-flex">
                    <div class="inner-flex">
                        <a href="/"><img src="../img/insiarschtext.png" alt="insiarsch"></a>
                        <a href="">Meine Liste</a>
                        <a href="">Upload</a>
                        <a href="">Video-Lounge</a>
                    </div>
                    <div class="inner-flex">
                        <div class="video-search-wrapper">
                            <i class="bi bi-search"></i>
                        </div>
                        <div class="profile-wrapper">
                            <img src="../img/insiprofil.png" alt="profil">
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.outer-wrapper {
    padding: 2rem;
    background-color: #141414;
    background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);
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
        color: white;
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        align-items: center;
        .profile-wrapper{
            display: flex;
            img {
                width: 2rem;
                border-radius: .25rem;
            }
        }
        a{
            color: white;
            text-decoration: none;
        }
        img {
            width: 100px;
        }

    }
}
</style>