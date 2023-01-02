<template>
    <div>
        <nav>
            <div class="outer-wrapper">
                <div class="outer-flex">
                    <div class="inner-flex">
                        <a href="">Logo</a>
                        <a href="">Meine Liste</a>
                        <a href="">Upload</a>
                        <a href="">Video-Lounge</a>
                    </div>
                    <div class="inner-flex">
                        <div class="video-search-wrapper">Suche</div>
                        <div class="profile-wrapper">Profil</div>
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
    margin: 2rem;
}
.outer-flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .inner-flex {
        color: white;
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        a{
            color: white;
            text-decoration: none;
        }

    }
}
</style>